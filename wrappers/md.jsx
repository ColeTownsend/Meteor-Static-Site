import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import ReadNext from '../components/ReadNext';

import '../css/zenburn.css';
import '../css/case-study.css';

module.exports = React.createClass({

  render: function() {
    var post
    post = this.props.page.data;


    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div style={{color: post.accentColor}} className="markdown case-study">
          <header style={{backgroundImage: `url(./${post.backgroundImage})`}} className='case-study-header'>
            <span className="post-title">
              <h1 className='primary-title' style={{color: post.backgroundColor}}>{post.title}</h1>
              <img src="./mask.svg" alt="" className="mask"/>
              <h1 className='secondary-title' style={{color: post.accentColor}}>{post.title}</h1>
            </span>
          </header>
          <div className='post-body' dangerouslySetInnerHTML={{__html: post.body}}/>
          <ReadNext post={post} {...this.props}/>
        </div>
      </DocumentTitle>
    );
  }
});
