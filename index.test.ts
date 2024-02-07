import { arrayFilter, arrayMap, arrayReduce, arrayFlat, arrayFlatMap, arrayEvery, arraySome } from './index'

test('arrayFilter returns array with less then 5', () => {
    function testCb(item: number): boolean {
        return item < 5
    }

    expect(arrayFilter([7, 2, 3, 10], testCb)).toEqual([2, 3])
})

test('arrayMap returns array with each element + 2', () => {
    function testCb(item: number): number {
        return item + 2
    }

    expect(arrayMap([1, 2, 3], testCb)).toEqual([3, 4, 5])
})

test('arrayReduce returns sum of all elements', () => {
    function testCb(accum: number, item: number): number {
        return accum + item
    }

    expect(arrayReduce([1, 2, 3], testCb, 0)).toBe(6)
})

test('arrayFlat with depth = 2 returns [1, 2, 3, 4, 5, 6, 7]', () => {
    expect(arrayFlat([1, 2, 3, [4, 5, [6, 7]]], 2)).toEqual([1, 2, 3, 4, 5, 6, 7])
})

test('arrayFlatMap returns [1, 2, 2, 1]', () => {
    function testCb(num: number): number | number[] {
        return num === 2 ? [2, 2] : 1
    }

    expect(arrayFlatMap([1, 2, 1], testCb)).toEqual([1, 2, 2, 1])
})

test('arrayEvery returns true', () => {
    function testCb(num: number): boolean {
        return num < 5
    }
    expect(arrayEvery([1, 2, 4], testCb)).toBe(true)
})

test('arraySome returns false', () => {
    function testCb(num: number) {
        return num < 5
    }

    expect(arraySome([6, 7, 8], testCb)).toBe(false)
})




