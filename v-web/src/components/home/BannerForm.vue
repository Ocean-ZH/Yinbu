<template>
    <div id="bannerTab">
        <ul class="nav nav-tabs nav-justified tabs-list">
            <li :class="{active:isActive==0}" v-on:click="isActive=0">关于我们</li>
			<li :class="{active:isActive==1}" v-on:click="isActive=1">产品介绍</li>
			<li :class="{active:isActive==2}" v-on:click="isActive=2">解决方案</li>
        </ul>
        <div class="tab-container">
            <div v-show="isActive==0">
                <div class="field-img">
                    <router-link to="/about">
                        <img src="@/assets/bannerForm1.jpg" alt="">
                    </router-link>
                </div>
                <div class="field-text">
                    <h4 style="color:#333; font-weight:bold;">
                        印步软件<span style="vertical-align:baseline;">&nbsp;&nbsp;YBsoftware</span>
                    </h4>
                    <p>
                        印步软件有限公司正式成立于2003年，是全球著名的大型工业企业以及公用事业领域软件开发和解决方案的提供商，十多年来一直致力于开发最好的软件，提供最优质的产品。
                        <router-link to="/about" class="label label-default">More</router-link>
                    </p>
                </div>
            </div>
            <div v-show="isActive==1">
                <div class="field-img">
                    <router-link to="/products">
                        <img src="@/assets/bannerForm2.jpg" alt="">
                    </router-link>
                </div>
                <div class="field-text">
                    <h4 style="color:#333; font-weight:bold;">
                        产品介绍<span style="vertical-align:baseline;">&nbsp;&nbsp;YBsoftware</span>
                    </h4>
                    <p>
                        eDOS实时/历史数据库是由印步公司开发的工厂实时数据集成、应用的分布式数据平台。它是专门为电力企业监控信息系统开发的，作为工厂底层控制网络和上层管理信息系统网络连接的桥梁，eDOS在工厂实时信息集成，控制优化和生产管理一体化中扮演着特殊和重要的角色...
                        <router-link to="/products" class="label label-default">More</router-link>
                    </p>
                </div>
            </div>
            <div v-show="isActive==2">
                <div class="field-img">
                    <router-link to="/solutions">
                        <img src="@/assets/bannerForm3.png" alt="">
                    </router-link>
                </div>
                <div class="field-text">
                    <h4 style="color:#333; font-weight:bold;">
                        解决方案<span style="vertical-align:baseline;">&nbsp;&nbsp;YBsoftware</span>
                    </h4>
                    <p>
                        印步软件有限公司依托自身在海量生产实时/历史数据采集、存储和展示方面的优势，通过接入风电场风机和变电站SCADA系统数据，将风电场生产实时数据完整长久保存，并通过多模式数据展示、趋势分析、统计报表、功率预测、故障预警等功能模块，实现风电场在线远程监控和数据分析，提出科学的、合理的决策方案，使企业管理层的经营决策更具科学性。
                        <router-link to="/solutions" class="label label-default">More</router-link>
                    </p>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            isActive:0,
        }
    },
    methods:{
        
    },
    mounted(){
        
    }
}
</script>

<style lang="less">
    #bannerTab{
        padding-bottom: 40px;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 1px 2px 0px rgba(0,0,0,.1);
        ul.tabs-list{
            margin-bottom: 0;
            // border-top: 1px solid #999;
            border-bottom: 2px solid #999;
            display:flex;
            flex-flow:row nowrap;
            margin-bottom: 1px;
            >li{
                border-top: 4px solid #168eea;
                flex:1 1 0;
                padding: 18px 25px;
                cursor:pointer;
                font-weight:bold;
                color:#999;
                background: #eee;
                text-align: center;
                &:hover{
                    color:#333;
                    background: #fff;
                }
                &.active{
                    background: #168eea;
                    color:#f3f3f3;
                }
                &:nth-child(2){
                    border-right: 1px solid #168eea;
                    border-left: 1px solid #168eea;
                }
            }
        }
        .tab-container{
            .field-img{
                overflow:hidden;
                width: 80%;
                height: 400px;
                text-align: center;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .field-text{
                width: 80%;
                text-align: left;
                text-indent: 2em;
                margin: 0 auto;
                h4{
                    color:#333;
                    font-weight:bold;
                    margin: 10px 0;
                    span{
                        font-size:12px;
                    }
                }
            }
        }
    }
    @media screen and (max-width:768px) {
        #bannerTab{
            ul.tabs-list{

            >li{
                padding:10px;
                font-weight:normal;
            }
        }
            .tab-container{
                .field-img{
                    overflow:hidden;
                    width: 100%;
                    height: auto;
                    text-align: center;
                    margin: 0 auto;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }
        
    }
</style>