$(function () {
	$.urlParam = function (name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results == null) {
			return null;
		}
		else {
			return results[1] || 0;
		}
	};
	// domainNameConfig need to modify
	$.domainName = 'https://www.supergangkong.com:4000';
});