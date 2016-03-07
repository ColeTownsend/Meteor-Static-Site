import React from 'react';
import { RouteHandler, Link } from 'react-router';
import sortBy from 'lodash/collection/sortBy';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';

export default class extends React.Component {
  static data() {
    return {
      yo: true
    }
  }

  render() {
    let i, len, page, workCards, ref, ref1, ref2, title, description;
    workCards = [];
    ref = sortBy(this.props.pages, (page) => {
      let ref;
      return (ref = page.data) != null ? ref.date : void 0;
    }).reverse();
    for (i = 0, len = ref.length; i < len; i++) {
      page = ref[i];
      title = ((ref1 = page.data) != null ? ref1.title : void 0) || page.path;
      description = "Web design and front end development";

      if (page.path && page.path !== "/" && !((ref2 = page.data) != null ? ref2.draft : void 0)) {
        workCards.push(
          <Link to={link(page.path)} className='work-card' key={page.path}>
            <div className='work-meta'>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <span className="top-layer"></span>
            <span className="image-layer"><img src="./panda-jobs.png" alt=""/></span>
          </Link>
        );
      }
    }

    return (
      <DocumentTitle title={this.props.config.blogTitle}>
        <article>
          <span className="next-work-left">
            <a href='#'>Panda Jobs</a>
          </span>
          <span className="next-work-right">
            <a href='#'>Panda Jobs</a>
          </span>
          <section className='intro'>
            <h3>{this.props.config.intro}</h3>
          </section>
          <section className="works">
            <div className="banner">
              <span className="line"></span>
              <h4>Latest Work</h4>
              <span className="line"></span>
            </div>
            {workCards}
          </section>
        </article>
      </DocumentTitle>
    )
  }
}
