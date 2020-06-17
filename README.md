# React Training BHK

## Meal App

### App Idea

[App mockup](images/app-plan-meals-app.png)

[Source](https://www.udemy.com/course/react-native-the-practical-guide/), but this implementation uses the vanilla **react-native-cli** (or bare) workflow and **React Navigation v5**.

### Todo

- [x] Use react navigation v5 to control screens
- [ ] Add demo

### Setup

The following components should have been included inside the project, but if they have not, please follow the setup steps below and in their respective documentation

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

#### [Add react-navigation-header-buttons](https://github.com/vonovak/react-navigation-header-buttons)

```bash
npm install --save react-navigation-header-buttons
```

1. Create a customized headerbutton component, remember to add `{...props}`
2. Import at least `{HeaderButton, Item}` from the module

```JS
<HeaderButtons HeaderButtonComponent={YourCustomHeaderButtonComponent}>
  <Item title="some_string" otherPropsInDocumentation/>
<HeaderButtons>
``` 

#### [Add react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

**Bundled Icon Sets**

[Browse all](https://oblador.github.io/react-native-vector-icons/)

    AntDesign by AntFinance 
    Entypo by Daniel Bruce 
    EvilIcons by Alexander Madyankin & Roman Shamin 
    Feather by Cole Bemis & Contributors
    FontAwesome by Dave Gandy
    FontAwesome 5 by Fonticons, Inc.
    Fontisto by Kenan Gündoğan 
    Foundation by ZURB, Inc. 
    Ionicons by Ben Sperry 
    MaterialIcons by Google, Inc. 
    MaterialCommunityIcons by MaterialDesignIcons.com 
    Octicons by Github, Inc. 
    Zocial by Sam Collins 
    SimpleLineIcons by Sabbir & Contributors 

Follow the installation guides for iOS and Android separately

#### [Add react-navigation/bottom-tabs](https://reactnavigation.org/docs/tab-based-navigation/)

```bash
npm install --save @react-navigation/bottom-tabs
```

### Troubleshooting

#### Nothing was returned from render

Compiler error. [Solution](https://stackoverflow.com/questions/46741247/nothing-was-returned-from-render-this-usually-means-a-return-statement-is-missi)


### References

[Ultimate guide to use custom fonts](https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4)
