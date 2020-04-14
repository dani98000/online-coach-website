const close = document.getElementById("close");
const open = document.getElementsByClassName("p-flex");
const modal = document.getElementById("modal");

console.log(typeof open);

// Show modal
Array.from(open).forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("show-modal");
  });
});

// Hide modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Hide modal on outside click
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
