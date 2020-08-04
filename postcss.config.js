const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./components/**/*.tsx', './stories/**/*.tsx', './pages/**/*.tsx'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    'postcss-import',
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        autoprefixer: { grid: true },
        browsers: 'last 4 versions',
        stage: 1,
        preserve: false,
      },
    ],
    'postcss-color-function',
    'postcss-hexrgba',
    'postcss-calc',
    [
      'postcss-custom-properties',
      {
        preserve: false,
      },
    ],
  ],
};
