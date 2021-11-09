<template>
<div class="container m-3">
  <h1 class="text-center text-xl text-yellow-600 divide-y divide-yellow-500">Awesome Blog</h1>
  <h2 class="ml-4">number of posts: {{ totalposts }}</h2>
  <h2 class="ml-4">number of posts per page: {{ paginnumbers }}</h2>
  <div class="flex flex-row justify-center" >
    <div v-for="(paginnumber, index) in paginnumbers"
    :key="index">
      <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 m-2 border border-red-500 hover:border-transparent rounded" @click="getCurrentPage(paginnumber - 1)">{{ paginnumber }}</button>
    </div>
  </div>
  <div class="m-3 grid md:grid-cols-2 lg:grid-cols-3">
    <div class="m-2 border border-red-200  rounded" v-for="post in page" :key="post.id">
      <h2 class="text-xl m-3">Title: {{ post.title }}</h2>
      <h2 class="ml-5 text-lg text-yellow-700">Author: {{ authorName(post.userId) }}</h2>
      <h3 class="truncate hover:truncate m-2">{{ post.body }}</h3>
      <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 m-2 border border-red-500 hover:border-transparent rounded" @click="getCurrentPost(post.id)" >
        Czytaj więcej</button>
      <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 m-2 border border-red-500 hover:border-transparent rounded" @click="erraseCurrentPost(post.id)" >
        Skasuj Post</button>
    </div>
   </div>
</div>
</template>

<script setup>
import { onMounted, computed, ref, onBeforeMount } from 'vue'
import store from '../store'

const page = ref(null)

const getposts = () => {
  store.dispatch('setAllPosts')
}

const getusers = () => {
  store.dispatch('setAllUsers')
}

const authorName = (id) => {
  return store.getters.getCurrentUserName(id)
}

const getCurrentPage = (id) => {
  page.value = store.getters.getCurrentPage(id)
}

const totalposts = computed(() => {
  return store.getters.getTotalPosts
})

const getCurrentPost = (id) => {
  console.log(id)
  page.value = store.getters.getCurrentPost(id)
}

const paginnumbers = computed(() => {
  return Math.ceil(totalposts.value / 10)
})

onBeforeMount(() => {
  getposts()
  getusers()
  console.log('All post are fetched')
})

onMounted(() => {
  getCurrentPage(1)
})
</script>
