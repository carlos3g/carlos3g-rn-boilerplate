# Environment setup

> Run `yarn run doctor` inside the project

- [React native environment setup](https://reactnative.dev/docs/environment-setup)
- [Watchman setup](https://facebook.github.io/watchman/docs/install)

## How to run

```bash
git clone https://github.com/carlos3g/carlos3g-rn-boilerplate

cd carlos3g-rn-boilerplate
cp .env.example .env
yarn install
yarn run android # yarn run ios
yarn run start
```

## Debugging

We use Flipper for debugging.
See [Flipper installation instructions](https://fbflipper.com/docs/getting-started).

## VSCode extensions recommendations

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)

## Common Issues

- [React Native Android Fetch failing on connection to local API](https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api)
- [.env file variables are cached](https://github.com/goatandsheep/react-native-dotenv/issues/75)
