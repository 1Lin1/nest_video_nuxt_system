<template>
  <div>
    <h3>{{option.title}}</h3>
    <avue-crud 
    :data="data.data"
    :option="option"
    @row-save="create"
    @row-update="update"
    @row-del="remove"
    @refresh-change="refreshChange"
    v-if="option.column"
 

      ></avue-crud>

  </div>
</template>

<script lang="ts">
 import {
        Component,
        Vue,
        Prop
    } from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class ResourceCrud extends Vue { 

     
       //列表标题
       

       //定义路由传过来的动态参数
       @Prop(String) resource!:string
        //刷新按钮


       async fetch(){
        const res = await this.$http.get(`${this.resource}`);
        this.data = res.data;
        console.log(this.data);

      }

        
       async fetchOption(){
        const res = await this.$http.get(`${this.resource}/option`);
        this.option = res.data
      }

      created() {
        this.fetch()
        this.fetchOption()
      }

       option = {
        }



       data = {}

       //刷新
       async refreshChange(){
         this.fetch()
         this.$message.success('刷新成功')
       }

       //新增数据
       async create(row:any,done:any){
        await this.$http.post(`${this.resource}`,row)
        this.$message.success('创建成功')
        this.fetch()
        done()
       }

       //更新数据
       async update(row:any,index:any,done:any){

         //防止mongodb出错
         const data = JSON.parse(JSON.stringify(row))
         //删掉这一个字段
         delete data.$index
         console.log(data)

         await this.$http.put(`${this.resource}/${data._id}`,data)
         this.fetch()
         this.$message.success('成功更新数据')
         done()
       }

       //删除数据
       async remove(row:any){
         await this.$http.delete(`${this.resource}/${row._id}`)
         this.fetch()
         this.$message.success('成功删除数据')
         
       }

      
    }
</script>