module.exports = [
    { 
        path: '/', 
        name: 'index',
        component: require('./pages/index') 
    },
    {
        path: '/list/:nid',
        name: 'list',
        component: require('./pages/list')
    },
    {
        path: '/article/:nid/:aid',
        name: 'article',
        component: require('./pages/article')
    },
    {
        path: '*',
        name: 'notFound',
        component: require('./pages/notFound')
    }
];
