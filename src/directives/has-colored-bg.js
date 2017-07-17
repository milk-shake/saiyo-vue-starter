import Vue from 'vue'
import { colors } from '../config'
import { shouldUseDarkContrast } from '../utils'

Vue.directive('has-colored-bg', (el, bindings) => {
  el.style.backgroundColor = colors[bindings.value]
  el.style.color = shouldUseDarkContrast(colors[bindings.value]) ? colors['black'] : colors['white']
})
