module.exports = {
  env: {
    // 코드 검사 여부 
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', 약
    'plugin:vue/vue3-strongly-recommanded', //중
    // 'plugin:vue/vue3-recommanded', 강

    // js
    'eslint:recommanded'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {

  }
}
