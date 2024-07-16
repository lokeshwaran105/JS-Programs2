// Program Array Sorting

function arraySorting(arr) {
    return arr.sort();
}
var arr = [1,6,4,7,2];
console.log(arraySorting(arr));

// Program Max and Min

var arr = [1,6,4,7,2];
var max = 0;
var min = arr[0];
function minAndmax(arr) {

    for(let i=0; i<arr.length; i++){
        if(this.max < arr[i]){
            this.max = arr[i];
        }

        if(this.min > arr[i]){
            this.min = arr[i];
        }
    }
}

minAndmax(arr);
console.log(min);
console.log(max);


// // Program Comparing two arrays

var flag = true;

function compareArrays(arr1, arr2) {
    
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            this.flag = false;
        }
    }
}

let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

compareArrays(arr1, arr2);

if(this.flag){
    console.log("Both arrays are equal");
}
else{
    console.log("Not equal");
}

// // Program To find longest string in an array

const longestString = (arr) => {

    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > max){
            max = i;
        }
    }

    return arr[max];
    
}

let str = ["Bye", "Hi", "This"];

console.log(longestString(str));

// // Program for Array Searching

let arr = [6,2,1,1,4,5,6];
console.log(arr.lastIndexOf(1));
console.log(arr.indexOf(1));



