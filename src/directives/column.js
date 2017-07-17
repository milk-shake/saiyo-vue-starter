import Vue from 'vue'
import { columns, media } from '../config'

Vue.directive('column', function (el, bindings, vnode) {
  const columnSize = bindings.value
  setWidth(el, columnSize)

  window.addEventListener('resize', (event) => {
    setWidth(el, columnSize)
  })
})

const setWidth = (el, columnSize) => {
  if (window.innerWidth < media.tablet) {
    el.style.width = '100%'
  } else {
    el.style.width = 100 / (columns / columnSize) + '%'
  }
}
