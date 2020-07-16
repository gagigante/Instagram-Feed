<h1 align="center">
    <img alt="Instagram" title="#Instagram" src=".github/instagram.png" width="250px" />
</h1>

<h4 align="center">
  Instagram Feed
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gagigante/Instagram-Feed">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gagigante/Instagram-Feed">
  
  <a href="https://github.com/gagigante/Instagram-Feed/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gagigante/Instagram-Feed">
  </a>

  <a href="https://github.com/gagigante/Instagram-Feed/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gagigante/Instagram-Feed">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

<p align="center">
  <img alt="Frontend" src=".github/frontend.gif" width="300px">
</p>

## :rocket: Technologies

This project was developed with the following techs:

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Json Server](https://www.npmjs.com/package/json-server)

## 💻 Project

This project is a simple clone of Instagram feed

## :runner: How to run

Set the emulator IP (If you are running into IOS you can use localhost)
```
./src/pages/Feed/index.tsx

[...]

const response = await fetch(
  `http://EMULATOR_CURRENT_IP:3333/feed?_expand=author&_limit=5&_page=${pageNumber}`,
);
```

Install dependencies
```
  $ yarn
```

Run fake api
```
  $ yarn json-server server.json -p 3333
```

To run the app
```
  $ yarn android

  or

  $ yarn ios
```

## 🤔 How to contribute

- Fork this repo;
- Create a branch for your new feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My brand new feature'`;
- Push it to your branch: `git push origin my-feature`.

After merge of your pull request, you can delete your branch.

## :memo: License

This project is under MIT license. See the file [LICENSE](LICENSE) for details.

---

[Visit my website!](https://www.ggportfolio.com.br)
