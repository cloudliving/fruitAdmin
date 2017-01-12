// 下拉列表
var classes = () => {
	const btn = $('.classes-btn')
	const list = $('.classes')
	const des = $('.classes-des')
	const event = $({})

	btn.on('tap', e => {
		list.toggle()
	})

	list.on('tap', e => {
		if (e.target.nodeName === 'LI') {
			des.text(e.target.innerText)
			list.hide()
			event.trigger('custom:tap', e.target.getAttribute('data-id'))
		}
	})

	return event
}()


// 选择联系人
var selectMan = () => {
	const btn = $('.selectAll')
	const wrap = $('.users')
	const items = $('.users-item')

	if (!btn.length) {return}

	document.body.style.paddingBottom = 60 + 'px'

	wrap.on('tap', e => {
		$(e.target).parents('.users-item').toggleClass('selected')
	})

	btn.on('tap', e => {
		var that = $(e.target)
		if (that.hasClass('all')) {
			that.removeClass('all')
			items.removeClass('selected')
		} else {
			that.addClass('all')
			items.addClass('selected')
		}
	})

	return () => {
		return items.filter('.selected')
	}
}()