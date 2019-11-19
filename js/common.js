$(function () {

	var item = $('.content__item--wide');
	var img = $('.content__item-img');



	var heightArr = [];
	var imgArr = [];
	item.each(function (i) {
		imgArr.push($(this).position().top);

		heightArr.push($(this).height());

		//		console.log(imgArr);
		//		console.log($(this).eq(i).position().top);
	});
	//	console.log(imgArr);
	//	console.log(heightArr);

	e = 0;


	$(window).scroll(function () {

		item.each(function (j) {
		console.log(imgArr[j]);

			var top = $(window).scrollTop();

			if (imgArr[j]-300 <= top && (heightArr[j] + imgArr[j]) > top) {
				$(this).find(img).css({
					transform: 'scale(' + top / (imgArr[j]-300) + ')'
				});
				//				console.log(heightArr[j] + imgArr[j]);
				//				console.log(i);
				//				console.log(j +'작동');
			}
				
				//				console.log(j + '미작동');
		
		});
	});
})
