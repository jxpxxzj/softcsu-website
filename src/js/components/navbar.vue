<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="nav-container" v-on:mouseenter="togglePopup()" v-on:mouseleave="toggleTout()">
					<div class="nav-body">
						<div class="nav-col">
							<div class="logo-container">
								<router-link :to="{ path:'/'}" class="logo-main" style="width:100px"></router-link>
							</div>
							<div class="nav-group">
								<el-breadcrumb separator=">">
									<el-breadcrumb-item :to="{ path: '/' }" v-if="nav.Parent.Value != null">{{nav.Parent.Value}}</el-breadcrumb-item>
									<el-breadcrumb-item>{{nav.Value}}</el-breadcrumb-item>
								</el-breadcrumb>
							</div>
						</div>
					</div>
				</div>	
			</el-col>
			<transition name="slide">
				<div class="nav-popup-container" v-show="popupshow" >
					<div class="nav-popup-box" v-on:mouseover="toggleIn(true)" v-on:mouseleave="toggleIn(false)">
						<div class="nav-popup-main">
							<div class="nav-popup-menu" v-for="item in navTree.Child">
								<span class="nav-popup-menu-bar nav-popup-menu-bar-double" v-show="nav.Parent.Value == item.Value"></span>
								<span class="nav-popup-menu-head">{{item.Value}}</span>
								<div class="nav-popup-submenu-container">
									<div v-if="item.Child != null">
										<div v-for="item2 in item.Child">
											<router-link v-if="item2.Key!=null" :to="{ path: '/list/' + item2.Key}" class="nav-popup-submenu-link">{{item2.Value}}</router-link>
										</div>
									</div>
								</div>
							</div>
						<span class="nav-popup-bar"></span>
					</div>
				</div>
			</transition>
		</el-row>
	</div>
</template>
<script>
module.exports={ 
	data: function(){
		return {
			popupshow : false,
			mousein : false,
			nav:{
				
			},
			navloaded:false,
			navTree:null,
			apiUrl: "http://119.29.209.17/oaapi/Software/GetNav",
			r:this.$route.path,
			notFoundMode: this.$route.name == "notFound"
		}
	},
	created:function()
	{
		this.get_nav();				
		this.update_nav();		
	},
	updated: function()
	{
		this.r=this.$route.path;
		this.notFoundMode = this.$route.name == "notFound";
	},
	watch:
	{
		r : function()
		{
			this.update_nav();
		}
	},
 	methods:	
    {
		get_nav: function()
		{
			this.$http.jsonp("http://119.29.209.17/oaapi/Software/GetNavTree")
			.then(function(response) {
				this.navTree = response.data;
			})
			.catch(function(response)
			{
				console.log(response);
			})
		},
		update_nav: function()
		{
			if(this.notFoundMode)
			{
				this.nav = {
					Parent:{
						Value:"404"
					},
					Value:"Not Found"
				}
				return;
			}
			this.$http.jsonp(this.apiUrl, {params: { 'nid': this.$route.params.nid}})
			.then(function(response){
				this.nav = response.data;
				this.navloaded=true;
			})
			.catch(function(response)
			{
				console.log(response);
			})
		},
        item_click: function(command){
            if(command == undefined) 
                return;
            else
                this.$router.push("/list/" + command);
        },
		togglePopup: function(){		
			this.popupshow = true;
		},
		toggleTout: function(){
			if(!this.mousein)
				setTimeout(function() { this.popupshow = false; },200);
		},
		toggleIn: function(val){
			this.mousein = val;
			if(!val)
				this.popupshow = false;
		},
    }
  }
</script>
<style>
a
{
    text-decoration: none;
    color:#000;
}
.nav-container
{
    width: 100%;
    height: 90px;
    overflow: hidden;
    background-color: #1d8ce0;
}
.nav-body
{
    margin: auto;
    width: 100%;
    padding: 20px 20px 0;
}
.nav-col
{
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    display: flex;
}
.nav-group
{
    padding: 35px 10px;
    flex: 1 0 auto;
    align-items: flex-end;
    color: #fff !important;
    font-weight: 300 !important;
    height:70px;
}
.el-dropdown
{
    color:#fff !important;
    position: relative;
    bottom:0;
    font-size: 20px !important;
    margin-right: 10px;
}
.el-breadcrumb__item__inner, .el-breadcrumb__item__inner a
{
	color: #fff !important;
    font-weight: 300;
	font-size:20px;
}
.el-breadcrumb__separator {
    margin: 0 8px;
    color: #c0ccda;
	font-size: 18px;
}
/* Nav Popup Box */
.nav-popup-container
{
	z-index: 20 !important;
	width:100%;
	margin-top: 90px;
	display: flex;
	position: absolute;
}
.nav-popup-box
{
	position: absolute;
	overflow: hidden;
	width: 100%;
	background-color:#d3dce6;
	height: 200px;
}
.nav-popup-main
{
	padding-left: 115px;
	width:100%;
}
.nav-popup-bar
{
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	display: block;
	background-color: #1d8ce0;
	height: 3px;
}

.nav-popup-menu
{
	display:inline-block;
	margin-top: 6px;;
	vertical-align:top;
}
.nav-popup-menu-head
{
	color: #000;
    display: flex;
    padding: 5px 15px 10px;
    flex: none;
	text-align: center;
}
.nav-popup-menu-bar
{
	display: block;
    width: 100%;
    background-color: #1d8ce0;
}
.nav-popup-menu-bar-double
{
	height: 6px;
	margin-top: -6px;
}
.nav-popup-submenu-container
{
	margin-top: 0;
	width: 90px;
    display: block;
    margin-left: 15px;
}
.nav-popup-submenu-link
{
	color: #475669 !important;
    font-size: 14px;
    margin: 4px 0;
    display: flex;
	transition: color 80ms linear;
}
.nav-popup-submenu-link:hover
{
	color:#1d8ce0 !important;
}
.slide-enter-active {
  animation: bounce-in .12s;
}
.slide-leave-active {
  animation: bounce-out .12s;
}
@keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}
</style>