'use strict'

const getLocation = (timeout, cb) => {
	if ('function' === typeof timeout) {
		cb = timeout
		timeout = 10000
	}

	if (!navigator && !navigator.geolocation) {
		return cb(new Error('geolocation api not supported'))
	}

	let succeeded = false
	const onSuccess = (loc) => {
		if (succeeded) return
		succeeded = true
		cb(null, {
			latitude:  loc.coords.latitude,
			longitude: loc.coords.longitude,
			accuracy:  loc.coords.accuracy,
			native:    true
		})
	}
	const onError = (err) => cb(err || new Error('unknown error'))

	navigator.geolocation.getCurrentPosition(onSuccess, onError)
	setTimeout(() => {
		if (!succeeded) cb(new Error('timeout'))
	}, timeout)
}

module.exports = getLocation
