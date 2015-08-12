Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'Loading',
});

Iron.Router.hooks.scrollToTop = function() {
    window.scrollTo(0, 0);
    this.next();
};

Router.configure({
    progressSpinner: false
});

Router.onBeforeAction('scrollToTop');

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('work', {
        path: '/work'
    });
    this.route('proposal', {
        path: '/proposal'
    });
    this.route('about', {
        path: '/about'
    });
    this.route('feedback', {
        path: '/feedback'
    });
    this.route('case_study', {
        path: '/work/:slug',
        layoutTemplate: 'globalCaseStudy',
        onBeforeAction: function() {
            Session.set('current-project', this.params.slug);
            console.log("Router getting " + this.params.slug)
            this.next();
        }
    });
    this.route('journal', {
        path: '/journal'
    });
    this.route('journal_post', {
        path: '/journal/:slug',
        layoutTemplate: 'globalJournal',
        onBeforeAction: function() {
            Session.set('current-post', this.params.slug);
            console.log("Router getting " + this.params.slug)
            this.next();
        }
    });
    this.route('notFound', {
        path: '*'
    });
});
