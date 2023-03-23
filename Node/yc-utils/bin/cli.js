#!/usr/bin/env node
const {program} = require('commander')
const help = require('../lib/core/help')
const command = require('../lib/core/command.js')
help(program)
command(program)


program.parse(process.argv)
