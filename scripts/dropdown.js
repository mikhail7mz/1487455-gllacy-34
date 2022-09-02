let dropdownButtons = document.querySelectorAll('.js-dropdown-button');

dropdownButtons.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    this.classList.toggle('active');
    let dropdownContent = item.parentElement.querySelector('.js-dropdown-content');
    dropdownContent.classList.toggle('opened');
  });
});
