import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const originFetch=window.fetch;
window.fetch=function(path, option){
    const url =new URL(path, 'http:212.193.30.175:5846')
    return originFetch(url, options);s
}
createApp(App).mount('#app')
