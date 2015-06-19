Router.configure({
  // layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  // templateNameConverter: 'upperCamelCase',
  // routeControllerNameConverter: 'upperCamelCase'
});

Iron.Router.hooks.scrollToTop = function () {
  window.scrollTo(0, 0);
  this.next();
};

Router.onBeforeAction('scrollToTop');

Router.map(function () {
  this.route('home',      { path: '/' });
  this.route('work', { path: '/work/:slug' });
});

