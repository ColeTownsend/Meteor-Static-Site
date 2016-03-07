import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers'

export default class Html extends React.Component {
  render() {
    let title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <link ref='stylesheet' href='./styles.css'/>
          <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Latin+Modern+Mono:400/Roboto:300,400,500" />
        </head>
        <body>
          <div className='app' id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src={link("/bundle.js")}/>
        </body>
      </html>
    );
  }
}
Html.defaultProps = { body: "" };
