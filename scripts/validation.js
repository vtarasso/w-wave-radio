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

  // Если поля пустые возвращаем ошибку
  for (const input of allInputs) {
    removeError(input)

    if(input.value === "") {
      console.log('ошибка поля')
      createError(input, 'Ошибка')
      result = false
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
      alert('Форма успешно проверена');
    }
  });
});
