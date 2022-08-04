const { baseSum, MathFunc, baseFunc } = require('./utils/Common');
/**
 * floor numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} the number input.
 * @param {number} precision value.
 * @returns {number} Returns the floor result.
 * @example
 *
 * floor(6.006);
 * // => 6
 *
 * floor(6.003, 2);
 * // => 6.00
 *
 * floor(6.006, 2);
 * // => 6.01
 */
var floor = function (number, precision = 0) {
    return precision ? number.toFixed(precision) : Math.floor(number);
};


/**
 * ceil numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} the number iput.
 * @param {number} precision value.
 * @returns {number} Returns the ceil result.
 * @example
 *
 * ceil(6.006);
 * // => 7
 *
 * ceil(6.003, 2);
 * // => 6.00
 *
 * ceil(6.006, 2);
 * // => 6.01
 */
var ceil = function (number, precision = 0) {
    return (precision && floor(number) != number) ? number.toFixed(precision) : Math.ceil(number);
};


/**
 * Divide numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} dividend number.
 * @param {number} divisor number.
 * @returns {number} Returns the divide result.
 * @example
 *
 * divide(4/8);
 * // => 0.5
 *
 * divide(19, 3);
 * // => 6.333333333333333
 *
 * divide(9, 3);
 * // => 3
 */

var divide = function (dividend, divisor) {
    return dividend / divisor;
};

/**
 * Add numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} numbers Comma Seperated Numbers.
 * @returns {number} Returns the addition result.
 * @example
 *
 * add(4,8);
 * // => 12
 *
 * add(19,3,'a');
 * // => 22
 *
 * add(9,3,5);
 * // => 17
 */

var add = function (...rest) {
    let sum = 0;
    for (const value of rest) {
        if (!isNaN(value)) {
            sum = sum + value;
        }
    }
    return sum;
}

/**
 * Sum of numbers
 *
 * @since 1.0.0
 * @category Math 
 * @param {array} arr Array of number.
 * @returns {number} Returns the summation result.
 * @example
 *
 * sum([1,2,3])
 * // => 6
 */


var sum = function (arr) {
    return (arr != null && arr.length) ? baseSum(arr, (value) => value) : arr;
}

/**
 * SumBy of numbers.
 *
 * @since 1.0.0
 * @category Math 
 * @param {array} arr Array of numbers.
 * @param {iteratee} iterate Iterator.
 * @returns {number} Returns the sumBy result.
 * @example
 *
 * sumBy([{ 'n': 4 }, { 'n': 6 }], (val) => val.n);
 * // => 10
 */
var sumBy = function (arr, iterate) {
    return (arr != null && arr.length) ? baseSum(arr, iterate) : arr;
}

/**
 * Mean of numbers
 *
 * @since 1.0.0
 * @category Math 
 * @param {array} arr Array of number.
 * @returns {number} Returns the Mean result.
 * @example
 *
 * mean([1,2,3])
 * // => 2
 */
var mean = function (arr) {
    return (arr != null && arr.length) ? baseSum(arr, (value) => value) / arr.length : 0;
}

/**
 * meanBy of numbers.
 *
 * @since 1.0.0
 * @category Math 
 * @param {array} arr Array of numbers.
 * @param {iteratee} iterate Iterator.
 * @returns {number} Returns the meanBy result.
 * @example
 *
 * meanBy([{ 'n': 4 }, { 'n': 6 }], (val) => val.n);
 * // => 5
 */
var meanBy = function (arr, iterate) {
    return (arr != null && arr.length) ? baseSum(arr, iterate) / arr.length : 0;
}


/**
 * Multiply numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} multiplier number.
 * @param {number} multiplicand number.
 * @returns {number} Returns the multiplication result.
 * @example
 *
 * multiply(4,8);
 * // => 32
 */

var multiply = function (multiplier, multiplicand) {
    let result = multiplier * multiplicand;
    return result;
}

/**
 * Subtract numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} rootNumber number.
 * @param {number} subtrahend number.
 * @returns {number} Returns the subtraction result.
 * @example
 *
 * subtraction(8,2);
 * // => 6
 */
var subtract = function (rootNumber, subtrahend) {
    let result = rootNumber - subtrahend;
    return result;
}

/**
 * Round numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {number} number number.
 * @param {number} position number.
 * @returns {number} Returns round numbers.
 * @example
 *
 * round(9.005, 2);
 * // => 9.01
 */
var round = function (number, position = null) {
    var functionName = Math['round']
    position = position == null ? 0 : (position >= 0 ? Math.min(position, 299) : Math.max(position, -299))
    if (position) {
        let separate = `${number}e`.split('e')
        const recallValue = functionName(`${separate[0]}e${+separate[1] + position}`)

        separate = `${recallValue}e`.split('e')
        return +`${separate[0]}e${+separate[1] - position}`
    }

    return functionName(number)
}

/**
 * Max numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {array} arrVal numbers.
 * @returns {number} Returns max number.
 * @example
 *
 * max([1,2,3]);
 * // => 3
 */
var max = function (arrVal) {
    let arr;
    if (arrVal.length)
        arr = arrVal;
    return MathFunc(arr, 'max');
}

/**
 * Min numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {array} arrVal numbers.
 * @returns {number} Returns min number.
 * @example
 *
 * min([1,2,3]);
 * // => 1
 */

var min = function (arrVal) {
    let arr;
    if (arrVal.length)
        arr = arrVal;
    return MathFunc(arr, 'min')
}

/**
 * maxBy of numbers.
 *
 * @since 1.0.0
 * @category Math 
 * @param {array} arr Array of numbers.
 * @param {iteratee} userData Iterator.
 * @returns {number} Returns the maxBy result.
 * @example
 *
 * maxBy([{n: 10}, {n: 5}, {n: 1}], function(o){ return o.n;});
 * // => {n: 10}
 */
var maxBy = function (arrVal, userData) {
    let arr;
    if (arrVal.length) {
        arr = arrVal;
    }
    return baseFunc(arr, userData, 'max');
};

/**
 * minBy of numbers.
 *
 * @since 1.0.0
 * @category Math 
 * @param {array} arr Array of numbers.
 * @param {iteratee} userData Iterator.
 * @returns {number} Returns the maxBy result.
 * @example
 *
 * minBy([{n: 10}, {n: 5}, {n: 1}], function(o){ return o.n;});
 * // => {n: 1}
 */
var minBy = function (arrVal, userData) {
    let arr;
    if (arrVal.length) {
        arr = arrVal;
    }
    return baseFunc(arr, userData, 'min');
};


module.exports = { floor, ceil, divide, add, sum, sumBy, mean, meanBy, multiply, subtract, round, max, min, maxBy, minBy };