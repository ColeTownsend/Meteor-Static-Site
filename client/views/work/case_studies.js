WorkList = [ {
  title: 'Panda Jobs',
  client: 'Panda Network',
  type: 'Web Design',
  color: 'cyan',
  what: 'A job board made for designers.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "panda-jobs"
}, {
  title: 'Startup Book List',
  client: 'Panda Network',
  type: 'Web Design',
  color: 'blush',
  what: 'Ryan Hoover\'s Book Shelf.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "startup-book-list"
}, {
  title: 'Startup Launch List',
  client: 'Panda Network',
  type: 'Web Design',
  color: 'green',
  what: 'Get educated.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "startup-launch-list"
}, {
  title: 'Panda Network',
  client: 'Panda Network',
  type: 'Web Design',
  color: 'green',
  what: 'Get educated.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "panda-network"
}, {
  title: 'Swipes',
  type: 'iOS Design',
  color: 'pink',
  client: 'Goodrich Coffee',
  what: 'Order up!',
  info: 'This is a short little snipped of info about this work!',
  template: "goodrich-swipes"
}, {
  title: 'TheNews App',
  client: 'Panda Network',
  type: 'iOS Design',
  color: 'indigo',
  what: 'Feeds on swipe.',
  info: 'This is a short little snipped of info about this work!',
  template: "thenews"
}, ];

// for thenews app
Template.thenews.helpers( {
  itunesMeta: function() {
    var meta = document.createElement( 'meta' );
    meta.name = "apple-itunes-app"
    meta.content = "app-id=884790249";
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( meta );
    console.log("hello!")
  }
} );

Template.thenews.rendered = function () {
  console.log("hello!")
};
