# QCarVLA project page

A simple project page for **QCarVLA: Scalable VLA Design for Mobile Robots**, under York-SDCNLab.

- Website: https://york-sdcnlab.github.io/qcarvla-project-page/
- Repository: https://github.com/York-SDCNLab/QCAR-VLA/

## Updating the page

Edit `site/index.html` for the abstract, benchmark tables, method highlights, and citation. Paper figures live in `site/assets/`. The original academic template styles remain in `site/static/css/index.css`; small additions for tables, tooltips, and videos are in `site/static/css/project.css`.

Changes pushed to `main` publish automatically through GitHub Pages. Preview locally with `python3 -m http.server 8000 --directory site`.

## Adding the four demo videos

Upload MP4 files into **`site/assets/videos/`** with these exact, case-sensitive names:

| Desktop position | Filename |
| --- | --- |
| Top left | `simulation-01.mp4` |
| Top right | `simulation-02.mp4` |
| Bottom left | `hardware-01.mp4` |
| Bottom right | `hardware-02.mp4` |

Then edit `site/assets/videos/demos.json`: set `"enabled": true` for each uploaded video and replace its `title` and `description` with the actual scene description. No HTML changes are needed. Until enabled, the slot displays “Video coming soon” and does not request a missing video file. All four positions stay fixed; on phones they stack in the same order.

See [the video directory instructions](site/assets/videos/README.md) for an example, optional posters/captions, and troubleshooting.
