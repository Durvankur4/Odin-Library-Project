let myStorage=[]; //array to store books
window.onload=()=>{
let addBtn = document.getElementById("add-btn");
let bookForm = document.querySelector(".add-book");
let storage = document.querySelector(".storage");
let container = document.querySelector(".container");
let submitBtn = document.getElementById("add-book-submit");

 class Book {
 
    constructor(title, author, pages, genre) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
    }
}

function addBooktoStorage(title,author,pages,genre){
    let newbook = new Book(title, author, pages, genre);
myStorage.push(newbook);
}

//toggles hide form and blur the container when add btn is pressed
addBtn.addEventListener("click" , function(){
bookForm.classList.toggle("hide");
container.classList.toggle("blur");
});


submitBtn.addEventListener("click", function(e){
    e.preventDefault();

    let title = document.getElementById("add-book-title").value.trim();
    let author = document.getElementById("add-book-author").value.trim();
    let pages = document.getElementById("add-book-pages").value.trim();
    let genre = document.getElementById("add-book-genre").value.trim();

    if(title && author && pages && genre) {
        addBooktoStorage(title, author, pages, genre);

        let originalcard = document.querySelector(".card");
        if (!originalcard) {
            alert("No template card found.");
            return;
        }

        let newcard = originalcard.cloneNode(true);
        newcard.querySelector(".book-title").textContent = title;
        newcard.querySelector(".book-author").textContent = author;
        newcard.querySelector(".book-pages").textContent = pages;
        newcard.querySelector(".tags").textContent = genre;
        newcard.classList.remove("hide"); // show the card

        storage.appendChild(newcard);

        // Reset form and UI
        document.getElementById("add-book-title").value = "";
        document.getElementById("add-book-author").value = "";
        document.getElementById("add-book-pages").value = "";
        document.getElementById("add-book-genre").value = "";
        bookForm.classList.add("hide");
        container.classList.remove("blur");
    } else {
        alert("Please fill all fields");
    }
});


//hides form initally
bookForm.classList.add("hide");
storage.firstElementChild.classList.add("hide");
}