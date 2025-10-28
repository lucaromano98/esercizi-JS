const modal = document.getElementById("modal")
const openModal= () => {modal.classList.remove("hidden")}

const closeModal= () =>{modal.classList.add("hidden")}

const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
