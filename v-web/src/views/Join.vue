<template>
  <div class="main-page">
    <div class="headBanner">
      <img src="images/join.jpg" tag="join" alt>
    </div>
    <div class="container-fluid product-outer">
      <div class="product-title">招聘信息</div>
      <div class="product-content">
        <!-- <h4>印步软件</h4> -->
        <ul>
          <li>
            <h2 id="5">
              <i class="fa fa-desktop" aria-hidden="true"></i> 软件开发工程师
            </h2>
            <p>
              岗位要求：
              <br>1&nbsp;&nbsp;计算机相关专业专科以上学历，有志于在IT行业发展
              <br>2&nbsp;&nbsp;深刻理解C#语言，有C/S、B/S项目开发经验，有扎实的代码功底和良好的编码习惯
              <br>3&nbsp;&nbsp;爱岗敬业，具有良好的团队协作精神与沟通协调能力。&nbsp;头脑灵活，自学能力强
              <br>4&nbsp;&nbsp;公司提供良好的培训及发展空间，让每位员工能发挥所长
              <br>5&nbsp;&nbsp;可接受应届毕业生
              <br>
              <br>员工福利：
              <br>1&nbsp;&nbsp;公司实行五天八小时工作制&nbsp;
              <br>2&nbsp;&nbsp;公司员工享有法定节假日及带薪年假&nbsp;
              <br>3&nbsp;&nbsp;公司为每位员工缴纳社会保险，再额外购买一份意外商业保险&nbsp;
              <br>4&nbsp;&nbsp;公司定期组织集体户外活动&nbsp;
              <br>5&nbsp;&nbsp;公司据经营情况发放年终奖
              <br>6&nbsp;&nbsp;工作满一年者每年享受国内公费旅游一次
            </p>
          </li>
          <li>
            <h2 id="ju1">
              <i class="fa fa-wrench" aria-hidden="true"></i> 软件项目实施工程师
            </h2>
            <p>
              1、22-35岁之间，大专及以上学历，国家英语四级以上，计算机相关专业；&nbsp;&nbsp;
              <br>2、精通WINDOWS各个版本的操作系统，对Windows服务器操作系统有丰富的使用和维护经验；&nbsp;
              <br>3、熟悉Windows&nbsp;群集或同类软件的配置和维护；&nbsp;
              <br>4、熟悉Windows系统各类软件的使用，特别是系统管理方面的软件；&nbsp;
              <br>5、熟悉Unix操作系统（如Sun&nbsp;Solaris，Hp&nbsp;Unix），对Linux和&nbsp;Unix系统应用及管理有较丰富经验的优先；&nbsp;
              <br>6、熟悉IP网络技术，可熟练配置常见交换机（CISCO系列等）、防火墙等网络设备；有企业网管理、实施经验者优先；&nbsp;
              <br>7、具有实时数据库项目或电力系统项目经验，熟悉电力行业用户需求者优先考虑；&nbsp;
              <br>8、工作认真细致，具有较强的自我求知欲和分析思考能力，善于与客户沟通，能适应出差，接收新知识的能力强；&nbsp;
              <br>9．有电力、石油、化工、冶金、电信行业经验者优先。
            </p>
          </li>
          <li>
            <h2 id="ju2">
              <i class="fa fa-yelp" aria-hidden="true"></i> 网页、美工设计
            </h2>
            <p>
              1、专科以上学历，相关工作经验两年以上，英语四级以上，良好的表达能力；&nbsp;
              <br>2、精通常用的设计软件（Photoshop、CorelDRAW、Flash、Dreamweaver），熟悉SVG,Inkscape等优先；&nbsp;
              <br>3、精通Html\Javascript\CSS\Asp等网页编写语言，熟悉Jquery,Bootstrap等常用框架，有相关项目经验的优先；&nbsp;
              <br>4、能独立完成美工设计和网页制作的全部工作，具备独立的出色创意；
              <br>5、工作踏实，敬业，做事仔细，主动性强，具有良好的沟通、协调及组织能力和良好的团队合作精神。
              <br>
            </p>
          </li>
          <li>
            <h2 id="ju3">
              <i class="fa fa-edge" aria-hidden="true"></i> 网络工程师
            </h2>
            <p>
              1、22-35岁之间，本科以上学历，计算机相关专业；&nbsp;&nbsp;
              <br>2、熟悉微软服务器操作系统（能熟练配置域服务器、WEB、DNS、DHCP服务器等）；&nbsp;
              <br>3、有微软系统认证、CISCO网络认证等；熟悉一般硬件墙命令及安全策略；&nbsp;&nbsp;
              <br>4、熟悉软件企业信息化管理、实施、推广等相关工作流程并具备实际经验；&nbsp;&nbsp;
              <br>5、熟悉Unix系统，能独立配置相关服务，有系统集成项目经验者优先；&nbsp;&nbsp;
              <br>6、做事认真、规范，责任心强，为人正直，严格自律，乐于沟通。
            </p>
          </li>
          <li>
            <h2 id="ju4">
              <i class="fa fa-bolt" aria-hidden="true"></i> 电力工程师
            </h2>
            <p>
              1．本科学历，电力、发电及相关专业；&nbsp;&nbsp;
              <br>2．熟悉性能计算和操作指导，熟悉电网运行与管理；&nbsp;
              <br>3．有电力、石油、化工、冶金、电信行业经验者优先。
            </p>
          </li>
        </ul>

        <p>
          <br>
        </p>
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
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
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
  }
  .product-title::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right: 0px dashed transparent;
    border-left: 12px solid #004398;
    margin-right: 5px;
    margin-left: 10px;
  }
  .product-content {
    background-color: #fff;
    padding: 10px;
    h2 {
      padding: 0;
      margin: 0;
      font-size: 1.3em;
      color: #333;
      margin-bottom: 5px;
      text-align: left;
      background-color: #ecf8ff;
      padding: 5px 0;
      i.fa {
        color: #3c8ff9;
      }
    }
    p {
      color: #666;
      font-size: 1.2em;
      line-height: 1.35em;
      text-overflow: ellipsis;
      word-break: break-all;
      text-indent: 1em;
      padding: 5px 10px;
    }
    li {
      border-top: 2px solid #5cd1ff;
    }
  }
}
@media screen and (min-width: 768px) {
    .headBanner {
        width: 100%;
        overflow: hidden;
        height: 200px;
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
        img[tag=join]{
            margin-top:-180px;
        }
    }
    .product-outer {
        margin-top: 120px;
        padding: 0 40px;
    }
}
</style>