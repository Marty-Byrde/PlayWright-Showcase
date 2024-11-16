const nextConfig = {
  /* config options here */
  webpack: (config, options) => {
    if(process.env.NODE_V8_COVERAGE && options.isServer) {
      Object.defineProperty(config, 'devtool', {
        get() {
          return 'source-map'
        },
        set() {},
      })
    }

    return config
  },
  images: {
    remotePatterns: [
      {
        port: '',
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
        pathname: '/u/**',
      },
    ],
  },
}

export default nextConfig
