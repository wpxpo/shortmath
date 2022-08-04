const baseSum = (arr, iterate) => {
  
  let result;
  const shorthandIterate = (typeof(iterate) == 'string') ? 'yes' : '';
  
  arr.forEach( (item) => {
    const currentItem = shorthandIterate ? item[iterate] : iterate(item);

    if (currentItem !== undefined) {
      result = result === undefined ? currentItem : (result + currentItem);
    }
  });

  return result;
}


const sum = (arr) => {
  return (arr!= null && arr.length) ? baseSum(arr, (value) => value) : arr;
}

const sumBy = (arr, iterate) => {
  return (arr!= null && arr.length) ? baseSum(arr, iterate) : arr;
}

const mean = (arr) => {
  return (arr!= null && arr.length) ? baseSum(arr, (value) => value)/arr.length : 0;
}
const meanBy = (arr, iterate) => {
  return (arr!= null && arr.length) ? baseSum(arr, iterate)/arr.length : 0;
}
