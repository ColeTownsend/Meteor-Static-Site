if ( Meteor.isClient ) {
  Template.caseStudy.helpers( {
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    }
  } );

  Template.journalPost.helpers( {
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    }
  } );

  Template.workListing.helpers( {
    projects: function() {
      return WorkList;
    }
  } );

  Template.journalListing.helpers( {
    entries: function() {
      return PostList;
    }
  } );

  Template.home.rendered = function() {
    var listItems = document.querySelectorAll( '.work-list tr' )
    var i = 0;
    console.log( 'If you\'re reading this its too late. The animation happened.' )

    function show() {

      // Animate each line individually
      for ( var i = 0; i < listItems.length; i++ ) {
        var listItem = listItems[ i ]
          // Define initial properties
        dynamics.css( listItem, {
          opacity: 0,
          translateY: 20
        } )

        // Animate to final properties
        dynamics.animate( listItem, {
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
