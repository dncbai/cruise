<template>
  <div>
    <div class="mask" @click="handleClose" v-show="show"></div>
  <div id="resourceDialog" class="add-resource" :style="styleObject">
    <div class="triangle">
      <div class="triangle-inner"></div>
    </div>
    <div class="info">Separate multiple resource name with commas</div>
    <div class="input-container">
      <input type="text" v-model="resource" placeholder="Ubuntu,Chrome" @focus="inputFocus">
      <div class="msg">{{msg}}</div>
      <div class="btn-wrapper">
        <button class="add-btn" @click="addResource">Add Resources</button>
        <button class="cancel-btn" id="cancelClose" @click.stop="handleClose">Cancel</button>
      </div>
    </div>
    <i class="icon-close" id="xClose" @click.stop="handleClose"></i>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ResDialog',
  props: ['position', 'show', 'id', 'resources'],
  data () {
    return {
      resource: '',
      msg: ''
    }
  },
  computed: {
    styleObject () {
      return {
        left: this.position.left - 40 - 8 + 'px', // 40 triangle left
        top: this.position.top + 17 + 5 + 'px' // 17 triangle
      }
    }
  },
  mounted () {
    console.log('position', this.position)
  },
  methods: {
    addResource (e) {
      e.preventDefault()
      if (this.resource.trim() !== '') {
        const newRes = this.resource.split(',')
        const isBrowserLegal = newRes.every((browser) => {
          browser = this.cruUtil.firstUpperCase(browser)
          return this.cruConstants.BROWSER_NAMES.includes(this.cruUtil.firstUpperCase(browser))
        })
        if (isBrowserLegal) {
          const resources = this.resources.concat(newRes)
          this.$store.dispatch('updateResourcesAsync', {
            id: this.id,
            resources: resources
          }).then(() => {
            this.$emit('onClose')
          })
        } else {
          this.msg = this.cruConstants.ERROR_MSG_BROWSER_NAME
        }
      }
    },
    handleClose (e) {
      e.preventDefault()
      e.stopPropagation()
      let dialog = document.getElementById('resourceDialog')
      if (dialog) {
        if (!dialog.contains(e.target)) {
          this.$emit('onClose')
        } else if (e.target.matches('#xClose') || e.target.matches('#cancelClose')) {
          this.$emit('onClose')
        }
      }
    },
    inputFocus () {
      this.msg = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .mask {
    background: transparent;
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .add-resource {
    position: absolute;
    width: 570px;
    background-color: #fff;
    text-align: left;
    padding: 20px 10px;
    box-shadow: 0 3px 5px  #000;
    z-index: 300;
    border: 1px solid $blue;

    .info {
      color: #ccc;
      width: 100%;
    }

    .input-container {
      padding-top: 13px;
      padding-right: 10px;

      input {
        display: block;
        width: 100%;
        outline: 0;
        height: 22px;
        border: 1px solid #ccc;
        border-radius: 1px;
        background-color: #fff;
        padding: 5px;
      }

      input::-webkit-input-placeholder {
        color: $blue;
        font-size: 12px;
        text-align: left;
      }

      input:focus::-webkit-input-placeholder{
        color:transparent;
      }
    }

    .btn-wrapper {
      margin-top: 10px;
      button {
        border-width: 0px;
        border-style: none;
        cursor: pointer;
      }

      .add-btn {
        width: 120px;
        color: #fff;
        height: 30px;
        background-color: $blue;
      }

      .cancel-btn {
        width: 100px;
        height: 30px;
        margin-left: 20px;
        color: #fff;
        background-color: #435466;
      }
    }

    .icon-close {
      font-size: 18px;
      color: $blue;
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 10px;
    }

    .msg {
      display: inline-block;
      color: red;
      font-size: 12px;
      margin-top: 10px;
    }

    .triangle {
      margin: 0px;
      border-width: 18px 8px;
      border-style: solid;
      border-color: transparent transparent $blue;
      padding: 0px;
      width: 0px;
      height: 0px;
      left: 40px;
      top: -36px;
      position: absolute;

      .triangle-inner {
        margin: 0px;
        border-width: 17px 7px;
        border-style: solid;
        border-color: transparent transparent #fff;
        padding: 0px;
        width: 0px;
        height: 0px;
        position: absolute;
        left: -7px;
        top: -16px;
      }
    }
  }
</style>
