import Vue from 'vue'
import { sizes } from '../config'

Vue.directive('has-sized-text', (el, bindings) => {
  el.style.fontSize = sizes[bindings.value] + 'rem'
})
