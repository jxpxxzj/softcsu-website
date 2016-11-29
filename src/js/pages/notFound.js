module.exports = {
    template: require('../../templates/notFound.html'),
    style: require('../../css/notFound.css'),
    methods:
    {
        toIndex(){
            this.$router.push("/");
        },
        back(){
            window.history.go(-1);
        }
    }
};