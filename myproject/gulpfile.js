const gulp = require('gulp')
const path = require('path')
const fs = require('fs')
const inject = require('gulp-inject');
const runSequence = require('run-sequence')

const folders = {
  app: path.resolve(__dirname, 'app'),
  components: path.resolve(__dirname, 'app', 'components'),
  schemas: path.resolve(__dirname, 'src', 'schemas'),
  css: path.resolve(__dirname, 'app', 'css'),
  views: path.resolve(__dirname, 'app', 'views'),
  root: path.resolve(__dirname)
}

function generateInject(injectTo, outputFolder, arrayOfFilesToInject, startTag, importStatement, extractFileName) {
  return gulp.src(injectTo)
    .pipe(inject(gulp.src(arrayOfFilesToInject, {
      read: false
    }), {
      relative: true,
      starttag: "// " + startTag,
      endtag: "// end " + startTag,
      transform: function(filepath, file, i, length) {
        if(extractFileName) {
          var title = filepath.replace(/^.*[\\\/]/, '')

          
          title = title.substr(0, title.lastIndexOf('.')).replace('-', '_')
          if(importStatement !== 'require') {
            if (filepath.indexOf('..') !== -1) {
              return importStatement + '("' + filepath + '")'
            } else {
              return importStatement + '("./' + filepath + '")'
            }
          } else {
            if (filepath.indexOf('..') !== -1) {
              return title + ': require("' + filepath + '"),'
            } else {
              return title + ': require("./' + filepath + '"),'
            }
          }

        } else {
          if(extractFileName) {
            var title = filepath.replace(/^.*[\\\/]/, '')
            title = title.substr(0, title.lastIndexOf('.')).replace('-', '_')
            if(importStatement !== 'require') {
              if (filepath.indexOf('..') !== -1) {
                return 'var ' + title + ' = require("' + filepath + '")'
              } else {
                return 'var ' + title + ' = require("./' + filepath + '")'
              }
            } else {
              if (filepath.indexOf('..') !== -1) {
                return title + ': require("' + filepath + '"),'
              } else {
                return title + ': require("./' + filepath + '"),'
              }
            }

          } else {
            if (filepath.indexOf('..') !== -1) {
              if(importStatement) {
                return importStatement + '("' + filepath + '")'
              }
              return 'require("' + filepath + '")'
            } else {
              if(importStatement) {
                return importStatement + '("./' + filepath + '")'
              }
              return 'require("./' + filepath + '")'
            }
          }

          if (filepath.indexOf('..') !== -1) {
            return 'require("' + filepath + '")'
          } else {
            return 'require("./' + filepath + '")'
          }
        }
      }
    }))
    .pipe(gulp.dest(outputFolder))
}

gulp.task('inject-component-js', function() {
  return generateInject(
    path.join(folders.components, 'index.js'),
    folders.components,
    [
      folders.components + '/**/*.js',
      '!**/*spec.js',
      '!**/*mock.js',
    ],
    'inject component js'
  )
})

gulp.task('inject-vue', function() {
  return generateInject(
    path.join(folders.views, 'index.js'),
    folders.views,
    [
      folders.app + '/views/**/*.vue',
      '!' + folders.app + '/views/app.vue'
    ],
    'inject vue'
  )
})

gulp.task('inject-css', function() {
  console.log('inject-css');
  return generateInject(
    path.join(folders.css, 'app.styl'),
    folders.css,
    [
      folders.app + '/components/**/*.css',
      folders.app + '/css/**/*.css',
      folders.app + '/components/**/*.styl',
      folders.app + '/css/**/*.styl',
      "!**/vendor.scss",
      "!**/app.styl",
    ],
    'inject css',
    '@import'
  )
})

gulp.task('inject-views', function() {
  return generateInject(
    path.join(folders.app, 'routes.js'),
    folders.app,
    [
      folders.views + '/**/*.vue',
      '!' + folders.views + '/**/app.vue',
    ],
    'inject views',
    'require',
    true
  )
})

gulp.task('inject-schemas', function() {
  return generateInject(
    path.join(folders.schemas, 'index.js'),
    folders.schemas,
    [
      folders.schemas + '/**/*.js',
      '!' + folders.schemas + '/**/index.js',
      '!' + folders.schemas + '/**/mongoose.js',
    ],
    'inject schemas',
    'require',
    true
  )
})

gulp.task('default', function(done) {
  runSequence('inject-css', 'inject-component-js', 'inject-vue', 'inject-views', 'inject-schemas', done)
})
