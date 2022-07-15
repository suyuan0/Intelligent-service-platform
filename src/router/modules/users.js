import layout from '@/layout'

export default {
  path: '/sys',
  name: 'sys:user:list',
  redirect: '/sys/user',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-grid'
  },
  component: layout,
  children: [
    {
      path: '/sys/user',
      name: 'sysUsers',
      meta: {
        title: '用户管理',
        icon: 'el-icon-user'
      },
      component: () => import('@/views/sys/user')
    }
  ]
}
