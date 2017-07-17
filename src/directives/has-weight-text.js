import Vue from 'vue'
import { weights } from '../config'

Vue.directive('has-weight-text', (el, bindings) => {
  el.style.fontWeight = weights[bindings.value]
})
