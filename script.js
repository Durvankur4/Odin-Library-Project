window.onload=()=>{
let addBtn = document.getElementById("add-btn");
let bookForm = document.querySelector(".add-book");
let container = document.querySelector(".container");


bookForm.classList.add("hide");
//toggles hide form and blur the container when add btn is pressed
addBtn.addEventListener("click" , function(){
bookForm.classList.toggle("hide");
container.classList.toggle("blur");
})
}