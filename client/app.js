if ( Meteor.isClient ) {
  // for post pages
  Template.caseStudy.helpers( {
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    },
    projects: function() {
      return WorkList;
    }
  } );

  Template.journalPost.helpers( {
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    }
  } );

  // for listings
  // Template.listing.helpers( {
  //   getTemplateName: function() {
  //     var temp = Router.current().route.getName();
  //     return temp;
  //   }
  // } );

  Template.workListing.helpers( {
    projects: function() {
      return WorkList;
    }
  } );

  Template.workGrid.helpers( {
    projects: function() {
      return WorkList;
    }
  } );

  Template.journalListing.helpers( {
    entries: function() {
      return PostList;
    }
  } );


  Template.workListing.rendered = function() {
    var listItems = document.querySelectorAll( '.listing tr' )
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
    setTimeout( show(), 400 )
  };

  Template.journalListing.rendered = function() {
    var listItems = document.querySelectorAll( '.listing tr' )
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
    setTimeout( show(), 400 )
  };

  $( function() {
    $( "#toggle-colors" ).click( function() {
      $( "body" ).addClass( "dark-mode" );
    } );
  } );
}
