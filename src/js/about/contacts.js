(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open5]"),
      openModalBtn1: document.querySelector("[data-modal-open6]"),

      closeModalBtn: document.querySelector("[data-modal-close5]"),
      modal: document.querySelector("[data-modal5]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();