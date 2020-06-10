# React Training BHK

## Meal App

### App Idea

[App mockup](images/app-plan-meals-app.png)

[Source](https://www.udemy.com/course/react-native-the-practical-guide/)

### Todo

- [ ] Use react navigation v5 to control screens
- [ ] Add demo

### Setup

#### Add fonts

Create a file `react-native.config.js` in the parent's folder of the project

#### [Add react-navigation/native](https://reactnavigation.org/docs/getting-started)

```bash
npm install @react-navigation/native
```

Install dependencies

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Add the code below to `App.js`

```js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

#### [Add react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/)

```bash
npm install @react-navigation/stack
```

### Troubleshooting

#### Nothing was returned from render

Compiler error. [Solution](https://stackoverflow.com/questions/46741247/nothing-was-returned-from-render-this-usually-means-a-return-statement-is-missi)


### References

[Ultimate guide to use custom fonts](https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4)
