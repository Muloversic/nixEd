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

//TASK 1 scroll-bar
const bar = document.querySelector('.scroll-bar');
window.addEventListener('scroll', () => {
  const sсroll = document.body.scrollTop || document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollProgress = (sсroll / windowHeight) * 100;
  bar.style.width = scrollProgress + '%';
});

//TASK 2 form validation
const userSettingsFormInput = document.querySelectorAll('#userSettings .form-control');
const submitForm = document.querySelector('#submitSettings');
const userDataSettings = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
};

userSettingsFormInput.forEach((input) =>
  input.addEventListener('change', (e) => {
    switch (e.target.getAttribute('id')) {
      case 'inputUserName':
        userDataSettings.username = e.target.value;
        break;
      case 'inputUserEmail':
        userDataSettings.email = e.target.value;
        break;
      case 'inputUserFirstName':
        userDataSettings.firstName = e.target.value;
        break;
      case 'inputUserLastName':
        userDataSettings.lastName = e.target.value;
        break;
    }
  })
);

submitForm.addEventListener('click', () => {
  let isShow = true;
  for (data in userDataSettings) {
    if (!userDataSettings[data]) {
      isShow = false;
      alert(`enter data: ${data}`);
    }
  }

  if (isShow) {
    window.open('about:blank').alert(`${JSON.stringify(userDataSettings)}`);
  }
});
