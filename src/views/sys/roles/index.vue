<template>
  <div>
    <my-search v-model='queryModel.name' :flag='flag' label='角色' @add='model={};$refs.form.open()'
               @search='search'></my-search>
    <my-table :clos='clos' :data='roleList'>
      <template v-slot:status='{row:{status}}'>
        <el-switch :active-value='1' :inactive-value='0' :value='status' active-color='#13ce66'></el-switch>
      </template>
      <template v-slot:action='{row}'>
        <el-button plain size='mini' type='success' @click='handleEdit(row)'>编辑</el-button>
        <el-button plain size='mini' type='warning'>分配权限</el-button>
        <el-button plain size='mini' type='danger'>删除</el-button>
      </template>
    </my-table>
    <my-pagination v-model='queryModel' :total='total' @change='getRoleList'></my-pagination>
    <my-form ref='form' v-model='model' :options='options' :title='title+"角色"' @determine='determine'></my-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import clos from './clos'
import { roleListAPI, roleAddApi, roleEditAPI } from '@/api/role'
import { userInfoIdAPI } from '@/api/user'
import options from './options'
import { notifyTips } from '@/utils/notify'

export default {
  data () {
    return {
      clos,
      options,
      queryModel: {
        current: 1,
        size: 5,
        name: ''
      },
      roleList: [],
      total: 0,
      model: {
        code: '',
        name: '',
        remark: '',
        status: ''
      }
    }
  },
  computed: {
    ...mapGetters(['authoritys']),
    flag () {
      let f = false
      this.authoritys.forEach(item => {
        if (item === 'sys:user:add') {
          f = true
        }
      })
      return f
    },
    title () {
      return this.model.id ? '编辑' : '新增'
    }
  },
  created () {
    this.getRoleList()
  },
  methods: {
    async getRoleList () {
      try {
        const {
          records,
          total
        } = await roleListAPI(this.queryModel)
        this.roleList = records
        this.total = total
      } catch (e) {
        console.log(e)
      }
    },
    search () {
      this.queryModel.current = 1
      this.getRoleList()
    },
    async determine () {
      const form = this.$refs.form
      try {
        const value = await form.validate()
        value.status = value.status ? value.status : '1'
        await (this.model.id ? roleEditAPI : roleAddApi)(value)
        form.close()
        this.getRoleList()
        notifyTips('提示', this.model.id ? '编辑角色成功' : '添加角色成功', 'success')
      } catch (e) {
        console.log(e)
      }
    },
    async handleEdit (row) {
      try {
        this.model = { ...row }
        const { status } = await userInfoIdAPI(row.id)
        this.model.status = status
        this.$refs.form.open()
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
