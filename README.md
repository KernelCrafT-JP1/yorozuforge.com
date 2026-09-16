# YOROZU FORGE

企業への営業時に名刺から案内する、デジタル工房のWebサイト。

## Development

```sh
npm ci
npm run dev
npm run build
```

React + Vite. `main`へのpushでGitHub Actionsが静的ファイルをビルドし、GitHub Pagesにデプロイします。メール相談はmailtoリンクで、サイト内でメールを収集・送信しません。

## Content

- BOOTH: https://yorozuforge.booth.pm/
- Email: contact@yorozuforge.com
- Domain: https://yorozuforge.com/
- Text and link destinations: `src/App.jsx`
- Visual styles: `src/styles.css`
- Original logo and generated paper assets: `public/assets/`
- Japanese font: [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP), self-hosted via Fontsource (OFL)
- Icons: [Phosphor](https://phosphoricons.com/) (MIT)

## Domain configuration

GitHub PagesのCustom domainに `yorozuforge.com` を設定します。GitHub Actions公開ではCNAMEファイルだけでは設定されません。

ドメインのDNS管理画面で、ホスト名 `@`（管理画面によっては空欄）に次のAレコードを設定します。

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

wwwを使う場合は `www` のCNAMEを `kernelcraft-jp1.github.io` に設定します。メール用MX/TXTは変更不要です。証明書の発行が完了したらGitHub PagesでHTTPSを強制します。

[GitHub公式ドキュメント](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
