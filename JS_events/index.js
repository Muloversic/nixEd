//scroll
const scrollToTop = document.querySelector(".link-home");
scrollToTop.style.display = "none";
window.onscroll = () => document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 
	scrollToTop.style.display = "block" : scrollToTop.style.display = "none";

// popover
$('[data-toggle=popover]').hover(function(e) {
	if( !$(".popover").is(':visible') ) {
		const el = this;
		$(el).popover('show');
		$(".popover > h3").append('<span class="close">&times</span>')
			.find('.close').on('click', function(e) {
				e.preventDefault();
				$(el).popover('hide');
			}
		);
	}
});