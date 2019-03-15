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

The main client is the [HancockEthereumClient](https://bbva.github.io/hancock-sdk-java-android/index.html) class. You have to instantiate it passing an [HancockConfig](https://bbva.github.io/hancock-sdk-java-android/index.html) configuration object to indicate the client which hancock service it has to use.

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

[HancockEthereumClient](https://bbva.github.io/hancock-sdk-java-android/index.html) provides interfaces to interact with the blockchain 
allowing common operation like transfers, balance consulting or smart contract interactions. Take a look at the diferent sections of the [docs](https://bbva.github.io/hancock-sdk-java-android/index.html) to see examples of use.