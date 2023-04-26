//Write a program to insert an element in sorted order into a sorted array

const arr = [1,2,3,4,5,6,8,10]
const n= 9

i = arr.length-1

while(n<arr[i]){
    arr[i+1] = arr[i]
    i--
}
arr[i+1] = n

console.log(arr);
