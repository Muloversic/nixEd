const scrollToTop = document.querySelector(".link-home");
scrollToTop.style.display = "none";
window.onscroll = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 
	scrollToTop.style.display = "block" : scrollToTop.style.display = "none";



