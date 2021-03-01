// //Compare Strings //  
//ThoughtWorks Application Developer Hiring Challenge
// May 04, 2018, 07:30 PM WIB - May 07, 2018, 12:30 AM WIB
// You have been given two strings, A and B (of length N each) and Q queries.
// The strings contain only 0s and/or 1s.

// For every query, you are given an index i. You have to update the value at index i to 1 in string B and check if B is lexicographically equal to or larger than A or not.
// If yes, then print "YES" and if not, print "NO" (without quotes).

// Input format

// First line contains two space-separated integers N and Q.
// Next line contains the string A.
// Next line contains the string B.
// Next Q lines contains an integer i (1 - based indexing)
// Output Format

// For each query, print the desired output in a new line.


// SAMPLE INPUT 
// 5 5
// 11111
// 00010
// 1
// 2
// 3
// 4
// 5

// SAMPLE OUTPUT 
// NO
// NO
// NO
// NO
// YES


// Explanation
// After 1st query: B = 10010. B < A. (NO)
// After 2nd query: B = 11010. B < A. (NO)
// After 3rd query: B = 11110. B < A. (NO)
// After 4th query: B = 11110. B < A. (NO)
// After 5th query: B = 11111. B = A. (YES)

// Time Limit:	1.0 sec(s) for each input file.
// Memory Limit:	256 MB
// Source Limit:	1024 KB


/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here



process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;
});
process.stdin.on("end", function () {
    main(stdin_input);
});
function main(input) {
    let data = input.split('\n');
    let NandQ = data[0].split(' ')
    let N = NandQ[0]
    let Q = NandQ[0]
    //   console.log(N)
    let query = data.splice(3)

    let string1 = data[1]
    let string2 = [...data[2]]

    for (let i = 0; i < Q; i++) {
        // console.log(string2)
        string2[query[i] - 1] = 1
        // console.log('fefe')
        // console.log(string2)
        let string22 = string2.join('')
        // console.log('fefe')
        // console.log(string1)
        // console.log('dasdasd')
        // console.log(string22)
        if (string1 === string22)
            console.log('YES')

        else
            console.log('NO')


    }
    // console.log(data[0])
    // console.log(data[1])
}
