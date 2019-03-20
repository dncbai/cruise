<template>
  <header class="cruise-header">
    <div class="cruise-hearder-content">
      <img class="cruise-logo" src="../assets/logo/logo.svg">
      <span class="cruise-avatar-container">
        <img class="cruise-avatar" src="../assets/logo/avatar.jpg">
    <i class="cruise-icon-down" :class="showDropdown ? 'icon-angle-up': 'icon-angle-down' " @click="dropDownToggle"></i>
    </span>
      <div class="avatar-dropdown" v-show="showDropdown">
        <ul>
          <li><i class="icon-id-card"></i>Profile</li>
          <li><i class="icon-sign-in"></i>Sign Out</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CruiseHeader',
  data () {
    return {
      showDropdown: false
    }
  },
  methods: {
    dropDownToggle () {
      this.showDropdown = !this.showDropdown
    }
  }
}
</script>

<style scoped lang="scss">
  .cruise-header {
    width: 100%;
    height: $header-height;
    padding: 15px;
    text-align: center;
    background-color: #fff;
  }

  .cruise-hearder-content {
    width: 1200px;
    margin: 0 auto;
    position: relative;

    .cruise-logo {
      height: 30px;
    }

    .cruise-avatar-container {
      float: right;
      margin-right: 40px;

      .cruise-avatar {
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
      }

      .cruise-icon-down {
        position: relative;
        top: -14px;
        cursor: pointer;
      }
    }

    .avatar-dropdown {
      background: #fff;
      z-index: 10;
      border: 1px solid #d1d1d1;
      padding: 8px 0;
      text-align: left;
      position: absolute;
      width: 120px;
      height: 48px;
      top: 48px;
      right: 30px;
      box-shadow: 0 2px 2px #EFEFEF;

      i {
        margin-right: 10px;
      }

      li {
        height: 20px;
        line-height: 20px;
        padding: 2px 13px;
        cursor: pointer;

        &:hover {
          background-color: #EFEFEF;
        }
      }
    }
  }
</style>
