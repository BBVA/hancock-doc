# Hancock SDK client

## Client

Main interface to interact with Hancock's ethereum interface:

@param config Configuration of Hancock (Adapter, Broker, WalletHub, DLT Node)

```java
    HancockConfig config = new HancockConfig.Builder()
                    .withEnv(AppConstants.FLAVOR)
                    .withNode(AppConstants.ETHEREUM_NODE_HOST, AppConstants.ETHEREUM_NODE_PORT)
                    .withAdapter("https://hancock-url.es", "/dlt-adapter", 443)
                    .withBroker("ws://hancock-url", "", 80)
                    .withWallet("https://hancock-url.es", "/wallet-hub", 443)
                    .build();
	new EthereumClient(config);
```

## Services

All services included in Ethereum client.

```java
    public EthereumClient(HancockConfig config) {

        this.protocolService = new ProtocolService(config);
        this.walletService = new EthereumWalletService(config);
        this.transactionService = new EthereumTransactionService(config);
        this.transferService = new EthereumTransferService(config, this.transactionService);
        this.tokenService = new EthereumTokenService(config, this.transactionService);
        this.smartContractService = new EthereumSmartContractService(config, this.transactionService);

    }
```

### SmartContractService

Consult <a href="./SmartContract/">SmartContractService</a> to get a description about the functionality.

### Token

Consult <a href="./Token/">Token</a> to get a description about the functionality.
