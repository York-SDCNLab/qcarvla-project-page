"use strict";

// The runtime artifact lookup returned no files despite a successful upload.
// Use the public Actions API to locate this run's artifact, then the same Pages
// deployment API and OIDC authorization used by actions/deploy-pages.
module.exports = async function deploy({ github, context, core }) {
  const repository = { owner: context.repo.owner, repo: context.repo.repo };
  const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
  let artifact;
  for (let attempt = 0; attempt < 6; attempt++) {
    const response = await github.rest.actions.listWorkflowRunArtifacts({
      ...repository,
      run_id: context.runId,
      per_page: 100,
    });
    const matches = response.data.artifacts.filter(
      (entry) => entry.name === "github-pages" && !entry.expired
    );
    if (matches.length > 1) throw new Error("More than one Pages artifact exists for this run.");
    if (matches.length === 1) {
      artifact = matches[0];
      break;
    }
    await delay(2000);
  }
  if (!artifact) throw new Error("The uploaded Pages artifact is not available in this run.");

  const idToken = await core.getIDToken();
  core.setSecret(idToken);
  const created = await github.request("POST /repos/{owner}/{repo}/pages/deployments", {
    ...repository,
    artifact_id: artifact.id,
    pages_build_version: context.sha,
    oidc_token: idToken,
  });
  const deploymentId = created.data.id;
  if (!deploymentId) throw new Error("GitHub did not return a Pages deployment ID.");

  for (let attempt = 0; attempt < 60; attempt++) {
    await delay(5000);
    const response = await github.request(
      "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}",
      { ...repository, pages_deployment_id: deploymentId }
    );
    const status = response.data.status;
    if (status === "succeed") {
      core.setOutput("page_url", created.data.page_url);
      core.info("GitHub Pages deployment succeeded.");
      return;
    }
    if (/failed|cancelled|canceled|errored|lost/.test(status || "")) {
      throw new Error(`GitHub Pages deployment ended with status: ${status}`);
    }
  }

  await github.request(
    "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel",
    { ...repository, pages_deployment_id: deploymentId }
  );
  throw new Error("GitHub Pages deployment exceeded five minutes.");
};
