module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'test/*': ['./test/'],
          '@modules': './src/modules',
          '@enums': './src/enums',
          '@constant': './src/constant',
          '@components': './src/components'
        }
      }
    ]
  ]
}
