# The Hills, Nungwi — React

Same design, fonts (Cormorant Garamond + Jost), images, and interactions as the original static page — now running on Vite + React.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (cPanel / demo.majestic.tz)

**Auto-deploy is set up:** push to `main` → GitHub Actions builds and uploads to the live site.

**One-time:** authorize the GitHub Actions SSH key on the server (see [DEPLOY.md](./DEPLOY.md)).

Manual backup: `npm run build`, then upload `dist/` contents to the subdomain folder.

## Notes

- Images live in `public/images`
- Styles are in `src/styles.css` (unchanged look)
- Original static files are kept in `static-original/` for reference
- Form endpoint: set `ENDPOINT` in `src/components/LeadForm.jsx`
