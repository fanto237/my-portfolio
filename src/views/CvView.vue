<script setup lang="ts">
// Page CV
</script>
<template>
  <section class="cv">
    <div class="container">
      <h2>Télécharger mon CV</h2>
      <p>Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous :</p>
      <a href="/cv.pdf" download class="cv-link">Télécharger le CV (PDF)</a>
    </div>
  </section>
</template>

<style scoped>
.cv {
  background: #f8f9fb;
  padding: 2rem 0;
  text-align: center;
}

@media (min-width: 768px) {
  .cv {
    padding: 2.5rem 0 2rem 0;
  }
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #007bff;
  line-height: 1.2;
}

@media (min-width: 768px) {
  h2 {
    margin-bottom: 1.5rem;
  }
}

p {
  font-size: 1rem;
  color: var(--text-color-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

@media (min-width: 768px) {
  p {
    font-size: 1.1rem;
  }
}

.cv-link {
  display: inline-block;
  background: #007bff;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 200px;
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.2);
}

@media (min-width: 768px) {
  .cv-link {
    padding: 0.7rem 2.2rem;
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }
}

.cv-link:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
}

/* Mobile-specific improvements */
@media (max-width: 767px) {
  .cv-link {
    width: 100%;
    max-width: 280px;
  }
}
</style>
