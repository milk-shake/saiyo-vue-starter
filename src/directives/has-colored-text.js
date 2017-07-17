import Vue from 'vue'
import { colors } from '../config'

Vue.directive('has-colored-text', (el, bindings) => {
  el.style.color = colors[bindings.value]
})
