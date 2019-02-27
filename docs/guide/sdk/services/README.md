# Hancock SDK client

## Installation

To use the Hancock SDK client add the dependency to your build.gradle file:

```text/plain
# build.gradle
dependencies {
	compile('bbva.ndb:hancock-sdk-client-android:1.0.0-alpha.27')
}
```

## Using all together

The main client is the [HancockEthereumClient](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client-android/docs/index.html) class. You have to instantiate it passing an [HancockConfig](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client-android/docs/index.html) configuration object to indicate the client which hancock service it has to use.

Configuration object example:

```java
import com.bbva.hancock.sdk.dlt.ethereum.EthereumClient;
import com.bbva.hancock.sdk.config.HancockConfig;

HancockConfig config = new HancockConfig.Builder()
    .withAdapter("https://hancock-url.es", "/dlt-adapter", 443)
    .withBroker("ws://hancock-url", "", 80)
    .withWallet("https://hancock-url.es", "/wallet-hub", 443)
    .withEnv("pro")
    .build();
    
EthereumClient client = new EthereumClient(config);
```

## Introduction and examples

[HancockEthereumClient](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client-android/docs/index.html) provides interfaces to interact with the blockchain 
allowing common operation like transfers, balance consulting or smart contract interactions. Take a look at the diferent sections of the [docs](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-android/docs/index.html) to see examples of use:

- [HancockEthereumWalletService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumwalletclient.html)
- [HancockEthereumTransferService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumtransferclient.html)
- [HancockEthereumTransactionService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumtransactionclient.html)
- [HancockEthereumSmartContractService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumsmartcontractclient.html)
- [HancockEthereumTokenService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumtokenclient.html)
- [HancockProtocolService](https://docs.kickstartteam.es/blockchainhub/kst-hancock-sdk-client/docs/classes/hancockethereumprotocolclient.html)