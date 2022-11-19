jQuery(document).ready(function () {

	"use strict";
	// Your custom js code goes here.
	$.urlParam = function (name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results == null) {
			return null;
		}
		else {
			return results[1] || 0;
		}
	};

	let pageName = $.urlParam("servicePage");
	console.log(pageName);

	$('#aTag').click(function () {
		console.log("asdasdas");
		window.parent.postMessage("click");
	});
});