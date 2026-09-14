# Codeforces Analytics — Neo Glass

Turn any Codeforces profile into a full analytics dashboard. This extension fetches public submission data via the official Codeforces API and renders rich, interactive charts directly on the profile page — redesigned with a modern "Neo Glass" UI.

![analytics-screenshot](docs/screenshot-1.png)
<!-- Replace the line above with an actual screenshot once you take one, or delete it -->

## Features

- 📊 **Problem Ratings** — distribution of solved problems by difficulty
- 📈 **Activity Timeline** — monthly submission activity over time
- 🏷️ **Tags & Languages** — most-practiced topics and programming languages
- ✅ **Verdict Breakdown** — AC / WA / TLE / MLE distribution
- 🎯 **Attempts-to-AC** — problems solved on the first try vs. ones that took multiple attempts
- ⚡ **Execution Performance** — runtime vs. problem rating scatter plot
- 📝 **Unsolved Tracker** — quick links back to problems you haven't finished
- 📸 **One-Click Image Export** — generate a high-res shareable image of your stats
- 🌐 **Bilingual** — English / 中文
- 🧊 **Neo Glass UI** — clean, modern glassmorphism redesign

## Privacy

All processing happens locally in your browser. Only public data is fetched via the official Codeforces API — nothing is collected or sent to any third party.

## Installation

This extension is not yet published on an extension store. To install it manually:

1. Download or clone this repository
2. Open `chrome://extensions` (or `edge://extensions` on Microsoft Edge)
3. Enable **Developer mode** (top-right toggle)
4. Click **"Load unpacked"**
5. Select the folder you downloaded
6. Visit any Codeforces profile page — the dashboard will appear automatically

## Tech Stack

- Vanilla JavaScript, [ECharts](https://echarts.apache.org/) for charts, [html2canvas](https://html2canvas.hertzen.com/) for image export
- Chrome Extension Manifest V3
- No backend — reads public data directly from the Codeforces API in-browser

## Development Note

Parts of this extension's implementation were built with the assistance of AI coding tools, under the developer's direction, design decisions, and review.

## Credits

This is a maintained fork of the original **Codeforces Analytics** extension created by **Wentao Tong**, published with the original author's permission.

- Original GitHub repository: [github.com/tongwentao/codeforces-analytics-extension](https://github.com/tongwentao/codeforces-analytics-extension)
- Original Chrome Web Store listing: [Codeforces Analytics (Pro Max)](https://chromewebstore.google.com/detail/codeforces-analytics-pro/gfoledimnmjchddncmedpcieiccnagcj)

The original repository is no longer actively maintained by its author; this fork is independently maintained.

## Author (this fork)

**amir1389_gerami**
Codeforces profile: [codeforces.com/profile/amir1389_gerami](https://codeforces.com/profile/amir1389_gerami)

## License

MIT — see [LICENSE](LICENSE) for details.
