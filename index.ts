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

const myArr = [1, 2, 3]

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

const myObj = { lang: [{ python: { java: 3 } }] }




