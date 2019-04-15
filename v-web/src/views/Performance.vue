<template>
  <div class="main-page">
    <div class="headBanner">
      <img src="images/performance-banner2.jpg" alt>
    </div>
    <div class="container-fluid performance-outer">
      <div class="performance-title">印步业绩</div>
      <div class="performance-body">
        <div class="performance-switcher">
          <ul>
            <router-link tag="li" active-class="current" to="/performance/fire">
              <i class="fa fa-fire" aria-hidden="true"></i>火电
            </router-link>
            <router-link tag="li" active-class="current" to="/performance/wind">
              <i class="icon iconfont icon-wind"></i>风电
            </router-link>
            <router-link tag="li" active-class="current" to="/performance/hydro">
              <i class="fa fa-tint" aria-hidden="true"></i>水电
            </router-link>
            <router-link tag="li" active-class="current" to="/performance/grid">
              <i class="fa fa-bolt" aria-hidden="true"></i>电网
            </router-link>
          </ul>
        </div>
        <div class="performance-field-outer">
          <ul>
            <router-view ></router-view>
            <!-- 火电 Start -->
            <!-- 火电 END -->
            <!-- 风电 Start -->
            <!-- 风电 END -->
            <!-- 水电 Start -->
            <!-- 水电 END -->
            <!-- 电网 Start -->
            <!-- 电网 END -->
          </ul>
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
*{
    color:#333;
}
.headBanner {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

.main-page {
  width: 100%;
  overflow: hidden;
  left: 0;
  margin: 0;
  *{
      font-size:12px;
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

.performance-outer {
  padding: 10px 0;
  .performance-title {
    font-size: 18px;
    font-weight: bold;
    color: #004398;
    margin-bottom: 10px;
    border-bottom: 1px solid #004398;
  }
  .performance-body {
    background-color: #fff;
    padding: 0;
    .performance-switcher {
      background: #eee;
      /* border-bottom: 1px solid #ccc; */
      box-shadow: 0px -1px 1px 1px rgba(0, 0, 0, 0.35) inset;
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
          font-size: 1.2em;
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
    .performance-field-outer {
      > ul /deep/  {
        > li {
          display: none;
        }
        > li.current {
          display: block;
        }
      }
      /deep/  .field-table-switcher {
        background-color: rgb(40, 126, 200);
        width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        > ol {
          display: table-row;
          padding-left: 0;
          > li {
            /* float: left; */
            display: table-cell;
            cursor: pointer;
            font-size: 1.2em;
            line-height: 2.5em;
            color: #fff;
            padding: 0 1.5em;
            word-spacing: normal;
            word-break: normal;
            white-space: nowrap;
            border-right: 1px solid rgba(0, 0, 0, 0.25);
          }
          > li.current {
            font-weight: bold;
            color: #ffef1c;
            background: rgba(0, 0, 0, 0.25);
            border-radius: 3em;
          }
        }
      }

      /deep/ .field-table-body {
        padding: 5px;
        > ol {
            padding-left: 0;
          > li {
            display: none;
          }
          > li.current {
            display: block;
          }
        }
      }
      /deep/ .table-title {
          hr{
              margin: 10px 0;
          }
        h4{
            line-height: 2em;
        }
        h4::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 10px;
          background-color: #287ec8;
          margin-right: 5px;
          vertical-align: middle;
        }
        h5{
            font-size:16px;
            line-height: 2em;
        }
      }
      /deep/ .table-content{
          .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td{
              color:#333
          }
      }
    }
  }
}
@media screen and (min-width:768px) {
  .performance-outer{
    max-width:1140px;
    margin:0 auto;
  }
    
}
</style>
