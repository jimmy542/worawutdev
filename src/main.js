import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Activity from './components/Activity.vue'
import Blog from './components/Blog.vue'
import Test from './components/Test.vue'



import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin ,faGithub} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLinkedin,faGithub)


const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/activity', component: Activity },
    { path: '/blog', component: Blog },
    { path: '/test',component:Test},
  ]
const router =createRouter({
    history:createWebHistory(),
    routes
})

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
