# ShortMath

ShortMath is a math library for Node.js.

## Installation
Using npm:
```shell
$ npm i -g shortmath
$ npm i shortmath
```
Note: add `--save` if you are using npm < 5.0.0

## Examples
```js
const {floor} = require('shortmath');

floor(6.006);                                             // 6
floor(6.003, 2);                                          // 6


const {ceil} = require('shortmath');

ceil(6.003, 2);                                           // 6.00
ceil(6.006, 2);                                           // 6.01


const {divide} = require('shortmath');

divide(19, 3);                                            // 6.333333333333333
divide(9, 3);                                             // 3


const {sum} = require('shortmath');

sum([1,2,3])                                              // 6


const {sumBy} = require('shortmath');

sumBy([{ 'n': 4 }, { 'n': 6 }], (val) => val.n);          // 10


const {mean} = require('shortmath');

mean([1,2,3]);                                            // 2


const {meanBy} = require('shortmath');

meanBy([{ 'n': 4 }, { 'n': 6 }], (val) => val.n);         // 5


const {multiply} = require('shortmath');

multiply(2,3);                                            // 6


const {subtract} = require('shortmath');

subtract(8,2);                                            // 6


const {round} = require('shortmath');

round(9.005, 2);                                          // 9.01


const {max} = require('shortmath');

max([1,2,3]);                                             // 3


const {min} = require('shortmath');

min([1,2,3]);                                             // 1


const {maxBy} = require('shortmath');

maxBy([{n: 10}, {n: 5}, {n: 1}], (o)=> o.n);              // {n: 10}


const {minBy} = require('shortmath');

minBy([{n: 10}, {n: 5}, {n: 1}], (o)=> o.n);       // {n: 1}
```

