jQuery(window).scroll(function() {

	limite = jQuery( "body" ).height() - jQuery(".container-footer").height() - jQuery("#block-tellamamos").height() - 100;

    if ( jQuery( window ).scrollTop() >= 473 ) {

    	if ( jQuery( window ).scrollTop() < limite ) {
    		jQuery("#block-tellamamos").removeClass("fix-bottom");
    		jQuery("#block-tellamamos").addClass("fix-top");
    	} else {
    		jQuery("#block-tellamamos").removeClass("fix-top");
    		jQuery("#block-tellamamos").addClass("fix-bottom");
    	}

    } else {
    	jQuery("#block-tellamamos").removeClass("fix-top");
    }    

  });



jQuery( document ).ready(function() {

	jQuery( ".button.pidelo" ).click(function() {
	  jQuery( "#edit-ingresa-tu-telefono-de-contacto-movil-o-fijo" ).focus();

	  if ( jQuery( window ).width() <= 600 ) {

	  	jQuery( window ).scrollTop( jQuery("#block-tellamamos").offset().top );
	  	
	  }

	});
    jQuery( ".banner.pidelo" ).click(function() {
      jQuery( "#edit-ingresa-tu-telefono-de-contacto-movil-o-fijo" ).focus();
      jQuery( window ).scrollTop( jQuery("#block-tellamamos").offset().top );        

    });
   
});


