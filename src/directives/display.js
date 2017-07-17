import Vue from 'vue'
import { media } from '../config'

Vue.directive('display', function (el, bindings, vnode) {
  const values = bindings.value.split(' ')
  if (values.length === 1) {
    el.style.display = bindings.value
  }
  if (values.length === 2) {
    const display = values[0]
    const size = values[1]

    window.addEventListener('resize', (event) => {
      setDisplay(el, display, size)
    })
  }
})

const setDisplay = (el, display, size) => {
  if (window.innerWidth < media[size]) {
    el.style.display = display
  } else {
    el.style.display = 'initial'
  }
}
