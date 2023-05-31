/**
 * function toggle header mobile menu
 **/
function toggleHeader() {
	const btn = document.querySelector('.js--burger_toggle');

	btn.addEventListener('click', () => {
		const el_main_bg = document.querySelector('.main__bg');
		const el_header_nav = document.querySelector('.header__page_nav');

		btn.classList.toggle('active');
		el_main_bg.classList.toggle('main__bg--anim');
		el_header_nav.classList.toggle('open');
	}, false);

}

toggleHeader();
