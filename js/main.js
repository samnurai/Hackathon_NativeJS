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
    });
}
