const modal = document.querySelector("#modal")
const openBtn = document.querySelector("#openModal")
const closeBtn = document.querySelector("#closeModal")
const bookForm = document.querySelector('#bookForm')

const myLibrary = []

function Book(title,author,pages,read){
  this.id = crypto.randomUUID()
  this.title = title
  this.author =author
  this.pages = pages
  this.read = read

}

bookForm.addEventListener('submit',function(e){
  e.preventDefault()

  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const read = document.querySelector('#read').checked

  addBookToLibrary(title, author, pages, read)
  bookForm.reset()

  modal.classList.add('hidden')

})

function addBookToLibrary ( title, author, pages, read){
  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  displayBooks()

}

function displayBooks(){
  const bookCard = document.querySelector('#bookCard')
  const books = myLibrary.map(book =>`

    <div class="bg-white-300 shadow-lg rounded-xl p-2 w-full">

          <h3 class="text-xl text-center font-bold text-gray-800"> ${book.title}</h3>
          <p class="text-gray-600 mt-1">${book.author}</p>
          <p class="text-sm text-gray-500 mt-1">${book.pages}</p>
          <span class="inline-block mt-3 px-3  text-sm bg-green-100 text-green-700 rounded-full">${book.read? 'read': 'not read yet'}</span>
       

          
    </div>`


  )
  return  bookCard.innerHTML = books.join('')
   
}

  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
 addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
 addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
 addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
 addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
 addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
 addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)
  addBookToLibrary('the hobbit','fazlie',204,false)


openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden")
})


