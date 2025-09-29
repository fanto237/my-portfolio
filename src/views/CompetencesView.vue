<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { tm } = useI18n()
useScrollAnimation()

const skillCategories = computed(() => {
  const data = tm('skills.categories')
  return Array.isArray(data) ? data : []
})
</script>

<template>
  <section class="competences">
    <div class="container">
      <h2 class="scroll-animate">{{ $t('skills.title') }}</h2>
      <p class="section-subtitle scroll-animate">
        {{ $t('skills.subtitle') }}
      </p>
      <div v-if="skillCategories.length" class="skills-grid scroll-animate">
        <div class="skill-category-card" v-for="(category, index) in skillCategories" :key="index">
          <h3>{{ category.title }}</h3>
          <ul>
            <li v-for="skill in category.skills" :key="skill">
              <i class="pi pi-check"></i>
              <span>{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.competences {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-category-card {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid var(--color-border);
}

.skill-category-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
}

.skill-category-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category-card li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: 0.75rem;
}

.check-icon {
  color: var(--primary-color);
  width: 20px;
  height: 20px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .competences {
    padding: 2rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-category-card {
    padding: 1.5rem;
  }
}
</style>
