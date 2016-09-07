$(document).ready(function(){

	$('span.message').css('background-color','#aba');
	$('div.box').first().css('background-color','#abc')
	$('button').css('background-color','#fca')
	$('img[alt= "hello"]').css('background-color','#aabb55')
	$('#myDiv input[type="text"]').css('background-color','#989')
	$('input[name^=txt]').css('background-color','#c6b')
	$('p:not(.box)').css('background-color','#bac')
	$('div.box, div.error').css('color','red')
	$('div.box.error').css('color','blue')
	$('div#myDiv span.info').css('background-color','#cfc')
})
