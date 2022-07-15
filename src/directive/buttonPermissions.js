import Vue from 'vue'
import store from '@/store'

Vue.directive('bp', {
  inserted: function (el, binding) {
    const { value } = binding
    if (filterBp(value)) {
      el.parentNode.removeChild(el)
    }
  }
})

const filterBp = (value) => {
  const actionList = store.getters.authoritys
  const bp = actionList.find((item) => item === value)
  if (!bp) {
    return true
  }
  return false
}
