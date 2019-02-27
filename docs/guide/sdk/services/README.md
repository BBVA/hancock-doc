# Hancock SDK client

## Client

Main interface to interact with Hancock's ethereum interface:

@param config Configuration of Hancock (Adapter, Broker, WalletHub, DLT Node)

```java
    HancockConfig config = new HancockConfig.Builder()
                    .withEnv(AppConstants.FLAVOR)
                    .withNode(AppConstants.ETHEREUM_NODE_HOST, AppConstants.ETHEREUM_NODE_PORT)
					.withAdapter(AppConstants.HANCOCK_ADAPTER_HOST, AppConstants.HANCOCK_ADAPTER_BASE, AppConstants.HANCOCK_ADAPTER_PORT)
					.withWallet(AppConstants.HANCOCK_WALLET_HOST, AppConstants.HANCOCK_WALLET_BASE, AppConstants.HANCOCK_WALLET_PORT)
                    .build();
	new EthereumClient(config);
```

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

## Introduction and examples
