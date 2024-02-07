export function arrayFilter<T>(arr: T[], cb: (item: T, index?: number, originalArr?: any[]) => boolean): T[] | [] {
    let filteredArray = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray
}

export function arrayMap<T, A>(arr: T[], cb: (item: T, index?: number, originalArr?: any[]) => A, thisArg = undefined): A[] {
    let callBackFunc

    if (thisArg) {
        callBackFunc = cb.bind(thisArg)
    } else {
        callBackFunc = cb
    }

    let mappedArray = []

    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callBackFunc(arr[i], i, arr))
    }

    return mappedArray
}

export function arrayReduce<T>(arr: T[], cb: (accum: any, item: T) => any, ...initial: any[]) {
    let accumulator
    let i

    if (initial.length) {
        i = 0;
        accumulator = initial[0]
    } else {
        i = 1;
        accumulator = arr[0]
    }

    for (; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i])
    }

    return accumulator
}

export function arrayFlat<T>(arr: any, depth = 1) {
    let result: any[] = []

    function flatten(arr: any[], depth: number) {
        for (let i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i]) && depth > 0) {
                flatten(arr[i], depth - 1)
            } else {
                result.push(arr[i])
            }
        }

        depth--
    }

    flatten(arr, depth)

    return result
}

export function arrayFlatMap(arr: any, cb: (item: any) => any) {
    let mappedArray = []

    for (let i = 0; i < arr.length; i++) {
        const result = cb(arr[i]);

        if (Array.isArray(result)) {
            result.forEach(item => {
                mappedArray.push(item);
            })
        } else {
            mappedArray.push(result)
        }
    }

    return mappedArray
}

export function arrayEvery(arr: any, cb: (item: any, index?: number, originalArr?: any[]) => boolean) {
    let result = true
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], i, arr)) {
            result = false
            break
        }
    }

    return result
}

export function arraySome(arr: any, cb: (item: any, index?: number, originalArr?: any[]) => boolean) {
    let result = false

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            result = true
            break
        }
    }

    return result
}

// Lodash methods

function objectPick<T extends object>(obj: T, path: string[]): Partial<T> {
    const result: Partial<T> = {}

    for (let i = 0; i < path.length; i++) {
        for (const key in obj) {
            if (path[i] === key) {
                result[key] = obj[key]
            }
        }
    }

    return result
}

function objectOmit<T extends object>(obj: T, path: string[]): Partial<T> {
    const result: Partial<T> = {}

    for (const key in obj) {
        let foundInPath = false

        for (let i = 0; i < path.length; i++) {
            if (key === path[i]) {
                foundInPath = true
            }
        }

        if (!foundInPath) {
            result[key] = obj[key]
        }
    }

    return result
}

function objectGet(obj: any, path: string[], defaultValue: any): any {
    let result: any

    for (let i = 0; i < path.length; i++) {
        let pathElement: string | number

        if (Array.isArray(result)) {
            pathElement = Number(path[i])
        } else {
            pathElement = path[i]
        }

        if (i === 0) {
            result = obj[pathElement]
        } else {
            if (i < path.length - 1 && !result[pathElement]) {
                result = defaultValue
                break
            }

            result = result[pathElement]
        }
    }

    return result
}

function objectSet(obj: any, path: string[], value: any): any {

    let result

    for (let i = 0; i < path.length - 1; i++) {
        if (i === 0) {
            result = obj[path[i]]
        } else {
            if (result) {
                result = result[path[i]]
                if (typeof result !== 'object') {
                    result[path[i] = result[path[i + 1]]]
                }
                console.log(i, result)
            }
        }
    }

    result[path[path.length - 1]] = value

    return obj
}

function arrayDifference(arr: any[], values: any[]) {
    let result

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (arr[i] === values[j]) {
                result = arr.filter(item => item !== arr[i])
            }
        }
    }

    return result
}

function arrayIntersection(...arrays: any[]) {
    let result = arrays.reduce((accum: any[], array: any[]) => {
        return accum.filter(item => array.includes(item))
    })

    return result
}

function invertObject(obj: Object) {
    const result = {}
    for (let prop in obj) {
        result[obj[prop]] = prop
    }

    return result
}

function zip(...arrays: any[]) {
    let result = []

    for (let i = 0; i < arrays.length; i++) {
        result.push([])
    }

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            result[j].push(arrays[i][j])
        }
    }

    return result
}

function unzip(...arrays: any[]) {
    let result

    for (let i = 0; i < arrays.length; i++) {
        result.push([])
    }

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            result[j].push(arrays[i][j])
        }
    }

    return result
}

function chunk(arr, size) {
    let result = [[]]

    for (let i = 0; i < arr.length; i++) {
        if (result[result.length - 1].length < size) {
            result[result.length - 1].push(arr[i])
        } else {
            result.push([])
            result[result.length - 1].push(arr[i])
        }
    }

    return result
}

function groupBy(arr, cb) {
    let result = {}

    for (let i = 0; i < arr.length; i++) {
        let resultKey = cb(arr[i])
        if (result[resultKey]) {
            result[resultKey].push(arr[i])
        } else {
            result[resultKey] = []
            result[resultKey].push(arr[i])
        }
    }

    return result
}

function camelCase(str: string) {
    let result = [];
    let indexOfSpace: number;
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
            result.push(strArr[0].toLowerCase());
        } else {
            if (strArr[i] === ' ') {
                result.push(strArr[i + 1].toUpperCase());
                indexOfSpace = i;
            } else {
                if (i !== indexOfSpace + 1) result.push(strArr[i].toLowerCase());
            }
        }
    }

    return result.join('');
}

function kebabCase(str: string) {
    let result = [];
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
            result.push(strArr[0].toLowerCase());
        } else {
            if (strArr[i] === ' ') {
                result.push('-');
            } else {
                result.push(strArr[i].toLowerCase());
            }
        }
    }

    return result.join('');
}

function snakeCase(str: string) {
    let result = [];
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
            result.push(strArr[0].toLowerCase());
        } else {
            if (strArr[i] === ' ') {
                result.push('_');
            } else {
                result.push(strArr[i].toLowerCase());
            }
        }
    }

    return result.join('');
}

function debounce(func, delay) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => func(...args), delay)
    }
}

function throttle(func, delay) {
    let lastCall = 0

    return function (...args) {
        let now = new Date().getTime()
        if (now - lastCall > delay) {
            func(...args)
            lastCall = now
        }
    }
}









