$(document).ready(function () {
    var typed = new Typed(".typed", {
      strings: ["Java Developer", "TroubleShoot", "My zest is to learn a new tech with experience crew"],
      typeSpeed: 60,
      startDelay: 900,
      showCursor: false,
      loop: true,
      backDelay: 900,
      backSpeed: 40,
    });  
});


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
function closeModal() {
  document.getElementsByClassName("modal")[0].classList.add("hidden");
  document.getElementsByClassName("overlay")[0].classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
document.getElementsByClassName("btn-close").addEventListener("click", closeModal());
document.getElementsByClassName("overlay").addEventListener("click", closeModal());

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !document.getElementsByClassName("modal")[0].classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
function openModal() {
  document.getElementsByClassName("modal")[0].classList.remove("hidden");
  document.getElementsByClassName("overlay")[0].classList.remove("hidden");
}





