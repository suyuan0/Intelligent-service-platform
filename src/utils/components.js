import mySearch from '@/components/MySearch'
import myTable from '@/components/myTable'
import MyPagination from '@/components/MyPagination'
import MyForm from '@/components/MyForm'

export const install = (Vue) => {
  ;[mySearch, myTable, MyPagination, MyForm].forEach((item) =>
    Vue.component(item.name, item)
  )
}
