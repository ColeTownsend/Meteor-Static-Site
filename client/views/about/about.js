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
  } ],
  clients: [ {
      name: 'Panda Network',
      url: 'http://panda.network'
    }, {
      name: 'Goodrich Coffee Bar',
      url: 'http://williams.edu'
    }, {
      name: 'Meta',
      url: 'http://meta.sc'
    }, {
      name: 'Seth Pietras'
    }
  ]
}

Template.about.helpers( {
  cole: Cole,
} );
