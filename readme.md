# *browser-location*

**Get your current location from the Browser.**

[![npm version](https://img.shields.io/npm/v/browser-location.svg)](https://www.npmjs.com/package/browser-location)
[![build status](https://img.shields.io/travis/derhuerst/browser-location.svg)](https://travis-ci.org/derhuerst/browser-location)
[![dependency status](https://img.shields.io/david/derhuerst/browser-location.svg)](https://david-dm.org/derhuerst/browser-location)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/browser-location.svg)](https://david-dm.org/derhuerst/browser-location#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/browser-location.svg)


## Installing

```shell
npm install derhuerst/browser-location
```


## Usage

```js
const location = require('browser-location')

location()
	.then((l) => console.log(l))
	.catch((err) => console.error(err))
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
