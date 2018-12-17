const _ = require('lodash');
const {objectOfArraysToArrayOfObjects, objectToArray} = require('../../../utility');

module.exports = function(options) {
  return (hook) => {
    if (!hook.params.provider || !hook.data) { return hook; }

    if(typeof hook.data.url === 'string' && hook.data.url.charAt(0) !== '/') {
      hook.data.url = '/' + hook.data.url;
    }

    if(hook.data.extensions) {
      hook.data.extensions = objectOfArraysToArrayOfObjects(hook.data.extensions);
    }

    if(hook.data.images) {
      // hook.data.images = objectToArray(hook.data.images);
      hook.data.images = objectToArray(hook.data.images);
    }

    return hook;
  }
}
