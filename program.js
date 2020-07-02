/*1.HELLO WORLD*/
/*console.log('HELLO WORLD')*/
/*-----------------------------------------------------------------------------------------------------------------*/
/*2.BABY STEPS:*/
/*Solution 1*/
/*var result = 0
for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])
console.log(result)*/

/*Solution 2*/
/*var sum = process.argv.reduce(function (a, b, c) {
    if (c >= 2 && !isNaN(b)) {
      return +a + +b
    } else if (c >= 2) {
       return +a + 0;
    } else {
       return 0;
    }
  })
  console.log(sum)*/
/*-----------------------------------------------------------------------------------------------------------------*/
/*3.My first I/O!*/

/*var fs = require('fs')  
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)*/

/*console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1)*/
/*-----------------------------------------------------------------------------------------------------------------*/
/*4.MY FIRST ASYNC I/O*/

/*Solution 1*/
/*var fs = require('fs')  
var file = process.argv[2]  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})*/

/*Solution 2*/
/*var fs = require('fs')
var lines = undefined
function getLines(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    lines = fileContents.split('\n').length - 1
    callback()
  })
}
function logLines() {
  console.log(lines)
}
function magicNumber() {
  var number = +process.argv[3]
  if (lines >= number){
    console.log('This file has '+number+ ' or more lines')
  } else {
    console.log('This file does not have '+number+' or more lines')
  }
}
getLines(logLines)
getLines(magicNumber)*/
/*-----------------------------------------------------------------------------------------------------------------*/
/*5.FILTERED LS*/

/*Solution 1*/
/*var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + process.argv[3]
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})*/

/*Solution 2*/
/*var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var filterStr = process.argv[3]
function getFiles(dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
    callback(null, list)
  })
}
getFiles(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)
  list.forEach(function (file) {
    console.log(file)
  })
})*/
/*-----------------------------------------------------------------------------------------------------------------*/
/*6.MAKE IT MODULAR*/ 

/*Solution 1*/
/*var fs = require('fs')
var path = require('path')
module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
    callback(null, list)
  })
}*/

    
 
