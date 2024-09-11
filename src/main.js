import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(VueReCaptcha, { siteKey: '6LfX5eopAAAAAGfoz3NRjIQm93lkJ5WAHFhq4nTC' })
app.use(router)
app.component('QuillEditor', QuillEditor)
app.mount('#app')

