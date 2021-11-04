<template>
<h2>Posty</h2>
<post-list></post-list>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'

export default {
  name: 'Home',
  components: {
    PostList

  }
}
</script>
