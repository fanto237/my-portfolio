<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
useScrollAnimation()

const experiences = computed(() => {
  const data = tm('parcours.experiences')
  return Array.isArray(data) ? data : []
})
</script>

<template>
  <section class="parcours">
    <div class="container">
      <h2 class="scroll-animate">{{ $t('parcours.title') }}</h2>
      <p class="section-subtitle scroll-animate">
        {{ $t('parcours.subtitle') }}
      </p>

      <div class="timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="`exp-${index}`"
          class="timeline-item scroll-animate"
        >
          <div class="timeline-content">
            <h4>{{ exp.title }}</h4>
            <div class="experience-location">{{ exp.company }}</div>
            <div class="experience-date">{{ exp.date }}</div>
            <ul>
              <li v-for="item in exp.missions" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item scroll-animate">
          <div class="timeline-content">
            <h3>{{ $t('parcours.formation_title') }}</h3>
            <div class="formation-item">
              <h4>{{ $t('parcours.bachelor') }}</h4>
              <div class="formation-location">
                {{ $t('parcours.university') }} · <span>{{ $t('parcours.date_bachelor') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.parcours {
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

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: var(--color-border);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  padding: 1rem 2rem;
  position: relative;
  width: 50%;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  right: -8px;
  background-color: var(--color-background);
  border: 2px solid var(--primary-color);
  top: 2.5rem;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item:nth-child(even)::after {
  left: -8px;
}

.timeline-content {
  padding: 1.5rem;
  background: var(--color-background-soft);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.timeline-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.timeline-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.experience-location,
.formation-location {
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.experience-date {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
}

.timeline-content ul {
  padding-left: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-light);
}

.timeline-content li {
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 768px) {
  .timeline::after {
    left: 10px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 30px;
    padding-right: 0;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    left: 0;
  }

  .timeline-item::after {
    display: none;
  }
}
</style>
