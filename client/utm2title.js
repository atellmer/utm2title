;
(function () {
	'use strict';

	var utmTerm = 'utm_term';
	var tagSelector = '#utm-title';

	var url = '';
	var keyTerm = '';
	var title = '';
	var buffer = [];
	var targetTag = null;

	document.addEventListener('DOMContentLoaded', getNewTitle);

	function getNewTitle() {
		url = document.location.href;

		if (url.indexOf(utmTerm) + 1) {
			keyTerm = url.split(utmTerm)[1];

			if (keyTerm.indexOf('%20') + 1) {
				buffer = keyTerm.split('%20');

				for (var i = 0; i < buffer.length; i++) {
					title += buffer[i] + ' ';
				}
				title = title.slice(1, title.length);
			} else {
				title = keyTerm.slice(1, keyTerm.length);
			}

			targetTag = document.querySelector(tagSelector);
			targetTag.innerHTML = title;

			console.log('title: ', title);
		} else {
			console.log('UTM-label not found');
		}
	}
})();