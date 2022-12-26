

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open5]"),
      openModalBtn: document.querySelector("[data-modal-open6]"),

      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal5]"),
      modal: document.querySelector("[data-modal6]")
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();