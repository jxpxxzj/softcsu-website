module.exports = [
    { 
        path: '/', 
        component: require('./pages/index') 
    },
    {
        path: '/list/:nid',
        component: require('./pages/list')
    },
    {
        path: '/article/:nid/:aid',
        component: require('./pages/article')
    },
    {
        path: '*',
        component: require('./pages/notFound')
    }
];
