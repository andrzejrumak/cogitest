<template>
<h2>Posty w liczbie {{ totalposts }}</h2>
<h2>Strony w liczbie {{ paginnumbers }}</h2>
  <button @click="getposts">Listuj posty</button>
  <button @click="erraselist">Kasuj posty</button>
  <div style=" display: flex; flex-direction: row; justify-content: center; margin: 3px">
    <div v-for="(paginnumber, index) in paginnumbers"
    :key="index">
      <button @click="showCurrentPage(paginnumber)">{{ paginnumber }}</button>
    </div>
  </div>

<!-- <div v-for="post in payload" :key="post.id"> -->
  <div v-for="post in posts" :key="post.id" >
  <h2>Tytuł: {{ post.title }}</h2>
  <h2>Id Autora: {{ post.userId }}</h2>
  <h3>Treść: {{ post.body }}</h3>
  <button @click="getCurrentPost(post.id)" style="margin: 3px">Czytaj więcej</button>
    <button @click="erraseCurrentPost" style="margin: 3px">Skasuj Post</button>
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

const totalposts = computed(() => {
  return store.getters.getTotalPosts
})

const erraseCurrentPost = () => {

}

const getCurrentPost = (id) => {
  console.log(id)
}

const showCurrentPage = (id) => {
  console.log(id)
}

const paginnumbers = computed(() => {
  return Math.ceil(totalposts.value / 10)
})

onMounted(() => {
  getposts()
  console.log('All post are fetched')
})

</script>
