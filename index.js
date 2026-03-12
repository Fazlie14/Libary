const modal = document.querySelector("#modal")
const openBtn = document.querySelector("#openModal")
const closeBtn = document.querySelector("#closeModal")
const bookForm = document.querySelector('#bookForm')
const bookCard = document.querySelector('#bookCard')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const readInput = document.querySelector('#read')


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

  const title = titleInput.value
  const author = authorInput.value
  const pages = pagesInput.value
  const read = readInput.checked

  addBookToLibrary(title, author, pages, read)
  bookForm.reset()
  modal.classList.add('hidden')

})

bookCard.addEventListener('click', function(e){
  const delBtn = e.target.closest('.delBtn')
  const toggle = e.target.closest('.toggle')


  if(delBtn){
    const id = delBtn.dataset.id
    

   myLibrary = myLibrary.filter(book => book.id !== id)
    savedBooks()
    displayBooks()
  }

  if(toggle){
    const id = toggle.dataset.id
    const book = myLibrary.find(book => book.id === id)
    
    if(book){
      book.updateReadStatus()
       savedBooks()
      displayBooks()
    }
   
   
  }



  
})


function addBookToLibrary ( title, author, pages, read){
  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  savedBooks()
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

  <span class="inline-block mt-3 px-3 py-1 text-sm ${book.read? 'bg-green-100 text-green-700': 'bg-yellow-100 text-yellow-500'} rounded-full">
    ${book.read ? 'read' : 'not read yet'}
  </span>
  <button class="toggle bg-blue-500 px-3 py-1 rounded-full text-white text-xs block mt-2 hover:bg-blue-300 cursor-pointer" data-id='${book.id}'>toggle</button>

</div>
       

          
    </div>`


  )
  return  bookCard.innerHTML = books.join('')
   
}

function savedBooks(){
  localStorage.setItem('Books',JSON.stringify(myLibrary))
}
function loadBooks(){
  const data = JSON.parse(localStorage.getItem('Books'))


  if(data !== null){
      myLibrary = data.map(book => new Book(
        book.title,
        book.author,
        book.pages,
        book.read

      ))
      // displayBooks()

  }
}




openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden")
})

loadBooks()
displayBooks()



