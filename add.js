/**
 * Add numbers.
 *
 * @since 1.0.0
 * @category Math
 * @param {rest} numbers.
 * @returns {sum} Returns the addition result.
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

function add(...rest) {
    let sum = 0;
    for (const value of rest) {
        if(!isNaN(value)){
            sum = sum + value;
        }
    }
    return sum;
  }

