<template>
<h2>Posty w liczbie {{ totalposts }}</h2>
<h2>Strony w liczbie {{ paginnumbers }}</h2>
  <button @click="getposts">Listuj posty</button>
  <button @click="erraselist">Kasuj posty</button>
  <div style=" display: flex; flex-direction: row; justify-content: center; margin: 3px">
    <div v-for="(paginnumber, index) in paginnumbers"
    :key="index">
      <button @click="getCurrentPage(paginnumber)">{{ paginnumber }}</button>
    </div>
  </div>
    <div v-for="post in posts" :key="post.id">
      <h2>Post ID: {{post.id}}</h2>
      <h2>Tytuł: {{ post.title }}</h2>
      <h2 style="color: red;">Author: {{ authorName(post.userId) }}</h2>
      <h3>Body: {{ post.body }}</h3>
      <button @click="getCurrentPost(post.id)" style="margin: 3px">Czytaj więcej</button>
      <button @click="erraseCurrentPost(post.id)" style="margin: 3px">Skasuj Post</button>
    </div>

<post-list></post-list>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import store from '../store'
import PostList from '@/components/PostList.vue'

// const strona = reactive([])

const posts = computed(() => {
  return store.getters.getAllPosts
})

const getposts = () => {
  store.dispatch('setAllPosts')
}

const getusers = () => {
  store.dispatch('setAllUsers')
}

const authorName = (id) => {
  return store.getters.getCurrentUserName(id)
}

const totalposts = computed(() => {
  return store.getters.getTotalPosts
})

const erraseCurrentPost = (id) => {
  console.log(id)
}

const getCurrentPost = (id) => {
  console.log(id)
//   return store.getters.getCurrentPost(id)
}

const getCurrentPage = (id) => {
  // let i = id
  // console.log(i)
  // do {
  //   strona.value = strona.value.push(...store.getters.getCurrentPage(i))
  //   i++
  // }
  // while (i < id + 10)

  // console.log(strona)
  console.log(id)
  // store.dispatch('setCurrentPage', id)
}

const paginnumbers = computed(() => {
  return Math.ceil(totalposts.value / 10)
})

onMounted(() => {
  getposts()
  getusers()
  console.log('All post are fetched')
})
</script>
