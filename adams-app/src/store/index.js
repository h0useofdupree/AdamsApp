import { createStore } from 'vuex'
import axios from "axios"

// Vuex Erklärung -> https://vuex.vuejs.org/guide/#the-simplest-store

export default createStore({
  state: {
    status: '',
    user: {},
    timetable: []
  },
  getters: {
    authStatus: state => state.status,
    getTimetable: state => state.timetable
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      if (user)
        state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    viewTimetable(state, timetable) {
      state.timetable = timetable
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
    },
    viewTimetable({ commit }, class_name) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:3000/timetable', data: { class: class_name }, method: 'POST' })
          .then(response => {
            if (response.data.status === 'success') {
              const timetable = response.data.data
              commit('viewTimetable', timetable)
              commit('auth_success')
            } else if (response.data.status === 'error') {
              commit('auth_error')
            }

            resolve(response)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
      })
    },
  },
})
