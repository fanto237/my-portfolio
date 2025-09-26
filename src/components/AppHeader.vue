<script setup lang="ts">
import logo from '@/assets/logo.png'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { locale, t } = useI18n()
const setLocale = (lang: string) => {
  locale.value = lang
}

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <RouterLink to="/" class="logo-link">
          <img :src="logo" alt="" class="logo" />
        </RouterLink>
      </div>
      <nav :class="{ open: menuOpen }">
        <RouterLink to="/" @click="closeMenu">{{ t('header.home') }}</RouterLink>
        <RouterLink to="/parcours" @click="closeMenu">{{ t('header.parcours') }}</RouterLink>
        <RouterLink to="/projets" @click="closeMenu">{{ t('header.projects') }}</RouterLink>
        <RouterLink to="/competences" @click="closeMenu">{{ t('header.skills') }}</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">{{ t('header.contact') }}</RouterLink>
        <a href="/cv.pdf" target="_blank" @click="closeMenu">{{ t('header.cv') }}</a>
        <div class="actions-mobile">
          <div class="lang-switcher">
            <button @click="setLocale('en')" :class="{ active: locale === 'en' }">EN</button>
            <span class="separator">/</span>
            <button @click="setLocale('de')" :class="{ active: locale === 'de' }">DE</button>
          </div>
        </div>
      </nav>
      <div class="actions">
        <div class="lang-switcher">
          <button @click="setLocale('en')" :class="{ active: locale === 'en' }">EN</button>
          <span class="separator">/</span>
          <button @click="setLocale('de')" :class="{ active: locale === 'de' }">DE</button>
        </div>
      </div>
      <button class="burger" :class="{ open: menuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div v-if="menuOpen" class="menu-overlay" @click="closeMenu"></div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(245, 245, 247, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.3s;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 2rem;
}

.logo-link {
  /* font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading); */
  text-decoration: none;
}

.logo {
  width: 8rem;
  height: 8rem;
  margin-top: 0.7rem;
}

nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

nav a {
  color: var(--color-text-light);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

nav a:hover,
nav a.RouterLink-exact-active {
  color: var(--color-heading);
}

.actions {
  display: flex;
  align-items: center;
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.lang-switcher button {
  border: none;
  background: transparent;
  color: var(--color-text-light);
  font-weight: 500;
  padding: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.lang-switcher button.active {
  color: var(--primary-color);
  font-weight: 600;
}

.lang-switcher .separator {
  color: var(--color-border);
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}

.burger span {
  width: 24px;
  height: 2px;
  background: var(--color-heading);
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.actions-mobile {
  display: none;
}

.menu-overlay {
  display: none;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .actions {
    display: none;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 35vw;
    max-width: 160px;
    height: 100vh;
    background: var(--color-background);
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    transition: right 0.3s ease-in-out;
    z-index: 120;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.08);
  }
  .logo {
    margin-top: 1.2rem;
  }

  nav.open {
    right: 0;
  }

  .burger {
    display: flex;
  }

  .burger.open span:nth-child(1) {
    transform: rotate(45deg);
  }

  .burger.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  .burger.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  .actions-mobile {
    display: block;
    margin-top: 2rem;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.18);
    z-index: 110;
    transition: opacity 0.3s;
  }
}
</style>
