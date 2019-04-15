<template>
  <div class="header-nav">
    <nav class="navbar navbar-default">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          ref = 'btnM'
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <h1>
          <a class="navbar-brand" href="/"><img class="logo_new" src="../assets/logo_new.png" alt="印步软件"></a>
        </h1>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
        <nav class="cl-effect-15" id="cl-effect-15">
          <ul>
            <li>
              <!-- :class="{active:routePath=='/'}" -->
              <i class="fa fa-home" aria-hidden="true"></i>
              <router-link to="/" exact-active-class="active" data-hover="主页" >主页</router-link>
            </li>
            <li @click="navClick">
              <i class="fa fa-cubes" aria-hidden="true"></i>
              <router-link to="/products/#home" exact-active-class="active" data-hover="产品介绍">产品介绍</router-link>
            </li>
            <li @click="navClick">
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
              <router-link to="/solutions/#home" exact-active-class="active" data-hover="解决方案">解决方案</router-link>
            </li>
            <li @click="navClick">
              <i class="fa fa-university" aria-hidden="true"></i>
              <router-link to="/about/#home" exact-active-class="active" data-hover="关于我们" >关于我们</router-link>
            </li>
            <li @click="navClick">
              <i class="fa fa-comments" aria-hidden="true"></i>
              <router-link to="/join/#home" exact-active-class="active" data-hover="加入我们">加入我们</router-link>
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <router-link to="/#contactOuter" exact-active-class="active" data-hover="联系我们" >联系我们</router-link>
            </li>
            <!-- <li class="dropdown menu__item">
              <a
                href="#"
                class="dropdown-toggle menu__link"
                data-toggle="dropdown"
                data-hover="Pages"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >Pages
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="codes.html">Short Codes</a>
                </li>
                <li>
                  <a href="icons.html">Web Icons</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html" data-hover="Contact">Contact</a>
            </li> -->
          </ul>
        </nav>
      </div>
    </nav>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      routePath:this.$route.path,
    };
  },
  computed:{
  },
  methods:{
    navClick(){
      // console.log(this.$refs.btnM);
      if(window.document.documentElement.clientWidth < 768){
        this.$refs.btnM.click();
      }
    }
  },
  created(){
    // console.log(this.$route)
  },
};
</script>

<style lang="less" scoped>
.navbar{
  border: 2px solid #0651ab;
  i.fa{
    margin-right: 5px;
    color: #1057b4;
  }
}
@media screen and (max-width:768px) {
  .navbar{
    padding: 10px;
    .logo_new{
      width: 150px;
      vertical-align: bottom;
    }
  }
  .header-nav{
    width: 100%;
  }
}
</style>