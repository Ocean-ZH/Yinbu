<template>
  <div id="app">
    <HeaderNav v-if="this.$route.path!='/'" />
    <router-view ref="main" />
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderNav from './views/Header'
import Footer from './views/Footer.vue'

export default {
  data(){
    return {

    }
  },
  components:{
    HeaderNav,
    Footer,
  },
  updated(){
    // console.log(this.$route)
    // console.log(this.$refs)
    this.fillHeight()
  },
  methods:{
    fillHeight(){
      //补足高度
      this.$refs.main.$el.style['min-height']='';
      var winH = window.document.documentElement.clientHeight;
      var bodyH = window.document.body.clientHeight;
      if(bodyH < winH){
        var el = this.$refs.main.$el;
        var mH = el.clientHeight;
        el.style['min-height'] = (mH + winH - bodyH) +'px';

      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family:'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,'Noto Sans CJK SC','WenQuanYi Micro Hei',Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
ul,ol,li,{
  list-style: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
