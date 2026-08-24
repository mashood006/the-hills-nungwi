# Deploy to cPanel — https://demo.majestic.tz/

## Important about your SSH key

You **already created** a key on the server:

- Private: `/home/majestic/.ssh/id_rsa`
- Public: `/home/majestic/.ssh/id_rsa.pub`

In cPanel **SSH Access → Generating a Public Key**, do **not** generate a second key.

- To manage the existing key in cPanel: use **Import Key** (paste the public key), or skip cPanel UI if Terminal already works.
- The public key goes on **GitHub** (Deploy Key) so the server can `git clone` / `git pull`.
- Never share or upload the **private** key.

---

## Option A — Upload build (simplest on cPanel)

1. On your computer:

```bash
npm install
npm run build
```

2. In cPanel → **Domains** / **Subdomains**, find **demo.majestic.tz** and note its document root  
   (often `public_html/demo` or `demo.majestic.tz`).

3. Upload **everything inside** the local `dist/` folder into that document root  
   (including `index.html`, `assets/`, `images/`, `.htaccess`).

4. Visit https://demo.majestic.tz/

---

## Option B — Pull from GitHub on the server (SSH)

### 1. Add Deploy Key on GitHub

Repo → **Settings → Deploy keys → Add deploy key**

- Title: `cPanel majestic demo`
- Key: contents of `/home/majestic/.ssh/id_rsa.pub` on the server
- Allow write access: **off** (read-only is enough)

Or from this machine (if the public key file is saved locally):

```bash
gh repo deploy-key add id_rsa.pub -t "cPanel majestic demo" -R mashood006/the-hills-nungwi
```

### 2. On the server (cPanel Terminal)

```bash
cd ~
mkdir -p apps && cd apps
git clone git@github.com:mashood006/the-hills-nungwi.git
cd the-hills-nungwi
# Needs Node.js in cPanel (Setup Node.js App) or build elsewhere and only copy dist/
npm install
npm run build
```

### 3. Point the subdomain at `dist`

Either:

- Set the subdomain document root to `apps/the-hills-nungwi/dist`, **or**
- Copy build into the subdomain folder:

```bash
# adjust paths to match your cPanel layout
cp -R dist/* ~/public_html/demo/
# or: cp -R dist/* ~/demo.majestic.tz/
```

### 4. After updates

```bash
cd ~/apps/the-hills-nungwi
git pull
npm install
npm run build
cp -R dist/* ~/public_html/demo/
```

---

## SSL

In cPanel → **SSL/TLS Status** (or AutoSSL), issue a certificate for `demo.majestic.tz` so https works.
