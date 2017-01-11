// loop
(function(){
	const loop = $('.m-loop')

	if (!loop.length){return}

	const percent = loop.attr('data-percent')
	const deg = Number(percent) * 3.6
	const left = loop.find('.m-loop-ctn-left')
	const right = loop.find('.m-loop-ctn-right')

	if (deg > 180) {
		right.css({
			transform: 'rotate(180deg)',
			webkitTransform: 'rotate(180deg)'
		})
		left.css({
			transform: `rotate(${deg-180}deg)`,
			webkitTransform: `rotate(${deg-180}deg)`
		})
	} else {
		right.css({
			transform: `rotate(${deg}deg)`,
			webkitTransform: `rotate(${deg}deg)`
		})
	}
})();
