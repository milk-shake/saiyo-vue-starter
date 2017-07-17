import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'

Vue.use(VueI18n)

let messages = {}
messages = Object.assign({}, messages, en)

export default new VueI18n({
  locale: 'en',
  messages
})
