// anything that uses case study data

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
  }
} );

// populating the global case study template
Template.globalCaseStudy.helpers( {
  slug: function() {
    var slug = Router.current().params.slug;
    return slug;
  },
  content: function() {
    var work = WorkList;
    var currentProject = Session.get( 'current-project' );
    var project = _.findWhere(work, {template: currentProject} );
    console.log("This is the project: " + project);
    return project;
  },
  hasLogo: function(logo) {
    return this.logo != "false";
  },
  showTitle: function(showTitle) {
    return this.showTitle != "false";
  },
} );

// for the specific page the news, make sure there is some meta data
Template.thenews.rendered = function() {
  function itunesMeta() {
    var meta = document.createElement( 'meta' );
    meta.name = "apple-itunes-app"
    meta.content = "app-id=884790249";
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( meta );
  };
  itunesMeta();
};
