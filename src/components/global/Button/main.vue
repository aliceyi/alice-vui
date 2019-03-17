<template>
  <div :class="boxClass">
      <button :class="setClass">
          <slot></slot>
      </button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'aButton',
  props: {
    boxClass: String
  },
  data () {
    return {

    }
  },
  computed: {
    setClass () {
      return 'btn-fixed'
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
.btn-fixed {
    position :fixed;
    bottom :0;
    z-index :4;
}
</style>
