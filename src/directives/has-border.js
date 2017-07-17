import Vue from 'vue'
import { sizes, colors } from '../config'
import { capitalizeFirstLetter, generateCssValues } from '../utils'

Vue.directive('has-border', (el, bindings) => {
  let style = bindings.value.split(' ')
  switch (style.length) {
    case 2: {
      const size = sizes[style[0]] + 'rem'
      const color = colors[style[1]]
      el.style.border = [size, 'solid', color].join(' ')
      break
    }
    case 3: {
      const size = sizes[style[0]] + 'rem'
      const position = style[1]
      const color = colors[style[2]]
      if (position === 'vert') {
        el.style.borderTop = generateCssValues([size, 'solid', color])
        el.style.borderBottom = generateCssValues([size, 'solid', color])
        break
      }
      if (position === 'horz') {
        el.style.borderLeft = generateCssValues([size, 'solid', color])
        el.style.borderRight = generateCssValues([size, 'solid', color])
        break
      }
      el.style[`border` + capitalizeFirstLetter(position)] = generateCssValues([size, 'solid', color])
      break
    }
  }
})

