(function() {

  const api = require('./api.service');
  const auth = require('./auth.service');

  let service = {}

  let stagingData = {}

  let history = []

  let _page = {}

  Object.defineProperty(service, 'page', {
    get: function() {
      return _.cloneDeep(_page)
    },
    set: function(value) {
      _.debounce(service.save(_.cloneDeep(value)), 100)
    }
  })

  function addHistory() {
    history.unshift(_.cloneDeep(_page))

    if(history.length > 5) {
      history.length = 5
    }
  }

  // service.page.get()
  /**
   * Retrieves a page matching a url or one that matches the query
   * @param {object} query Optional - FeathersJS query
   * @return {Promise} Returns the page object
   */
  service.get = function(query) {

    return new Promise(async (resolve, reject) => {
      if(!query) {
        // query = {url: window.location.pathname}
        query = {url: '/'}
      } else if (!query.url) {
        console.log('You must provide a url to get a page');
        // return false
        return reject(false)

      }

      try {
        let hasPermission = auth.hasPermissionSync('editContent')

        if(hasPermission) {
          var [ err, result ] = await api.staging.find({belongsTo: 'easy-cms', key: query.url})

          if(!err) {
            result = _.get(result, '0.data')

            if(!hasPermission || !result) {
              var [ page_in_progress, err ] = await api.pages.find(query)

              if(!err) {
                result = page_in_progress[0]
              }
              
            }

          }
        }

        

        _page = result

        return resolve(_page)
      } catch(err) {
        return reject(false)
      }
    })
  }

  service.save = function(data, shouldAddHistory) {

    if(!data) {
      toastr.warning('You must provide data to autosave.')
      return false
    }

    if(!_page) {
      toastr.warning('There is no page to update')
      return false
    }

    if(typeof shouldAddHistory !== 'boolean' && shouldAddHistory !== false) {
      addHistory()
    }

    _page = data

    api.staging.update({belongsTo: 'easy-cms', key: _page.url}, { data }).then(() => {

    }).catch(err => {
      console.log('Error autosaving page: ', err)
    })


    setHTMLHeader()

    return _page

  }

  service.undo = function() {
    if(history.length) {
      // We call shift twice to get the previous value
      // history.shift()
      service.save(history.shift(), false)
    } else {
      toastr.warning('There is no more undo history to return to.')
    }
    return _page
  }

  service.reset = async function() {

    if(!_.get(page, 'url')) {
      toastr.warning('Sorry, but we could not find a page link to reset.')
      return false
    }

    api.staging.delete({belongsTo: 'easy-cms', key: _page.url})
    history = []

    try {
      let result = await api.pages.find(query)
      _page = _.get(result, '0')
      setHTMLHeader()
    } catch(err) {
      console.log('Error resetting page: ', err);
    }

    return _page
  }

  service.remove = async function(url) {
    let query = url? {url: url}: {url: _page.url}

    history = []

    return Promise.all(
      api.pages.delete(query),
      api.staging.delete({belongsTo: 'easy-cms', key: query.url})
    )
  }

  service.create = async function(page) {

    if(!_.get(page, 'url')) {
      toastr.warning('You must supply a url to create a page')
      console.log('{url: url} must be set to create a page')
      return false
    }

    if(!_.get(page, 'template')) {
      console.log('It is recommended to provide a page template name when creating a page')
      return false
    }

    // Check that the page url doesn't already exist
    let alreadyExists = await api.pages.find({url: page.url})

    if(_.get(alreadyExists, '0')) {
      toastr.error('A page with that link already exists. Please choose a different link')
      return false
    }


    let { placeholderTitle, url } = convertUrlToTitle(page.url)

    // Prepare the template
    let newPage = {
      author: page.author || _.get(auth, 'currentUser.name'),
      editability: page.editability || _.get(auth, 'currentUser.role'),
      visibility: page.visibility || _.get(auth, 'currentUser.role'),
      url: url,
      tabTitle: page.tabTitle || placeholderTitle,
      title: page.title || placeholderTitle,
      template: page.template || 'home',
      summary: "",
      description: "",
      updated: Date.now()
    };

    let result
    try {
      result = await api.pages.create(page)
    } catch(err) {
      toastr.error("Sorry but there was an error and that page could not be created.")
      console.log('Could not create page: ', err);
      return false
    }
    return result
  }

  service.publish = async function(published) {
    let shouldPublish = true
    if(typeof published === 'boolean' && published === false) {
      shouldPublish = false
    }

    if(shouldPublish && _page.published) {
      _page.published = true
    } else if(!shouldPublish) {
      _page.published = false
    }

    try {
      _page = await api.pages.updateOne(_page._id, _page)

      api.staging.delete({belongsTo: 'easy-cms', key: _page.url}).catch(err => {
        console.log('Could not delete the leftover page autosave data.');
      })
    } catch(err) {
      console.log('err', err);
    }
  }

  if(!global.services) {
    global.services = {}
  }

  global.services.page = service

})()