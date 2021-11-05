import { createStore } from 'vuex'

const url = 'https://jsonplaceholder.typicode.com/posts'
const headers = { Accept: 'application/json' }

const store = createStore({
  state: {
    allPosts: [],
    currentPost: []
  },
  mutations: {
    setAllPosts (state, payload) {
      state.allPosts = payload
    }
  },
  actions: {
    async setAllPosts (state) {
      const res = await fetch(url, { headers })
      const posts = await res.json()
      state.commit('setAllPosts', posts)
    },
    errasePosts (state) {
      state.commit('setAllPosts', null)
    }

  },
  modules: {},
  getters: {
    getAllPosts: state => state.allPosts,
    getCurrentPost: state => state.currentPost
  }
})

export default store
