import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

import moment from 'moment'

import Preview from "~/components/Preview.vue"

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.component('Preview', Preview)
  Vue.mixin(checkIfMobile)
  Vue.filter("formatDate", function (value) {
    if (value) {
      return moment(String(value)).format("dddd MMMM D, yyyy")
    }
  });
}
