// var Metalsmith = require( 'metalsmith' ),
//   markdown = require( 'metalsmith-markdown' ),
//   templates = require( 'metalsmith-react-templates' ),
//   collections = require( 'metalsmith-collections' ),
//   cleanCSS = require( 'metalsmith-clean-css' );
// permalinks = require( 'metalsmith-permalinks' ),
//   fs = require( 'fs' );
// browserSync = require( 'metalsmith-browser-sync' );
// gzip = require( 'metalsmith-gzip' );



// Metalsmith(__dirname)
//   .source('/.src')
//   .clean(true)
//   .use(drafts())
//   .use(collections({
//       journal: {
//         pattern: 'content/journals/*.md',
//         sortBy: 'date',
//         reverse: true
//       }
//       work: {
//         pattern: 'content/works/*.md',
//         sortBy: 'date',
//         reverse: true
//       }
//   }))
//   .use(markdown())
//   .use(permalinks({
//       pattern: ':collection/:title'
//   }))
//   .use(templates(({
//     babel: true,
//     baseFile: 'base.html'
//     isStatic: true,
//     directory: '_layouts'
//   }))
//   .use(sass({
//     outputStyle: 'compressed'
//   }))
//   .destination('./_site'))
//   .use(cleanCSS({
//     files: 'src/**/*.css',
//     cleanCSS: {
//       rebase: true
//     }
//   }))
//   .use(gzip())
//   .build(function(err) {
//     if (err) {
//         throw err;
//     }
//
//     browserify({ debug: true })
//       .transform(babelify)
//       .require('./scripts/loader.js', { entry: true })
//       .bundle()
//       .on("error", function (err) {
//           console.log("Error: " + err.message);
//       })
//       .pipe(fs.createWriteStream('./build/bundle.js'));
//   });
// ;


var Metalsmith = require( 'metalsmith' );
var reactTemplate = require( 'metalsmith-react-templates' );
var browserify = require( 'browserify' );
var babelify = require( 'babelify' );
var fs = require( 'fs' );
var collections = require( 'metalsmith-collections' );
var cleanCSS = require( 'metalsmith-clean-css' );
var permalinks = require( 'metalsmith-permalinks' );
var browserSync = require( 'metalsmith-browser-sync' );
var sass = require('metalsmith-sass');

// var m = Metalsmith.metadata();
// console.log(m.collections);
// var gzip = require( 'metalsmith-gzip' );

new Metalsmith( __dirname )
  .source( './src' )
  .clean( true )
  .use(collections({
    journals: {
      pattern: 'src/journals/*.md',
      sortBy: 'date',
      reverse: true
    },
    works: {
      pattern: 'src/works/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use( reactTemplate( {
    babel: true,
    directory: 'templates',
    baseFile: 'base.html',
    isStatic: false
  }))
  .use(permalinks({
    pattern: './:collection/:title'
  }))
  .use(sass({
    outputStyle: 'compressed'
  }))
  .destination( './build' )
  .build( function ( err ) {
    if ( err ) {
      throw err;
    }
    browserify( {
        debug: true
      } )
      .transform( babelify )
      .require( './scripts/loader.js', {
        entry: true
      } )
      .bundle()
      .on( "error", function ( err ) {
        console.log( "Error: " + err.message );
      } )
      .pipe( fs.createWriteStream( './build/bundle.js' ) );
  } );
