module.exports = {
  plugins: [
    [
      'relay',
      {
        artifactDirectory: './src/__generated__',
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
