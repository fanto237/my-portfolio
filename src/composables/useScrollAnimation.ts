import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation() {
  const elementsToAnimate = ref<Element[]>([])

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  onMounted(() => {
    elementsToAnimate.value = Array.from(document.querySelectorAll('.scroll-animate'))
    elementsToAnimate.value.forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    elementsToAnimate.value.forEach((el) => {
      if (el) {
        observer.unobserve(el)
      }
    })
  })
}
