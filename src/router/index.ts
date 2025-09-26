import CompetencesView from '@/views/CompetencesView.vue'
import ContactView from '@/views/ContactView.vue'
import CvView from '@/views/CvView.vue'
import HomeView from '@/views/HomeView.vue'
import ParcoursView from '@/views/ParcoursView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/parcours',
      name: 'parcours',
      component: ParcoursView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvView,
    },
    {
      path: '/competences',
      name: 'Competences',
      component: CompetencesView,
    },
  ],
})

export default router
