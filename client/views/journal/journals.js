Template.journalPost.helpers( {
  getTemplateName: function() {
    var slug = Router.current().params.slug;
    return slug;
  }
} );

PostList = [ ];
