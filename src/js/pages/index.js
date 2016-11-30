module.exports = {
  template: require('../../templates/index.html'),
  style: require('../../css/index.css'),
  data() {
        return {
          active_col1: '1072',
          active_col2: '1074',

          data_col1:null,
          data_col2:null,

          loading_col1:false,
          loading_col2:false,

          apiUrl : "http://119.29.209.17/oaapi/Software/GetArticleList",
        };
  },

  created(){
      this.fetchCol1Data();
      this.fetchCol2Data();
  },

  methods:{
    fetchCol1Data()
    {
        this.loading_col1 = true;
        this.$http.jsonp(this.apiUrl, {params: { 'nid': this.active_col1}})
        .then((response) => { 
            this.data_col1 = response.data;
            this.loading_col1 = false;
        })
        .catch(function(response)
        {
            console.log(response);
        })
    },
    fetchCol2Data()
    {
        this.loading_col2 = true;
        this.$http.jsonp(this.apiUrl, {params: { 'nid': this.active_col2}})
        .then((response) => { 
            this.data_col2 = response.data;
            this.loading_col2 = false;
            this.$nextTick(resizeFooter);
        })
        .catch((response) =>
        {
            console.log(response);
        })
    },
    col1_click(tab,event)
    {
      this.active_col1 = tab.$options.propsData.name;
      this.fetchCol1Data();
    },
    col2_click(tab,event){
      this.active_col2 = tab.$options.propsData.name;
      this.fetchCol2Data();
    },
    more_col1(){
      this.$router.push("/list/" + this.active_col1);
    },
    more_col2(){
      this.$router.push("/list/" + this.active_col2);
    }
  }
};
