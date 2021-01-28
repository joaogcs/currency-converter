# Introduction

For learning Vue.js purposes.

Hosted on Github Pages - [https://joaogcs.github.io/currency-converter/](https://joaogcs.github.io/currency-converter/)

### Made with

* Vue.js
* Vuetify
* Nuxt.js
* Babel
* ESLint
* Yarn

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Start Vue CLI Ui

```
vue ui
```

## Deploy project to GitHub Pages

**Warning** - Only do it AFTER you have commited your code.

#### Change path name on URL on GitHub Pages

Change it within vue.config.js file

```javascript
module.exports = {
  publicPath: "/template-vuetify-spa/",
};
```

Then run the command below to checkout to gh-pages branch, build the project and push all files within 'dist' folder to the branch. Then it checkout back to main branch so you can commit and push to the main branch as usual.

```
yarn run deploy
```

## Extra info

### How to hard reload GitHub Pages

* Ctrl+F5 reloads the page without using the local cache.
* Ctrl+Shift+R also works, but not in IE

Or

1. Open Dev Tools by pressing: F12 or Ctrl+Shift+I (or on Mac: Opt+Cmd+I)
2. Now by just leaving dev tools open, right-click or click and hold the reload button next to the address bar. Now a somewhat 'hidden menu' opens.
3. Choose: "Empty Cache and Hard Reload"

Credits to [[User Dim - Super User](https://superuser.com/users/112558/dim)] - [Google Chrome - Clear Cache for Specific Website - Super User](https://superuser.com/questions/721692/google-chrome-clear-cache-for-specific-website)
