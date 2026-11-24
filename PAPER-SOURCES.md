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
| Open-loop simulation comparison in prose | `tables/open_loop_main.tex` and `sections/05_experiments.tex` |
| Method image | `images/qcarvla_architectureV2.png`, referenced by `figures/architecture.tex` |
| Method highlights | `sections/04_VLA_design.tex` |
| AGX Orin profiling table | `tables/adaption_compute_comparison.tex` |

The abstract is reproduced from the current active text, with the obvious spelling errors “brid's-eye-view” and “driveable area” corrected. Commented-out earlier abstract and method variants are excluded. The full hybrid model and primitive-AR-only configuration have different timing measurements: 4.22435 s versus 3.82928 s end-to-end. The Method section names both variants and gives the exact table values, so the approximately 3× figure in the abstract is not used as a hybrid timing claim.

Closed-loop table values are per-rollout means, not totals across the schedule. Recovery intervals remain included in the scores, and recovery-assisted route completion is distinguished from autonomous task success. No missing P95 timings, completion-coverage numbers, or unreleased publication metadata are invented. The old FastViT/flow-only description, two-minute timeout, and intervention-count emphasis were replaced with the current paper's method and protocol.

The benchmark and method images are copied from the paper. The wide introduction figure is an AI-assisted schematic adaptation of the introduction teaser for the web, produced with the built-in image editing tool. It is illustrative rather than a pixel-exact rearrangement of camera data. The original teaser is retained as `site/assets/qcarvla-overview-original.png` and linked beneath the adapted figure. The full-resolution architecture and map remain unchanged. Original LaTeX materials remain unchanged. Demo media remain placeholders until real footage is uploaded and enabled.
