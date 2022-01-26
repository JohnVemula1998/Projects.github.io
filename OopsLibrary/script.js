class Book {
  constructor(title, author, release_date, book_pages) {
    this.title = title;
    this.author = author;
    this.release_date = release_date;
    this.book_pages = book_pages;
  }
}
const title = document.getElementById("title");
const authorname = document.getElementById("author");
const date = document.getElementById("date");
const pages = document.getElementById("pages");
const addBtn = document.getElementById("submit");
const BookCtn = document.getElementById("book");
const form = document.getElementById('form');
addBtn.addEventListener("click", CreateBook);

function CreateBook(event) {
  event.preventDefault();
  const BookTitle = title.value;
  const AuthorName = authorname.value;
  const ReleaseDate = date.value;
  const BookPages = pages.value;
  const book1 = new Book(BookTitle, AuthorName, ReleaseDate, BookPages);
  console.log(book1);
  const book = document.createElement("div");
  book.classList.add("book");
  book.innerHTML = `<h3>${BookTitle}</h3>
    <h4>${AuthorName}</h4>
    <p>${ReleaseDate}</p>
    <p>pages: ${BookPages}</p>`;
    BookCtn.appendChild(book);
    form.classList.add('d-none');
    addBook.classList.remove('d-none');
}
 


const addBook = document.getElementById('add');
addBook.addEventListener('click',_ => {
    form.classList.remove('d-none');
    addBook.classList.add('d-none');
})