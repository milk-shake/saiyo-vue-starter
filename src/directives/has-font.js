import Vue from 'vue'
import { fonts } from '../config'

Vue.directive('has-font', (el, bindings) => {
  el.style.fontFamily = fonts[bindings.value]
})
