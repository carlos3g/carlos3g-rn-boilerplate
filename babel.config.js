const plugins = [
  [
    'module:react-native-dotenv',
    {
      safe: true,
      allowUndefined: false,
    },
  ],
  [
    'babel-plugin-root-import',
    {
      rootPathSuffix: './src',
      rootPathPrefix: '@app',
    },
  ],
  'react-native-reanimated/plugin',
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
