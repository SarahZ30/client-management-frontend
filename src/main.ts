/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Composables
import { createApp } from "vue";
import commonmixins from "./Mixins/commonmixins";

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Styles
import "unfonts.css";
import "@/assets/scss/sample.scss";

const app = createApp(App);

registerPlugins(app);

app.mixin(commonmixins);

app.mount("#app");