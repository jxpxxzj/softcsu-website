<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{title}}</span>
            <el-switch v-model="showsummary" style="float:right" on-text="摘要" off-text="正文" on-color="#20a0ff" off-color="#20a0ff"> </el-switch>
        </div>
        <div class="card-container">
            <div v-if="previmg != ''">
                <el-row :gutter="20">
                    <el-col :span="4">
                        <img class="card-img" :src="previmg">
                    </el-col>
                    <el-col :span="20">
                        <div v-if="!showsummary">
                            {{prevtext}}
                        </div>
                        <div v-else>
                            <div class="card-content" v-if="summary!=''">{{summary}}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div v-else>
                <el-row>
                    <el-col :span="24">
                        <div v-if="!showsummary">
                            {{prevtext}}
                        </div>
                        <div v-else>
                            <div class="card-content" v-if="summary!=''">{{summary}}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-row>
                <el-col></el-col>
            </el-row>
        </div>
        <div class="card-bottom">
            <time class="card-time">{{ date }}</time>
            <div class="card-tag" v-if="keywords!=''">
                <el-tag type="primary" v-for="t in keywords.split(',')" style="margin-left:5px;margin-right:5px;">{{t}}</el-tag>
            </div>
            <el-button type="text" class="card-button" @click="full">查看全文</el-button>
        </div>
    </el-card>
</template>
<script>
module.exports = {
    props:['title','date','aid','nid','previmg','keywords','summary','prevtext'],
    
    data: function(){
		return {
			showsummary:false,
            tags: null
		}
	},
    methods:
    {
        full:function()
        {
            this.$router.push("/article/" + this.nid + '/' + this.aid);
        }
    }
};
</script>
<style>
.el-card
{
    margin-bottom: 10px;
}
.card-container
{
    display: block;
}
.card-content
{
    height: 100%;
}
.card-bottom 
{
    margin-top: 13px;
    line-height: 12px;
    padding-bottom: 5px;
}
.card-tag
{
    display: inline-block;
}
.card-time 
{
    font-size: 13px;
    color: #999;
}
.card-button 
{
    padding: 0;
    float: right;
}
.card-img
{
    width:100%;
}
</style>