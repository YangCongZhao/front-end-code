module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    //vue3支持template有多个标签，所以禁掉
    'vue/no-multiple-template-root': 0,
    //允许每行有5个属性，多了换行
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 5
        },
        multiline: {
          max: 3
        }
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
