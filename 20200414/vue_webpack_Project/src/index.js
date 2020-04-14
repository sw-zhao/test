import Vue from 'vue'
import App from './App.vue'
import router from '../routes.js'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)
