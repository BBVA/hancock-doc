module.exports = {
  title: "Hancock",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'API Docs', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/BBVA/hancock-dlt-adapter' },
    ],
    search: false,
    sidebar: [
      ['/guide/dlt-adapter/', 'DLT Adapter'],
      ['/guide/wallet-hub/', 'Wallet Hub'],
      ['/guide/dlt-broker/', 'DLT Broker'],
      {
        title: 'SDK',
        path: '/guide/sdk/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/guide/sdk/nodejs/', 'NodeJs'],
          ['/guide/sdk/java/', 'Java']
        ]
      }
    ]
  }
}