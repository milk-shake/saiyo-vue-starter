import Vue from 'vue'
import { maxWidth } from '../config'

Vue.directive('max-width', (el, bindings) => {
  el.style.maxWidth = (bindings.value) ? bindings.value + 'px' : maxWidth
})
