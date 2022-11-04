/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'i.ytimg.com',
      'yt3.ggpht.com',
      'yt3.ggpht.com',
      'nextjs-youtube-clone-arthur.s3.sa-east-1.amazonaws.com'
    ]
  }
};

module.exports = nextConfig;
