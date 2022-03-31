module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // TODO: React-native 추가
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
