$(document).ready(function($) {


	//Mobile Nav

	$('.mobile-nav').on('click', function(){
		
		if($('nav ul').hasClass('block')){
			$('nav ul').removeClass('block');
		}
		else {
			$('nav ul').addClass('block');
		}
			
		});

		


	//Animate Nav Scroll

	var link = document.querySelectorAll('nav ul li');

	$(link).click(function() {
	    var navLink = this;
	    var attr = $(navLink).attr('data-link');
	   
	    var offset = -150; //Offset of 20px

	    $('html, body').animate({
	        scrollTop: $(attr).offset().top + offset
	    }, 650);

	    for(var i = 0; i < link.length; i++){
	    	document.querySelectorAll('nav ul li')[i].style.border = "none";
	    }

	    $(this).css('border-bottom', '2px solid #fff');
		
	});



	//Rotating Hero Text
	const span = document.getElementById('adj');
	const adjective = span.dataset.term.split(', ');
	let i = 0;

	const delayLoop = ()=>{
		
		if(i < adjective.length){
			
			document.getElementById('adj').innerHTML = adjective[i];
			i++
			window.setTimeout(delayLoop, 2000);
		} 
		else {
			i = 0;
			delayLoop();
		}

	}

	delayLoop();



	//Animate SOW

	window.sr = ScrollReveal();

	function revealNextInSequence (sequence) {
	  if (sequence.next < sequence.elements.length) {
	    sr.reveal(sequence.elements[sequence.next++], {

	    	duration: 750,	
	    	delay: 50,
	      afterReveal: function () {
	        revealNextInSequence(sequence)
	      }
	    })
	  }
	}

	function startSequence (selector) {
	  var sequence = {
	    elements: document.querySelectorAll(selector),
	    next: 0
	  }
	  revealNextInSequence(sequence)
	}

	startSequence('.sample');



});