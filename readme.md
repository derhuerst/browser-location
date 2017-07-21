# *browser-location*

**Get your current location from the Browser**, using the [geolocation Web API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation).

[![npm version](https://img.shields.io/npm/v/browser-location.svg)](https://www.npmjs.com/package/browser-location)
[![build status](https://img.shields.io/travis/derhuerst/browser-location.svg)](https://travis-ci.org/derhuerst/browser-location)
[![dependency status](https://img.shields.io/david/derhuerst/browser-location.svg)](https://david-dm.org/derhuerst/browser-location)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/browser-location.svg)](https://david-dm.org/derhuerst/browser-location#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/browser-location.svg)

See also:

- [`location`](https://github.com/derhuerst/location) for Node.js
- [`isomorphic-location`](https://github.com/derhuerst/isomorphic-location) for Browsers & Node

**Help Wanted!** Currently, tests are running with Chrome on Windows, but I'd like to extend them to iOS & Android. Contributions welcome!


## Installing

```shell
npm install @derhuerst/browser-location
```


## Usage

```js
const location = require('browser-location')

location((err, loc) => {
	if (err) console.error(err)
	else console.log(loc)
})
```

This will give you something similar to the following:

```js
{
	latitude: 52.547172,
	longitude: 13.347745,
	precision: 65, // in meters
	native: true
}
```

## API

```js
location([timeout], cb)
```

`timeout` is in milliseconds, optional and `10 * 1000` by default. `cb(err, loc)` follows the [Node callback convention](https://stackoverflow.com/a/40512067).


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
