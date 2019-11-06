document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
        // to: 519,
        to: 1000,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ -50 * modifier }px`
			}
		}
	}).start()
		
})