/*
*  Module: Expandable Accordian
*
*  Simple hide/show for content blocks
*
*/

jQuery(document).ready( function($) {
	// This class will be added to the expanded item
	var activeItemClass = 'accordian-expanded';
	var accordianItemSelector = '.accordian-section';
	var accordianBody = '.accordian-body';
	var toggleSelector = '.accordian-head';
	var closeSelector = '.accordian-close';

	$(toggleSelector).on('click', function() {
		$(this)
			.closest(accordianItemSelector) // go up to the accordian item element
			.toggleClass(activeItemClass)
				.siblings()
				.removeClass(activeItemClass)
					.find(accordianBody)
					.stop()
					.slideUp();

		$(this)
			.closest(accordianItemSelector)
				.find(accordianBody)
					.stop()
					.slideToggle();
	});
	
	$(closeSelector).on('click', function(event) {
		event.preventDefault();

		$(this)
			.closest(accordianItemSelector)
			.removeClass(activeItemClass)
				.find(accordianBody)
				.slideUp();

	});
});