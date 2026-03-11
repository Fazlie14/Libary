

const myLibrary = []

function Book(title,author,pages,read){
  this.id = crypto.randomUUID()
  this.title = title
  this.author =author
  this.pages = pages
  this.read = read

}

function addBookToLibrary ( title, author, pages, read){
  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  displayBooks()

}

function displayBooks(){
  const bookCard = document.querySelector('#bookCard')
  const books = myLibrary.map(book =>`

    <div class='card'>
           <h3> ${book.title}</h3>
          <p>${book.author}</p>
           <span>${book.read? 'read': 'not read yet'}</span>
          
    </div>`


  )

  // for(const books of myLibrary){
    
  //     book.push( `<div>
  //       <h1> ${books.title}</h1>
  //      <p>${books.author}</p>
  //       <span>${books.read? 'read': 'not read yet'}</span>
        
  //      </div>`)
     
  // }

  return  bookCard.innerHTML = books.join('')
   
}


addBookToLibrary('The Hobbit','Jrr',12,true)
addBookToLibrary('The Hobbit','Jrr',12,false)
console.log(myLibrary)