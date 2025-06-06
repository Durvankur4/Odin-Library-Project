function book(title,author,pages,readornot){
 
    this.booktitle = title; //assigns parameters to the object members
    this.author = author;
  this.pages= pages;
  this.readornot = readornot;

    let readfunc=(r)=>{         //checks readornot and returns strigns
if(r===false){
       return ("not yet read");
    }else{
        return ("read");
    }
    }
    

    this.description = function(){
        console.log(this.booktitle + "written by " + this.author +", "+this.pages+" pages,"+ readfunc(this.readornot))
        //funciton which provide description about the book

    }
}
const b1 = new book("The Hobbit ","J.R.R. Tolkien","300",false);
b1.description(); //The Hobbit written by J.R.R. Tolkien, 300 pages,not yet read









