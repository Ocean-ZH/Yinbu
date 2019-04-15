<template>
  <div class="container-fluid performance-outer">
    <div class="row">
      <div class="col col-xs-12">
        <div class="performance-head">
          <h4>
            <em>印步业绩</em>
            <span>/ Performance</span>
          </h4>
        </div>
        <!-- 
        <a
          href="performance.html"
          class="performance-content"
          style="background:#2495e4 url(images/performance-intro2.jpg) no-repeat center center; background-size:cover;"
        >-->
        <router-link
          to="/performance"
          class="performance-content"
          style="background:#2495e4 url(images/performance-intro2.jpg) no-repeat center center; background-size:cover;"
        >
          <div></div>
          <span>
            <i class="fa fa-line-chart" aria-hidden="true"></i>
          </span>
          <span>[点击查看]</span>
          <!-- </a> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.performance-outer {
  background-color: #fff;
  padding: 0; 
  .performance-head {
    margin-bottom: 20px;
    h4 {
      margin-bottom: 10px;
      font-weight: normal;
    }
    em {
      font-size: 16px;
      color: #333;
      font-style: normal;
      border-bottom: 2px solid #0b599f;
    }
    span {
      color: #999;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .performance-content {
    display: block;
    background-color: #2495e4;
    text-align: center;
    color: #fff;
    height: 160px;
    line-height: 160px;
    span {
      color: #fff;
      font-size: 1.3em;
      i.fa {
        color: #fff13a;
      }
    }
    a {
      color: #fff;
      font-size: 1.3em;
    }
  }
}
@media screen and (max-width: 768px) {
  .performance-outer {
    .performance-content {
      height: 80px;
      line-height: 80px;
    }
  }
}
</style>