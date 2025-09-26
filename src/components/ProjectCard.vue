<script setup lang="ts">
import type { Project } from '../types/project.model'

defineProps<{ project: Project }>()
</script>

<template>
  <div class="project-card">
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="desc">{{ project.desc }}</p>
    <div class="stack">
      <span v-for="tech in project.stack.split(', ')" :key="tech" class="tech-tag">{{ tech }}</span>
    </div>
    <div class="project-links">
      <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
        <span>{{ $t('projects.github') }}</span>
      </a>
      <a
        v-if="project.liveUrl"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link live-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="external-link-icon"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        <span>{{ $t('projects.live_demo') }}</span>
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
