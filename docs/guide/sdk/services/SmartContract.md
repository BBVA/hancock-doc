# SmartContract

Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible. 

The service needs a <a href="../java/#using-all-together">config object</a> and a service of ethereum transactions, that is included in EthereumClient. 

```java
    public EthereumSmartContractService(final HancockConfig config, final EthereumTransactionService transactionClient) {
        this.config = config;
        this.transactionClient = transactionClient;
    }
```

To use this service only need the instance of Ethereum client.

```java
EthereumClient hancockClient = new EthereumClient(config);

hancockClient.getSmartContractService();
```

## Register Smart Contract on Hancock

We can register the smart contract to operate with it in Hancock. 

We must deploy the contract in the dlt network before, since we need the address of the contract.

```java
 * @param alias   An alias for the smart contract
 * @param address The address of the deployed smart contract instance
 * @param abi     The application binary interface (abi) of the deployed smart contract
 * @return The result of the request
 * @throws HancockException

hancockClient.getSmartContractService().register(alias,address,abi);
```  

## Invoke a Smart Contract

We can use operations of the contract with invoke operation.

Makes an invocation to a smart contract method. Invocations are used to call smart contract methods that writes information in the blockchain consuming gas.

```java
 * @param contractAddressOrAlias Address or alias of the smart contract registered in Hancock
 * @param method                 The name of the method to call
 * @param params                 An array of arguments passed to the method
 * @param from                   The address of the account doing the call
 * @param options                Configuration of how the transaction will be send to the network
 * @return The returned value from the smart contract method
 * @throws Exception

hancockClient.getSmartContractService().invoke(contractAddressOrAlias, method, params, from, options);
```  

Anyway we can operate with contract deployments on dlt network without register the contract before in Hancock. In that case, beside of the parameters, we need the abi of the contract.

```java
hancockClient.getSmartContractService().invokeAbi(contractAddressOrAlias, method, params, from, options, abi);
```  

## Call a Smart Contract

We can call operations of the contract to get information about it.

Makes a call to an smart contract method. Calls only fetch information from blockchain so it doesn't consume gas

```java
 * @param contractAddressOrAlias Address or alias of the smart contract registered in Hancock
 * @param method                 The name of the method to call
 * @param params                 An array of arguments passed to the method
 * @param from                   The address of the account doing the call
 * @return The returned value from the smart contract method
 * @throws Exception

hancockClient.getSmartContractService().call(contractAddressOrAlias, method, params, from);
```  

Anyway we can operate with contract deployments on dlt network without register the contract before in Hancock. In that case, beside of the parameters, we need the abi of the contract.

```java
hancockClient.getSmartContractService().callAbi(contractAddressOrAlias, method, params, from, abi);
```  

## Subscribe a Smart Contract

Create a websocket subscription to watch transactions of type "contracts" in the network.

```java
 * @param contracts An array of address or alias that will be added to the watch list
 * @return A HancockSocket object which can add new subscriptions and listen incoming message
 * @throws HancockException

hancockClient.getSmartContractService().subscribe(contracts);
``` 