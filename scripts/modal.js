document.addEventListener('DOMContentLoaded', function () {
  // Функция для открытия модального окна
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
    }
  }

  // Функция для закрытия модального окна
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
    }
  }

  // Открытие модального окна входа
  document.getElementById('modal-open').addEventListener('click', () => {
    openModal('signIn-modal');
  });

  // Закрытие модального окна входа
  document.getElementById('signIn-modal-close').addEventListener('click', () => {
    closeModal('signIn-modal');
  });

  // Закрытие модального окна при нажатии клавиши "Escape"
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('signIn-modal');
      closeModal('login-modal');
    }
  });

  // Открытие модального окна регистрации
  document.getElementById('login-modal-btn').addEventListener('click', () => {
    closeModal('signIn-modal');
    openModal('login-modal');
  });

  // Открытие модального окна входа из регистрации
  document.getElementById('signIn-modal-log').addEventListener('click', () => {
    closeModal('login-modal');
    openModal('signIn-modal');
  });

  // Закрытие модального окна регистрации
  document.getElementById('login-modal-close').addEventListener('click', () => {
    closeModal('login-modal');
  });

  // Закрыть м.о. при клике вне его - входа
  document.querySelector('#signIn-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true
  })

  document.getElementById('signIn-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove('open')
  })

  // Закрыть м.о. при клике вне его - регистрации
  document.querySelector('#login-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true
  })

  document.getElementById('login-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove('open')
  })
});