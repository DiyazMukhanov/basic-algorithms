function arrayFilter<T>(arr: T[], cb: (item: T) => boolean): T[] | [] {
    let filteredArray = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray
}

function arrayMap<T, A>(arr: T[], cb: (item: T) => A): A[] {
    let mappedArray = []

    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(cb(arr[i]))
    }

    return mappedArray
}

function arrayReduce<T>(arr: T[], cb: (accum: any, item: T) => any, initial?: any) {
    let accumulator
    let i

    if (initial) {
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

    function extractFromArray(item: any) {
        if (Array.isArray(item)) {
            item.forEach((el: any) => {
                result.push(el)
            })
        } else {
            result.push(item)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        extractFromArray(arr[i])
    }

    depth--

    if (depth < 1) {
        return result
    } else {
        return arrayFlat(result, depth)
    }
}

function arrayFlatMap(arr: any, cb: (item: any) => any) {
    let mappedArray = []

    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(cb(arr[i]))
    }

    console.log(mappedArray)

    let result: any[] = []

    for (let i = 0; i < mappedArray.length; i++) {
        if (Array.isArray(mappedArray[i])) {
            mappedArray[i].forEach((el: any) => {
                result.push(el)
            })
        } else {
            result.push(arr[i])
        }
    }

    return result
}

function arrayEvery(arr: any, cb: (item: any) => boolean) {
    let result = true
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i])) {
            result = false
            break
        }
    }

    return result
}

function arraySome(arr: any, cb: (item: any) => boolean) {
    let result = false

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result = true
            break
        }
    }

    return result
}


