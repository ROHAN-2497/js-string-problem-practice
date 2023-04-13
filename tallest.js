// function maxInArray(numbers){
//     let largest  = numbers[0];
//     for(let i = 0; i < numbers.length; i ++){
//         const index = i;
//         const element = numbers[index];
//         if(element > largest){
//           largest = element;
//         }
//     }
//         return  largest;

// }
// const heights = [167, 190, 120, 130, 140, 177];
// const tallest = maxInArray(heights);
// console.log("tallest number", tallest)


// function minInarray(numbers){
//     let smallest = numbers[0];
//     for(let i = 0; i > numbers.length; i--){
//         const index = i ;
//         const element = numbers[index];
//         if(element < smallest){

//             smallest = element;
//         }
//     }
//     return smallest;

// }
// const height = [167, 190, 120, 165, 137];
// const smallest = minInarray(height);
// console.log("smallest number is: ", smallest)


function maxInArray(numbers){
    let largest = numbers[0];
    for( let i = 0; i < numbers.length;  i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){

            largest = element
        }
    }
    return largest  ;

}
const height = [167, 190, 120, 130, 140, 3030]
const tallest = maxInArray(height)
console.log(tallest)