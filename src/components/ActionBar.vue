<template>
  <div class="cruise-actionbar">
    <div class="actionbar-nav">
      <span class="nav-item" :class="{ active: activeType === 'all' }" @click="filterAgents('all')">All</span>
      <span class="nav-item" :class="{ active: activeType === 'physical' }" @click="filterAgents('physical')">Physical</span>
      <span class="nav-item" :class="{ active: activeType === 'virtual' }" @click="filterAgents('virtual')">Virtual</span>
    </div>
    <div class="actionbar-search">
      <input class="search-box" type="text" autocomplete="off" @focus="searchInputFocus" @blur="searchInputBlur">
      <i class="icon-search" v-show="showSearchIcon"></i>
    </div>
    <div class="actionbar-view-toggle">
      <i class="icon-th-card"></i>
      <i class="icon-th-list active"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionBar',
  data () {
    return {
      activeType: 'all',
      showSearchIcon: true
    }
  },
  methods: {
    filterAgents (type) {
      switch (type) {
        case 'physical':
          this.activeType = 'physical'
          break
        case 'virtual':
          this.activeType = 'virtual'
          break
        default:
          this.activeType = 'all'
      }
      this.$store.commit('filterAgents', type)
    },
    searchInputFocus () {
      this.showSearchIcon = false
    },
    searchInputBlur () {
      this.showSearchIcon = true
    }
  }
}
</script>

<style scoped lang="scss">
  .cruise-actionbar {
    height: 50px;
    line-height: 50px;
    background-color: $white;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    .actionbar-nav {
      font-size: 12px;
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-right: 25px;

      .nav-item {
        display: inline-block;
        text-align: center;
        cursor: pointer;
        flex: 1;
        border-right: 1px solid #F3F3F3;
      }

      .active {
        border-bottom: 3px solid $blue;
        color: $blue;
      }
    }

    .actionbar-search {
      display: inline-block;
      position: relative;
      flex: 1;
      margin-right: 25px;

      .search-box {
        outline: 0;
        width: 250px;
        height: 20px;
        border:1px solid #EFEFEF;
        border-radius: 1px;
        background-color: #EFEFEF;
        position: absolute;
        top: 9px;
        padding: 5px;
      }

      .icon-search {
        position: absolute;
        top: 28%;
        left: 10px;
        font-size: 20px;
        color: #ccc;
      }
    }

    .actionbar-view-toggle {
      display: inline-block;
      position: relative;
      flex: 1;

      i {
        font-size: 20px;
      }

      .icon-th-card {
        position: absolute;
        right: 60px;
        top: 16px;
        cursor: pointer;
      }

      .icon-th-list {
        position: absolute;
        right: 20px;
        top: 16px;
        cursor: pointer;
      }
    }

    .active {
      color: $blue;
    }
  }
</style>
