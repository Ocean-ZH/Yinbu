<template>
  <div class="container-fluid cooper-outer">
    <div class="row">
      <div class="col col-xs-12">
        <div class="cooper-head">
          <h4>
            <em>部分合作企业</em>
            <span>/ COOPERATIVE ENTERPRISES</span>
          </h4>
        </div>
        <div class="cooper-content">
          <ul class="row">
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/CRP-Logo.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>华润电力</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/ChinapowerHK-logo.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>中电国际</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/SPI.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>中电投</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/APWC-logo.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>安徽皖能</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/CJDL.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>长江电力</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/GDJT.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>国电集团</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/NFDW.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>南方电网</p>
            </li>
            <li class="col col-xs-3">
              <div
                class="cooper-title"
                style="background:#FFF url(images/SHJT.png) no-repeat center center; background-size:contain; "
              ></div>
              <p>神华集团</p>
            </li>
          </ul>
        </div>
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
.cooper-outer {
  background-color: #fff;
  padding: 0;
  .cooper-head {
    margin-bottom: 10px;
    h4 {
      margin-bottom: 10px;
      font-weight:normal;
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
      font-size:12px;
    }
  }
  .cooper-content {
    padding: 10px 0;
    width: 100%;
    >.row{
      >.col{
        padding: 0 10px;
      }
    }
    ul {
      li {
        float: left;
        margin-bottom: 10px;
        .cooper-title {
          width: 100%;
          height: 3em;
          background-size: contain;
          img {
            width: 100%;
          }
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .cooper-outer {
    .cooper-content {
      ul {
        li {
          .cooper-title {
            width: 50%;
            margin: 0 auto;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>