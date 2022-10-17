import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/normalize.css";
import "./assets/base.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import translatePlugin from "../src/plugins/transatePlugin"
//подключено через терминал

const uk = {
  app: {
    title: "Це vue плагін",
    changeBtn: 'Укр'
  }
}
const en = {
  app: {
    title: "This is a vue plugin",
    changeBtn: 'Eng'
  }
}



createApp(App).use(store).use(router).use(translatePlugin, { uk, en }).mount('#app')
