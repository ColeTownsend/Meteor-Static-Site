if(Meteor.isClient) {
  Template.work.helpers({
    getTemplateName: function() {
      var slug = Router.current().params.slug;
      return slug;
    }
  });

  Template.home.helpers({
    posts: function() {
      return WorkList;
    }
  });
}
