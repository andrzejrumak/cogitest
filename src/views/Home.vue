<template>
<h2>Posty</h2>
<div v-for="post in payload" :key="post.id">
  <h2>Tytuł: {{ post.title }}</h2>
  <h2>Id Autora: {{ post.userId }}</h2>
  <h3>Treść: {{ post.body }}</h3>
  <button>Czytaj Post</button>
</div>
<post-list></post-list>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PostList from '@/components/PostList.vue'
// import { makeRequest, payload, loading } from '@/composables/UseFetch.js'

const url = ref('https://jsonplaceholder.typicode.com/posts')
const payload = ref([])
onMounted(() => {
  const makeRequest = async () => {
    const res = await fetch(url.value)
    payload.value = await res.json()
  }
  makeRequest()

  // // this.$store.dispatch('getPosts')
  console.log('Component is mounted!')
})
</script>
