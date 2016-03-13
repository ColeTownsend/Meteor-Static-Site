import React from 'react'
// import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div
          style={{
            color: post.accentColor,
          }}
          className="markdown case-study"
        >
          <header
            style={{ backgroundImage: `url(./${post.backgroundImage})` }}
            className="case-study-header"
          >
            <span className="post-title">
              <h1
                className="primary-title"
                style={{ color: post.backgroundColor }}
              >
                { post.title }
              </h1>
              <img src="./mask.svg" alt="" className="mask"/>
              <h1
                className="secondary-title"
                style={{ color: post.accentColor }}
              >
              { post.title }
            </h1>
            </span>
          </header>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }}/>
          <ReadNext post={post} pages={route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
