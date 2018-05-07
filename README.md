Vue Admin
=========

New design of Data-Driven Vue admin system base on iView-admin.

By @fish-ball &copy;2018

### 安装 Installation

\[TODO\]

##### 替换 iview-admin 中的 `@` 路径

由于 iview-admin 项目中的引用 webpack 模块有很多地方使用了 `@` 的绝对路径，\
在引入 vue-admin 的时候，为了能够完整引用 iview-admin 而不是混入代码，我们\
必须让出项目中的根目录位置，这样才能实现代码的分层和正交。

> 其实个人觉得这是 iview-admin 设计上的欠考虑，但估计是没有考虑到会有这种玩法吧。

因此，**我们在业务代码中禁止使用 @ 作为路径前缀**，此外，需要\
修改 `webpack.base.conf.js` 文件代码：

```javascript
module.exports = {
  // ...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 修改下面这行
      '@': resolve('src'),
    }
  },
  // ...
}
```

改为：

```javascript
module.exports = {
  // ...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 改为这一行
      '@': resolve('src/vue-admin/iview-admin/src'),
    }
  },
  // ...
}
```

##### 初始化内部引入的 iview-admin 库

```bash
cd src/vue-admin/iview-admin
npm i
npm run init
```

> 完成之后，iview-admin 文件夹的 build 文件夹中会出现一个 `env.js` 文件。\
如果提示缺少 env 文件很可能是少了这一步。

##### 问题处置：`$export is not a function`

参考：<https://stackoverflow.com/a/36404784/2544762>

打开 `webpack.base.conf.js`，在 `下面加上

```javascript
{
  // ...
  loader: 'babel-loader',
  // 添加下面这一行
  exclude: /node_modules/
  // ...
}
```

##### 问题处置：`_vue2.default.locale is not a function`

参考：<https://github.com/kazupon/vue-i18n/issues/28#issuecomment-284190656>

在外面强制替换 `vue-i18n` 的版本：

```bash
npm install -S vue-i18n^5.0.3
```

### 配置 Configuration

\[TODO\]

### 设定路由

\[TODO\]

### REST API Client

\[TODO\]

### ListViewTable

\[TODO\]

### ListViewTable

\[TODO\]

### EmbedForm

\[TODO\]

### EditView

\[TODO\]

### 钩子机制

\[TODO\]


