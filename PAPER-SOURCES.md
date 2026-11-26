# Paper content used on the project page

Updated from the LaTeX materials supplied on November 23, 2026.

| Web content | Paper source |
| --- | --- |
| Title, author order, affiliations | `main.tex` |
| Abstract | Active abstract in `sections/00_abstract.tex` |
| Horizontal introduction overview | `images/qcarvla_teaserV2.png`, referenced by `figures/teaser.tex` |
| Benchmark map | `images/BenchmarkMapCombined.png`, referenced by `figures/traffic_map.tex` |
| Benchmark protocol and intervention thresholds | `sections/03_benchmark_design.tex` |
| Closed-loop comparison table | `tables/benchmark_results.tex` |
| Open-loop evaluation table (Table II) and simulation comparison in prose | `tables/open_loop_main.tex` and `sections/05_experiments.tex` |
| Method image | `images/qcarvla_architectureV2.png`, referenced by `figures/architecture.tex` |
| Method highlights | `sections/04_VLA_design.tex` |
| AGX Orin profiling table | `tables/adaption_compute_comparison.tex` |

The abstract is reproduced from the current active text, with the obvious spelling errors “brid's-eye-view” and “driveable area” corrected. Commented-out earlier abstract and method variants are excluded. The full hybrid model and primitive-AR-only configuration have different timing measurements: 4.22435 s versus 3.82928 s end-to-end. The Method section names both variants and gives the exact table values, so the approximately 3× figure in the abstract is not used as a hybrid timing claim.

Closed-loop table values are per-rollout means, not totals across the schedule. Recovery intervals remain included in the scores, and recovery-assisted route completion is distinguished from autonomous task success. No missing P95 timings, completion-coverage numbers, or unreleased publication metadata are invented. The old FastViT/flow-only description, two-minute timeout, and intervention-count emphasis were replaced with the current paper's method and protocol.

The benchmark map is copied from the paper; the method image is derived from the paper with its project-name heading updated for LeanVLA. The wide introduction figure is an AI-assisted schematic adaptation of the introduction teaser for the web, produced with the built-in image editing tool. It is illustrative rather than a pixel-exact rearrangement of camera data. The original teaser is retained as `docs/source-figures/qcarvla-overview-original.png` for source reference. The original architecture image is retained in the source archive, and the benchmark map remains unchanged. Original LaTeX materials remain unchanged. Demo media remain placeholders until real footage is uploaded and enabled.

The visual-context wiring in the wide overview was corrected to use parallel encoder outputs: four-camera encoder → Scene projector and four-camera encoder → Map projector, with no Scene → Map dependency. The bypass connector was thinned to match the existing arrows. The page author fields are temporarily anonymous, and the lab link and original-figure note have been removed from the visible page.

Table II is reproduced from the active `tables/open_loop_main.tex` with the original MR fractions and bold formatting. Its simulation entries are labeled historical because that source currently contains a TODO to update them following full-dataset training.

## Project-name update — November 25, 2026

The user renamed the project to **LeanVLA: Efficient Trajectory Generation for Edge Robotics**. The page title, metadata, abstract/project references, table method labels, citation key/title, favicon, demo documentation, and two displayed figure headings use LeanVLA. The two figure headings were changed with the built-in image editing tool; original QCarVLA versions are archived in `docs/source-figures/` outside the published `site/` directory. Historical source filenames and earlier image-edit prompts retain their original names for provenance. The original LaTeX folder was not changed. The existing project-page URL and research-code repository links remain their actual current addresses.
