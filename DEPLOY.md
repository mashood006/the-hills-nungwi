# Deploy to cPanel — https://demo.majestic.tz/

## Status

- SSH key authorized on the server (`authorized_keys`)
- Uploads work via **SFTP/SCP** (cPanel shell/Terminal is disabled on this host)
- Live site document root: `/home/majestic/public_html/demo.majestic.tz`

## Automatic deploy (GitHub Actions)

Workflow file: `.github/workflows/deploy.yml`

On every push to **`main`**, GitHub builds the app and uploads `dist/` over SFTP.

### If the workflow file is not on GitHub yet

1. Log into GitHub as **mashood006** (check Settings → profile username).
2. Open: https://github.com/mashood006/the-hills-nungwi/new/main?filename=.github/workflows/deploy.yml
3. Paste contents of local `.github/workflows/deploy.yml` → Commit.

Secrets already configured: `SSH_HOST`, `SSH_USER`, `SSH_PATH`, `SSH_PRIVATE_KEY`.

## Deploy from your Mac

```bash
npm run deploy
```

Uses `~/.ssh/gha-the-hills-deploy` to upload `dist/` to the live site.

## Authorized public key (on server)

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFqZBoSmMwT0ayK6DP6+vvpNE23qWoJ15ojno5hLhQz4 github-actions-demo-majestic
```

Must be the only/active line in `/home/majestic/.ssh/authorized_keys`.
