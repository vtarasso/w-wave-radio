document.getElementById('load-more').addEventListener('click', function () {
  const hiddenBlocks = document.querySelectorAll('.podcasts__item--hide');
  const visibleBlocks = document.querySelectorAll('.show');
  const showMoreButton = document.getElementById('load-more')
  
  // Определяем, сколько блоков нужно показать
  const numToShow = 4;
  const startIndex = visibleBlocks.length;
  const endIndex = startIndex + numToShow;

  // Показываем следующие 4 скрытых блока
  for (let i = startIndex; i < endIndex; i++) {
    if (hiddenBlocks[i]) {
      hiddenBlocks[i].classList.add('show');
    }
  }

  // Проверяем, сколько скрытых блоков осталось
  const remainingHiddenBlocks = hiddenBlocks.length - endIndex;

  // Если больше нет скрытых блоков, скрываем кнопку "Показать еще"
  if (remainingHiddenBlocks <= 0) {
    showMoreButton.style.display = 'none';
  }
});


// const showMore = document.querySelector('.podcasts__btn');
// const podcastsLength = document.querySelectorAll('.podcasts__item').length;
// let items = 8;

// showMore.addEventListener('click', () => {
//   items += 4;
//   const array = Array.from(document.querySelector('.podcasts__items').children);
//   const visItems = array.slice(0, items);

//   visItems.forEach(el => el.classList.add('is-visible'))

//   if (visItems.length === podcastsLength) {
//     showMore.style.display = 'none'
//   }
// });

/* <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
$(".podcasts__main-content").each(function() {
  let more = $(this).find(".podcasts__btn");
  let hide = $(this).find(".podcasts__item--hide");
  hide.hide();
  more.click(function() {
    hide.slideToggle();
    more.text(more.text() == "Скрыть" ? "Ещё подкасты" : "Скрыть");
  });
}); */
