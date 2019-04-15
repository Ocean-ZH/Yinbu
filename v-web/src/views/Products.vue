<template>
  <div class="main-page container">
    <div class="row">
      <div class="col-sm-12 headBanner">
        <img src="images/headBanner1.jpg" alt>
      </div>
    </div>
    <div class="container-fluid products-outer">
      <div class="products-title">产品中心</div>
      <div class="row">
        <div class="col col-xs-6">
          <router-link to="/product-detail/edos">
            <div class="products-img">
              <img src="images/OPEN-A-BETTER.jpg" alt>
            </div>
            <div class="products-text">
              <h4>eDos实时数据库</h4>
              <p>eDOS（Enterprise Distributed Object System）</p>
            </div>
          </router-link>
        </div>
        <div class="col col-xs-6">
          <router-link to="/product-detail/sis">
            <div class="products-img">
              <img src="images/pro002.png" alt>
            </div>
            <div class="products-text">
              <h4>SIS 厂级监控系统</h4>
              <p>印步软件有限公司开发的火电厂SIS系统软件</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col col-xs-6">
          <router-link to="/product-detail/oos">
            <div class="products-img">
              <img src="images/pro003.png" alt>
            </div>
            <div class="products-text">
              <h4>操作寻优系统</h4>
              <p>操作寻优系统（Operator Optimizing System）</p>
            </div>
          </router-link>
        </div>
        <div class="col col-xs-6">
          <router-link to="/product-detail/pct">
            <div class="products-img">
              <img src="images/pro004.png" alt>
            </div>
            <div class="products-text">
              <h4>PCT系统</h4>
              <p>PCT(Plant Computed Tomography)</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col col-xs-6">
          <router-link to="/product-detail/mobile">
            <div class="products-img">
              <img src="images/pro005.png" alt>
            </div>
            <div class="products-text">
              <h4>移动应用平台</h4>
              <p>本系统具有移动智能手机平台，用户可在手机3G/4G/wifi模式下登陆系统网站</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.headBanner {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
}

.table-switch-outer {
  padding: 0;
  border-top: 2px solid #eaeaea;
  border-bottom: 2px solid #eaeaea;
  .table-switch-title {
    background: #eee;
    border-bottom: 1px solid #ccc;
    ul {
      display: flex;
      display: -webkit-flex; /* Safari */
      flex-direction: row;
      flex-wrap: nowrap;
      flex-flow: row nowrap;
      justify-content: center;
      margin-bottom: 0;
      li {
        /* flex-grow:1;
                flex-shrink:1;
                flex-basis:auto; */
        flex: 1;
        text-align: center;
        color: #333;
        padding: 5px 0;
        line-height: 32px;
        cursor: pointer;
        border-right: 1px solid #ccc;
        i.fa {
          margin-right: 4px;
        }
      }
      li.current {
        color: #fff;
        font-weight: bold;
        /* border-bottom: 2px solid #004398; */
        background-color: rgb(40, 126, 200);
        i.fa {
          color: #fff;
        }
      }
      li:last-child {
        border-right: none;
      }
    }
  }
}

.products-outer {
  padding: 10px 0;
  > .row {
    padding: 0 5px;
    margin: 0;
    margin-bottom: 10px;
    > .col {
      padding: 5px;
    }
  }
  .products-title {
    font-size: 18px;
    font-weight: bold;
    color: #004398;
    margin-bottom: 10px;
  }
  .products-img {
    width: 100%;
    height: 100px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10px;
    img {
      width: 100%;
      
    }
  }
  .products-text {
    line-height: 1em;
    height: 5em;
    background-color: #fff;
    padding: 0 5px 5px;
    overflow: hidden;
    h4 {
      padding: 0;
      margin: 0;
      font-size: 14px;
      color: #333;
      margin-bottom: 5px;
    }
    p {
      color: #666;
      font-size: 12px;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
}

@media screen and (min-width: 768px) {
  .headBanner {
    width: 100%;
    overflow: hidden;
    height: 200px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .products-outer{
    .products-img {
      height: 200px;
    }
  }
}
</style>