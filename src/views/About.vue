<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button>测试</a-button>
    {{getNewsResponse}}
  </div>
</template>
<script>
import newsMixin from '../mixins/news-mixin'
export default {
  mixins: [newsMixin],
  data () {
    return {}
  },
  created () {
    this.NEWS_LIST()
  }
}
</script>
