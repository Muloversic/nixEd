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
  for (let data in userDataSettings) {
    if (!userDataSettings[data]) {
      isShow = false;
      alert(`enter data: ${data}`);
    }
  }

  if (isShow) {
    window.open('about:blank').alert(`${JSON.stringify(userDataSettings)}`);
  }
});

//TASK 3 Dark\Light switcher
const switchButton = document.querySelector('.theme');
const itemsToSwitch = document.querySelectorAll('[data-theme="switch"]');
switchButton.addEventListener('click', (e) => {
  const light = [...e.target.classList].includes('theme-light');
  const dark = [...e.target.classList].includes('theme-dark');
  if (dark) {
    [...switchButton.children].forEach((item) => item.classList.remove('switched'));
    e.target.classList.add('switched');
    itemsToSwitch.forEach((item) => item.classList.add('theme-dark'));
  }

  if (light) {
    [...switchButton.children].forEach((item) => item.classList.remove('switched'));
    e.target.classList.add('switched');
    itemsToSwitch.forEach((item) => item.classList.remove('theme-dark'));
  }
});

//TASK 4 Prevent copy and dev tools
// const noselect = () => false;
// document.ondragstart = noselect;
// document.onselectstart = noselect;
// document.oncontextmenu = noselect;

// document.addEventListener('keydown', function (event) {
//   if (
//     (event.ctrlKey && event.code == 'KeyU') ||
//     (event.ctrlKey && event.shiftKey && event.code == 'KeyI') ||
//     event.code == 'F12'
//   ) {
//     event.preventDefault();
//   }
// });

//TASK 5 Wake up user
const wakeupButtons = document.querySelector('.wakeup-buttons');
const notification = document.querySelector('.wakeup');
wakeupButtons.addEventListener('click', (e) => {
  const userHere = [...e.target.classList].includes('wakeup-yes');
  const userAway = [...e.target.classList].includes('wakeup-no');
  if (userHere) notification.classList.add('hidden');
  if (userAway) window.open('http://google.com', '_self');
});

const timer = 300; //seconds
let counter = 0;
document.onclick = () => (counter = 0);
document.onmousemove = () => (counter = 0);
document.onkeydown = () => (counter = 0);
window.setInterval(checkUserPresence, 1000);
function checkUserPresence() {
  counter++;
  if (counter >= timer) notification.classList.remove('hidden');
}
