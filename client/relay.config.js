module.exports = {
  schema: './src/graphql/schema.graphql',
  extensions: ['ts', 'tsx'],
  artifactDirectory: './src/__generated__',
  language: 'typescript',
  src: './src',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};
