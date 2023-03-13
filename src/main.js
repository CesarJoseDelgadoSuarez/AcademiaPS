import { createApp } from 'vue'
import App from './App.vue'

// Importamos Bootstrap 
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Añadimos el router(para trabajar con rutas)
import router from "./router.js";



const app = createApp(App)

app.use(router);

app.mount('#app');