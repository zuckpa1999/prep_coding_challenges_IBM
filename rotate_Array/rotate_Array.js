// rotate array
// 1st method --> brute force with array.unshift(array.pop)
// unshift --> add element at the beginning of the array returns the new length of the array.
// pop -->  removes the last element from an array and returns that element



//brute force , big O :  O(n*k), n = arr.length , k = steps, space complexitivity : O(1)
// runtime complex vsd big O>
let rotateArray = (arr, steps, direction) => {

    if (direction === 'right') {
        for (let i = 0; i < steps; i++)
            arr.unshift(arr.pop())

    }
    else if (direction === 'left') {
        for (let i = 0; i < steps; i++)
            arr.push(arr.shift())

    }
    return arr
}


// use .splice instead of pop/shift, then
// splice the whole chunk and put it at 
// the beginning arr for right
// the end arr for right
// we do this to escape reindexing which can be quite exhaustive for big array
//reduced runtime by half
let rotateArray2 = (arr, steps, direction) => {
    // only work in case arr.length > steps
    // edge case
    if (arr.length > steps) {
        if (direction === 'right')
            return arr.unshift(...arr.splice(-steps))


        else if (direction === 'left')
            return arr.unshift(...arr.splice(0, steps))


    }
    else {
        if (direction === 'right') {
            for (let i = 0; i < steps; i++)
                arr.unshift(arr.pop())

        }
        else if (direction === 'left') {
            for (let i = 0; i < steps; i++)
                arr.push(arr.shift())

        }
        return arr
    }
}
let nums = [1, 2, 3, 4, 5, 6, 7]
let Direction = 'left'
let Steps = 1
console.log(`An array before being rotated : ${nums}`)
console.log(`Direction : ${Direction} , Number of Steps : ${Steps}`)
let result = rotateArray2(nums, Steps, Direction)
console.log(`An array after being rotated : ${result}`)


