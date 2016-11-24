<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="nav-container" v-on:mouseenter="togglePopup(true)" v-on:mouseleave="togglePopup(false)">
					<div class="nav-body">
						<div class="nav-col">
							<div class="logo-container">
								<router-link :to="{ path:'/'}" class="logo-main" style="width:100px"></router-link>
							</div>
							<!--<div class="nav-group">
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">学院概况</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1021">学院介绍</el-dropdown-item>
										<a href="#">
											<el-dropdown-item>学院领导</el-dropdown-item></a>
										<el-dropdown-item command="1058">组织机构</el-dropdown-item>
										<el-dropdown-item command="1059">教师信息</el-dropdown-item>
										<el-dropdown-item command="1060">校企合作</el-dropdown-item>
										<a href="#">
											<el-dropdown-item>院长寄语</el-dropdown-item></a>
									</el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">本科生教学</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1037">通知公告</el-dropdown-item>
										<el-dropdown-item command="1038">专业介绍</el-dropdown-item>
										<el-dropdown-item command="1039">培养方案</el-dropdown-item>
										<el-dropdown-item command="1040">教学研究成果</el-dropdown-item></el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">研究生教学</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1041">通知公告</el-dropdown-item>
										<el-dropdown-item command="1042">专业介绍</el-dropdown-item>
										<el-dropdown-item command="1043">培养方案</el-dropdown-item>
										<el-dropdown-item command="1045">招生章程</el-dropdown-item>
										<el-dropdown-item command="1046">导师信息</el-dropdown-item>
										<el-dropdown-item command="1081">下载专区</el-dropdown-item>
										<a href="http://ssgrad.csu.edu.cn/">
											<el-dropdown-item>研究生网站</el-dropdown-item></a>
									</el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">科学研究</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1047">通知公告</el-dropdown-item>
										<el-dropdown-item command="1092">科研成果</el-dropdown-item>
										<el-dropdown-item command="1093">政策文件</el-dropdown-item>
										<el-dropdown-item command="1094">下载专栏</el-dropdown-item></el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">实践教学</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1048">实习基地</el-dropdown-item>
										<el-dropdown-item command="1049">实训管理</el-dropdown-item>
										<el-dropdown-item command="1082">开放实验</el-dropdown-item>
										<el-dropdown-item command="1083">实验安排</el-dropdown-item>
										<el-dropdown-item command="1084">实验室管理</el-dropdown-item></el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">学生工作</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1050">党建工作</el-dropdown-item>
										<el-dropdown-item command="1051">学工办</el-dropdown-item>
										<el-dropdown-item command="1052">研工办</el-dropdown-item>
										<el-dropdown-item command="1054">本科生机构</el-dropdown-item>
										<el-dropdown-item command="1121">研究生机构</el-dropdown-item></el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">国际教育</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1085">About Us</el-dropdown-item>
										<el-dropdown-item command="1086">Programs</el-dropdown-item>
										<el-dropdown-item command="1087">Apply Now</el-dropdown-item></el-dropdown-menu>
								</el-dropdown>
								<el-dropdown menu-align="start" @command="item_click">
									<span class="el-dropdown-link">信息服务</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item command="1055">规章制度</el-dropdown-item>
										<el-dropdown-item command="1051">相关下载</el-dropdown-item></el-dropdown-menu>
								</el-dropdown>
							</div>!-->
						</div>
					</div>
				</div>
			</el-col>
				<div class="nav-popup-container" v-show="popupshow" @mouseover="toggleFixed(true)" @mouseout="toggleFixed(false)">
					<div class="nav-popup-box">
						<div class="nav-popup-main">
							Content
						</div>
						<span class="nav-popup-bar"></span>
					</div>
				</div>
		</el-row>
	</div>
</template>
<script>
module.exports={ 
	data(){
		return {
			popupshow : false,
			fixed: false
		}
	},
 methods:
    {
        item_click : function(command){
            if(command == undefined) 
                return;
            else
                this.$router.push("/list/" + command);
        },
		togglePopup(val) {
			console.log(this.fixed);
			if(!this.fixed)
				this.popupshow = val;
		},
		toggleFixed(val) {
			console.log("toggle");
			this.fixed = val;
		}

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
    color: #fff;
    font-weight: 300;
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

/* Nav Popup Box */
.nav-popup-container
{
	z-index: 20 !important;
	width:100%;
	margin-top: 85px;
}
.nav-popup-box
{
	position: absolute;
	overflow: hidden;
	width: 100%;
	pointer-events: none;
	background-color:#d3dce6;
	height: 170px;
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

.nav-popup-expand-transition
{
	transition: all .12s ease;

}
</style>