//scroll
const scrollToTop = document.querySelector('.link-home');
scrollToTop.style.display = 'none';
window.onscroll = () =>
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (scrollToTop.style.display = 'block')
    : (scrollToTop.style.display = 'none');

// popover
$('[data-toggle=popover]').hover(function (e) {
  if (!$('.popover').is(':visible')) {
    const el = this;
    $(el).popover('show');
    $('.popover > h3')
      .append('<span class="close">&times</span>')
      .find('.close')
      .on('click', function (e) {
        e.preventDefault();
        $(el).popover('hide');
      });
  }
});

//scroll-bar
const bar = document.querySelector('.scroll-bar');
window.addEventListener('scroll', () => {
  const sсroll = document.body.scrollTop || document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollProgress = (sсroll / windowHeight) * 100;
  bar.style.width = scrollProgress + '%';
});
