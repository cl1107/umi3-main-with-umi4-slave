## Usage

主应用

```bash
$ cd master3
$ yarn
$ yarn start
```

子应用

```bash
$ cd qiankun-slave
$ yarn
$ yarn start
```

打开页面：http://127.0.0.1:8000/slave/app1 能够正常访问
注释 master3/src/app.ts 中的如下代码则无法访问，页面显示 Cannot GET /slave

```
    fetch: async (url: any, ...args: any) => {
      if (url.indexOf('localhost:8013')) {
        return window.fetch(url, {
          ...args,
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          },
        });
      }
      return window.fetch(url, ...args);
    },
```
