import Vue from 'vue'

Vue.directive('bg-image', function (el, bindings, vnode) {
  const params = bindings.value.split(' ')

  if (params.length === 1) {
    el.style.backgroundImage = `url(${params[0]})`
  }

  if (params.length === 2) {
    el.style.backgroundImage = `url(${params[0]})`
    el.style.backgroundSize = params[1]
  }
})
