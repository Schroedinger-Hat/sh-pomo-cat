// eslint.config.js
import antfu from '@antfu/eslint-config'

const ignores = [
  '.nuxt',
  '**/.nuxt/**',
  '.output',
  '**/.output/**',
  'node_modules',
  '**/node_modules/**',
  'public',
  '**/public/**',
  '**/*.md',
]

export default await antfu({
  ignores,
  vue: {
    a11y: true,
  },
  rules: {
    'antfu/top-level-function': 'off',
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs'],
    'no-unused-expressions': ['error'],
    'no-param-reassign': ['error'],
    'no-fallthrough': ['error'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        functions: 'always-multiline',
        exports: 'always-multiline',
        imports: 'always-multiline',
      },
    ],
    'space-infix-ops': ['error'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
  },
})
