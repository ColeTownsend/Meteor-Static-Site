Cole = {
  name: 'Cole Townsend',
  status: 'Refactoring and coding my portfolio',
  college: 'Williams College',
  major: 'Art History',
  graduation: '15',
  latest: 'Finally learning meteor!',
  twitter: '@twnsndco',
  projects: [ {
    name: 'Laups for Desktop',
    url: 'http://layups.pink',
  }, {
    name: 'New Old Stock',
    url: 'http://nos.twnsnd.co',
  }, {
    name: 'Meeet',
    url: 'http://meeet.co',
  } ],
  clients: [ {
    name: 'Camayak',
    url: 'http://camayak.com'
  }, {
    name: 'Panda Network',
    url: 'http://panda.network'
  }, {
    name: 'Meta',
    url: 'http://meta.sc'
  }, {
    name: 'Seth Thomas Pietras',
    url: 'http://mediastopheles.com'
  } ]
}

Template.about.helpers( {
  cole: Cole,
} );
