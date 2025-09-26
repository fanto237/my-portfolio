<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from '../components/ProjectCard.vue'

useScrollAnimation()
const { tm } = useI18n()

// We keep the original project data for non-translatable fields like URLs
const projectData = computed(() => {
  const data = tm('projects.project_list')
  const urls = [
    {
      url: 'https://github.com/fanto237/paiya.ia',
      liveUrl: 'https://it-services-team-paiya.gen-ai.software/',
    },
    { url: 'https://github.com/fanto237/langchain-chainlit' },
    { url: 'https://github.com/fanto237/Spam-Klassifizierung' },
    { url: 'https://github.com/fanto237/Sensorprobe' },
    { url: 'https://github.com/fanto237/luciabot' },
    { url: 'https://github.com/fanto237/IT-sicherheit' },
  ]
  if (Array.isArray(data)) {
    return data.map((item, index) => ({ ...item, ...urls[index] }))
  }
  return []
})
</script>

<template>
  <section class="projets">
    <div class="container">
      <h2 class="scroll-animate">{{ $t('projects.title') }}</h2>
      <p class="section-subtitle scroll-animate">{{ $t('projects.subtitle') }}</p>
      <div v-if="projectData.length" class="projects-list scroll-animate">
        <ProjectCard v-for="(project, i) in projectData" :key="i" :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projets {
  padding: 4rem 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--color-heading);
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.125rem;
  color: var(--color-text-light);
  max-width: 650px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 767px) {
  .projets {
    padding: 2rem 0;
  }
  .container {
    padding: 0 1rem;
  }
}
</style>
