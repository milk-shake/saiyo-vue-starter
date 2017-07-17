import Vue from 'vue'
import { media } from '../config'

Vue.directive('position', function (el, bindings, vnode) {
  const values = bindings.value.split(' ')
  if (values.length === 1) {
    el.style.position = bindings.value
  }
  if (values.length === 2) {
    const position = values[0]
    const size = values[1]

    window.addEventListener('resize', (event) => {
      setPosition(el, position, size)
    })
  }
})

const setPosition = (el, position, size) => {
  if (window.innerWidth < media[size]) {
    el.style.position = position
  } else {
    el.style.position = 'initial'
  }
}
