(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-m-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-m-menu-close]'),
    modal: document.querySelector('[data-modal-m-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-m-menu');
  }
})();
