<script setup>
import { ref } from 'vue'
import axios from 'axios'
import search from './icons/search.vue'
const searchName = ref('')
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()


const profileData = () => {
  axios.get(`https://api.github.com/users/${searchName.value}`)
    .then(response => {
      counter.pageUpdate(response.data)
    })
}
</script>

<template>
  <section class="container  lg:w-1/2">
    <div class="bg-darkBlueDarker dark:bg-white p-4 rounded-lg">
      <div class="flex justify-between w-full">
        <div class="flex gap-4 items-center w-full">
          <search/>
          <input v-model="searchName" type="text" class="w-full text-xl  outline-none bg-darkBlueDarker dark:bg-white text-lightBlue">
        </div>
        <button @click="profileData" class="text-white bg-blue py-2 px-4 rounded-md">Search</button>
      </div>
    </div>
  </section>
</template>
  
    


   