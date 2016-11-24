module.exports = {
  template: require('../../templates/article.html'),

  data() {
    return {
    apiUrl: "http://119.29.209.17/oaapi/Software/GetArticle",
    post: null,
    error : null,
    loading : false
    }
  },

  created () {
      this.loading=true;
      this.fetchData();
   },  
  watch:{
    '$route' : 'fetchData'
  },
  methods :{
      fetchData(){
        this.$http.jsonp(this.apiUrl, {params: { 'nid': this.$route.params.nid, 'aid': this.$route.params.aid}})
        .then((response) => {
            this.post = response.data;
            this.loading = false;
            this.error=false;
        })
        .catch(function(response)
        {
            this.error = true;
            console.log(response);
        })
      }
  }
};