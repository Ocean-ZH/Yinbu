<template>
  <div class="main-page">
    <div class="headBanner">
      <img :src="this.headImg[this.$route.params.id]" :tag="this.$route.params.id" >
    </div>
    <div class="container-fluid product-outer">
      <div class="product-title">产品介绍</div>
      <div class="product-content">
        <!-- {{this.$route.params.id}} -->
        <div v-html="contentView"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentView: "1",
      headImg:{
        edos:'/images/headBanner2.jpg',
        sis:'/images/pro002.png',
        oos:'/images/pro003.png',
        pct:'/images/pro004.png',
        mobile:'/images/pro005.png',
      },
      content: {
        edos: `<h4>eDOS数据库介绍</h4>
            <p>eDOS实时/历史数据库是由珠海印步软件有限公司开发的集成实时数据并应用的分布式数据平台。它最早是专门为电力、石油和化工等企业监控信息系统开发的，近年来不仅在中国的电力、化工、制造业系统得到广泛的应用，并且国外（如委内瑞拉、泰国、越南等国）的电厂企业也已采用eDOS作为电厂实时/历史数据库的平台。</p>
            <p>eDOS（Enterprise Distributed Object System）数据库是印步软件的第三代实时/历史数据库产品， Enterprise企业级、Distributed分布式、Object面向对象体现了eDOS数据库的三大特性，为用户提供过程数据提供高效、可靠的采集、存储和查询服务。</p>
            <p>作为工厂底层控制网络和上层管理信息系统网络连接的桥梁，eDOS在工厂实时信息集成，控制优化和生产管理一体化中扮演着特殊和重要的角色。</p>
            <p>eDOS的设计原理</p>
            <p>
            
            <span class="Apple-tab-span" style="white-space:pre"></span>完全的分布式设计
            </p>
            <p>eDOS系统的每个组件都具有在一个独立服务器上运行的能力，也可以将所有的服务配置在一台服务器上运行。可以实现多服务器群体的强大处理能力。</p>
            <p>
            
            <span class="Apple-tab-span" style="white-space:pre"></span>网络资源优化设计
            </p>
            <p>客户端与服务器之间采用报文协议进行数据请求和响应，使服务对客户的请求利用率最高，同时数据以压缩方式进行传输，保证大量用户的同时访问数据的快速性，降低了网络的通讯负荷率，从而降低了对带宽的要求。</p>
            <p>
            
            <span class="Apple-tab-span" style="white-space:pre"></span>数据无损压缩和高效保存
            </p>
            <p>完全忠实于原始数据，采用无损失的压缩技术存储实时信息，检索到的数据和保存时的数据完全一致，同时保证高度的压缩比（30:1）。</p>
            <p>
            
            <span class="Apple-tab-span" style="white-space:pre"></span>满足不同的数据需求
            </p>
            <p>eDOS采集全厂所有的实时数据，并将这些数据传递给不同需求的用户。这些数据类型可以是数值型，也可以是字符串型。通过统一的数据源，运行人员通过流程画面，趋势，报表等掌握过程当前和历史的信息；工程师可以调用所有的实时/历史数据，进行分析和计算；管理层通过对关键参数和事件的报表，进行科学的决策。总之你想得到的实时信息，eDOS都能快速地得到。</p>
            <p>
            
            <span class="Apple-tab-span" style="white-space:pre"></span>对象化的结构
            </p>
            <p>eDOS数据库采用面向对象存储，数据在数据库中不在单独只能根据标签名查询，还可以通过面向对象化的方法进行查询。存储在数据库中的数据，除了具有值、时间、状态、单位、描述等基本标签外，还具有实例名称、实例属性、属性描述的标签。例如用户需要获取某一台凝汽器的相关数据，只需要根据凝汽器的实例名称即可查询到其相关的温度、压力等参数值，对数据查询和二次开发带来极大便捷，方便深入的数据建模分析。</p>
            <p>
            
            <span class="Apple-tab-span" style="white-space:pre"></span>数据与状态的有效集成
            </p>
            <p>实时数据和状态集成在一起进行保存，使数据处理的效率大大提高。</p>
            <p>
            <br>
            </p>`,
        sis: `<h4>厂级/集团级监控系统</h4>
          <p style="text-indent:0">
              印步软件有限公司开发的火电厂SIS系统软件是基于印步实时数据库的在线监测集成系统，集生产实时监测、生产数据统计与分析、机组性能计算与参数优化等功能于一体。
          </p>
          <p style="text-indent:32px">
              系统通过各种常见和特殊定制的通讯协议的接口来完成对主机DCS、辅机DCS、PLC及关口表等仪表装置的数据的采集，并以国际领先和业内独有的数据库技术作为整个数据中心；在此基础上，针对各个电厂的现状，提供各种应用软件来作为数据展示平台，以满足电厂对于在线监测及生产管理的要求，确保机组安全、高效运行。
          </p>
          <p style="text-indent:32px">
              SIS处于DCS网络与办公网络之间，通过各个分布式部署的接口程序将DCS与各个辅网系统等各个接口的数据统一接入SIS。在SIS中有相应的应用展示软件，通过一个个子模块的方式展示不同的功能。并为更高一层的办公层提供生产数据。各个网络层之间是通过单向物理隔离装置进行分割又能做到数据在允许的方向上流动。<br> 
              主要功能及特点:
              <br> 
              &nbsp;&nbsp;&nbsp;1. &nbsp;采集所有控制系统的实时数据,建立长期存储实时历史数据库，为上层应用提供可靠的数据依据。
          </p>
          <p>
              <span style="color:#666666">2</span><span style="color:#666666">．系统的各项功能均以实时数据库为中心,并留有一定的接口,允许其他服务器和数据库的接入,并能实现无缝连接。</span>
          </p>
          <p>
              <span style="color:#666666">3</span><span style="color:#666666">．</span><span style="color:#666666">实现全厂生产过程画面的远程监视，做到不用出门就可以了解现场设备运行情况；</span>
          </p>
          <p>
              <span style="color:#666666">4</span><span style="color:#666666">．</span><span style="color:#666666">采用千兆以太网作为信息传递和数据传输的媒体，并采用了合适的网络配置和完善的自我诊断功能,具有高度的可靠性,系统内任一部件发生故障均不会影响整个系统的正常运行。</span>
          </p>
          <p>
              <span style="color:#666666">5</span><span style="color:#666666">．采用了符合电力行业要求并且合理的安全措施,保证了网络系统各区域的安全。</span>
          </p>
          <p style="text-indent:32px">
              <span style="font-size:16px;line-height:150%;font-family:宋体;color:#666666">&nbsp;</span>
          </p>
          <p>
              <br>
          </p>`,
        oos: `<h4>操作寻优系统</h4>
          <p>
              操作寻优系统（Operator Optimizing System）是指在一组约束条件下,根据系统的一系列参数,使给定的指标达到最优值（极大或极小值）的方法。它广泛应用于系统的分析、综合与设计中。在实际的生产活动中，操作寻优系统可以帮助企业降低损耗，提升产能，创造更多的利润。
          </p>
          <p>
              <br>
          </p>`,
        pct: `<h4>PCT系统</h4>
          <p>
                PCT(Plant Computed Tomography)系统通过使用人工智能、模式识别和先进的数据挖掘技术，形成一系列的“运行框架”，然后PCT 系统将设备的实时运行数据与这些“运行框架”进行对比，由此来监测系统运行状况中的一些细微变化，而这些变化很可能就是设备运转不佳的预警信息，因此就能及早地识别出设备在何时运行状况不佳，及早地发现设备问题。
          </p>
          <p>
              <br>
          </p>`,
        mobile: `<h4>移动应用平台</h4>
          <p>
                本系统具有移动智能手机平台。通过上述平台，用户可在手机3G/4G/wifi模式下登陆系统网站，经过简单设置即可实现实时监视DCS等系统运行状态，实现移动生产监视功能。将监控系统中的重要画面重新绘制成支持多种移动平台的SVG画面，画面为矢量图，可自由放大。画面中的数据点为系统中生成实时数据，数据准确。
          </p>
          <p>
              <br>
          </p>`,
      }
    };
  },
  created() {
    // console.log(this.$route)
    let routeId = this.$route.params.id;
    this.contentView = this.content[routeId];
  }
};
</script>

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
      max-width: 1140px;;
      height: auto;
    }
    img[tag=edos]{
      margin-top:-100px;
    }
  }
  .product-outer {
    margin-top: 220px;
    .products-img {
      height: 200px;
    }
  }
}
</style>
