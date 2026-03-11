const modal = document.querySelector("#modal")
const openBtn = document.querySelector("#openModal")
const closeBtn = document.querySelector("#closeModal")
const bookForm = document.querySelector('#bookForm')
const bookCard = document.querySelector('#bookCard')

let myLibrary = []

function Book(title,author,pages,read){
  this.id = crypto.randomUUID()
  this.title = title
  this.author =author
  this.pages = pages
  this.read = read

}

Book.prototype.updateReadStatus = function(){
  return this.read = !this.read
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

bookCard.addEventListener('click', function(e){
  const delBtn = e.target.closest('.delBtn')


  if(delBtn){
    const id = delBtn.dataset.id
    console.log(`book deleted ${id}`)

   myLibrary = myLibrary.filter(book => book.id !== id)

    displayBooks()
  }

  
})

bookCard.addEventListener('click',function(e){
  const toggle = e.target.closest('.toggle')

  if(toggle){
    const id = toggle.dataset.id
    const books = myLibrary.find(book => book.id === id)
    
    if(books){
      books.updateReadStatus()
      displayBooks()
    }
   
   
  }
})

function addBookToLibrary ( title, author, pages, read){
  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  displayBooks()

}

function displayBooks(){
 
  const books = myLibrary.map(book =>`

    <div class="bg-white shadow-lg rounded-xl p-4 h-50 w-full">

  <div class="flex justify-between items-center">

    <h3 class="text-xl font-bold text-gray-800">
      ${book.title}
    </h3>

    <button class='delBtn' data-id="${book.id}">
      <img src="./icon/bin.png" alt="delete" class="w-5 hover:scale-110 transition">
    </button>

  </div>

  <p class="text-gray-600 mt-2">${book.author}</p>

  <p class="text-sm text-gray-500 mt-1">${book.pages}</p>

  <span class="inline-block mt-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
    ${book.read ? 'read' : 'not read yet'}
  </span>
  <button class="toggle bg-blue-500 px-3 py-1 rounded-full text-white text-xs block mt-2 hover:bg-blue-300 cursor-pointer" data-id='${book.id}'>toggle</button>

</div>
       

          
    </div>`


  )
  return  bookCard.innerHTML = books.join('')
   
}


openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden")
})



