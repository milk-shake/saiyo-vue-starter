import Vue from 'vue'
import { sizes } from '../config'
import { capitalizeFirstLetter } from '../utils'

Vue.directive('has-padding', (el, bindings) => {
  let style = bindings.value.split(' ')
  const size = sizes[style[0]] + 'rem'

  switch (style.length) {
    case 1: {
      el.style.padding = size
      break
    }
    case 2: {
      const position = style[1]
      if (position === 'vert') {
        el.style.paddingTop = size
        el.style.paddingBottom = size
        break
      }
      if (position === 'horz') {
        el.style.paddingLeft = size
        el.style.paddingRight = size
        break
      }
      if (position === 'top-right') {
        el.style.paddingTop = size
        el.style.paddingRight = size
        break
      }
      if (position === 'top-left') {
        el.style.paddingTop = size
        el.style.paddingLeft = size
        break
      }
      if (position === 'bottom-right') {
        el.style.paddingBottom = size
        el.style.paddingRight = size
        break
      }
      if (position === 'bottomLeft') {
        el.style.paddingBottom = size
        el.style.paddingLeft = size
        break
      }
      el.style[`padding` + capitalizeFirstLetter(position)] = size
      break
    }
  }
})

