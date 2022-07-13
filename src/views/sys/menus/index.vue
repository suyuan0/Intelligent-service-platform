<template>
  <div>
    <my-search label='菜单'></my-search>
    <my-table :clos='clos' :data='menuList' :treeProps='{children: "children"}'></my-table>
  </div>
</template>

<script>
import { menuListApi } from '@/api/menu'
import clos from './clos'

export default {
  data () {
    return {
      clos,
      menuList: [],
      queryModel: {
        current: '1',
        size: '10',
        username: ''
      }
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    async getMenuList () {
      try {
        this.menuList = await menuListApi(this.queryModel)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
