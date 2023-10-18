document.addEventListener('DOMContentLoaded', function () {
  // Функция очищения инпутов и удаления ошибок
  function clearInput() {
    const inputs = document.querySelectorAll('.modal__input');
    inputs.forEach(input => {
      input.value = '';
      removeError(input); // Удалить бордеры ошибки
    });

    const errorLabels = document.querySelectorAll('.error-label');
    errorLabels.forEach(label => {
      label.remove(); // Удалить текст ошибки
    });
  }

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
      clearInput();
    }
  }

  // Функция удаления ошибки
  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove();
      parent.classList.remove('error');
    }
  }

  // Функция создания ошибки
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;
    parent.classList.add('error');
    parent.append(errorLabel);
  }

  // Функция валидации формы
  function validation(form) {
    let result = true;
    const allInputs = form.querySelectorAll('input');

    // Правила для валидации формы
    for (const input of allInputs) {
      removeError(input);

      // Проверка поля на кириллические символы
      if (input.dataset.noCyrillic == "true") {
        if (!/^[а-яА-ЯЁё\s]+$/.test(input.value)) {
          removeError(input);
          createError(input, 'Логин должен содержать только кириллические символы');
          result = false;
        }
      }

      // Проверка поля на минимальное количество символов
      if (input.dataset.minLength) {
        if (input.value.length < input.dataset.minLength) {
          removeError(input);
          createError(input, `Минимальное количество символов: ${input.dataset.minLength}`);
          result = false;
        }
      }

      // Проверка поля на максимальное количество символов
      if (input.dataset.maxLength) {
        if (input.value.length > input.dataset.maxLength) {
          removeError(input);
          createError(input, `Максимальное количество символов: ${input.dataset.maxLength}`);
          result = false;
        }
      }

      // Проверка поля на обязательное заполнение
      if (input.dataset.required == "true") {
        if (input.value === "") {
          removeError(input);
          createError(input, 'Ошибка');
          result = false;
        }
      }
    }

    return result;
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
      if (document.getElementById('login-modal').classList.contains('open')) {
        closeModal('login-modal');
      } else if (document.getElementById('signIn-modal').classList.contains('open')) {
        closeModal('signIn-modal');
      }
    }
  });

  // Открытие модального окна регистрации из окна входа
  document.getElementById('login-modal-btn').addEventListener('click', () => {
    closeModal('signIn-modal');
    openModal('login-modal');
  });

  // Открытие модального окна входа из окна регистрации
  document.getElementById('signIn-modal-log').addEventListener('click', () => {
    closeModal('login-modal');
    openModal('signIn-modal');
  });

  // Закрытие модального окна регистрации
  document.getElementById('login-modal-close').addEventListener('click', () => {
    closeModal('login-modal');
  });

  // Закрыть м.о. при клике вне него (вход)
  document.querySelector('#signIn-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
  });

  document.getElementById('signIn-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    clearInput();
  });

  // Закрыть м.о. при клике вне него (регистрация)
  document.querySelector('#login-modal .modal__box').addEventListener('click', event => {
    event._isClickWithInModal = true;
  });

  document.getElementById('login-modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    clearInput();
  });

  // Выбираем все формы с классом .modal__form
  const allForms = document.querySelectorAll('.modal__form');

  // Добавляем обработчик события submit для каждой формы
  allForms.forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validation(this) === true) {
        alert('Форма успешно заполнена');
      }
    });
  });
});
