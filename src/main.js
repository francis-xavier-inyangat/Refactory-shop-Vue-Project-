import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";

// import VueRouter from 'vue-router'
import {createRouter, createWebHashHistory} from 'vue-router';
// import components to be used for routing
import HomeSection from './components/HomeSection'
import ProgramsSection from './components/ProgramsSection'
import CoursesSection from './components/CoursesSection'
import AlumniSection from './components/AlumniSection'
import StaffSection from './components/StaffSection'

// create routes for navigating front end components
const routes =[
    {path: '/',component:HomeSection},
    {path: '/programs',component:ProgramsSection},
    {path: '/courses',component:CoursesSection},
    {path: '/alumni',component:AlumniSection},
    {path: '/staff',component:StaffSection}
]
// create a touter for the application
const router = createRouter({
   
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
// create app instance
  const app = createApp(App)

  // register routers as routing middle wear
  app.use(router);

//   mount the app component to DOM
  app.mount('#app');



