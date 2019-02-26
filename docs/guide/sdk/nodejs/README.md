# Hancock SDK client

## Dependencies

This lib depends on ES6 Promises that are native in node. But you have to polyfill it in some browsers using `es6-promise` package.

## Installation

This package is distributed as a npm package:

```bash
  # with npm
  npm install --save es6-promise hancock-sdk

  # or using yarn
  yarn add es6-promise hancock-sdk
```

## Using all together

The main client is the [HancockEthereumClient](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumclient.html) class. You have to instantiate it passing an [HancockEthereumClient](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/interfaces/hancockconfig.html) configuration object
to indicate the client which hancock service it has to use.

Configuration object example:

```javascript
const config = {
  adapter: {
    host: 'http://localhost',
    port: '3000',
    base: '/'
  },
  wallet: {
    host: 'http://localhost',
    port: '3000',
    base: '/'
  },
  broker: {
    host: 'ws://localhost',
    port: '3000',
    base: '/'
  }
}
```

- In node:

```javascript
require('es6-promise').polyfill();
const HancockEthereumClient = require('hancock-sdk').HancockEthereumClient

new HancockEthereumClient(config);
```

- In browser:

We need to include the ethereumjs-tx module as an external deependency before the sdk:

```html
<script src="https://raw.githubusercontent.com/ethereumjs/browser-builds/master/dist/ethereumjs-tx/ethereumjs-tx-1.3.3.min.js"></script>
```

And then use the sdk as an ES6 module (or in module bundlers like webpack)

```javascript
import * as es6Promise from 'es6-promise';
es6Promise.polyfill();

import { HancockEthereumClient } from 'hancock-sdk';
new HancockEthereumClient(config);
```

## Introduction and examples

[HancockEthereumClient](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumclient.html) provides interfaces to interact with the blockchain 
allowing common operation like transfers, balance consulting or smart contract interactions. Take a look at the diferent sections of the [docs](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/index.html) to see examples of use:

- [HancockEthereumWalletService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumwalletclient.html)
- [HancockEthereumTransferService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumtransferclient.html)
- [HancockEthereumTransactionService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumtransactionclient.html)
- [HancockEthereumSmartContractService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumsmartcontractclient.html)
- [HancockEthereumTokenService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumtokenclient.html)
- [HancockProtocolService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumprotocolclient.html)