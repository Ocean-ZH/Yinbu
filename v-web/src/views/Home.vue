<template>
  <div id="home">
    <!--Header-->
    <div class="header" id="home">
      <!--top-bar-w3-agile-->
      <div class="top-bar-w3-agile">
        <div class="container">
          <div style="height:64px;"></div>
          <Navbar/>
        </div>
      </div>
      <!--//top-bar-w3-agile-->
      <!--Slider-->
      <div class="slider">
        <div class="callbacks_container">
          <ul class="rslides" id="slider">
            <li>
              <div class="slider-img-w3layouts one">
                <div class="container">
                  <div class="slider-info">
                    <h3>
                      <img src="../assets/logo_new.png" alt>
                    </h3>
                    <p>实时数据库领航者</p>
                    <div class="readmore-w3-agileits">
                      <!-- <a href="#" data-toggle="modal" data-target="#myModal1">Know More</a> -->
                      <router-link to="/about">Know More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slider-img-w3layouts two">
                <div class="container">
                  <div class="slider-info">
                    <h3>eDOS 实时历史数据库</h3>
                    <p>对象化结构 分布式设计 数据无损压缩</p>
                    <div class="readmore-w3-agileits">
                      <!-- <a href="#" data-toggle="modal" data-target="#myModal1">Know More</a> -->
                      <router-link to="/products">Know More</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="slider-img-w3layouts three">
                <div class="container">
                  <div class="slider-info">
                    <h3>VISUALIZE</h3>
                    <p>可视化技术 / 数据一目了然</p>
                    <div class="readmore-w3-agileits">
                      <!-- <a href="#" data-toggle="modal" data-target="#myModal1">Know More</a> -->
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="modal fade" id="myModal1" tabindex="-1" role="dialog">
        <!-- Modal1 -->
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4>Gallivant</h4>
              <img src="images/bann2.jpg" alt=" " class="img-responsive">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- //Modal1 -->
      <!--//Slider-->
    </div>
    <!--//Header-->
     <!-- <plainPageLists initWords="hello" initHeight="100vh" /> -->
		<!--banner form-->
			<BannerForm />
		<!--//banner form-->
    <News />
    <div class="cp-outer container-fluid">
      <div class="row">
        <div class="col col-sm-8">
          <Coop />
        </div>
        <div class="col col-sm-4">
          <Performance />
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import $ from "jquery";
import "@/../public/js/responsiveslides.min.js";
import BannerForm from '@/components/home/BannerForm.vue'
import News from '@/components/home/News.vue'
import Coop from '@/components/home/Coop.vue'
import Performance from '@/components/home/Performance.vue'
import Contact from '@/components/home/Contact.vue'

export default {
  name: "home",
  components: {
    // HelloWorld,
    Navbar,
    BannerForm,
    News,
    Coop,
    Performance,
    Contact,
  },
  created() {
    // console.log($)
    $(function() {
      $("#slider").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 1000,
        namespace: "callbacks",
        before: function() {
          $(".events").append("<li>before event fired.</li>");
        },
        after: function() {
          $(".events").append("<li>after event fired.</li>");
        }
			});
    });
  }
};
</script>

<style lang="less" scoped>
.slider-img-w3layouts {
  background-position: center center;
}
.cp-outer{
  padding-top: 20px;
  padding: 20px;
}


@media screen and (max-width:768px) {
  .cp-outer{
    padding: 10px 0;
    >.row{
      .col{
        padding: 0;
      }
    }
  }
}
</style>

