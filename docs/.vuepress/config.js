module.exports = {
  title: "Hancock",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/BBVA/hancock-dlt-adapter' },
    ],
    search: false,
    editLinks: false,
    sidebar: [
      ['/guide/getting-started/', 'Getting Started'],
      {
        title: 'DLT Adapter',
        path: '/guide/dlt-adapter/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/guide/dlt-adapter/', 'Description'],
          {
            title: 'Operations',
            path: '/guide/dlt-adapter/Operations/Common/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ['/guide/dlt-adapter/Operations/Common', 'Common'],
              ['/guide/dlt-adapter/Operations/SmartContract', 'SmartContract'],
              ['/guide/dlt-adapter/Operations/Token', 'Token'],
              ['/guide/dlt-adapter/Operations/Protocol', 'Protocol']
            ]
          },
        ]
      },
      {
        title: 'Wallet Hub',
        path: '/guide/wallet-hub',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/guide/wallet-hub/', 'Description'],
          ['/guide/wallet-hub/Operations/', 'Operations']
        ]
      },
      {
        title: 'DLT Broker',
        path: '/guide/dlt-broker/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/guide/dlt-broker/', 'Description'],
          ['/guide/dlt-broker/Options/', 'Options']
        ]
      },
      {
        title: 'SDK',
        path: '/guide/sdk/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/guide/sdk/nodejs/', 'NodeJs'],
          ['/guide/sdk/java/', 'Java'],
          {
            title: 'Services',
            path: '/guide/sdk/services/',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              ['/guide/sdk/services/SmartContract', 'SmartContract'],
              ['/guide/sdk/services/Token', 'Token'],
              ['/guide/sdk/services/Transaction', 'Transaction'],
              ['/guide/sdk/services/Transfer', 'Transfer'],
              ['/guide/sdk/services/Wallet', 'Wallet']
            ]
          }
        ]
      }
    ] 
  }
}
