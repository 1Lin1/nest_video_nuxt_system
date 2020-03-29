<template>
  <div>
    <h3>{{ option.title }}</h3>
    <avue-crud
      :data="data.data"
      :option="option"
      :page="page"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @refresh-change="refreshChange"
      v-if="option.column"
      @on-load="changePage"
      @sort-change="sortChange"
      @search-change="searchChange"
     
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ResourceCrud extends Vue {
  //列表标题

  //定义路由传过来的动态参数
  @Prop(String) resource!: string
  //刷新按钮

  //界面的参数配置 由模型对应的controller传过来 加any声明 心里有数
  option:any = {
    
  }

  data:any = {}

  //分页
  page:any = {
    total:0,  //总共的数量
    // pageSize:2, //当前页数显示多少条 
    // pageSizes:[2,5,10]
  }

  //传给后端的参数
  query:any ={
    // limit:2
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`,{
      params:{
        query:this.query
      }
    })
    this.data = res.data;
    console.log(this.data);
    this.page.total = res.data.total;
  }

  //改变页数
  async changePage({currentPage,pageSize}:any){
    this.query.limit = pageSize;
    this.query.page = currentPage;
    this.fetch()
  }


  //排序功能
  async sortChange({prop,order}:any){
    if(!order){
      this.query.sort = null
    }else{
      this.query.sort = {

        // [prop] 这样的写法是动态获取 name
        [prop]:order === 'ascending'? 1 : -1
      }
    }
    this.fetch()
  }

  //搜索功能
  async searchChange(params:any,done:any){
    
    for(let k in params){

      let field  = this.option.column.find((v:any ):boolean=> v.prop === k)
      if(field.regex){ 
        console.log('k',k)
        params[k] = {$regex:params[k]}
  
      }
    }
    console.log('params',params)  

    //参数带上 复制给请求
    this.query.where = params
    this.fetch()
    done()
  }

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`)
    this.option = res.data
  }

  created() {
    this.fetch()
    this.fetchOption()
  }

  //刷新
  async refreshChange() {
    this.fetch()
    this.$message.success('刷新成功')
  }

  //新增数据
  async create(row: any, done: any) {
    await this.$http.post(`${this.resource}`, row)
    this.$message.success('创建成功')
    this.fetch()
    done()
  }

  //更新数据
  async update(row: any, index: any, done: any) {
    // //防止mongodb出错
    // const data = JSON.parse(JSON.stringify(row))
    // //删掉这一个字段
    // delete data.$index
    // console.log(data)

    await this.$http.put(`${this.resource}/${row._id}`, row)
    this.fetch()
    this.$message.success('成功更新数据')
    done()
  }

  //删除数据
  async remove(row: any) {
    await this.$http.delete(`${this.resource}/${row._id}`)
    this.fetch()
    this.$message.success('成功删除数据')
  }

  
}
</script>
