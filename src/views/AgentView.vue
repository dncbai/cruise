<template>
      <div class="cruise-right-container">
        <StatisticsView></StatisticsView>
        <ActionBar></ActionBar>
        <AgentView></AgentView>
      </div>
</template>

<script>
import StatisticsView from './StatisticsView'
import ActionBar from '@/components/ActionBar'
import AgentView from './AgentContent'

export default {
  name: 'ContentView',
  components: {
    StatisticsView,
    ActionBar,
    AgentView
  }
}
</script>

<style scoped lang="scss">
  .cruise-right-container {
    width: auto;
    padding: 15px 0 0 25px;
  }

</style>
