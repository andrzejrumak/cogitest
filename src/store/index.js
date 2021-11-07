import { createStore } from 'vuex'

const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlUsers = 'https://jsonplaceholder.typicode.com/users'
const headers = { Accept: 'application/json' }

const store = createStore({
  state: {
    allPosts: [],
    currentPage: [],
    currentPost: [],
    allUsers: []
    // currentUser: [],
    // currentUserName: ''
  },
  mutations: {
    setAllPosts (state, payload) {
      state.allPosts = payload
    },
    // setCurrentPage (state, payload) {
    //   state.currentPage = payload
    // },
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
    // setCurrentPage (state, id) {
    //   // const posts = () => { return state.allPosts.find(post => post.id === id) }
    //   const posts = (state) => (id) => state.allPosts.find(post => post.id === id)
    //   state.commit('setCurrentPage', posts)
    // },
    async setAllUsers (state) {
      const res = await fetch(urlUsers, { headers })
      const users = await res.json()
      state.commit('setAllUsers', users)
    },
    // async setCurrentUser (state, id) {
    //   const res = await fetch(urlUsers + '/' + id, { headers })
    //   const user = await res.json()
    //   state.commit('setCurrentUser', user)
    // },
    errasePosts (state) {
      state.commit('setAllPosts', [])
    }

  },
  modules: {},
  getters: {
    getAllPosts: state => state.allPosts,
    getAllUsers: state => state.allUsers,
    getCurrentPost: state => (state) => (id) => {
      return state.allPosts.find(post => post.id === id)
    },
    getTotalPosts: state => state.allPosts.length,
    getCurrentUserName: (state) => (id) => {
      return (state.allUsers.find(user => user.id === id)).name
    }
    // getCurrentPage: (state) => state.currentPage
    // getCurrentPage: (state) => (id) => {
    //   return state.allPosts.find(post => post.id === id)
    // }
  }
})

export default store
