import VueRouter from 'vue-router'
import Vuex from 'vuex'
import iView from 'iview'

// import config from '../config'

import {router} from './iview-admin/src/router/index'
import {appRouter} from './iview-admin/src/router/router'
import store from './iview-admin/src/store'
import App from './iview-admin/src/app.vue'

import './iview-admin/src/locale'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'
import util from './iview-admin/src/libs/util'

export default {
  install (Vue, options = {}) {
    Vue.use(VueI18n)
    Vue.use(VueRouter)
    Vue.use(Vuex)
    Vue.use(iView)
    // const router = new VueRouter({
    //   routers: config.routes
    // })
    // window.app = new Vue({
    //   el: '#app',
    //   router: router,
    //   store: store,
    //   render: h => h(App),
    //   data: {
    //     currentPageName: ''
    //   },
    //   mounted () {
    //     this.currentPageName = this.$route.name
    //     // 显示打开的页面的列表
    //     this.$store.commit('setOpenedList')
    //     this.$store.commit('initCachepage')
    //     // 权限菜单过滤相关
    //     this.$store.commit('updateMenulist')
    //     // iview-admin检查更新
    //     util.checkUpdate(this)
    //   },
    //   created () {
    //     let tagsList = []
    //     appRouter.map((item) => {
    //       if (item.children.length <= 1) {
    //         tagsList.push(item.children[0])
    //       } else {
    //         tagsList.push(...item.children)
    //       }
    //     })
    //     this.$store.commit('setTagsList', tagsList)
    //   }
    // })
    const AppConstructor = Vue.extend(App)
    window.app = new AppConstructor({
      el: '#app',
      router,
      store,
      render: h => h(App),
      data: {
        currentPageName: ''
      },
      mounted () {
        this.currentPageName = this.$route.name
        this.$store.commit('setOpenedList')
        this.$store.commit('initCachepage')
        this.$store.commit('updateMenulist')
        util.checkUpdate(this)
      },
      created () {
        let tagsList = []
        appRouter.map(item => {
          if (item.children.length <= 1) {
            tagsList.push(item.children[0])
          } else {
            tagsList.push(...item.children)
          }
        })
        this.$store.commit('setTagsList', tagsList)
      }
    })
  }
}
