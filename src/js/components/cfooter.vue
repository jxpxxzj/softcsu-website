<template>
	<footer id="footer">
		<el-row class="footer-item" :gutter="10" v-if="this.$route.path == '/'">
			<el-col :span="8">
				<ul class="sitemap">
					<li class="sitemap-header">学院工作</li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/'}">首页</router-link></li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/list/1018'}">学院概况</router-link></li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/list/1029'}">学生工作</router-link></li>
				</ul>
			</el-col>
			<el-col :span="8">
				<ul class="sitemap">
					<li class="sitemap-header">教育培养</li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/list/1024'}">本科生教学</router-link></li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/list/1025'}">研究生教学</router-link></li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/list/1026'}">科学研究</router-link></li>
					<li class="sitemap-item">
						<router-link :to="{ path:'/list/1028'}">实践教学</router-link></li>
				</ul>
			</el-col>
			<el-col :span="8">
				<ul class="sitemap">
					<li class="sitemap-header">联系方式</li>
					<li class="sitemap-item">地址: 湖南省长沙市中南大学铁道校区</li>
					<li class="sitemap-item">邮编: 410075</li>
					<li class="sitemap-item">电话: 0731-82656877</li></ul>
			</el-col>
		</el-row>
		<el-row>
			<p class="footer-rel sitemap-item">
				<a href="http://www.csu.edu.cn">中南大学</a>&nbsp;|
				<a href="http://my.csu.edu.cn">信息门户</a>&nbsp;|
				<a href="http://mail.csu.edu.cn">邮件系统</a>&nbsp;|
				<a href="http://software.csu.edu.cn/ssip/index.html">International Student</a></p>
			<p class="footer-rel" style="color:#fff">Copyright © 2010-2016 School of Software Central South University</p></el-row>
	</footer>
</template>
<style>
    footer
    {
        background-color: #1D8CE0;
        width: 100%;
        bottom: 0px;
    }
    .footer-item
    {
        padding-top: 35px;
        padding-bottom: 15px;
        padding-left: 200px;
        padding-right: 200px;
        position: relative;
    }
    .sitemap
    {
        list-style-type: none;
        padding: 0;
        margin: 0;
        color: #fff;
    }
    .sitemap-header
    {
        font-weight: 700;
        font-size: 13px;
        font-weight: bold;
    }
    .sitemap-item
    {
        font-size: 12px;
        color: #d3dce6;
        text-decoration: none;
        transition: color 80ms linear;
        margin-top: 8px;
        margin-bottom: 4px;
    }
    .sitemap-item a
    {
        font-size: 12px;
        color: #d3dce6;
        text-decoration: none;
        transition: color 80ms linear;
    }
    .sitemap-item a:hover
    {
        color:#fff
    }
    .footer-rel
    {
        text-align: center;
        font-size: 12px;
        color: #ffffff;
    }
</style>