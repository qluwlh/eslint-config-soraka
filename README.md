<!-- @format -->

# eslint-config-soraka

react项目eslint规则，需要预装prettier，eslint, typescript
# Use

install

```bash
npm i eslint-config-soraka --save-dev
yarn add eslint-config-soraka -D
``` 
or 

```bash
npm i eslint-config-soraka prettier eslint typescript --save-dev
yarn add eslint-config-soraka prettier eslint typescript -D
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
