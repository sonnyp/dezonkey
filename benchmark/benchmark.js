;(function () {
  'use strict'

  var benchmark
  var dezonkey

  if (typeof module !== 'undefined' && module.exports) {
    benchmark = require('benchmark')
    dezonkey = require('../index')
  } else {
    benchmark = window.Benchmark
    dezonkey = window.dezonkey
  }

  function notAsync (cb) {
    cb()
  }

  function callbackFun (cb) {
    notAsync(cb)
  }

  var dezonkeyFun = dezonkey(callbackFun)

  var suite = new benchmark.Suite('dezonkey')
  suite
  .add('zonkey', function () {
    callbackFun(function () {})
  })
  .add('dezonkey', function () {
    dezonkeyFun(function () {})
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run({'async': true})
}())
