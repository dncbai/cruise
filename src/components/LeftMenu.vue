<template>
  <div class="cruise-left-menu">
      <router-link tag="li" :to="{name: 'dashboard'}" class="left-menu-item" active-class="active-menu" exact>
        <a><i class="icon-dashboard"></i><span>DASHBOARD</span></a>
      </router-link>
      <router-link tag="li" :to="{name: 'agent'}" class="left-menu-item" active-class="active-menu" exact>
        <a><i class="icon-sitemap"></i><span>AGENT</span></a>
      </router-link>
      <router-link tag="li" :to="{name: 'myCruise'}" class="left-menu-item" active-class="active-menu" exact>
        <a><i class="icon-boat"></i><span>MY CRUISE</span></a>
      </router-link>
      <router-link tag="li" :to="{name: 'help'}" class="left-menu-item" active-class="active-menu" exact>
        <a><i class="icon-life-bouy"></i><span>HELP</span></a>
      </router-link>
    <div class="left-history">
      <h2>History</h2>
      <ul class="history-list">
        <li>bjstdmngbgr02/Acceptance_test</li>
        <li>bjstdmngbgr03/Acceptance_test</li>
        <li>bjstdmngbgr04/Acceptance_testfdfjeafjopejfpeojfpejfpejf</li>
        <li>bjstdmngbgr05/Acceptance_test</li>
        <li>bjstdmngbgr06/Acceptance_test</li>
        <li>bjstdmngbgr07/Acceptance_test</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu'
}
</script>

<style scoped lang="scss">
  .cruise-left-menu {
    width: 300px;
    background-color: #2D4054;

    .active-menu {
      color: $blue;
      background-color: #435466;

      a {
        color: $blue;
      }
    }
  }

  .left-menu-item{
    height: 45px;
    line-height: 45px;
    padding: 10px 0 10px 36px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;

    &:hover {
      a {
        color: $blue;
      }
    }

    span {
      margin-left: 15px;
    }

    a {
      color: #fff;
    }
  }

  .left-history {
    font-size: 24px;
    color: #ccc;
    padding: 170px 0 20px 10px;

    .history-list {
      padding: 20px 0 0 16px;
      font-size: 12px;

      li {
        padding: 5px 57px 5px 0;
        list-style: disc;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        color:#999;
        cursor: pointer;

        &:hover {
          color: $blue;
        }
      }
    }
  }

</style>
