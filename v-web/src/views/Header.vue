<template>
    <!--Header-->
	<div class="header inn-banner" id="home">
		<!--top-bar-w3-agile-->
		<div class="top-bar-w3-agile">
			<div class="container">
				<!-- <div class="header-top-agileits">
					<div class="agile_forms">
						<p><span class="fa fa-map-marker" aria-hidden="true"></span>23046 Three Notch Road California</p>
					</div>
					<ul class="top-right-info-w3ls">
						<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>

					</ul>
					<div class="clearfix"></div>
				</div> -->
				<div class="topbox"></div>
				<Navbar />
			</div>
		</div>
		<!--//top-bar-w3-agile-->
	</div>
	<!--//Header-->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name:'headerNav',
    data(){
        return {
            
        }
	},
	computed: {
		
	},
	components:{
		Navbar,
	}
}
</script>

<style lang="less" scoped>
.topbox{
	height:64px;
}
@media screen and (max-width: 736px){
	.topbox{
		height:20px;
	}
	.inn-banner{
		min-height: 100px;
	}
}
</style>