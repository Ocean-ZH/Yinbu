<template>
  <div class="main-page container">
    <div class="row">
      <div class="col-sm-12 headBanner">
        <img src="images/headBanner2.jpg" class="hidden-sm hidden-md hidden-lg" alt>
        <img src="images/headBanner1.jpg" class="hidden-xs" alt>
      </div>
    </div>
    <div class="container-fluid products-outer">
      <div class="products-title">解决方案</div>
      <div class="row">
        <div class="col col-sm-6">
          <router-link to="/solution-detail/wind">
            <div class="products-img">
              <img src="images/solution001.jpg" alt>
            </div>
            <div class="products-text">
              <h4>印步软件风电行业解决方案</h4>
              <p>印步软件有限公司依托自身在海量生产实时/历史数据采集、存储和展示方面的优势，通过接入风电场风机和变电站SCADA系统数据，将风电场生产实时数据完整长久保存...</p>
            </div>
          </router-link>
        </div>
        <div class="col col-sm-6">
          <router-link to="/solution-detail/fire">
            <div class="products-img">
              <img src="images/solution002.jpg" alt>
            </div>
            <div class="products-text">
              <h4>印步软件火电行业解决方案</h4>
              <p>印步软件有限公司开发的火电厂SIS系统软件是基于印步实时数据库的在线监测集成系统，集生产实时监测、生产数据统计与分析、机组性能计算与参数优化等功能于一体...</p>
            </div>
          </router-link>
        </div>
        <div class="col col-sm-6">
          <router-link to="/solution-detail/hydro">
            <div class="products-img">
              <img src="images/solution003.jpg" alt>
            </div>
            <div class="products-text">
              <h4>印步软件水电行业解决方案</h4>
              <p>印步软件有限公司水电行业解决方案已经在葛洲坝、三峡、二滩、溪洛渡等大型水电站得到应用，对水电站运行监控、数据分析和设备预警起到了重要作用...</p>
            </div>
          </router-link>
        </div>
        <div class="col col-sm-6">
          <router-link to="/solution-detail/group">
            <div class="products-img">
              <img src="images/solution004.jpg" alt>
            </div>
            <div class="products-text">
              <h4>印步软件集团解决方案</h4>
              <p>对于能源行业而言，生产管理的实时性强是其最突出的特点之一，管理人员必须时刻关注各个节点的实时运行情况，确保系统整体运行的安全高效...</p>
            </div>
          </router-link>
        </div>
        <div class="col col-sm-6">
          <router-link to="/solution-detail/photovoltaic">
            <div class="products-img">
              <img src="images/solution005.jpg" alt>
            </div>
            <div class="products-text">
              <h4>印步软件光伏行业解决方案</h4>
              <p>印步电站监控系统集监控、智能告警、数据分析、自动报表统计为一体，可实时监测环境监测仪、汇流箱、逆变器和电能计量表等关键设备的运行状态...</p>
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
  },
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
    img[tag=h2]{
      margin-top:-100px;
    }
  }
  .products-outer {
    .products-img {
      height: 200px;
    }
  }
}
</style>