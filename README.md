# QCarVLA project page

A simple project page for **QCarVLA: Scalable VLA Design for Mobile Robots**, under York-SDCNLab.

- Website: https://york-sdcnlab.github.io/qcarvla-project-page/
- Repository: [https://github.com/York-SDCNLab/qcarvla-project-page](https://github.com/York-SDCNLab/QCAR-VLA)

The page uses the upstream template’s original Bulma layout and styles: centered title and authors, rounded resource buttons, a teaser figure, plain academic sections, and BibTeX. No build step is needed.

## Editing

Edit `site/index.html` for all project content. Replace the disabled Paper, Code, and Dataset buttons with anchors once the resources are released. Add videos and finalized figures in the commented Demos and Results sections. Update the provisional citation when publication information is available.

The benchmark figure is `site/assets/benchmark-map.png`, copied unchanged from the manuscript. The original template styles are in `site/static/css/`; Font Awesome icons are in `site/static/js/`.

For a local preview, run `python3 -m http.server 8000 --directory site` and open http://localhost:8000. Google Fonts supplies the template’s typography; system sans-serif fonts are used if unavailable.

Changes pushed to `main` automatically publish the `site/` directory through GitHub Pages. The repository is marked as a template for future project pages. For reuse, change the content, resource links, figure, citation, and organization links, then enable GitHub Pages with GitHub Actions in the new repository.

## Manuscript content

The title, authors, and affiliations come from `main.tex`. The abstract summary, method, and benchmark text are based on the substantive introduction, benchmark-design, VLA-design, and experiment sections. The supplied LaTeX abstract is IEEE sample text, so the webpage abstract is explicitly marked as a draft summary. No unfinished or provisional performance numbers are published. No publication venue or public model-code release is assumed.
