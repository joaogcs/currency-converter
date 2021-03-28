# Vuetify Currency Converter

![GitHub repo size](https://img.shields.io/github/repo-size/joaogcs/vuetify-currency-converter)
![GitHub contributors](https://img.shields.io/github/contributors/joaogcs/vuetify-currency-converter)

![GitHub stars](https://img.shields.io/github/stars/joaogcs/vuetify-currency-converter)
![GitHub forks](https://img.shields.io/github/forks/joaogcs/vuetify-currency-converter)

Project name is a model that allows anyone to do learn the basics of Vuetify.

The layout is based on https://vuetifyjs.com/ website.

:arrow_forward: ​LIVE DEMO  https://joaogcs.github.io/vuetify-currency-converter/

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Vue CLI](https://cli.vuejs.org/)
* You have installed the latest version of [Yarn](https://yarnpkg.com/)

## API Limitations for currency conversor

This repository is build with the free version of [Free Currency Converter API](https://free.currencyconverterapi.com/).

It's limited to 100 calls per hour and you may need to refresh the current API Key to your own.

The API Key is seen in the files:

`src/components/SearchSingleCurrency.vue`

```bash
149 `https://free.currconv.com/api/v7/currencies?apiKey=d8b2e9d59ba3d57fba43`
```

`src/components/card.vue`

```bash
209 `https://free.currencyconverterapi.com/api/v5/convert?q=${currencyA}_${currencyB}&compact=y&apiKey=d8b2e9d59ba3d57fba43`
```

## Installing vuetify-currency-converter

To install vuetify-currency-converter, follow these steps:

Linux and macOS:
```bash
yarn install

# or

npm install
```

Windows:
```bash
yarn install

# or 

npm install
```
## Run local environment

To use vuetify-currency-converter, follow these steps:

```bash
yarn serve

# or

npm serve
```

## Deploy on Github Pages

To deploy vuetify-currency-converter on Github Pages, verify the if the name of you master branch matches the branch in the script `scripts/gh-pages-deploy.js`, the default is `main`:

```bash
17 await execa("git", ["checkout", "-f", "main"]);
```

> :information_source: **Note**
>
> If you are using NPM you also must change package module from `yarn` to `npm`
>
> ```bash
> 9  await execa("yarn", ["run", "build"]);
> ```

> :warning: **Important​**
>
> Make sure you have your Github account configured and you have committed all changes in `main` branch. 

To change the path of your Github Page, open `vue.config.js` file and change the value of `publicPath` property to the path you want.

Follow these steps to deploy to Github Pages

```bash
yarn build

yarn deploy
```

## Contributing to vuetify-currency-converter

To contribute to vuetify-currency-converter, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b development`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin vuetify-currency-converter/main`
5. Create the pull request.

Alternatively see the Github documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@joaogcs](https://github.com/joaogcs) 📖

## Contact

If you want to contact me you can reach me at <joaogcsoares1@gmail.com>.

## License![License](https://img.shields.io/github/license/joaogcs/vuetify-currency-converter)
This project uses the following license: [MIT](https://opensource.org/licenses/MIT).