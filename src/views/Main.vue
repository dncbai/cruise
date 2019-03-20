<template>
  <div class="cruise-main">
    <LeftMenu></LeftMenu>
    <router-view />
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu'

export default {
  name: 'Main',
  components: {
    LeftMenu
  }
}
</script>

<style scoped>
  .cruise-main {
    width: 1200px;
    margin: 0 auto 50px auto;
    display: flex;
    display: -webkit-flex; /* Safari */
  }
</style>
