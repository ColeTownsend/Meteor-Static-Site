import React from 'react'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
// import access from 'safe-access'

import '../css/styles.scss'

class Template extends React.Component {
  getInitialState () {
    this.state = { homePage: true }
  }

  render () {
    const { children } = this.props

    let pageClass
    if (location.pathname === link('/')) {
      pageClass = 'app-inner home'
    } else {
      pageClass = 'app-inner ' + location.pathname.slice(1, -1)
    }

    let navClass

    // navClass = access(page, 'data.navClass') || page.path

    const header = (
      <nav className={navClass}>
        <span className="link-group">
          <Link to={link('/')}>Work</Link>
          <Link to={link('/')}>About</Link>
        </span>

        <Link to={link('/')}>Twnsnd Co</Link>

        <span className="link-group">
          <Link to={link('/')}>Journal</Link>
          <Link to={link('/')}>Contact</Link>
        </span>
      </nav>
    )
    return (
      <main className={ pageClass }>
        <div className="site-content">
          {header}
          {children}
        </div>
      </main>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
