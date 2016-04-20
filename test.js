'use strict'

var dezonkey = require('./index')
var assert = require('assert')

function zonkey (time, cb) {
  if (typeof time !== 'number') {
    throw 'NaN' // eslint-disable-line
  }
  setTimeout(cb, time)
}

var dezonkied = dezonkey(zonkey)

assert.doesNotThrow(function () {
  dezonkied('123', function () {})
})

dezonkied(function (err) {
  assert.equal(err, 'NaN')
})
