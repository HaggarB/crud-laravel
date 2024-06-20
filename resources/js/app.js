import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Importa los estilos de los iconos

const app = createApp(App);

app.use(Vuetify);

app.mount('#app');

