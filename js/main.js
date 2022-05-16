
//! ========= SEARCH ========
let inpSearch = document.getElementById("inpSearch");
inpSearch.addEventListener("input", (event) => {
  searchValue = event.target.value; 
  readBooks(); 
});

// ! ======== PAGINATION ========
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  if (currentPage <= 1) return; 
  currentPage = currentPage - 1;
  readBooks(); 
});

nextBtn.addEventListener("click", () => {
  if (currentPage >= countPage) return;
  currentPage = currentPage + 1;
  readBooks();
});

function sumPage() {
  fetch(API)
    .then((res) => res.json()) 
    .then((data) => {
      
      countPage = Math.ceil(data.length / 6);

const API = "http://localhost:8000/cards";
readChars()


let charName = document.getElementById('charName')
let originName = document.getElementById('originName')
let dateChar = document.getElementById('dateChar')
let addDesc = document.getElementById('addDesc')
let addImg = document.getElementById('addImg')
let modal = document.getElementsByClassName('modal')
let btnAdd = document.getElementById('btnAdd')
let sectionChar = document.getElementById('sectionChar')

btnAdd.addEventListener("click", () => {
    if (
      !charName.value.trim() ||
      !originName.value.trim() ||
      !dateChar.value.trim() ||
      !addDesc.value.trim() ||
      !addImg.value.trim() 
    ) {
      alert("Заполните все поля!");
      return;
    }
    console.log('ffgrgvuekjv')
    let newChar = {
      name: charName.value,
      origin: originName.value,
      date: dateChar.value,
      desc: addDesc.value,
      img: addImg.value,
    };
    createChar(newChar)
    readChars(newChar)
})

function createChar(char) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(char),
    }).then(() => {
      console.log(char)
      readChars()
    });
    charName.value = ''
    originName.value = ''
    dateChar.value = ''
    addDesc.value = ''
    addImg.value = ''
    // modal.classList.toggle("hidden");
}
  

function readChars() {
    fetch(`${API}`) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        sectionChar.innerHTML = ""; 
        data.forEach((item) => {
          sectionChar.innerHTML += `<div class="card" style="width: 18rem;">
          <img style="width: 100%; object-fit: contain; height:250px; object-fit: cover" src='${
            item.img
          }' class="card-img-top" alt="...">
          <div class ="card-body">
          <p class ="card-text">Имя: ${item.name}</p>
          <p class ="card-text">Оригинальное имя: ${item.origin}</p>
          <p class ="card-text">День рождение: ${item.date}</p>
          <p class ="card-text">Описание: ${item.desc}</p>
           <button id="${item.id}"type="button" class="btn btn-info edit-btn" data-bs-toggle="modal"
                      data-bs-target="#editModal">
                      Edit student
                  </button>
              <button>Delete student</button>
          </div>
      </div>`
        });
        sumPage(); 

    });
}
