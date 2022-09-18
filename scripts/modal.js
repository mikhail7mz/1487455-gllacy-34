let modalButtons = document.querySelectorAll('.js-modal-open');
let overlay      = document.querySelector('.modal-overlay');
let closeButtons = document.querySelectorAll('.js-modal-close');

/* открытие окон. */
modalButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let modalId = this.getAttribute('data-modal');
    let modalElem = document.querySelector(`.modal[data-modal="${modalId}"]`);

    modalElem.classList.add('modal-active');
    overlay.classList.add('modal-active');
  }); // end click
}); // end foreach

/* закрытие окон */
closeButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
    this.closest('.modal').classList.remove('modal-active');
    overlay.classList.remove('modal-active');
  });
}); // end foreach

/* закрытие по ESC */
document.body.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    document.querySelector('.modal.modal-active').classList.remove('modal-active');
    document.querySelector('.modal-overlay.modal-active').classList.remove('modal-active');
  };
}, false);

/* скрытие окна при клике на подложку */
overlay.addEventListener('click', function() {
  document.querySelector('.modal.modal-active').classList.remove('modal-active');
  this.classList.remove('modal-active');
});
