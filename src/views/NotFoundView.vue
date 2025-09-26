<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <section class="not-found-section">
    <i class="pi pi-exclamation-triangle error-icon"></i>
    <h1 class="error-title">404 Not Found</h1>
    <p class="error-message">{{ t('404.not_exist') }}</p>
    <RouterLink to="/" class="back-button">{{ t('404.go_back') }}</RouterLink>
  </section>
</template>
<style scoped>
.not-found-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 24rem; /* 384px (h-96) */
}

.error-icon {
  color: var(--primary-color); /* text-yellow-500 */
  font-size: 4.5rem; /* text-7xl */
  margin-bottom: 1.25rem; /* mb-5 */
}

.error-title {
  font-size: 3.75rem; /* text-6xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1rem; /* mb-4 */
}

.error-message {
  font-size: 1.25rem; /* text-xl */
  margin-bottom: 1.25rem; /* mb-5 */
}

.back-button {
  color: white; /* text-white */
  background-color: var(--primary-color); /* bg-green-700 */
  border-radius: 0.375rem; /* rounded-md */
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  margin-top: 1rem; /* mt-4 */
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #14532d; /* hover:bg-green-900 */
}

/* Mobile styles (up to 640px) */
@media (max-width: 640px) {
  .not-found-section {
    height: 20rem;
    padding: 1rem;
  }

  .error-icon {
    font-size: 3rem; /* Smaller icon on mobile */
    margin-bottom: 1rem;
  }

  .error-title {
    font-size: 2.5rem; /* Smaller title on mobile */
    margin-bottom: 0.75rem;
  }

  .error-message {
    font-size: 1rem; /* Smaller message on mobile */
    margin-bottom: 1rem;
  }

  .back-button {
    padding: 0.75rem 1rem; /* Larger touch target on mobile */
    font-size: 1rem;
  }
}

/* Tablet styles (641px to 1024px) */
@media (min-width: 641px) and (max-width: 1024px) {
  .not-found-section {
    height: 22rem;
    padding: 1.5rem;
  }

  .error-icon {
    font-size: 4rem;
    margin-bottom: 1.125rem;
  }

  .error-title {
    font-size: 3.25rem;
    margin-bottom: 0.875rem;
  }

  .error-message {
    font-size: 1.125rem;
    margin-bottom: 1.125rem;
  }
}

/* Large screens (1025px and up) - default styles already applied */
@media (min-width: 1025px) {
  .not-found-section {
    padding: 2rem;
  }
}
</style>
