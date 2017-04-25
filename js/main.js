//Script para suaviação de rolagem da página
$(document).on('click', '#menu-navegacao a', function(e) { 
// target element id 
var id = $(this).attr('href'); 

// target element 
var $id = $(id); 
if ($id.length === 0) { 
return; 
} 

// prevent standard hash navigation (avoid blinking in IE) 
e.preventDefault(); 

// top position relative to the document 
var pos = $(id).offset().top; 

// animated top scrolling 
$('body, html').animate({scrollTop: pos}); 
});


