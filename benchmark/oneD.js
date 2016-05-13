'use strict';

var Matrix2D = require('../src/matrix');
var Matrix1D = require('../src/matrix2');
var Matrix1D3 = require('../src/matrix3');

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var r = 65535 * 65535;
var c = 65535 * 65535;
// var matrix2d = new Matrix2D(r, c);
//var matrix1d = new Matrix1D(r, c);
var matrix1d3 = new Matrix1D3(r, c);

var l = (Math.floor(r / 1000000)) * (Math.floor(r / 1000000));
var indices = new Array(l);

for (var i = 0; i < l; i++) {
    var index = getRandomIndex();
    var number = Math.random();
    // matrix2d[index[0]][index[1]] = number;
 //   matrix1d.set(index[0], index[1], number);
    matrix1d3.set(index[0], index[1], number);
    indices[i] = index;
}

function getRandomIndex() {
    return [getRandomNumber(r), getRandomNumber(c)];
}

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

suite
    // .add('2d', function () {
    //     for (var i = 0; i < l; i++) {
    //         var number = matrix2d[indices[i][0]][indices[i][1]];
    //     }
    // })
    // .add('1d', function () {
    //     for (var i = 0; i < l; i++) {
    //         var number = matrix1d.get(indices[i][0], indices[i][1]);
    //     }
    // })
    .add('1d3', function () {
        for (var i = 0; i < l; i++) {
            var number = matrix1d3.get(indices[i][0], indices[i][1]);
        }
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();

