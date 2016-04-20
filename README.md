dezonkey
========

[![Build Status](https://img.shields.io/travis/sonnyp/dezonkey/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/dezonkey/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

dezonkey forbids callback style functions from throwing. It'll catch the exception and pass it to the callback instead.

# Getting started


`npm install dezonkey`

----

```javascript
var dezonkey = require('dezonkey');
```

or

```xml
<script src="node_modules/dezonkey/index.js"></script>
```
```javascript
var dezonkey = window.dezonkey
```

# Usage

```js
// here is a an example of a zonkey function
function delay (time, cb) {
  if (typeof time !== 'number') {
    throw new Error(time + ' is not a number')
  }
  setTimeout(cb, time)
}

// what if the first argument is user input and we forgot a check? process will crash
delay('123', cb) // throws
// what if a user/program repeatedly sends that value?
// process will repeatedly crash

// we could do that
function onError(err) {
  ...
}
try {
  delay('123', function (err) {
    if (err) onError(err)
  })
} catch (err) {
  onError(err)
}

// but here is a nicer solution
var safeDelay = dezonkey(delay)
safeDelay('123', cb) // will not throw, passes the exception to the callback

// dezonkey is also pretty useful if you're writing your own functions
function myFunction (time, cb) {
  return dezonkey(function () {
    if (typeof time !== 'number') {
      // instead of `return cb(new Error(...))`
      // who never forgot that return keyword?
      throw new Error(time + ' is not a number')
    }
    setTimeout(cb, time)
  })
}
```

# Example

See [example.js](https://github.com/sonnyp/dezonkey/blob/master/example.js)

# Benchmark

See [benchmark](https://github.com/sonnyp/dezonkey/tree/master/benchmark)

# Test

```
npm install standard
npm test
```
