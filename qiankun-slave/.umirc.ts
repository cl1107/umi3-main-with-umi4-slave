export default {
  qiankun: {
    slave: {},
  },
  model: {},
  // headScripts: [`window.publicPath = '//localhost:8013/';`],
  routes: [
    { path: '/', component: 'index' },
    { path: '/app1', component: 'app1' },
    // { path: '/users', component: '() => { return <h1>users</h1> }' },
    // {
    //   path: '/users2',
    //   component: '(() => () => { return <h1>users 2</h1> })()',
    // },
  ],
  runtimePublicPath: {},
  // history: { type: 'hash' },
};
