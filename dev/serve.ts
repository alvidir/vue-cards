import { createApp } from "vue";
import App from "./App.vue";
import include from "../src/main";
import includeFields from "vue-fields/src/main";

const app = createApp(App);
includeFields(app);
include(app);

app.mount("#app");
