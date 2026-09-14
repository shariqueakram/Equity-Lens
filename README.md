# Equity Lens

Manually enter dated NVIDIA (NVDA) and Alphabet (GOOGL) snapshots, compare P/E, revenue growth and free cash flow margin, save a local thesis, and export a JSON notebook. No live data or trading integration. Start blank to avoid presenting synthetic prices as real quotes.

P/E = price / positive diluted EPS; otherwise N/M. Revenue growth = revenue / prior comparable revenue − 1. FCF margin = free cash flow / revenue. Use consistent periods, units, and accounting definitions. Source links: https://investor.nvidia.com/ and https://abc.xyz/investor/. Notebook data stays in browser localStorage and is not committed to GitHub.

## Run

Requires Node.js 20 or newer. No dependencies to install.

```sh
npm start
```

Open http://localhost:4173. Set PORT to a different number when running multiple projects.

```sh
npm test
```

Serve the project root using any static host to deploy. The included local server exposes only public application files and binds to localhost. GitHub Actions runs core tests on pushes and pull requests.

## Daily development

See ROADMAP.md for useful follow-ups and CHANGELOG.md for completed work. Automated daily development rotates across the four projects, one substantive tested improvement per day. Browser data is device-local; use export where available to retain your work.
