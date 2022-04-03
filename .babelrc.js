
// https://github.com/worldzhao/blog/issues/5

module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
  env: {
    es: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
}
