// Template.myInfo.helpers( {
//   cole: Cole,
// } );
Cole = {
  name: 'Cole Townsend',
  status: 'Redesigning my portfolio, again',
  college: 'Williams College',
  major: 'Art History',
  graduation: '15',
  latest: 'Finally learning meteor!',
  twitter: '@twnsndco',
  projects: [ {
    name: 'New Old Stock',
    url: 'http://nos.twnsnd.co',
  }, {
    name: 'Meeet',
    url: 'http://meeet.co',
  } ]
}

Template.about.helpers( {
  cole: Cole,
} );




