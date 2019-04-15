<template>
  <div class="container-fluid contact-outer" id="contactOuter">
    <div class="row">
      <div class="col col-xs-12">
        <div class="contact-head">
          <h4>
            <em>联系我们</em>
            <span>/ Contact US</span>
          </h4>
        </div>
        <div class="contact-content">
          <div class="col col-sm-6 col-xs-12 owl-container">
            <!-- <ul class="row" id="pwContact">
                    <li class="col col-md-3">
                    <div class="contact-title">北京总部</div>
                    <p>地址：北京市朝阳区朝外大街乙12号昆泰国际2210</p>
                    <p>010-58797795 / 15811047470(王女士)</p>
                    <p>传真：010-58692836</p>
                    </li>
                    <li class="col col-md-3">
                    <div class="contact-title">珠海(亚太技术支持中心)</div>
                    <p>地址：珠海唐家湾大学路101号清华科技园创业大楼A座8楼</p>
                    <p>联系电话：0756-3612618,18666108087(钱先生)</p>
                    <p>传真：0756-3612619</p>
                    </li>
                    <li class="col col-md-3">
                    <div class="contact-title">西安分公司</div>
                    <p>地址：陕西省西安市高新区高新一路7号高新枫尚B座1806号</p>
                    <p>联系电话：13308220197,15091155578(张先生)</p>
                    <p>传真：029-62634622</p>
                    </li>
                    <li class="col col-md-3">
                    <div class="contact-title">武汉分公司</div>
                    <p>地址：湖北省武汉市洪山区团结大道金地广场2栋1301室（地铁4号线仁和路出口处）</p>
                    <p>联系电话：027-87373043,18611160627</p>
                    <p>传真：027-87373043</p>
                    </li>
            </ul>-->
            <div id="owl-demo" class="owl-carousel owl-theme owl-loaded">
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item">
                    <div class="contact-title">
                      <img src="../../assets/zhuhai1.jpg" alt="">
                      <h4>北京总部</h4> 
                    </div>
                    <div class="contact-text">
                      <p>地址：北京市朝阳区朝外大街乙12号昆泰国际2210</p>
                      <p>联系电话：010-58797795 / 15811047470(王女士)</p>
                      <p>传真：010-58692836</p>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="contact-title">
                      <img src="../../assets/zhuhai1.jpg" alt="">
                      <h4>珠海(亚太技术支持中心)</h4> 
                    </div>
                    <div class="contact-text">
                      <p>地址：珠海唐家湾大学路101号清华科技园创业大楼A座8楼</p>
                      <p>联系电话：0756-3612618,18666108087(钱先生)</p>
                      <p>传真：0756-3612619</p>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="contact-title">
                      <img src="../../assets/zhuhai1.jpg" alt="">
                      <h4>西安分公司</h4> 
                    </div>
                    <div class="contact-text">
                      <p>地址：陕西省西安市高新区高新一路7号高新枫尚B座1806号</p>
                      <p>联系电话：13308220197,15091155578(张先生)</p>
                      <p>传真：029-62634622</p>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="contact-title">
                      <img src="../../assets/zhuhai1.jpg" alt="">
                      <h4>武汉分公司</h4> 
                    </div>
                    <div class="contact-text">
                      <p>地址：湖北省武汉市洪山区团结大道金地广场2栋1301室（地铁4号线仁和路出口处）</p>
                      <p>联系电话：027-87373043,18611160627</p>
                      <p>传真：027-87373043</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-controls clickable">
                <div class="owl-pagination">
                  <div class="owl-page" v-for="(val,key) in this.contactPageNav" :key="key" >
                    <span @click="toOwl(key)">{{ val }}</span>
                  </div>
                  <!-- <div class="owl-page">
                    <span class></span>
                  </div> -->
                </div>
              </div>
            </div>
            <!-- <button @click="toOwl(4)">To 0!</button> -->
          </div>
          <div class="col col-sm-6 col-xs-12">
            <div class="contact-map">
              <img src="images/china_map.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

export default {
  name: "news",
  data() {
    return {
      contactPageNav:['北京','珠海','西安','武汉',],
    };
  },
  methods: {
    toOwl(n) {
      // eslint-disable-next-line
      $("#owl-demo").trigger("to.owl.carousel",[n,300]);
    }
  },
  mounted() {
    // eslint-disable-next-line
    $("#owl-demo").owlCarousel({
      items: 1,
      loop: true,
      // lazyLoad: true,
      autoPlay: true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
    });
    // eslint-disable-next-line
    $("#owl-demo").trigger("play.owl.autoplay",[5000,500]);
    /* $("#owl-demo").on('changed.owl.carousel',function(event){
      // console.log(event)
    }) */
  }
};
</script>

<style lang="less" scoped>
.contact-outer {
  background-color: #fff;
  .contact-head {
    em {
      font-size: 16px;
      color: #333;
      font-style: normal;
      border-bottom: 2px solid #0b599f;
    }
    span {
      color: #999;
    }
  }
  .contact-content {
    padding: 10px 0;
    .contact-title{
      text-align: left;
      padding: 10px;
      img{
        width: 100%;
        margin-bottom: 10px;
        display:none;
      }
    }
    .contact-text{
      text-align: left;
      p{
        padding: 5px;
      }
    }
    ul {
      position: relative;
      width: 100%;
      // height:110px;
      overflow: hidden;
      li {
        // position:absolute;
        .contact-title {
          font-size: 14px;
          color: #333;
          font-weight: bold;
        }
        p {
          text-align: left;
          margin-bottom: 0;
        }
      }
    }
    .contact-map {
      img {
        width: 100%;
      }
    }
  }
  
}
.owl-container {
  padding: 20px;
  background-color: #2495e4;
}
.owl-controls{
  margin-top: 0;
  .owl-pagination{
    .owl-page{
      span{
        opacity:1;
        width: 40px;
        height:auto;
        background: rgba(0,0,0,.1);
        color:#fff;
        border-radius: initial;
        margin: 5px;
        padding-right: 3px;
      }
    }
  }
}
.contact-title{
  color:#fff;
}
.contact-text{
  color:#fff;
  p{
    color:#FFF;
  }
}
@media screen and (min-width: 768px) {
  .owl-container {
    padding: 2em 4em;
    background-color: #2495e4;
  }
  .contact-outer {
    .contact-content {
      .contact-title{
        img{
          display:block;
        }
      }
      ul {
        li {
          .contact-title {
            margin: 0 auto;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>