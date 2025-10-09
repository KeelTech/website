const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    images: {
      domains: ['getkeel.com'],
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 60,
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    // Performance optimizations
    // experimental: {
    //   optimizeCss: true,
    // },
    // Enable compression
    compress: true,
    // Enable static optimization
    trailingSlash: false,
    // Optimize bundle
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        }
      }
      return config
    },
  })