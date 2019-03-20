import Vue from 'vue'
import Vuex from 'vuex'
import api from '../service/api'

Vue.use(Vuex)

const idDev = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  strict: idDev,
  state: {
    agents: [],
    filterdAgents: [],
    agentCount: 0,
    isFilterd: false
  },
  mutations: {
    getAgents (state, value) {
      state.agents.push(value)
    },
    getAgentCount (state, value) {
      state.agentCount = value
    },
    updateResources (state, value) {
      state.agents[0].forEach((item) => {
        if (item.id === value.id) {
          item.resources = value.resources
        }
      })
    },
    filterAgents (state, type) {
      if (type !== 'all') {
        state.isFilterd = true
        state.filterdAgents = state.agents[0].filter(agent => {
          return agent.type === type
        })
      } else {
        state.isFilterd = false
      }
    }
  },
  actions: {
    getAgentsAsync (store, data) {
      api.getRequest('/agents').then((res) => {
        store.commit('getAgents', res)
        store.commit('getAgentCount', res.length)
      })
    },
    updateResourcesAsync (store, data) {
      api.patchRequest('/agents/' + data.id, {
        resources: data.resources
      }).then((res) => {
        store.commit('updateResources', res)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  getters: {
    AgentStatisticsCount (state, getters, rootState) { // state 为local  getters 没设置root: true 时 为全局getters
      let buildingCount = 0
      let idleCount = 0
      let physicalCount = 0
      let virtualCount = 0
      if (state.agents[0]) {
        let agents = Object.values(state.agents[0])
        agents.forEach(agent => {
          let { status, type } = agent
          if (status === 'building') buildingCount++
          if (status === 'idle') idleCount++
          if (type === 'physical') physicalCount++
          if (type === 'virtual') virtualCount++
        })
      }
      return {
        buildingCount,
        idleCount,
        physicalCount,
        virtualCount
      }
    }
  }
})
