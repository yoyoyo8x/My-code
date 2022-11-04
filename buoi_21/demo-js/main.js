// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25,
// };

// let text = "";
// for (let x in person){
//     text += person[x] + " ";
// }

// console.log(text);

const fruits= ["Banana","Mango","Watermelon","Stawberry", "Peach"];

// let items = " ";
// for(let x in fruits){
//     items += fruits[x] + " ";
// }

// console.log(items);

// for(let i=0; i<array.length;i++){
//     if(array[i]==value){
//         console.log(array[i]);
//     }
//     return -1;
// }

const indices = [];
for(let i=0; i<fruits.length; i++){ 
    if(fruits[i] === "Mango") {
        indices.push(i);
    }
}

if(-1){
    console.log(indices[0]);
} else {
    console.log(-1);
}


const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

for(let i of arr1){
for(let j of arr2){
    console.log(i.toString() + " " + j.toString());
}
}

// let i=1;
// while(i<5){
//     let j=1;
//     while(j<5){
//         console.log(i.toString() + " " + j.toString());
//         j++;
//     }
//     i++;
// }