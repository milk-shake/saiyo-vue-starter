import Vue from 'vue'
import { sizes } from '../config'

Vue.directive('has-rounded-corners', (el, bindings) => {
  let style = bindings.value.split(' ')
  const size = sizes[style[0]] + 'rem'

  switch (style.length) {
    case 1: {
      el.style.borderRadius = size
      break
    }
    case 2: {
      const position = style[1]
      if (position === 'top') {
        el.style.borderTopRightRadius = size
        el.style.borderTopLeftRadius = size
        break
      }
      if (position === 'bottom') {
        el.style.borderTopBottomRadius = size
        el.style.borderTopBottomRadius = size
        break
      }
      if (position === 'left') {
        el.style.borderTopLeftRadius = size
        el.style.borderBottomLeftRadius = size
        break
      }
      if (position === 'right') {
        el.style.borderTopRightRadius = size
        el.style.borderBottomRightRadius = size
        break
      }
      if (position === 'top-right') {
        el.style.borderTopRightRadius = size
        break
      }
      if (position === 'top-left') {
        el.style.borderTopLeftRadius = size
        break
      }
      if (position === 'bottom-right') {
        el.style.borderBottomRightRadius = size
        break
      }
      if (position === 'bottomLeft') {
        el.style.borderBottomLeftRadius = size
        break
      }
    }
  }
})

