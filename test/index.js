'use strict'

const webdriver = require('webdriverio')
const so = require('so')
const assert = require('assert')

const user = process.env.SAUCE_USERNAME
const key = process.env.SAUCE_ACCESS_KEY
const build = process.env.TRAVIS_BUILD_NUMBER
const job = process.env.TRAVIS_JOB_NUMBER
const browser = process.env.BROWSER
const platform = process.env.PLATFORM

console.log(`Using ${browser} on ${platform}.`)



const runner = webdriver.remote({
	user, key, host: 'localhost', port: 4445,
	logLevel: 'silent',
	desiredCapabilities: {
		build, 'tunnel-identifier': job, name: 'test',
		browserName: browser, platform,
		recordScreenshots: false
	}
})

so(function* () {
	yield runner.init()
	yield runner.url(`http://localhost:8080/index.html`)

	const json = yield runner.execute(() =>
		document.getElementById('out').innerText
	)
	console.info('generated JSON', json)
	assert.doesNotThrow(() => JSON.parse(json.value))
	const data = JSON.parse(json.value)

	assert.strictEqual(typeof data.latitude, 'number')
	assert.strictEqual(typeof data.longitude, 'number')
	assert.strictEqual(typeof data.precision, 'number')
	assert.strictEqual(typeof data.native, 'boolean')

	console.log('Done.')
	yield runner.end()
})()
.catch((err) => {
	console.error(err)
	process.exit(1)
})
