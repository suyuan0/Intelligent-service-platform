<template>
  <div>
    <mySearch v-model='queryModel.username' label='用户名' @add='$refs.form.open()' @search='search'></mySearch>
    <myTable :clos='clos' :data='userLIst'>
      <template v-slot:avatar='{row:{avatar}}'>
        <el-avatar :size='60' :src='avatar'></el-avatar>
      </template>
      <template v-slot:roles='{row:{roles}}'>
        <el-tag v-for='item in roles' :key='item.id' style='margin-right: 5px'>
          {{ item.name }}
        </el-tag>
      </template>
      <template v-slot:status='{row:{status}}'>
        <el-switch :active-value='1' :inactive-value='0' :value='status' active-color='#13ce66'></el-switch>
      </template>
      <template v-slot:action>
        <el-button plain size='mini' type='success'>编辑</el-button>
        <el-button plain size='mini' type='warning'>分配角色</el-button>
        <el-button plain size='mini' type='danger'>删除</el-button>
      </template>
    </myTable>
    <my-pagination v-model='queryModel' :total='total' @change='getUserList'></my-pagination>
    <BackTop></BackTop>
    <my-form ref='form' :options='options' title='新增用户' @determine='determine'></my-form>
  </div>
</template>

<script>
import BackTop from '@/components/BackTop'
import { userListApi, addUserApi } from '@/api/user'
import clos from './clos'
import options from './options'
import { notifyTips } from '@/utils/notify'

export default {
  components: {
    BackTop
  },
  data () {
    return {
      value: 1,
      clos,
      options,
      queryModel: {
        current: 1,
        size: 5,
        username: ''
      },
      // 用户列表数据
      userLIst: [],
      total: 0
    }
  },
  created () {
    this.getUserList()
  },
  watch: {
    queryModel: {
      deep: true,
      handler (val) {
        if (val.username.length <= 0) {
          this.getUserList()
        }
      }
    }
  },
  methods: {
    async getUserList () {
      try {
        const {
          records,
          total
        } = await userListApi(this.queryModel)
        this.userLIst = records
        this.total = total
      } catch (e) {
        console.log(e)
      }
    },
    search () {
      this.queryModel.current = 1
      this.getUserList()
    },
    async determine () {
      const form = this.$refs.form
      try {
        const value = await form.validate()
        value.status = value.status ? value.status : '1'
        await addUserApi(value)
        this.getUserList()
        form.close()
        notifyTips('提示', '新增请求成功', 'success')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
