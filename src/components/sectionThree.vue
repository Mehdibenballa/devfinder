<script setup>
import location from '@/components/icons/location.vue'
import twitter from '@/components/icons/twitter.vue'
import website from '@/components/icons/website.vue'
import company from '@/components/icons/company.vue'

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()



const formatDate = (dateString) => {
  const formattedDate = new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return formattedDate;
}
 const removehttp = () => {
  return counter.page.blog.replace(/https?:\/\/|www\.|\//g, '')
 }


</script>



<template>
  <section v-if="counter.page" class="container lg:w-1/2 pt-8 pb-4">
    <div class="bg-darkBlueDarker dark:bg-white rounded-lg">
      <div class="flex flex-col lg:flex-row  p-6 gap-6">
      <div class="flex items-center lg:items-start gap-6">
        <img :src="counter.page.avatar_url" alt="" class="w-28 rounded-full">
        <div class="lg:w-3/5 lg:hidden">
              <h2 class="font-bold text-2xl text-white dark:text-black">{{ counter.page.login  }}</h2>
              <a :href="counter.page.html_url" class="text-blue">@{{ counter.page.name }}</a>
              <div class="">
                <p class="text-lightBlue font-semibold">joined {{ formatDate (counter.page.created_at)  }}</p>
              </div>
        </div>
      </div>
      <div class="lg:flex-1">
          <div class="flex  flex-col lg:flex-row justify-between">
            <div class="lg:w-3/5">
              <h2 class="font-bold text-2xl text-white dark:text-black hidden lg:block">{{ counter.page.login  }}</h2>
              <a :href="counter.page.html_url" class="text-blue hidden lg:block">@{{ counter.page.name }}</a>
              <p class="text-lightBlue font-semibold text-sm pt-8">{{ counter.page.bio || 'This profile has no bio' }}</p>
            </div>
            <div class="hidden lg:block">
              <p class="text-lightBlue font-semibold">joined {{ formatDate (counter.page.created_at)  }}</p>
            </div>
          </div>
          <div class="py-6">
            <div class="grid grid-cols-3 items-center justify-center bg-veryDarkBlueDarker dark:bg-veryLightBlue rounded-md py-2 px-4">
              <div>
                <h2 class="text-white dark:text-lightBlue">Repos</h2>
                <h3 class="text-white font-bold dark:text-black">{{ counter.page.public_repos  }}</h3>
              </div>
              <div>
                <h2 class="text-white dark:text-lightBlue">Followers</h2>
                <h3 class="text-white font-bold dark:text-black">{{ counter.page.followers }}</h3>
              </div>
              <div>
                <h2 class="text-white dark:text-lightBlue">Following</h2>
                <h3 class="text-white font-bold dark:text-black">{{ counter.page.following  }}</h3>
              </div>
            </div>
          </div>
          <div  class="grid lg:grid-cols-2 gap-6 py-6">
            <div :class="counter.page.location ? 'text-white' : 'text-lightBlue' "  class="flex gap-6">
              <location  />
             <h2>{{ counter.page.location || 'Not available' }}</h2>
            </div>
            <div :class="counter.page.twitter_username ? 'text-white' : 'text-lightBlue' "   class="flex gap-6">
              <twitter  />
              <h2>{{ counter.page.twitter_username || 'Not available' }}</h2>
            </div>
            <div :class="counter.page.blog ? 'text-white' : 'text-lightBlue' " class="flex gap-6">
              <website />
              <h2>{{ removehttp(counter.page.blog ) || 'Not available' }}</h2>
            </div>
            <div :class="counter.page.company ? 'text-white' : 'text-lightBlue' "  class="flex gap-6">
              <company  />
              <h2>@{{ counter.page.company || 'Not available' }} </h2>
            </div>
          </div>
      </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
