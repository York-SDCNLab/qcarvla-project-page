# QCarVLA project page

An editable academic project-page template for **QCarVLA: Scalable VLA Design for Mobile Robots**, under York-SDCNLab.

- Organization: https://github.com/York-SDCNLab
- Project-page repository: https://github.com/York-SDCNLab/qcarvla-project-page
- Intended GitHub Pages address: https://york-sdcnlab.github.io/qcarvla-project-page/
- Layout reference: https://ehsan-ami.github.io/rlftsim/

The page is original static HTML/CSS/JavaScript inspired by the reference's academic project-page structure; it does not copy that site's code, videos, results, or figures. There are no build dependencies or external font/JavaScript services.

## Edit this project

1. Edit `site/index.html` for the title, authors, affiliations, summary, method, benchmark, demos, and citation.
2. Edit `site/assets/styles.css` for typography, colors, and responsive layout.
3. Replace or add figures in `site/assets/`. The existing `benchmark-map.png` is copied unchanged from the supplied manuscript's `images/BenchmarkMap.png`.
4. Replace the Paper / Code / Dataset `span` elements with links once URLs are available. The **Page source** link points to this website repository, not the unreleased research implementation.
5. Replace the two demo placeholder articles with captioned videos when approved footage is available. Use video controls, captions or a text description, and avoid autoplay with sound.
6. Replace the quantitative-evaluation notice with finalized results and update the provisional `@unpublished` citation when publication details are confirmed.
7. Commit and push to `main`; the included GitHub Pages workflow publishes only the `site/` directory.

## Local preview

Run `python3 -m http.server 8000 --directory site`, then visit http://localhost:8000. The page also opens directly from `site/index.html`; clipboard copying may use the selection fallback when the browser restricts clipboard access.

## GitHub Pages setup

In repository **Settings → Pages**, select **GitHub Actions** as the publishing source. Run the **Deploy project page** workflow or push a change to `main`. The workflow uses relative asset links so the page works under a repository subpath.

## Reuse as a template

Use GitHub's **Use this template** control to create another project repository. Change the project-specific content, author list, figure, source link, and citation in `site/index.html`; update this README. Enable GitHub Pages with GitHub Actions in the new repository. The workflow takes its publication address from GitHub rather than hard-coding the SDCNLab URL.

## Content provenance and release status

The initial content comes from the supplied LaTeX folder:

| Source | Website content |
| --- | --- |
| `main.tex` | Title, author order, and affiliations |
| `sections/01_Introduction_modified.tex` | Research motivation and project overview |
| `sections/03_benchmark_design.tex` | Platform, task protocol, route splits, traffic configurations, metrics, and recovery policy |
| `sections/04_VLA_design.tex` | Four-camera FastViT encoding, BEV representation, flow decoder, supervision, and NMPC deployment |
| `sections/05_experiments.tex` | Simulation / hardware evaluation context and onboard AGX Orin |
| `figures/traffic_map.tex` and `images/BenchmarkMap.png` | Benchmark figure and panel descriptions |

The supplied abstract is IEEE template text, so the website overview is a new synthesis of the substantive manuscript sections. The supplied results tables are incomplete or explicitly provisional; no numbers from those tables are published. Design specifications such as 19 routes, four cameras, and a three-second horizon are not performance claims. No conference, acceptance status, arXiv identifier, DOI, released dataset, or model-code URL is invented. The citation is explicitly for a manuscript in preparation.

The original manuscript and its PDFs are not included in this website repository. No license grant is added for the research content or figure; SDCNLab can select its preferred license before broader reuse.
