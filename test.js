'use strict'

const test = require('tape')
const inBrowser = require('is-in-browser').default

const location = require('./dist')

test('works in the browser', (t) => {
	t.plan(1 + 5)
	t.equal(inBrowser, true, 'not running in the browser')

	location(10 * 1000)
	.then((loc) => {
		t.equal(typeof loc.latitude, 'number')
		t.equal(typeof loc.longitude, 'number')
		t.equal(typeof loc.accuracy, 'number')
		t.ok(loc.accuracy > 0)
		t.equal(loc.native, true)
	})
	.catch(t.ifError)
})
