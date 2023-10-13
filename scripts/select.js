const element = document.querySelector('.js-choice')

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  silent: true,
  position: 'bottom',
  renderSelectedChoices: 'always',
})