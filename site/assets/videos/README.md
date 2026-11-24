# QCarVLA demo videos

This directory supplies the four demo positions on the project page. Add real project footage here; the page currently contains placeholders.

## Filenames and positions

Use lowercase names, hyphens, and the `.mp4` extension exactly as follows:

| Position on desktop | File | Configuration ID |
| --- | --- | --- |
| Top left | `simulation-01.mp4` | `simulation-01` |
| Top right | `simulation-02.mp4` | `simulation-02` |
| Bottom left | `hardware-01.mp4` | `hardware-01` |
| Bottom right | `hardware-02.mp4` | `hardware-02` |

Use MP4 with H.264 video and, if audio is included, AAC audio. A 16:9 frame fits the layout; other aspect ratios are contained without cropping. Videos use playback controls and do not autoplay. On narrow screens, the four positions become a single column in reading order.

## Enable a video

1. Copy or upload the corresponding MP4 into this directory, beside `demos.json`.
2. Open `demos.json` and find the object with that video's ID.
3. Set `"enabled": true`, leaving `id` and `src` unchanged. Replace `title` and `description` with accurate descriptions of the uploaded footage. Remove “Video coming soon” from its description.
4. Commit and push both the MP4 and updated JSON to `main`. GitHub Pages publishes the update automatically.

For example, after uploading `simulation-01.mp4`, its entry could be:

```json
{
  "id": "simulation-01",
  "title": "Simulation · Demo 1",
  "src": "simulation-01.mp4",
  "enabled": true,
  "description": "Replace this with the actual route, instruction, and behavior shown.",
  "poster": null,
  "captions": null
}
```

Leave all four objects in the JSON array. A slot with `enabled: false` remains a “Video coming soon” placeholder and makes no video request. The ID fixes the position; changing the order of objects in the JSON does not move the slots.

## Optional posters and captions

Put an optional preview image in this same directory, for example `simulation-01-poster.jpg`, and set `"poster": "simulation-01-poster.jpg"`. A null poster uses the browser's video preview. Put English WebVTT captions in `simulation-01.vtt` and set `"captions": "simulation-01.vtt"`. Keep both fields `null` when those files do not exist.

All `src`, `poster`, and `captions` filenames are relative to this directory. Apply the same naming pattern to the other three videos.

## Preview and troubleshooting

From the repository root, run `python3 -m http.server 8000 --directory site` and visit http://localhost:8000. Use an HTTP preview rather than opening the HTML directly so the browser can load `demos.json`.

- **Still says “Video coming soon”:** check that `enabled` is `true`, save the JSON, and reload after publication finishes.
- **Says “Video unavailable”:** check the case-sensitive filename, that the file was committed, and that the codec plays in the browser.
- **All slots remain placeholders:** confirm `demos.json` is valid JSON with no comments or trailing commas, and that JavaScript is enabled.
- **Need to withdraw a clip:** set its `enabled` field back to `false`.
