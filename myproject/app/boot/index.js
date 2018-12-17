const Vue = require('vue')
const store = require('./store-reconciliation')
const router = require('./router')

const prepareSyncList = require('../services/sync-list.service')
require('../services/api.service')
require('../services/notification.service')
require('../services/helpers.service')
require('../services/page.service')

require('../components')
require('../views')
require('../../theme')

const App = require('../views/app.vue')

const filters = require('../filters')
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue(Object.assign({
  router,
  data: { store }
}, App))

// Prepare the confirm modal and sync list helpers
prepareSyncList(app.store)
prepareConfirm(app.store)

// Wait for global.templates variable to be set. Check if user is logged in then launch the app unless we are rendering from the server

if(Vue.prototype.$isServer) {
  app.$mount('#app')
} else {
  auth.isLoggedIn()
    .then(res => app.$mount('#app'))
    .catch(err => app.$mount('#app'))
}

module.exports = { app, router, store, syncList }
