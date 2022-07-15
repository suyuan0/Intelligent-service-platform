export const filterRoutes = (menus) => {
  const result = []
  menus.forEach((item) => {
    if (item.children && item.children.length > 0) {
      item.children.forEach((child) => {
        const res = menuRoutes(child)
        result.push(res)
      })
    }
  })
  result.push({
    path: '*',
    redirect: '/404'
  })
  return result
}

const menuRoutes = (item) => {
  if (!item.component) return null
  const route = {
    path: item.path,
    name: item.name,
    meta: {
      title: item.label,
      icon: item.icon
    },
    component: () => import(`@/views/${item.component.toLowerCase()}`)
  }
  return route
}
