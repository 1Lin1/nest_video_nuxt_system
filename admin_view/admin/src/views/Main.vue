<template>
  <div>
    <el-container >
    <el-aside width="200px">

      <el-menu :default-active="$route.path" mode="vertical" style="height:100vh"  router >

        
        <el-submenu v-for="(item,index) in menu.items"
                    :index="index  + ''"
                    :key = "`menu-item-${index}`"
                    >
          <template slot="title">{{item.title}}</template>
          <el-menu-item 
          v-for="(subitem,subindex) in item.items"
          :index ="subitem.path"
          :key = "`menu-item-${index}-${subindex}`"
          >
          {{subitem.title}}
          </el-menu-item>
        </el-submenu>

      </el-menu>

    </el-aside>
    <el-container>
      <el-header height="">
        <h2>技术之巅----后台管理界面</h2>
      </el-header>
      <el-main height="">
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  // 所有的组件选项都可以放在这里
})
export default class Main extends Vue {

  menu = {
    items:[
      {
        title:'内容管理',
        items:[
          {title:'首页',path:'/'},
          {title:'课程管理',path:'/courses/list'},
          {title:'课时管理',path:'/episodes/list'},
        ]
      },
       {
        title:'用户管理',
        items:[
          {title:'用户',path:'/users/list'},
        ]
      },
    ]
  }
 
}
</script>