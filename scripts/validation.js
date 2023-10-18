function validation(form) {
  // Функция удаления ошибки
  function removeError(input) {
    const parent = input.parentNode

    if(parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }

  // Функция создания ошибки
  function createError(input, text) {
    const parent = input.parentNode
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')

    parent.append(errorLabel)
  }

  let result = true

  const allInputs = form.querySelectorAll('input')

  // правила валидации
  for (const input of allInputs) {
    removeError(input)

    // Проверка поля на кирилические символы
    if (input.dataset.noCyrillic == "true") {
      if (!/^[а-яА-ЯЁё\s]+$/.test(input.value)) {
        removeError(input);
        createError(input, 'Логин должно содержать только кирилические символы');
        result = false;
      }
    }

    // Проверка поля на минимальное количество символов
    if(input.dataset.minLength) {
      if(input.value.length < input.dataset.minLength) {
        removeError(input)
        createError(input, `Минимальное количество символов: ${input.dataset.minLength}`)
        result = false
      }
    }

    // Проверка поля на максимальное количество символов
    if(input.dataset.maxLength) {
      if(input.value.length > input.dataset.maxLength) {
        removeError(input)
        createError(input, `Максимальное количество символов: ${input.dataset.maxLength}`)
        result = false
      }
    }

    // Проверка поля на обязательное заполнение
    if(input.dataset.required == "true") {
      if(input.value === "") {
        removeError(input)
        createError(input, 'Ошибка')
        result = false
      }
    }
  }

  return result
}

// Выбираем все формы с классом .modal__form
const allForms = document.querySelectorAll('.modal__form');

// Добавляем обработчик события submit для каждой формы
allForms.forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validation(this) === true) {
      alert('Форма успешно заполнена');
    }
  });
});
