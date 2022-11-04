// // Document Object Model
// console.log(document.title);
// document.title = "ABC";
// console.log(document.head);
// console.log(document.body);
// const friends = 200;
// // document.body.innerHTML = `Hello ${friends} anh em`;

// document.body.textContent = `<h1>Hello ${friends} anh em<h1>`;

// console.log([document.getElementById("demo")]);
// document.getElementById("demo").innerHTML = "Hello World";

// console.log(document.getElementsByTagName("p"));
// // document.getElementsByTagName("p")[0].innerHTML = "Hello World";
// // document.getElementsByTagName("p")[1].innerHTML = "Hello World";
// // document.getElementsByTagName("p")[2].innerHTML = "Hello World";

// //for
// const pcollections = document.getElementsByTagName("p");
// for(let i = 0; i < pcollections.length; i++){
//     pcollections[i].innerHTML = "Hello World";
// }

// //for of
// for(let elemnent of pcollections){
//     elemnent.innerHTML = "Hello World";
// }

// //Good Morning
// console.log([document.getElementsByClassName("greeting")]);
// const pgreeting = document.getElementsByClassName("greeting");
// for( let element of pgreeting){
//     element.innerHTML = "Good Morning";

// }

// console.log(document.querySelectorAll(".greeting"));

// document.querySelectorAll(".greeting")[0].style.color = "red";

// document.querySelector(".banner").src = "./img/dog.avif";
// document.querySelector(".banner").height = 500 ;
// document.querySelector(".banner").alt = "Dog";

document.querySelector(".banner").setAttribute("src", "./img/dog.avif");

// document.querySelector(".heading").style.color="red";
// document.querySelector(".heading").style.backgroundColor = "aqua";
// document.querySelector(".heading").style.fontSize="10px"
// console.log( document.querySelector(".heading"));
// Cach 1
// document.querySelector(".heading").className += " active";
//Cach 2
// document.querySelector(".heading").classList.add("active");

function toggleButton() {
  const el = document.querySelector("h2");
  el.style.display = el.style.display == "none" ? "block" : "none";
}

function hoverHeading(element) {
  element.style.color = "red";
}
