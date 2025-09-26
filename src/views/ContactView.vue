<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Page Contact
const { t } = useI18n()
</script>

<template>
  <section class="contact">
    <div class="container">
      <h2>{{ t('contact.title') }}</h2>
      <p class="section-subtitle">
        {{ t('contact.subtitle') }}
      </p>
      <div class="contact-card">
        <div class="contact-info">
          <div class="info-item">
            <strong>{{ t('contact.name_label') }}:</strong>
            <span>Lucien Siani</span>
          </div>
          <div class="info-item">
            <strong>{{ t('contact.location_label') }}:</strong>
            <span>Bremerhaven, Bremen, Germany</span>
          </div>
          <div class="info-item">
            <strong>{{ t('contact.email_label') }}:</strong>
            <a href="mailto:lucien@fanto.dev">lucien@fanto.dev</a>
          </div>
        </div>
        <div class="contact-socials">
          <a
            href="https://github.com/fanto237"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >{{ t('contact.github') }}</a
          >
          <a
            href="https://www.linkedin.com/in/siani-lucien-leroy-7443a7205/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >{{ t('contact.linkedin') }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 0;
  display: flex;
  align-items: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-light);
  max-width: 650px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
}

.contact-card {
  background: var(--color-background-soft);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid var(--color-border);
  text-align: left;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-item strong {
  color: var(--color-heading);
  font-weight: 600;
  min-width: 100px;
}

.info-item span,
.info-item a {
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.3s;
}

.info-item a:hover {
  color: var(--primary-color);
}

.contact-socials {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
}

@media (max-width: 767px) {
  .contact {
    padding: 2rem 0;
  }
  .container {
    padding: 0 1rem;
  }
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
