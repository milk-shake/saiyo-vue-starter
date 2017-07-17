import Vue from 'vue'
import { sizes } from '../config'
import { capitalizeFirstLetter } from '../utils'

Vue.directive('has-margin', (el, bindings) => {
  let style = bindings.value.split(' ')
  const size = sizes[style[0]] + 'rem'
  switch (style.length) {
    case 1: {
      el.style.margin = size
      break
    }
    case 2: {
      const position = style[1]
      if (position === 'vert') {
        el.style.marginTop = size
        el.style.marginBottom = size
        break
      }
      if (position === 'horz') {
        el.style.marginLeft = size
        el.style.marginRight = size
        break
      }
      if (position === 'top-right') {
        el.style.marginTop = size
        el.style.marginRight = size
        break
      }
      if (position === 'top-left') {
        el.style.marginTop = size
        el.style.marginLeft = size
        break
      }
      if (position === 'bottom-right') {
        el.style.marginBottom = size
        el.style.marginRight = size
        break
      }
      if (position === 'bottomLeft') {
        el.style.marginBottom = size
        el.style.marginLeft = size
        break
      }
      el.style[`margin` + capitalizeFirstLetter(position)] = size
      break
    }
  }
})

