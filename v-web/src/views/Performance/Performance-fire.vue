<template>
  <!-- 火电 Start -->
  <li class="current">
    <div class="field-table-switcher">
      <ol class="clearfloat">
        <router-link tag="li" to="/performance/fire/sis" active-class="current" >SIS</router-link>
        <router-link tag="li" to="/performance/fire/oos" active-class="current" >OOS</router-link>
        <router-link tag="li" to="/performance/fire/realtime" active-class="current" >实时数据库</router-link>
        <!-- <li>其他</li> -->
      </ol>
    </div>
    <div class="field-table-body">
      <ol>
        <router-view></router-view>
        <!-- sis Start -->
        <!-- sis END -->
        <!-- oos Start -->
        <!-- oos END -->
        <!-- eDOS Start -->
        <!-- eDOS END -->
        <!-- others Start -->
        <!-- <li>
                                            <div class="table-container" id="fireOthers">
                                                <div class="table-title">
                                                    <h4>生产集中监控系统应用部分其他行业业绩</h4>
                                                </div>
                                                <div class="table-content table-responsive">
                                                    <table class="table table-bordered table-hover ">
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>国电英力特能源化工集团股份有限公司</td>
                                                                <td>生产实时监控系统</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>唐山中厚板材有限公司</td>
                                                                <td>能源调度系统</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>佛山市水业集团城市污水处理厂智能化感知管控平台构建与应用</td>
                                                                <td>生产数据集中系统</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="table-title">
                                                    <h4>印步软件管控平台系统业绩应用</h4>
                                                </div>
                                                <div class="table-content table-responsive">
                                                    <table class="table table-bordered table-hover ">
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>国电崇礼和泰风能有限公司</td>
                                                                <td>单机评价管理系统</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>中国电力国际有限公司总部</td>
                                                                <td>能耗分析系统</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>华润电力控股有限公司集团总部</td>
                                                                <td>生产实时监控系统</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
        </li>-->
        <!-- others END -->
      </ol>
    </div>
  </li>
  <!-- 火电 END -->
</template>



