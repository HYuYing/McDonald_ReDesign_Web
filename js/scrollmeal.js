document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 10,
        // to: 519,
        to: 1000,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ -60 * modifier }px`
			}
		}
	}).start()
		
})