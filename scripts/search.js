const search = document.getElementById('search-form')
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector('.search-form__inner').classList.add('is-active');
});

body.addEventListener('click', function () {
  document.querySelector('.search-form__inner').classList.remove('is-active');
});