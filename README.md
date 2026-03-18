Naans & Curries – Restaurant website (React + Vite).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Connect WordPress for blog posts

You can manage blog posts in WordPress and have them appear on this site.

1. **Set up WordPress** (e.g. on your hosting or a subdomain like `blog.yoursite.com`).
2. **Enable the REST API** – it’s on by default; ensure posts are public.
3. **Add this to your project’s `.env`** (create it in the project root if needed):
   ```env
   VITE_WORDPRESS_API_URL=https://your-wordpress-site.com
   ```
   Use your WordPress URL **without** a trailing slash (e.g. `https://blog.naansandcurries.com`).
4. **Restart the dev server** after changing `.env`.
5. **Publish posts in WordPress** – they will show on the Blog page, Blog detail (by slug), featured section, and home blog strip. Use **Featured Image** for post thumbnails and assign **Categories** if you use filters.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
