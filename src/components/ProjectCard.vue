<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Project } from '../types/project.model'

defineProps<{ project: Project }>()
const { t } = useI18n()
</script>

<template>
  <div class="project-card">
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="desc">{{ project.desc }}</p>
    <div class="stack">
      <span v-for="tech in project.stack.split(', ')" :key="tech" class="tech-tag">{{ tech }}</span>
    </div>
    <div class="project-links">
      <a :href="project.repo" target="_blank" rel="noopener noreferrer" class="project-link">
        <i class="pi pi-github"></i><span>{{ t('projects.github') }}</span>
      </a>
      <a
        v-if="project.demo != ''"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link live-link"
      >
        <i class="pi pi-external-link"></i><span>{{ t('projects.live_demo') }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--color-background-soft);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  border-color: var(--primary-color);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.desc {
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.stack {
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--color-background-mute);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.project-link {
  color: var(--color-text-light);
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--primary-color);
}
</style>
