import './assets/main.css'

// import type { Engine } from 'tsparticles-engine'
// import { loadSlim } from 'tsparticles-slim'
// import { Particles } from '@tsparticles/vue3'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(i18n)
// app.use(Particles, {
//   init: async (engine: Engine) => {
//     await loadSlim(engine)
//   },
// })

app.mount('#app')
