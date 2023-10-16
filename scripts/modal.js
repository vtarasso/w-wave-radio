// Открыть модальное окно
document.getElementById('modal-open').addEventListener('click', function() {
  document.getElementById('my-modal').classList.add('open')
})

// Закрыть модальное окно
document.getElementById('modal-close').addEventListener('click', function() {
  document.getElementById('my-modal').classList.remove('open')
})

// Закрыть м.о. при помощи Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('my-modal').classList.remove('open')
  }
})

// Закрыть м.о. при клике вне его
document.querySelector('#my-modal .modal__box').addEventListener('click', event => {
  event._isClickWithInModal = true
})

document.getElementById('my-modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return
  event.currentTarget.classList.remove('open')
})

