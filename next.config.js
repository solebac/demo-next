/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'https://credrapidoaraxa.netlify.app/:path*'
      }
    ]
  }
}
