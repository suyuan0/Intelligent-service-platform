<template>
  <el-dropdown trigger='click' @command='handleCommand'>
       <span class='el-dropdown-link'>
         <el-avatar :src='$store.getters.userInfo.avatar'></el-avatar>
          <span class='user-name'>
            {{ $store.getters.userInfo.username }}
            <i class='el-icon-arrow-down el-icon--right'></i>
          </span>
       </span>
    <el-dropdown-menu slot='dropdown'>
      <el-dropdown-item command='profile'>个人设置</el-dropdown-item>
      <el-dropdown-item command='logout'>退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { notifyTips } from '@/utils/notify'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      userLogout: 'user/userLogout'
    }),
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
      }
    },
    // 退出
    async logout () {
      try {
        await this.$confirm('确定要退出吗？', '提示', { type: 'warning' })
        notifyTips('提示', '正在退出中...', 'success')
        await this.userLogout()
        this.$router.push('/login')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.el-dropdown {
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;

  .el-dropdown-link {
    display: flex;
    align-items: center;

    .el-avatar {
      margin-right: 10px;
    }

    .user-name {
      cursor: pointer;
      font-size: 18px;
      color: white;
      font-weight: bold;
    }
  }
}
</style>
