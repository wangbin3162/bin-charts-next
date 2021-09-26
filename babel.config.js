module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      'regenerator': true,
    }],
  ],
  env: {
    utils: {
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['bin-charts-next'],
            alias: { 'bin-charts-next/src': 'bin-charts-next/lib' },
          },
        ],
      ],
    },
  },
}
