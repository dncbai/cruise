<template>
  <div class="cruise-statistics">
    <div class="cruise-statistics-building">
      <span class="icon-cog statistics-icon"></span>
      <span class="statistics-text">Building</span>
      <span class="statistics-number">{{AgentStatisticsCount.buildingCount}}</span>
    </div>
    <div class="cruise-statistics-idle">
      <span class="icon-coffee statistics-icon"></span>
      <span class="statistics-text">Idle</span>
      <span class="statistics-number">{{AgentStatisticsCount.idleCount}}</span>
    </div>
    <div class="cruise-statistics-count">
      <div class="statistics-count-item">
        <div class="count-item-text">ALL</div>
        <div class="count-item-number">{{agentCount}}</div>
      </div>
      <div class="statistics-count-item">
        <div class="count-item-text">PHYSICAL</div>
        <div class="count-item-number">{{AgentStatisticsCount.physicalCount}}</div>
      </div>
      <div class="statistics-count-item">
        <div class="count-item-text">VIRTUAL</div>
        <div class="count-item-number">{{AgentStatisticsCount.virtualCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'StatisticsView',
  computed: {
    ...mapState({
      agentCount: state => {
        return state.agentCount
      }
    }),
    ...mapGetters(['AgentStatisticsCount'])
  }
}
</script>

<style scoped lang="scss">
  @keyframes rotate1 {
    from { z-index: 2; }
    to {
      z-index: 2;
      -webkit-transform: rotateZ(360deg);
    }
  }

  @-webkit-keyframes rotate1 /* Safari 与 Chrome */
  {
    from { z-index: 2; }
    to {
      z-index: 2;
      -webkit-transform: rotateZ(360deg);
    }
  }

  .cruise-statistics {
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
    height: 150px;

    .statistics-icon {
      color: #fff;
      font-size: 144px;
      opacity: 0.2;
    }

    .cruise-statistics-building {
      background-color: #FF9A2A;
      display: inline-block;
      margin-right: 25px;
      height: inherit;
      flex: 1;
      position: relative;
      color: #fff;

      .icon-cog {
        position: absolute;
        left: 25%;
      }

      &:hover {
        animation:rotate1 2s;
        -webkit-animation:rotate1 2s; /* Safari 和 Chrome */
      }
    }

    .statistics-text {
      font: 18px bold;
      position: absolute;
      top: 15px;
      left: 10px;
    }

    .statistics-number {
      font-size: 48px;
      position: absolute;
      right: 20px;
      bottom: 10px;
    }

    .cruise-statistics-idle {
      background-color: #7FBC39;
      display: inline-block;
      margin-right: 25px;
      height: inherit;
      flex: 1;
      position: relative;
      color: #fff;

      .icon-coffee {
        position: absolute;
        left: 25%;
      }

      &:hover {
        animation:rotate1 2s;
        -webkit-animation:rotate1 2s; /* Safari 和 Chrome */
      }
    }

    .cruise-statistics-count {
      flex: 1;
      background-color: #fff;
      height: inherit;
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;
      align-content: center;

      .statistics-count-item {
        display: flex;
        display: -webkit-flex; /* Safari */
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
      }

      .count-item-text {
        font-size: 12px;
        padding: 20px;
      }

      .count-item-number {
        font-size: 20px;
        padding: 20px;
      }
    }
  }
</style>
