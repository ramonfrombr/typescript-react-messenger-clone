/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "upload.wikimedia.org",
      "icdn.football-espana.net",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
