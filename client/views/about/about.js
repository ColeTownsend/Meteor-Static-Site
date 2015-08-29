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
      name: 'Camayak',
      url: 'http://camayak.com'
    },{
      name: 'Panda Network',
      url: 'http://panda.network'
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
