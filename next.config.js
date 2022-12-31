/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['static.dezeen.com',
    'images.squarespace-cdn.com',
  'encrypted-tbn0.gstatic.com']
  }
}

module.exports = nextConfig
