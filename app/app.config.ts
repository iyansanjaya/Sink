export default defineAppConfig({
  title: 'Lumy',
  email: 'hi@iyansanjaya.com',
  github: 'https://github.com/iyansanjaya',
  twitter: 'https://twitter.com',
  telegram: 'https://telegram.com',
  mastodon: 'https://mastodon.com',
  blog: 'https://blog.iyansanjaya.com',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
