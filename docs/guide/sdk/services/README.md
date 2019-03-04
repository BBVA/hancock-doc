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

### SmartContract Service

Consult <a href="./SmartContract/">SmartContract Service</a> to get a description about the functionality.

### Token Service

Consult <a href="./Token/">Token Service</a> to get a description about the functionality.

### Transaction Service

Consult <a href="./Transaction/">Transaction Service</a> to get a description about the functionality.

### Transfer Service

Consult <a href="./Transfer/">Transfer Service</a> to get a description about the functionality.

### Wallet Service

Consult <a href="./Wallet/">Wallet Service</a> to get a description about the functionality.
