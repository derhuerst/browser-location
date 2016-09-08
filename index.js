'use strict'

const loc = (timeout = 10000) => new Promise((resolve, reject) => {
	if (!navigator && !navigator.geolocation)
		return reject(new Error('geolocation api not supported'))

	let succeeded = false
	const success = (loc) => {
		succeeded = true
		resolve({
			latitude:  loc.coords.latitude,
			longitude: loc.coords.longitude,
			accuracy:  loc.coords.accuracy,
			native:    true
		})
	}
	const error = (err) => reject(err || new Error('unknown error'))

	navigator.geolocation.getCurrentPosition(success, error)
	setTimeout(() => {
		if (!succeeded) reject(new Error('timeout'))
	}, timeout)
})

if (module.exports)
	module.exports = loc
