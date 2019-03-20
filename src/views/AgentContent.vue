<template>
  <div class="cruise-agent-content">
    <AgentItem v-for = "agent in getAgents"
               :name = "agent.name"
               :os = "agent.os"
               :status = "agent.status"
               :ip = "agent.ip"
               :location = "agent.location"
               :resources = "agent.resources"
               :id = "agent.id"
               :key="agent.id"
    ></AgentItem>
  </div>
</template>

<script>
import AgentItem from './AgentItem'
import { mapActions } from 'vuex'

export default {
  name: 'AgentView',
  components: {
    AgentItem
  },
  computed: {
    getAgents () {
      return this.$store.state.isFilterd ? this.$store.state.filterdAgents : this.$store.state.agents[0]
    }
  },
  methods: {
    ...mapActions(['addResourcesAsync'])
  },
  mounted () {
    this.$store.dispatch('getAgentsAsync')
  }
}
</script>

<style scoped>

</style>
