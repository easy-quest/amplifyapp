# Начало работы с Create React App

Этот проект был начат с [Create React App](https://github.com/facebook/create-react-app).

## Доступные сценарии

В каталоге проекта вы можете запустить:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Учить больше

Вы можете узнать больше в документации [Создать приложение React](https://facebook.github.io/create-react-app/docs/getting-started).

Чтобы изучить React, ознакомьтесь с документацией [React](https://reactjs.org/).

### Разделение кода

Этот раздел переехал суда: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

Этот раздел переехал суда: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

Этот раздел переехал суда: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Расширенная конфигурация

Этот раздел переехал суда: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Развертывание

Этот раздел переехал суда: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

Этот раздел переехал суда: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




---
https://master.dmi71r6xvbv86.amplifyapp.com/

```language
yarn set version berry
```
```language
yarn dlx @yarnpkg/doctor
```
---
Настройка пути
Если `Yarn` не найден в вашем пути, выполните следующие действия, чтобы добавить его и позволить ему быть запускаться из любого места.
Примечание. Ваш профиль может быть в вашем `.profile`, `.bash_profile`, `.bashrc`, `.zshrc` и т. Д.

Добавьте это в свой профиль: 
```
export PATH="$PATH:/opt/yarn-[version]/bin" 
```
(Путь может варьироваться в зависимости от того, где вы извлекали `Yarn` на) В терминале войдите и выйдите из-за изменения в силу
Чтобы получить доступ к исполняемым пользователям `Yarn` во всем мире, вам нужно будет настроить переменную среды пути в вашем терминале.Сделать это, добавьте 
```
export PATH="$PATH:`yarn global bin`" 
```
к вашему профилю или, если вы используете `Fish` оболочку, просто запустите команду
```
set -U fish_user_paths (yarn global bin) $fish_user_paths
```
