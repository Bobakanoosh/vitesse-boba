import { createApp } from "vue";
import App from "./App.vue";

// windicss layers
import "virtual:windi-base.css";
import "virtual:windi-components.css";
// your custom styles here
import "./assets/index.css";
// windicss utilities should be the last style import
import "virtual:windi-utilities.css";
// windicss devtools support (dev only)
import "virtual:windi-devtools";
import { router } from "@/router/router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
