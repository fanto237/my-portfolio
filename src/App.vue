<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'
import Footer from './components/AppFooter.vue'
import Header from './components/AppHeader.vue'

// Initialize dark mode
useDarkMode()
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
}

main {
  flex: 1;
  padding: 80px 0;
  width: 100%;
}

@media (max-width: 767px) {
  main {
    padding: 60px 0;
  }
}
</style>
