<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>

<template>
  <div class="home-container">
    <section class="hero">
      <div class="hero-image">
        <div class="image-wrapper">
          <!-- TODO ajouter la bonne image -->
          <img src="" alt="Photo de Herman Tsago" />
        </div>
      </div>
      <div class="hero-text">
        <h1>{{ $t('home.title') }}</h1>
        <h2>{{ $t('home.subtitle') }}</h2>
        <div class="hero-actions">
          <router-link to="/projets" class="cta-primary">{{ $t('home.cta_projects') }}</router-link>
          <router-link to="/contact" class="cta-secondary">{{
            $t('home.cta_contact')
          }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 4rem 0;
}

.hero-image .image-wrapper {
  width: 150px;
  height: 150px;
}

.hero-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-text h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.hero-text h2 {
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 400;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-primary,
.cta-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.cta-primary {
  background-color: var(--primary-color);
  color: #fff;
}

.cta-primary:hover {
  background-color: var(--primary-color-dark);
}

.cta-secondary {
  background-color: transparent;
  color: var(--primary-color);
  border-color: var(--color-border);
}

.cta-secondary:hover {
  background-color: var(--color-background-soft);
  border-color: var(--color-border-hover);
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
