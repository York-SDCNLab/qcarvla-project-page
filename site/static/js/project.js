"use strict";

// Keep unreleased resources focusable so both hover and keyboard users get the tooltip.
document.querySelectorAll(".resource-link").forEach((wrapper) => {
  wrapper.addEventListener("keydown", (event) => {
    if (event.key === "Escape") wrapper.classList.add("tooltip-dismissed");
  });
  ["mouseenter", "focusin"].forEach((name) => {
    wrapper.addEventListener(name, () => wrapper.classList.remove("tooltip-dismissed"));
  });
});

// Each of the four positions is fixed in the HTML; configuration only supplies its media.
async function loadDemos() {
  const configUrl = new URL("assets/videos/demos.json", document.baseURI);
  try {
    const response = await fetch(configUrl);
    if (!response.ok) throw new Error("Demo configuration could not be loaded.");
    const demos = await response.json();
    for (const demo of demos) {
      const slot = [...document.querySelectorAll(".demo-slot")].find(
        (element) => element.dataset.demoId === demo.id
      );
      if (!slot) continue;
      if (demo.title) slot.querySelector(".demo-title").textContent = demo.title;
      if (demo.description) slot.querySelector(".demo-description").textContent = demo.description;
      if (!demo.enabled) continue; // Never request files for placeholders.

      const media = slot.querySelector(".demo-media");
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", demo.title || "LeanVLA driving demo");
      video.append("Your browser does not support HTML video.");
      if (demo.poster) video.poster = new URL(demo.poster, configUrl).href;
      if (demo.captions) {
        const track = document.createElement("track");
        track.kind = "captions";
        track.label = "English";
        track.srclang = "en";
        track.src = new URL(demo.captions, configUrl).href;
        video.append(track);
      }
      video.addEventListener("error", () => {
        const message = document.createElement("p");
        message.className = "demo-placeholder";
        message.textContent = "Video unavailable. Please check back soon.";
        message.setAttribute("role", "status");
        media.replaceChildren(message);
      });
      video.src = new URL(demo.src, configUrl).href;
      media.replaceChildren(video);
    }
  } catch {
    // The four static placeholders remain useful if configuration is unavailable.
  }
}

loadDemos();
