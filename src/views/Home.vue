<template>
<h2>Posty</h2>
  <button @click="getposts">Listuj posty</button>
  <button @click="erraselist">Kasuj posty</button>
<!-- <div v-for="post in payload" :key="post.id"> -->
  <div v-for="post in posts" :key="post.id">
  <h2>Tytuł: {{ post.title }}</h2>
  <h2>Id Autora: {{ post.userId }}</h2>
  <h3>Treść: {{ post.body }}</h3>
  <button @click="getposts">Czytaj więcej</button>
  </div>

<post-list></post-list>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import store from '../store'
import PostList from '@/components/PostList.vue'

const posts = computed(() => {
  return store.getters.getAllPosts
})

const getposts = () => {
  store.dispatch('setAllPosts')
}
const erraselist = () => {
  store.dispatch('errasePosts')
}
onMounted(() => {
  getposts()
  console.log('Component is mounted!')
})

</script>
