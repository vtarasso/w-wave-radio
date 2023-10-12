const showMore = document.querySelector('.podcasts__btn');
const podcastsLength = document.querySelectorAll('.podcasts__item').length;
let items = 8;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.podcasts__items').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'))

  if (visItems.length === podcastsLength) {
    showMore.style.display = 'none'
  }
});

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