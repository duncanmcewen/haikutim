// 3rd party library (from the internet)
const chalk = require('chalk')

// local file (I wrote it)
const lib = require("./library")

// built into node
const os = require('os')

console.log(chalk.blue(lib.b()))
console.log(chalk.red(os.platform(), os.release()))
