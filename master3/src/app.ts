export const qiankun = Promise.resolve({
  apps: [
    {
      name: 'qiankun-app', // 唯一 id
      entry: 'http://localhost:8013/', // html entry
    },
  ],
}).then(({ apps }) => {
  return Promise.resolve({
    // 注册子应用信息
    apps,
    // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    routes: [{ path: '/', microApp: 'qiankun-app' }],
    sandbox: {
      strictStyleIsolation: true,
    },
    // fetch: async (url: any, ...args: any) => {
    //   if (url.indexOf('localhost:8013')) {
    //     return window.fetch(url, {
    //       ...args,
    //       headers: {
    //         Accept:
    //           'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //       },
    //     });
    //   }
    //   return window.fetch(url, ...args);
    // },
  });
});
