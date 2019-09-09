#!/usr/bin/env node

const readFileMd = require('./index.js')

const [,, ...args]= process.argv //
const optionA = process.argv[2];
const optionB= process.argv[3];


//console.log(readFileMd);