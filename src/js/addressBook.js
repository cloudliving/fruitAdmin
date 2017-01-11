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
