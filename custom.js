// === Max Func ===
function max(arrVal)  {
    let arr;
    if(arrVal.length)
    arr = arrVal;
    return MathFunc(arr, 'max');
}

// === Min Func === 
function min(arrVal)  {
    let arr;
    if(arrVal.length)
    arr = arrVal;
    return MathFunc(arr, 'min')
}

// === Max & Min Base Function ===
function MathFunc (arr, condition) {
    let num = arr[0];
    let i = -1;
    
    if(arr && arr.length) {
        while(++i < arr.length) {
            let test = condition == "min" ? num > arr[i] : num < arr[i];
            if(test) {
                num = arr[i];
            }
        }   
    } else num = undefined;
    return num;
}

// === MaxBy Func === 
function maxBy(arrVal, userData)  {
    let arr; 
    if(arrVal.length) {
        arr = arrVal;
    }
    return baseFunc(arr, userData, 'max');
};

// === MinBY Func === 
function minBy(arrVal, userData)  {
    let arr; 
    if(arrVal.length) {
        arr = arrVal;
    }
    return baseFunc(arr, userData, 'min');
};


// === MinBY && MinBY Base Func === 
function baseFunc(arr, prop, condition) {
    let num = typeof prop == 'function' ? prop(arr[0]) :arr[0][prop];
    let obj; 
    let test; 
        arr.map((dt , i) => {
            if(typeof prop === 'string'){
                test = condition == "min" ? num > dt[prop] : (test = num < dt[prop]);
                if(test) {
                    num = dt[prop];
                    obj = dt;
                }
                if(obj == undefined){
                    obj = dt;
                }
            } else if(typeof prop === 'function'){
                test = condition == "min" ? num > prop(dt) : num < prop(dt);
                if(test) {
                    num = prop(dt);
                    obj = dt;  
                }
                if(obj == undefined){
                    obj = dt;
                }
            } 
        } )
        return obj;
}

let arr = [ 1,2,3,4];

console.log(min(arr, 'min'), "min Number")
console.log(max(arr, 'max'), "max Number")

arr = [ {n: 10}, {n: 5}, {n: 1}];
console.log(minBy(arr, function(o){ return o.n; }), "min obj")
console.log(minBy(arr, 'n') , "min obj")
console.log(maxBy(arr, function(o){ return o.n;}) , "max obj")
console.log(maxBy(arr, 'n'), "max obj")


