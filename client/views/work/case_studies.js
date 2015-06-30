WorkList = [ {
  title: 'Panda Jobs',
  client: 'Panda Network',
  type: 'Web Design',
  published: 'false',
  color: 'cyan',
  what: 'A job board made for designers.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "panda-jobs"
}, {
  title: 'Startup Book List',
  client: 'Panda Network',
  type: 'Web Design',
  published: 'false',
  color: 'blush',
  what: 'Ryan Hoover\'s Book Shelf.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "startup-book-list"
}, {
  title: 'Startup Launch List',
  client: 'Panda Network',
  type: 'Web Design',
  published: 'true',
  color: 'green',
  what: 'Get educated.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "startup-launch-list"
}, {
  title: 'Panda Network',
  client: 'Panda Network',
  type: 'Web Design',
  published: 'true',
  color: 'cyan',
  what: 'Get educated.',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "panda-network"
}, {
  title: 'Swipes',
  type: 'iOS Design',
  published: 'true',
  color: 'pink',
  client: 'Goodrich Coffee',
  what: 'Order up!',
  info: 'This is a short little snipped of info about this work!',
  template: "goodrich-swipes"
}, {
  title: 'TheNews App',
  client: 'Panda Network',
  type: 'iOS Design',
  published: 'true',
  color: 'indigo',
  what: 'Feeds on swipe.',
  info: 'This is a short little snipped of info about this work!',
  template: "thenews"
}, ];

Template.listing.helpers( {
  isPublished: function( published ) {
    return this.published === published;
  }
} );

Template.workGrid.helpers( {
  isPublished: function( published ) {
    return this.published === published;
  }
} );

Template.caseStudy.helpers( {
  getTemplateName: function() {
    var slug = Router.current().params.slug;
    return slug;
  },
  content: function() {
    var works = WorkList;
    var currentProject = Session.get( 'current-project' );
    var project = _.find( works, function( project ) {
      return project.title == 'Panda Jobs';
    } );
    return project;
  }
} );

Template.globalCaseStudy.helpers( {
  getSlug: function() {
    var slug = Router.current().params.slug;
    console.log( slug )
    return slug
  }
} );


Template.thenews.rendered = function() {
  console.log( "hello!" );

  function itunesMeta() {
    var meta = document.createElement( 'meta' );
    meta.name = "apple-itunes-app"
    meta.content = "app-id=884790249";
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( meta );
  };
  itunesMeta();
};
