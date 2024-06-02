const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  webpack(config, options) {
    config.resolve.fallback = { fs: false }
    config.module.rules.push({
      test: /.(png|woff(2)?|woff|eot|ttf|otf|gif|jpe?g|mp4|webp|png)(\?[a-z0-9=.]+)?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['zeissforlifedsv.s3.us-east-2.amazonaws.com'],
  },
  ...withBundleAnalyzer,
};