/*!
 * Ruj Blog v1.0.0 (http://rujpro.github.io)
 * Copyright 2018 Ruj <luckyerchen@gmail.com>
 */
;(function (window) {
	'use strict';
	var mainContainer = document.querySelector('.main-wrap'),
		openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');
		$body = document.body;
	function openSearch() {
		mainContainer.classList.add('main-wrap--move');
		searchContainer.classList.add('search--open');
		inputSearch.focus();
		$body.classList.add('mainbody');
	}
	function closeSearch() {
		mainContainer.classList.remove('main-wrap--move');
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
		$body.style.background = "";
		$body.classList.remove('mainbody');
	}
	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function (ev) {
			// escape key.
			if (ev.keyCode == 27) {
				closeSearch();
			}
		});
	}
	function init() {
		initEvents();
	}
	init();
})(window);