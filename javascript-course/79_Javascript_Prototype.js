// Constructor function for creating Book objects
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Adding a method to the Book prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// Creating instances of Book objects
var book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
var book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Calling the getSummary method on the Book objects
console.log(book1.getSummary());
console.log(book2.getSummary());
