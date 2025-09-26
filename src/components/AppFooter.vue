<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const year = new Date().getFullYear()
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p p v-html="t('footer.copyright', { year })"></p>
        <div class="social-links">
          <a
            href="https://github.com/fanto237"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i class="pi pi-github" style="font-size: 1.5rem"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/siani-lucien-leroy-7443a7205/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i class="pi pi-linkedin" style="font-size: 1.5rem"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  margin-top: auto;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-links a {
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

.social-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
