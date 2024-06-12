import { createApp } from "vue";
import * as commonComponents from "./components/common";
import App from "./app.vue";
import "./style.scss";

// Create the Vue app
const app = createApp(App);

// Register common components
for (const key in commonComponents)
  app.component(key, commonComponents[key as keyof typeof commonComponents]);

// Start the Vue app
app.mount("#app");
