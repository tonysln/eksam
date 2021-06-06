import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './static/css/style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
