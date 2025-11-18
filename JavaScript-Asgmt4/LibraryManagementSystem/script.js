class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.isIssued = isIssued
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true
      return true
    }
    return false
  }

  returnBook() {
    if (this.isIssued) {
      this.isIssued = false
      return true
    }
    return false
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "101"),
  new Book("Atomic Habits", "James Clear", "102"),
  new Book("Dune", "Frank Herbert", "103"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104")
]

console.log("Available Books:")
books.filter(b => !b.isIssued).forEach(b => console.log(b.title))

function issueBookByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn)
  if (!book) {
    console.log("Book not found")
    return
  }
  if (book.issueBook()) {
    console.log("Book issued:", book.title)
  } else {
    console.log("Book already issued")
  }
}

issueBookByISBN("102")
