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
			default:
			console.log('not detected id = ' + target);
		}



	});
});