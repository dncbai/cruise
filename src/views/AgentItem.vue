<template>
  <div class="cruise-agent-item">
    <div class="agent-item-left">
      <img :src="getPicUrl"  alt="browser logo">
    </div>
    <div class="agent-item-right">
      <div class="agent-item-right-top">
                <span>
                    <i class="icon-desktop"></i>
                    <span class="agent-name">{{name}}</span>
                </span>
        <span class="badges" :class="idBuilding ? 'building-background' : 'idle-background'">{{status}}</span>
        <div class="ip-folder">
        <span class="agent-ip">
                    <i class="icon-info"></i>
                    <span class="ip-address">{{ip}}</span>
                </span>
        <span class="agent-folder">
                    <i class="icon-folder"></i>
                    <span class="folder-path">{{location}}</span>
                </span>
        </div>
      </div>
      <div class="agent-item-right-bottom">
        <div class="add-browser-wrapper">
        <span class="add-browser" @click="popupDialog"><i class="icon-plus"></i></span>
          <AddResourceDialog
            v-if="dialogVisible"
            :position="dialogPosition"
            :show="true"
            :id = "id"
            :resources = "resources"
            @onClose="closeDialog">
          </AddResourceDialog>
        </div>
           <span class="browser"
                 v-for="resource in resources"
                 :key="resource">
                        <span class="browser-item" @click="handleDelete(resource)">
                            <span>{{resource}}</span>
                            <i class="icon-trash"></i>
                        </span>
           </span>
        <span class="agent-deny" v-if="idBuilding">
                    <i class="icon-deny"></i>
                    Deny
                </span>
      </div>
    </div>
  </div>
</template>

<script>
import AddResourceDialog from '@/components/AddResourceDialog'

export default {
  name: 'AgentItem',
  data () {
    return {
      dialogVisible: false,
      dialogPosition: {
        left: 0,
        top: 0
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    os: {
      type: String,
      default: 'windows'
    },
    status: {
      type: String,
      required: true
    },
    ip: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    id: {
      required: true
    },
    resources: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    idBuilding () {
      return this.status === 'building' ? 1 : 0
    },
    getPicUrl () {
      let url = this.cruUtil.getRandomPic()
      if (!url) {
        url = require('../assets/os-icons/windows.png')
      }
      return url
    }
  },
  components: {
    AddResourceDialog
  },
  methods: {
    handleDelete (resource) {
      let resources = this.resources.slice()
      resources.splice(resources.findIndex(item => item === resource), 1)
      console.log('resources', resources)
      this.$store.dispatch('updateResourcesAsync', {
        id: this.id,
        resources: resources
      })
    },
    popupDialog (e) {
      console.log('e', e)
      this.dialogPosition = {
        left: 14,
        top: 27
      }
      this.dialogVisible = true
    },
    closeDialog (e) {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
  .cruise-agent-item {
    background-color: #fff;
    padding: 10px;
    height: 100px;
    margin-top: 15px;

    i {
      font-size: 16px;
    }

    .agent-item-left {
      height: 100%;
      float: left;
      padding: 10px;

      img {
        width: 80px;
        height: 80px;
      }
    }
  }

  .agent-item-right {
    display: flex;
    display: -webkit-flex; /* Safari */
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  .agent-item-right-top {
    padding: 10px;

    i {
      vertical-align: middle;
    }

    .agent-name {
      margin-left: 5px;
      color: $blue;
    }

    .badges {
      font-size: 14px;
      padding: 2px 10px;
      color: #fff;
      margin-left: 10px;
    }

    .building-background {
      background-color: #7FBC39;
    }

    .idle-background {
      background-color: #FF9A2A;
    }
  }

  .agent-item-right-bottom {
    padding: 10px 9px 0 10px;
  }

  .add-browser-wrapper {
    display: inline-block;
    position: relative;

    .add-browser {
      background-color: $blue;
      padding: 5px 8px;
      display: inline-block;
      cursor: pointer;

      i {
        color: #fff;
        font-size: 18px;
        vertical-align: middle;
      }
    }
  }

  .browser {
    width: 80%;

    .browser-item {
      background-color: #EFEFEF;
      padding: 5px 10px;
      margin-left: 5px;

      i {
        vertical-align: middle;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }

  .agent-deny {
    float: right;
    height: 30px;
    background-color: $blue;
    color: #fff;
    padding: 0px 20px;
    line-height: 30px;
    cursor: pointer;

    i {
      color: #fff;
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  .ip-folder {
    margin-left: 120px;
    display: inline-block;
    float: right;

    .agent-ip {
      margin-right: 10px;

      .ip-address {
        margin-left: 5px;
      }
    }

    .agent-folder {
      margin-left: 20px;

      .folder-path {
        margin-left: 5px;
      }
    }
  }
</style>
