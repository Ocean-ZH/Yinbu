<template>
  <div class="main-page">
    <div class="headBanner">
      <img src="images/aboutUS.png" tag="about" >
    </div>
    <div class="container-fluid product-outer">
      <div class="product-title">关于我们</div>
      <div class="product-content">
        <h4>印步软件</h4>
        <p>印步软件有限公司正式成立于2003年，是全球著名的大型工业企业以及公用事业领域软件开发和解决方案的提供商，十多年来一直致力于开发最好的软件，提供最优质的产品。</p>
        <hr>
        <img src="/images/abouthuawei-01.png" >
        <span>
          <p>公司经过十多年的发展，印步软件的产品及服务涵盖了电力、化工、水务、燃气、煤炭等能源领域，一直为包括财富100强企业的许多公司提供高技术的软件及解决方案。</p>
          <p>作为公司的旗舰产品实时/历史流程数据库——eDOS，eDOS数据库具有世界上先进的全息无损压缩技术，领先时代的面向服务的完全分布式体系结构，是一套企业实时数据的管理软件，通过采集、存储、分析海量的数据，来监控各种设备以及经营系统，从而为提高生产力和生产效率提供最优的决策支持。技术上的领先和开创性使得越来越多的公司和行业采用eDOS系统。</p>
          <p>在eDOS数据库基础上，公司提供了多个行业生产流程监控及管理的整体解决方案。</p>
          <p>公司奉行忠诚，勤奋，平等，向上的宗旨，给客户以精品和满意，给员工以机会和发展。</p>
        </span>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>

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
}


.product-outer {
  padding: 10px 0;
  max-width: 1140px;
  > .row {
    padding: 0 5px;
    margin: 0;
    margin-bottom: 10px;
    > .col {
      padding: 5px;
    }
  }
  .product-title {
    font-size: 18px;
    font-weight: bold;
    color: #004398;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  .product-content {
    background-color: #fafafa;
    padding: 10px 20px;
    /deep/ h4 {
      padding: 0;
      margin: 0;
      font-size: 1.5em;
      color: #333;
      margin-bottom: 5px;
      text-align: center;
    }
    /deep/ p {
      color: #333;
      font-size: 1.2em;
      line-height: 1.35em;
      text-overflow: ellipsis;
      word-break: break-all;
      text-indent: 1em;
    }
    img{
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .headBanner {
    width: 100%;
    overflow: hidden;
    height: 300px;
    margin: 0 auto;
    background: transparent;
    text-align: center;
    position:absolute;
    left: 0;
    top: 160px;;
    img {
      width: 80%;
      max-width:1140px;
      height: auto;
    }
    img[tag=about]{
      margin-top:-80px;
    }
  }
  .product-outer {
    margin-top: 220px;
    .product-content{
      img{
        width: 350px;
        vertical-align: top;
      }
      span{
        margin-left: 20px;
        display:inline-block;
        width:calc(100% - 380px);
        p{
          line-height: 2em;
        }
      }
    }
  }
}
</style>
