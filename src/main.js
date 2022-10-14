import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/normalize.css";
import "./assets/base.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//подключено через терминал





createApp(App).use(store).use(router).mount('#app')
