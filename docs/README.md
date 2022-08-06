# v3-scroll

**v3-scroll** is a customizable scroll component created with Vue 3.

- [Install](#install)
- [Add Plugin](#add-plugin)
- [Usage](#usage)
- [Anatomy Scrollbar](#anatomy-scrollbar)
- [Available Props](#available-props)
- [Example passing Props](#example-passing-props)
- [Browser Compatibility](#browser-compatibility)

### Install
``` bash
$ npm install v3-scroll
``` 

### Add Plugin

To use the scroll component you shoud import **V3Scroll** from "v3-scroll" and import v3-scroll/dist/library.mjs.css and use on your App component just like this:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import V3Scroll from "v3-scroll";
import "v3-scroll/dist/library.mjs.css";

createApp(App)
  .use(V3Scroll)
  .mount("#app");
```

### Usage

```javascript
<template>
  <div>
    <V3Scroll />
  </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>
```

### Anatomy Scrollbar

![alt text](https://cdn.discordapp.com/attachments/857713768498855938/1005330895428915220/unknown.png)

We can change the size of 1, and the color of 3 and 4. (next updates soon!)

### Available Props
| Prop            | Type   | Default | Description                                                                                   |
|-----------------|--------|---------|-----------------------------------------------------------------------------------------------|
| scrollbarWidth  | String | 8px     | Defines the scrollbar width. The value is expressed in pixels **e.g** 10px                    |
| trackColor      | String | #f1f1f1 | Defines the track color. The value is expressed in hex or a color name **e.g** #f2f2f2 or blue|
| thumbColor      | String | #666    | Defines the thumb color. The value is expressed in hex or a color name.                       |
| thumbHoverColor | String | #999    | Defines the thumb hover color. The value is expressed in hex or a color name                  |

### Example passing Props

```javascript
<template>
  <div>
    <V3Scroll scrollbarWidth="12px" thumbColor="blue" />
  </div>
</template>
```

### Browser Compatibility

![alt text](https://cdn.discordapp.com/attachments/857713768498855938/1005330758820434010/unknown.png)