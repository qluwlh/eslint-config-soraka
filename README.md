<!-- @format -->

# eslint-config-soraka

包含 prettier，eslint 的配置文件
# Use

安装

```bash
npm i eslint-config-soraka --save-dev
yarn add eslint-config-soraka -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: ['soraka'],
  
  globals: {
     // your globals
  },

  rules: {
    // your rules
  },
};
```
