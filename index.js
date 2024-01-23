"use strict";
function arrayFilter(arr, cb) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
function arrayMap(arr, cb) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(cb(arr[i]));
    }
    return mappedArray;
}
function arrayReduce(arr, cb, initial) {
    let accumulator;
    let i;
    if (initial) {
        i = 0;
        accumulator = initial;
    }
    else {
        i = 1;
        accumulator = arr[0];
    }
    for (; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i]);
    }
    return accumulator;
}
function arrayFlat(arr, depth = 1) {
    let result = [];
    function extractFromArray(item) {
        if (Array.isArray(item)) {
            item.forEach((el) => {
                result.push(el);
            });
        }
        else {
            result.push(item);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        extractFromArray(arr[i]);
    }
    depth--;
    if (depth < 1) {
        return result;
    }
    else {
        return arrayFlat(result, depth);
    }
}
function arrayFlatMap(arr, cb) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(cb(arr[i]));
    }
    console.log(mappedArray);
    let result = [];
    for (let i = 0; i < mappedArray.length; i++) {
        if (Array.isArray(mappedArray[i])) {
            mappedArray[i].forEach((el) => {
                result.push(el);
            });
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
function arrayEvery(arr, cb) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i])) {
            result = false;
            break;
        }
    }
    return result;
}
function arraySome(arr, cb) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result = true;
            break;
        }
    }
    return result;
}
