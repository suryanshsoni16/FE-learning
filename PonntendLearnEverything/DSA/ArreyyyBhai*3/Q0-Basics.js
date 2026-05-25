

// initialize
let arr = [1,2,3,4,5 ]
let arr2 = new Array(5)
let arr3 = new Array(1,2,3,4,5).fill(0)

console.log(arr)
console.log(arr2)
console.log(arr3)

//traversing
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

for(let i of arr){
    console.log(i)
}

arr.forEach((element) => {
    console.log(element)
})

//insertion
arr.push(6) // O(1)
arr.unshift(0) // O(n)

//deletion
arr.pop() // O(1)
arr.shift() // O(n)

//searching
console.log(arr.indexOf(3)) // O(n)
console.log(arr.includes(3)) // O(n)

//sorting
arr.sort((a,b) => a-b) // O(n log n)
console.log(arr)

//reverse
arr.reverse() // O(n)
console.log(arr)    

