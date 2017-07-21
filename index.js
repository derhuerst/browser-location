'use strict'

const getLocation = (timeout = 10000) => {
	return new Promise((resolve, reject) => {
		if (!navigator && !navigator.geolocation) {
			return reject(new Error('geolocation api not supported'))
		}

		let succeeded = false
		const onSuccess = (loc) => {
			if (succeeded) return
			succeeded = true
			resolve({
				latitude:  loc.coords.latitude,
				longitude: loc.coords.longitude,
				accuracy:  loc.coords.accuracy,
				native:    true
			})
		}
		const onError = (err) => reject(err || new Error('unknown error'))

		navigator.geolocation.getCurrentPosition(onSuccess, onError)
		setTimeout(() => {
			if (!succeeded) reject(new Error('timeout'))
		}, timeout)
	})
}

module.exports = getLocation
