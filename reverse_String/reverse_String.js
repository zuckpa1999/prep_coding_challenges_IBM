
// 2. Reverse Each word of a given string
//     1. Condition : except first and last character
//     2. Input : This is a coding question for reversing a string
//     3. Output : Tihs is a cnidog qoitseun for rnisreveg a snirtg  

let input = "This is a coding question for reversing a string"


let reverse_string = (input) => {
    // console.log(input)
    let array = input.split(" ")
    // console.log(array)
    // console.log(array[0])
    // console.log(array[1])
    let reverse = []

    for (let i = 0; i < array.length; i++) {
        // console.log('czxc')
        // console.log(array[i])
        if (array[i].length > 1) {
            let str = ''
            str += array[i][0]
            for (let j = array[i].length - 1; j >= 0; j--) {
                // console.log('fef')

                if (j !== 0 && j !== array[i].length - 1) {
                    // console.log(array[i][j])

                    str += array[i][j]

                }


            }
            str += array[i][array[i].length - 1]
            reverse.push(str)
        }
        else
            reverse.push(array[i])
    }
    return reverse
    // console.log(array)
    // console.log(array[0])
    // console.log(array[1])

}

let result = reverse_string(input)
console.log(`the input is ${input}`)
console.log(`the output is ${result}`)


