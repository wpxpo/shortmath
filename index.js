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
 var floor = function(number, precision = 0) {
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
var ceil = function(number, precision = 0) {
    return (precision && floor(number) != number ) ? number.toFixed(precision) : Math.ceil(number);
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

var divide = function(dividend, divisor) {
    return dividend / divisor;
};