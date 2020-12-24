<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>潮流街APP</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


      //获取文件
      //   let MyFile = new BaaS.File()
      //   MyFile.get('5f93d2fc172ddb1dc6f96500').then(res=>{
      //     console.log(res.data.path,"文件");
      //      table(res.data.path)
      //   })

      // ///表数据测试
      // function table(imgs){
      //   let tableName = "try_table";

      // let MyTableObject = new BaaS.TableObject(tableName);

      // let product = MyTableObject.create();

      // let data = {
      //   id:66,
      //   img:imgs,
      // };

      // product
      //   .set(data)
      //   .save()
      //   .then(res => {
      //     console.log(res, "我创建的数据");
      //   });
      // }

      //查询文件分类
      //  let MyFile = new BaaS.File()
      // // 查找所有文件
      // MyFile.find()
      // let query = new BaaS.Query()
      // // 查询某一文件分类下的所有文件
      // query.compare('category_name', '=', '首页')
      // // 查询文件名包含指定字符串的文件
      // // query.contains('name', substr)
      // MyFile.setQuery(query).find().then(res=>{
      //   console.log(res,"查询文件分类");

      //})

      //更新数据
      //   let tableName = "try_table";
      // let MyTableObject = new BaaS.TableObject(tableName)
      // let product = MyTableObject.getWithoutData('5fae3ffbaea0f3426a071a66')
      //   product.set('img', '更新了数据')
      //     product.update().then(res=>{
      //    console.log(res,"更新数据");
      //     })

      //删除数据
      // let tableName = "try_table";
      // let recordID = "5fae3ffbaea0f3426a071a66";

      // let Product = new BaaS.TableObject(tableName);
      // Product.delete(recordID).then(
      //   res => {
      //     console.log(res, "删除数据");
      //   },
      //   err => {
      //     // err
      //   }
      // );
    },