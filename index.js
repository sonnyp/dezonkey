;(function () {
  'use strict'

  function dezonkey (fn) {
    return function () {
      var cb = arguments[arguments.length - 1]
      try {
        fn.apply(null, arguments)
      } catch (e) {
        cb(e)
      }
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = dezonkey
  } else {
    window.dezonkey = dezonkey
  }
}())
