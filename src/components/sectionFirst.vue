<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
  import sun from './icons/sun.vue'
  import moon from './icons/moon.vue'
</script>

<template>
  <section class="container  lg:w-1/2">
    <div class="flex items-center justify-between pt-24 pb-8">
      <h1 class="dark:text-black text-white font-semibold text-3xl">devfinder</h1>
      <button @click="toggleDark()" class="flex gap-6 items-center">
          <h2 v-if="isDark" class="text-black font-semibold text-lg">dark</h2>
          <h2 v-else class=" text-white font-semibold text-lg">light</h2>
          <moon v-if="isDark" class="text-black"/>
          <sun v-else class="text-black" />
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>
