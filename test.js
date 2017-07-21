'use strict'

const test = require('tape')
const inBrowser = require('is-in-browser').default

const location = require('./dist')

test('running in the browser', (t) => {
	t.plan(1)
	t.equal(inBrowser, true, 'not running in the browser')
})

test('works with timeout', (t) => {
	t.plan(6)

	location(10 * 1000, (err, loc) => {
		if (err) return t.ifError(err)

		t.ok(loc)
		t.equal(typeof loc.latitude, 'number')
		t.equal(typeof loc.longitude, 'number')
		t.equal(typeof loc.accuracy, 'number')
		t.ok(loc.accuracy > 0)
		t.equal(loc.native, true)
	})
})

test('works without timeout', (t) => {
	t.plan(6)

	location((err, loc) => {
		if (err) return t.ifError(err)

		t.ok(loc)
		t.equal(typeof loc.latitude, 'number')
		t.equal(typeof loc.longitude, 'number')
		t.equal(typeof loc.accuracy, 'number')
		t.ok(loc.accuracy > 0)
		t.equal(loc.native, true)
	})
})
