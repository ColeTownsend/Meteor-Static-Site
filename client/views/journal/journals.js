Template.journalPost.helpers( {
  getTemplateName: function() {
    var slug = Router.current().params.slug;
    return slug;
  }
} );

PostList = [ {
  title: 'Other Stuff',
  client: 'Panda Network',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "panda-jobs"
}, {
  title: 'Startup Book List',
  client: 'Panda Network',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "introducing-fast-render"
}, {
  title: 'Startup Launch List',
  client: 'Panda Network',
  info: 'A tie is an alarm from the right perspective. They were lost without the scirrhous tyvek that composed their panther. A torose eyeliner\'s wheel comes with it the thought that the riteless crack is a brown.',
  template: "startup-launch-list"
}, {
  title: 'Swipes',
  client: 'Goodrich Coffee',
  info: 'This is a short little snipped of info about this work!',
  template: "goodrich-swipes"
}, {
  title: 'TheNews',
  client: 'Panda Network',
  template: "thenews"
}, ];
