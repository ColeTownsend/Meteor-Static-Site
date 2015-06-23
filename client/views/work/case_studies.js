Template.caseStudy.helpers( {
  getTemplateName: function() {
    var slug = Router.current().params.slug;
    return slug;
  }
} );

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
