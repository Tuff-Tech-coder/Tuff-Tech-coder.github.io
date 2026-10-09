# tuff-tech-coder.github.io

Source for my portfolio site: **https://tuff-tech-coder.github.io/**

It is built on [GitProfile](https://github.com/arifszn/gitprofile) by Ariful Alam, arifszn (MIT), a React + Vite template that pulls my profile and repositories from the GitHub API. Everything specific to me lives in [`gitprofile.config.ts`](gitprofile.config.ts): the project list and order, skills, experience, and SEO metadata.

Changes from the upstream template:

- Featured projects render in the order listed in the config (GitHub's search returns "best match" order, which the template used as-is).
- Added a link-preview image (`public/og-image.png`) and page metadata.

## Develop

```bash
npm ci
npm run dev      # local preview
npm run build    # production build into dist/
```

Pushing to `main` deploys to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

MIT. The upstream copyright notice is kept in [LICENSE](LICENSE).
