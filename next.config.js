/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
}

module.exports = nextConfig


// async rewrites() {
//   console.log('sss')
//   return [
//     {
//       source: '/api/:path*',
//       destination: 'http://localhost:8000/api/:path*' // Proxy to Backend
//     }
//   ]
// }