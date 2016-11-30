module.exports = {
    template: require('../../templates/list.html'),
    style: require('../../css/list.css'),
    data: function(){
        return {
            navs:null,
            a_count: 0,
            articles: null,
            page: 1,
            r: this.$route.params.nid,
            a_loading:false,
            navName:''
        }
    },
    created: function()
    {  
        this.getNav();
        this.getCount();
        this.getArticle(this.page);
    },
    updated: function()
    {
        this.r = this.$route.params.nid;
    },
    watch:
    {
        r()
        {
            this.page = 1;
            this.getCount();
            this.getArticle(this.page);
            this.getNav();         
        }
    },
    methods:
    {
        getNav()
        {
            this.$http.jsonp('http://119.29.209.17/oaapi/Software/GetCurNavList', {params: { 'nid': this.$route.params.nid}})
            .then((response) => { 
                this.navs= response.data;
                this.navName = this.getName(this.$route.params.nid);
            })
            .catch(function(response)
            {
                console.log(response);
            })
        },
        getName(nid)
        {
            for(var i in this.navs)
            {
                if(this.navs[i].Key!=null)
                  if(this.navs[i].Key.toString() == nid)
                    return this.navs[i].Value; 
            }
                  
        },
        getCount()
        {
            this.$http.jsonp('http://119.29.209.17/oaapi/Software/GetArticleCount', {params: { 'nid': this.$route.params.nid}})
            .then((response) => { 
                this.a_count= response.data;
            })
            .catch((response) =>
            {
                console.log(response);
            })
        },
        getArticle(page)
        {
            this.a_loading=true;
            this.$http.jsonp('http://119.29.209.17/oaapi/Software/GetArticleList', {params: { 'nid': this.$route.params.nid,'page': page}})
            .then((response) => {
                this.articles = response.data;
                this.a_loading=false;
            })
            .catch((response) =>
            {
                console.log(response);
            })
        },
        handleCurrentChange(val)
        {
            this.getArticle(val);
            scrollTo(0,310);
        }
    }
};
