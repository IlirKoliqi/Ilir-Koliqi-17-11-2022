import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";

const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");


const data = [
 {index: "1111",name: "Hysen",surname: "Breznica",doB: "2000-01-01",municipality: "Mitrovice"},
 {index: "1112",name: "Festim",surname: "Lushta",doB: "2000-02-02",municipality: "Prishtine"},
 {index: "1113",name: "Albi",surname: "Rexha",doB: "1999-03-03",municipality: "Mitrovice"},
 ];
 localStorage.setItem("data", JSON.stringify(data));

const users = [{username: "ilir",password: "ilirkoliqi"}];
localStorage.setItem("users", JSON.stringify(users));

