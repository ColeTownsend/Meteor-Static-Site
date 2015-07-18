PostList = [{
    title: 'Fresh Install Yosemite To Development: The Easy Way',
    postType: "post",
    info: "This requires being comfortable in the command line. You’ve been warned. This is also opinionated. But it'll get you set up in just a couple hours.",
    template: 'fresh-install-yosemite-easy'
}, {
    title: "Tour de France Vis",
    postType: "link",
    info: "We've gathered from the Tour de France website over 100 years of rider data as well as the last 3 tours in routes, and processed it in python.",
    link: "http://coletownsend.github.io/ben-cole-project/"
}]

Template.journalPost.helpers({
    getTemplateName: function() {
        var slug = Router.current().params.slug;
        return slug;
    }
});

// populating the global case study template
Template.globalJournal.helpers({
    slug: function() {
        var slug = Router.current().params.slug;
        return slug;
    },
    content: function() {
        var posts = PostList;
        var currentPost = Session.get('current-post');
        var post = _.findWhere(posts, {
            template: currentPost
        });
        console.log("This is the post: " + post);
        return post;
    }
});
