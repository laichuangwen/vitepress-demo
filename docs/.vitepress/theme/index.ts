import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "../src/style/root.css"
import "vitepress-theme-demoblock/theme/styles/index.css";
import VpDemo  from '../src/vp-demo.vue';

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
    app.component('Demo',VpDemo)
  },
};