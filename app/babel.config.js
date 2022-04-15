/* eslint-disable */
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//     {
//       relativeSourceLocation: true,
//     },
//   ],
// };

// TODO: https://github.com/software-mansion/react-native-reanimated/issues/1875
// FIXME: 해당 사이트를 참고

const pak = require('./package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      // 'react-native-reanimated/plugin', // NOT HERE
    ],
    'react-native-reanimated/plugin', // PUT IT HERE
  ],
};
