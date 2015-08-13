if (Meteor.isClient) {
  Template.registerHelper('equals',
    function(a, b) {
      return (a === b);
    }
  );
  Template.listing.helpers({
    isWork: function() {
      var instance = Template.instance();
      if (instance.data.search('work') > -1) {
        return true;
      } else {
        return false;
      }
    },
    projects: WorkList,
    entries: PostList
  });

  Template.workGrid.helpers({
    projects: WorkList
  });

  Template.listing.rendered = function() {
    var listItems = document.querySelectorAll('.listing tr')
    var i = 0;
    console.log('If you\'re reading this its too late. The animation happened.')

    function show() {

      // Animate each line individually
      for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i]
          // Define initial properties
        dynamics.css(listItem, {
          opacity: 0,
          translateY: 20
        })

        // Animate to final properties
        dynamics.animate(listItem, {
          opacity: 1,
          translateY: 0
        }, {
          type: dynamics.spring,
          frequency: 300,
          friction: 280,
          duration: 800,
          delay: 80 + i * 40
        })
      }
    };
    setTimeout(show(), 400)
  };

  Template.home.rendered = function() {
    var gridItems = document.querySelectorAll('.grid .card');
    var i = 0;
    console.log('If you\'re reading this its too late. The animation happened.')

    function bubble() {

      // Animate each line individually
      for (var i = 0; i < gridItems.length; i++) {
        var gridItem = gridItems[i]
          // Define initial properties
        dynamics.css(gridItem, {
          // scale: .8,
          opacity: 0,
          translateY: 40
        })

        // Animate to final properties
        dynamics.animate(gridItem, {
          // scale: 1,
          opacity: 1,
          translateY: 0
        }, {
          type: dynamics.spring,
          frequency: 200,
          friction: 300,
          duration: 800,
          delay: 800 + i * 80
        })
      }
    };
    dynamics.setTimeout(bubble(), 200)

    function fader() {
      var cta = document.querySelector('.fader');
      dynamics.css(cta, {
          opacity: 0,
          translateY: ".5rem"
        })
        // Animate to final properties
      dynamics.animate(cta, {
        // scale: 1,
        opacity: 1,
        translateY: 0
      }, {
        type: dynamics.easeInOut,
        friction: 250,
        duration: 400,
        delay: 400
      })
    }
    dynamics.setTimeout(fader(), 400)

    function fadeFirst() {
      var text = document.querySelector('.fadeFirst');
      dynamics.css(text, {
          opacity: 0,
          translateY: "-.5rem"
        })
        // Animate to final properties
      dynamics.animate(text, {
        // scale: 1,
        opacity: 1,
        translateY: 0
      }, {
        type: dynamics.easeInOut,
        friction: 250,
        duration: 600,
      })
    }
    dynamics.setTimeout(fadeFirst(), 400)
  };
};
