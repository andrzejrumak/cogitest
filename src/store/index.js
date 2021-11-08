import { createStore } from 'vuex'

const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const headers = { Accept: 'application/json' }

const store = createStore({
  state: {
    allPosts: [],
    allUsers: []
  },
  mutations: {
    setAllPosts (state, payload) {
      state.allPosts = payload
    },
    setAllUsers (state, payload) {
      state.allUsers = payload
    }
  },
  actions: {
    async setAllPosts (state) {
      const res = await fetch(urlPosts, { headers })
      const posts = await res.json()
      state.commit('setAllPosts', posts)
    },

    async setAllUsers (state) {
      const res = await fetch(urlUsers, { headers })
      const users = await res.json()
      state.commit('setAllUsers', users)
    },
    errasePosts (state) {
      state.commit('setAllPosts', [])
    }
  },
  modules: {},
  getters: {
    getAllPosts: state => state.allPosts,
    getAllUsers: state => state.allUsers,
    getCurrentPost: (state) => (id) => {
      return state.allPosts.find(post => post.id === id)
    },
    getTotalPosts: state => state.allPosts.length,
    getCurrentUserName: (state) => (id) => {
      return (state.allUsers.find(user => user.id === id)).name
    },
    getCurrentPage: (state) => (id) => {
      return state.allPosts.slice(id * 10, id * 10 + 10)
    }
  }
})

export default store
