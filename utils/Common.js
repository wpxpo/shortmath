var baseSum = function (arr, iterate) {
    let result;
    const shorthandIterate = (typeof (iterate) == 'string') ? 'yes' : '';

    arr.forEach((item) => {
        const currentItem = shorthandIterate ? item[iterate] : iterate(item);

        if (currentItem !== undefined) {
            result = result === undefined ? currentItem : (result + currentItem);
        }
    });

    return result;
}

var MathFunc = function (arr, condition) {
    let num = arr[0];
    let i = -1;

    if (arr && arr.length) {
        while (++i < arr.length) {
            let test = condition == "min" ? num > arr[i] : num < arr[i];
            if (test) {
                num = arr[i];
            }
        }
    } else num = undefined;
    return num;
}

const baseFunc = function (arr, prop, condition) {
    let num = typeof prop == 'function' ? prop(arr[0]) : arr[0][prop];
    let obj;
    let test;
    arr.map((dt, i) => {
        if (typeof prop === 'string') {
            test = condition == "min" ? num > dt[prop] : (test = num < dt[prop]);
            if (test) {
                num = dt[prop];
                obj = dt;
            }
            if (obj == undefined) {
                obj = dt;
            }
        } else if (typeof prop === 'function') {
            test = condition == "min" ? num > prop(dt) : num < prop(dt);
            if (test) {
                num = prop(dt);
                obj = dt;
            }
            if (obj == undefined) {
                obj = dt;
            }
        }
    })
    return obj;
}

module.exports = { baseSum, MathFunc, baseFunc };