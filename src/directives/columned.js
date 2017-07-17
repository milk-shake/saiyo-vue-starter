import Vue from 'vue'

Vue.directive('columned', function (el, bindings, vnode) {
  el.style.display = 'flex'
  el.style.flexWrap = 'wrap'
  el.style.alignItems = 'center'
})
