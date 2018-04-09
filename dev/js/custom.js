$(function() {
	svg4everybody({});

	$('.news-menu__link').on('click', function(e) {
		e.preventDefault();
		var $this = $(this);

		if(!$this.parent().hasClass('is-active')) {
			$('.news-menu__item').removeClass('is-active');
			$this.parent().addClass('is-active');
		}

		var target = $this.attr('href');

		switch (target) {
			case '#news':
			$('.news-items').hide();
			$(target).show();
			break;
			case '#sport':
			$('.news-items').hide();
			$(target).show();
			break;
			case '#world':
			$('.news-items').hide();
			$(target).show();
			break;
			case '#music':
			$('.news-items').hide();
			$(target).show();
			break;
			default:
			console.log('not detected id = ' + target);
		}

		$('body').getNiceScroll().resize();
	});


	$('body').niceScroll({
		horizrailenabled: false,
		cursorcolor: '#333',
		background: '#fff',
		cursoropacitymin: 0.5,
		cursorwidth: '10px',
		cursorborder: 'none',
		cursorborderradius: '5px',
		railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
	});

});