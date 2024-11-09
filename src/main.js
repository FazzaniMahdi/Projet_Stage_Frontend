import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'

import store from './store';

createApp(App).use(router).use(store).mount('#app')
