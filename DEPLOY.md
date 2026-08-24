# Deploy to cPanel — https://demo.majestic.tz/

## Automatic deploy (GitHub → live site)

Every push to **`main`** builds the React app and uploads `dist/` to:

`/home/majestic/public_html/demo.majestic.tz`

### One-time setup (required)

Authorize this **GitHub Actions** public key on the server so deploy can SSH in.

**Public key:**

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINoTjacC/fpwQiz3hIEAiigOeJoFuw1EioKyZwfwWJBP github-actions-demo-majestic
```

**In cPanel:**

1. **SSH Access** → **Manage SSH Keys** → **Import Key**
2. Paste the public key above (name it e.g. `github-actions`)
3. Click **Import**, then **Authorize** / **Manage** → **Authorize** for that key  
   (it must appear under **Authorized Keys**)

**Or in cPanel Terminal:**

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINoTjacC/fpwQiz3hIEAiigOeJoFuw1EioKyZwfwWJBP github-actions-demo-majestic' >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### After that

```bash
git add .
git commit -m "your change"
git push origin main
```

Watch progress: GitHub repo → **Actions** → **Deploy to demo.majestic.tz**

You can also run it manually: **Actions** → **Deploy to demo.majestic.tz** → **Run workflow**

### Secrets (already set on the repo)

| Secret | Value |
|--------|--------|
| `SSH_HOST` | `62.238.31.147` |
| `SSH_USER` | `majestic` |
| `SSH_PATH` | `/home/majestic/public_html/demo.majestic.tz` |
| `SSH_PRIVATE_KEY` | (GitHub Actions deploy key) |

---

## Manual upload (backup)

```bash
npm run build
```

Upload **contents of** `dist/` into `public_html/demo.majestic.tz`.

---

## SSL

cPanel → **SSL/TLS Status** / AutoSSL → enable for `demo.majestic.tz`.
