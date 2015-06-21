Router.configure( {
  // layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  // templateNameConverter: 'upperCamelCase',
  // routeControllerNameConverter: 'upperCamelCase'
} );

Iron.Router.hooks.scrollToTop = function() {
  window.scrollTo( 0, 0 );
  this.next();
};

Router.onBeforeAction( 'scrollToTop' );

Router.map( function() {
  this.route( 'home', {
    path: '/'
  } );
  this.route( 'work', {
    path: '/work'
  } );
  this.route( 'about', {
    path: '/about'
  } );
  this.route( 'proposal', {
    path: '/proposal'
  } );
  this.route( 'feedback', {
    path: '/feedback'
  } );
  this.route( 'case_study', {
    path: '/work/:slug',
  } );
  this.route( 'journal', {
    path: '/journal'
  } );
  this.route( 'journal_post', {
    path: '/journal/:slug'
  } );
  this.route( 'notFound', {
    path: '*'
  } );
} );


