const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    images: {
      domains: ['getkeel.com'],
      formats: ['image/webp', 'image/avif'],
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    // Performance optimizations
    // experimental: {
    //   optimizeCss: true,
    // },
  })