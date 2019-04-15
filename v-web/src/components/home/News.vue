<template>
  <div class="container-fluid news-outer">
    <div class="row">
      <div class="col">
        <div class="news-head">
            最新动态
          <!-- <a href="javasacript:void(null)">MORE</a> -->
          <span>NEWS CENTER</span>
        </div>
        <div class="news-content">
          <ul>
            <li class="clearfloat">
              <div class="row">
                <div class="col col-xs-12 col-sm-3">
                  <div class="news-time">
                    <em>02月</em>
                    <span>2019</span>
                  </div>
                  <div class="news-title">参加工业互联网峰会</div>
                </div>
                <div class="col col-xs-12 col-sm-3">
                  <div class="news-time">
                    <em>12月</em>
                    <span>2018</span>
                  </div>
                  <div class="news-title">长江电力葛洲坝数据整合平台上线</div>
                </div>
                <div class="col col-xs-12 col-sm-3">
                  <div class="news-time">
                    <em>07月</em>
                    <span>2018</span>
                  </div>
                  <div class="news-title">建设中电国际大数据中心</div>
                </div>
                <div class="col col-xs-12 col-sm-3">
                  <div class="news-time">
                    <em>05月</em>
                    <span>2018</span>
                  </div>
                  <div class="news-title">与中电国际签订数据库软件及服务采购框架协议</div>
                </div>
              </div>
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
.news-outer{
    padding: 10px;
    background-color: #2495e4;
    >.row{
        margin: 0;
    }
    .news-head{
        text-align: left;
        padding: 10px 30px;
        color:#FFF;
        border-bottom: 1px solid #87e9ff;
        span{
            display:block;
            color:#FFF;
        }
        a{
            float: right;
            color:#FFF;
            vertical-align: middle;
            font-size:14px;
            border: 1px solid #fff;
            padding: 3px 5px;
        }
    }
    .news-content{
        ul{
            li{
                padding: 5px 0;
                text-align: left;
                >.row{
                    >.col{
                        margin: 10px 0;
                    }
                }
                .news-time{
                    text-align: left;
                    color:#FFF;
                    background-color: #147ac1;
                    text-align: center;
                    padding: 3px 5px;
                    width: 50px;
                    display:inline-block;
                    em{
                        color:#FFF;
                        font-weight:bold;
                        font-size:16px;
                        display:block;
                        font-style:normal;
                    }
                    span{
                        color:#FFF;
                        font-size:14px;
                    }
                }
                .news-title{
                    width: calc(100% - 50px);
                    display: inline-block;
                    text-align: left;
                    color:#FFF;
                    padding-left: 10px;
                    vertical-align: top;
                }
            }
        }
    }
}
@media screen and (min-width:768px) {
    .news-outer{
        .news-content{
            .row{
                margin: 0;
                display:flex;
                flex-flow: row wrap;
                >.col{
                    flex:1 1 0;
                }
            }
        }
    }
}
</style>