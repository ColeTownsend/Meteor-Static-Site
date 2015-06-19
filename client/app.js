if ( Meteor.isClient ) {
  Template.work.helpers( {
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    }
  } );

  Template.home.helpers( {
    projects: function() {
      return WorkList;
    }
  } );

  Template.home.rendered = function() {
    var list_items = document.querySelectorAll( '.work-list li' )
    var i = 0;
    console.log('template rendered')

    function show() {

    // Animate each line individually
    for ( var i = 0; i < list_items.length; i++ ) {
      var list_item = list_items[ i ]
        // Define initial properties
      dynamics.css( list_item, {
        opacity: 0,
        translateY: 20
      } )

      // Animate to final properties
      dynamics.animate( list_item, {
        opacity: 1,
        translateY: 0
      }, {
        type: dynamics.spring,
        frequency: 300,
        friction: 280,
        duration: 800,
        delay: 80 + i * 40
      } )
    }
  };
  show();
};

$( function() {
  $( "#toggle-colors" ).click( function() {
    $( "body" ).addClass( "dark-mode" );
  } );
} );
}
