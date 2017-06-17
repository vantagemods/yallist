'use strict'
var Yallist = require('./yallist')

Yallist.prototype[Symbol.iterator] = function* () {
  for (let walker = this.head; walker; walker = walker.next) {
    yield walker.value
  }
}
