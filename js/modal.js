
const modal = document.querySelector('#consultation'), 
      modalElements = document.querySelectorAll('[data-modal="consultation"]'),
      closeModal = document.querySelector('[data-close]');

const stateOfModal = (display, overlow) => {
modal.style.display = `${display}`;
// document.body.style.overflow = `${overlow}`;
};

const openModalFunc = elementsOfModal => {
elementsOfModal.forEach(btns => {
  btns.addEventListener('click', () => {
      stateOfModal('block', 'hidden');
  });
});
};

const closeModalFunc = closeElement => {
closeElement.addEventListener('click', () => {
  stateOfModal('none', '');
});
};

modal.addEventListener('click', (e) => {
if (e.target === modal) {
  stateOfModal('none', '');
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape') {
  stateOfModal('none', '');
}
});

const modalTimerId = setTimeout(() => {
stateOfModal('block', 'hidden');
}, 10000);

openModalFunc(modalElements);
closeModalFunc(closeModal);