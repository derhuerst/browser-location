'use strict'

const sink = require('stream-sink')
const umd = require('umd')
const pkg = require('./package.json')

const banner = `'use strict';\n`

process.stdin
.pipe(sink())
.then((src) => {
	const bundle = banner + umd(pkg.name, src)
	process.stdout.write(bundle)
})
.catch((err) => {
	console.error(err)
	process.exit(1)
})
