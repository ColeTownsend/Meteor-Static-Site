import React from 'react'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import { rhythm, fontSizeToMS } from 'utils/typography'

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    let nextPost
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      )
    }
    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      )
      // Create pruned version of the body.
      const html = nextPost.data.body
      const body = prune(html.replace(/<[^>]*>/g, ''), 200)

      return (
        <Link
          to={{
            pathname: link(nextPost.path),
            query: {
              readNext: true,
            },
          }}
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
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadNext
