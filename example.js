;(function () {
  'use strict'

  var dezonkey

  // Node.js, browserify, ...
  if (typeof module !== 'undefined' && module.exports) {
    dezonkey = require('./index') // require('dezonkey') for you
  // browsers
  } else {
    dezonkey = window.dezonkey
  }

  // a zonkey function
  function delay (time, cb) {
    if (typeof time !== 'number') {
      throw new Error(time + ' is not a number')
    }
    setTimeout(cb, time)
  }

  // would throw, process crash
  // delay('123', function () {})

  var safeDelay = dezonkey(delay)

  safeDelay('123', function (err) { // doesn't throw
    console.log(err.stack)
  })
  console.log('still alive')
}())
