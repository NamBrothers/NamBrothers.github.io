$(document).ready(function(){
	$('.slider_text').css('left',-300).each(function(index){
		$(this).attr('data-index',index);
	});
	
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	});
	
	function moveSlider(index){
		var willMoveLeft = -(index*510);
		$('.slider_panel').animate({left: willMoveLeft},'slow');
		
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');
		
		$('.slider_text[data-index='+index+']').show().animate({
			left: 0
		}, 'slow');
		
		$('.slider_text[data-index!='+index+']').hide('slow', function(){
			$(this).css('left',-300);
		});
		document.que
	}
	
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});
	
	var randomNumber = Math.round(Math.random()*2);
	moveSlider(randomNumber);
});