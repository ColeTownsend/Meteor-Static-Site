import React from 'react';
import { Link } from 'react-router';
import { prune, include as includes } from 'underscore.string';
import find from 'lodash/collection/find';
import { link } from 'gatsby-helpers'

export default class extends React.Component {
  render() {
    let body, html, nextPost, readNext;
    readNext = this.props.post.readNext;
    if (readNext != null) {
      nextPost = find(this.props.pages, function(page) {
        return includes(page.path, readNext.slice(1, -1));
      });
    }
    if (!nextPost) {
      return React.createElement("noscript", null);
    } else {
      nextPost = find(this.props.pages, function(page) {
        return includes(page.path, readNext.slice(1, -1));
      });
      // Create pruned version of the body.
      html = nextPost.data.body;
      body = prune(html.replace(/<[^>]*>/g, ''), 200);

      return (
        <Link
          to={nextPost.path}
          query={{readNext: true}}
          className='case-study-next-item'
        >
          <div className="banner">
            <span className="line"></span>
            <h4>Next Up</h4>
            <span className="line"></span>
          </div>

          <h2>{nextPost.data.title}</h2>
          <p>{body}</p>
        </Link>
      );
    }
  }
}
