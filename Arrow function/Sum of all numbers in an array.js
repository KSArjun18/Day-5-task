let number = [1, 2, 3, 4, 5, 6, 98, 101, 467]

let sum = number.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log("Sum of elements in Number Array: " + sum)