import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    status: '',
    user: {}
  },
  getters: {
    authStatus: state => state.status
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:3000/signin', data: user, method: 'POST' })
          .then(response => {
            if (response.data.status === 'success') {
              const user = response.data
              localStorage.setItem('user', JSON.stringify(user.user))
              commit('auth_success', user)
            } else if (response.data.status === 'error') {
              commit('auth_error')
            }

            resolve(response)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
