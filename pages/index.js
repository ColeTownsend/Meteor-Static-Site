import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md') {
        const title = access(page, 'data.title') || page.path
        const description = access(page, 'data.description') || page.path
        pageLinks.push(
          <Link to={link(page.path)} className="work-card" key={page.path}>
            <div className="work-meta">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <span className="top-layer"></span>
            <span className="image-layer">
              <img src="./panda-jobs.png" alt=""/>
            </span>
          </Link>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <article>
          <span className="next-work-left">
            <a href="#">Panda Jobs</a>
          </span>
          <span className="next-work-right">
            <a href="#">Panda Jobs</a>
          </span>
          <section className="intro">
            <h3>{config.intro}</h3>
          </section>
          <section className="works">
            <div className="banner">
              <span className="line"></span>
              <h4>Latest Work</h4>
              <span className="line"></span>
            </div>
            {pageLinks}
          </section>
         </article>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
