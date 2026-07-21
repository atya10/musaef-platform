import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './locales'
import App from './App.vue'

// Bootstrap (CSS + JS bundle with Popper) and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Musaef design system
import './styles/variables.css'
import './styles/main.css'
import './styles/responsive.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
