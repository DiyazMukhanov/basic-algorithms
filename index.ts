function arrayFilter<T>(arr: T[], cb: (item: T, index?: number, originalArr?: any[]) => boolean): T[] | [] {
    let filteredArray = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray
}

function arrayMap<T, A>(arr: T[], cb: (item: T, index?: number, originalArr?: any[]) => A, thisArg = undefined): A[] {
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

function arrayReduce<T>(arr: T[], cb: (accum: any, item: T) => any, ...initial: any[]) {
    let accumulator
    let i

    if (initial.length) {
        i = 0;
        accumulator = initial
    } else {
        i = 1;
        accumulator = arr[0]
    }

    for (; i < arr.length; i++) {
        accumulator = cb(accumulator, arr[i])
    }

    return accumulator
}

function arrayFlat<T>(arr: any, depth = 1) {
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

const myArr = [1, 2, 3]

function arrayFlatMap(arr: any, cb: (item: any) => any) {
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

function arrayEvery(arr: any, cb: (item: any, index?: number, originalArr?: any[]) => boolean) {
    let result = true
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], i, arr)) {
            result = false
            break
        }
    }

    return result
}

function arraySome(arr: any, cb: (item: any, index?: number, originalArr?: any[]) => boolean) {
    let result = false

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            result = true
            break
        }
    }

    return result
}


