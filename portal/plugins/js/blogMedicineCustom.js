jQuery(document).ready(function () {

	$('.diseases').click(function (event) {
		// console.log($(event.target).text());
		$('#title').text("．" + $(event.target).text());
		$('#title').css("text-align", "left");
		$('#subTitle').text("");

		if ($(event.target).text() == '身體保健') {
			$('#content1').text("　　帶您認識各種不同的保健、健康食品，如何選擇適合自己的產品，以及提供您不同輕微症狀的處理方式，從判段需要就診與否，到自我藥療(self-medication)該注意的事以及藥品的選擇等。");
		}
		else if ($(event.target).text() == '用藥教育') {
			$('#content1').text("　　「藥也，毒也」，許多人擔心、害怕藥品有很多不好的副作用，怕傷腎、傷肝，而不想吃藥或中斷它，但往往這些藥品現在的健康狀態是必須的，所以這裡我們能提供您健全的用藥教育，教導您如何正確的使用藥品、如何避免副作用發生副作用後我們能做什麼事情，讓您在最安全用藥環境下，最大化藥品帶來的好處，最小化藥品帶來的風險。");
		}
		else if ($(event.target).text() == '藥品諮詢') {
			$('#content1').text("　　對於服用的藥品有任何的問題嗎？從使用的方式到想進一步了解藥品作用、產生的副作用、有沒有更好的選擇等，我們都能提供給您專屬化的藥品諮詢服務！");
		}
		else if ($(event.target).text() == '藥歷整合') {
			$('#content1').text("　　受夠了到處去看醫師拿了一堆藥而面臨哪些藥該吃，那些可以不用吃的困境嗎？這裡可以提供您專業的藥歷整合服務，從頭檢查您的藥品，整合成最適合您的用藥與使用的時間、方式，讓您不用再被容易忘記吃藥、該不該吃這個藥而困擾。");
		}

	});
});