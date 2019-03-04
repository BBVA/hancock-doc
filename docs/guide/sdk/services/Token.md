# Token

The token service facilitate a simply interface to work with a special case of Ethereum smartcontracts, with common ERC20 interface. ERC20 is a standard smart contract template for Ethereum fungible tokens, to know more read the next <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">link</a>.

To work with it we need an ERC20 contract deployed. We must register the contract in Hancock to operate with it.

The service needs a <a href="../java/#using-all-together">config object</a> and a service of ethereum transactions, that is included in EthereumClient. 

```java
    public EthereumTokenService(HancockConfig config, EthereumTransactionService transactionClient) {
        this.config = config;
        this.transactionClient = transactionClient;
    }
```
## Register ERC20 contract on Hancock

We can register the ERC20 smart contract to operate with it in Hancock. 

We must deploy the contract in the dlt network before, since we need the address of the contract.

```java
 * @param alias, An alias for the token
 * @param address, The address of the deployed smart contract token instance
 * @return The result of the request
 * @throws Exception

hancockClient.getTokenService().register(alias,address);
```  

After finish the registration of the contract, you can get a list of all registered erc20 contracts on Hancock.

```java
 * @return The list of all tokens registered in Hancock
 * @throws HancockException

hancockClient.getTokenService().getAllTokens();
```  

## Metadata

To know all detail about a contract make the next call. 

```java
 * @param addressOrAlias, Address or alias of the token smart contract registered in Hancock
 * @return name, symbol, decimals, and totalSupply of the token
 * @throws HancockException

hancockClient.getTokenService().getMetadata(addressOrAlias);
```  

This give us the common data about ERC20 contracts:
 - Name: Name of the token.
 - Symbol: Abbreviation to identify the token.
 - Decimals: Accuracy of the unit of measurement of the token.
 - TotalSupply: Total amount of tokens available.

## Balance

Get the token balance for a specific account. 

```java
 * @param addressOrAlias, Address or alias of the token smart contract registered in Hancock
 * @param address, The token owner`s address
 * @return name, symbol, decimals, and totalSupply of the token
 * @throws HancockException

hancockClient.getTokenService().getBalance(addressOrAlias, address);
```  

## Transfer

You can make a transfer of an amount of your balance from your account to a specific account. You must have enough tokens balance to make the transfer, and enough ethereum balance to send the operation to Ethereum network.

```java
 * @param request, The data of the transaction (owner, receiver, amount of tokens (in weis) and the address/alias of the contract)
 * @param txConfig, Configuration of how the transaction will be send to the network
 * @return The result of the request
 * @throws Exception

hancockClient.getTokenService().transfer(request, txConfig);
```  

## Approve

This operation allow to owner approve a specific amount of tokens for spender. This spender can perform the "transferFrom" operation until the maximum amount approved.

```java
 * @param request, The data of the transaction (token owner`s address, token spender`s address, amount of tokens (in weis) and the address/alias of the contract)
 * @param txConfig, Configuration of how the transaction will be send to the network
 * @return The result of the request
 * @throws Exception

hancockClient.getTokenService().approve(request, txConfig);
```  

## Allowance

To consult the amount of tokens approved by the owner that can be transferred with a "transferFrom" operation from spender's account. Returns the amount of tokens approved by the owner that can be transferred to the spender's account

```java
 * @param request The data of the transaction (caller`s address, token owner`s address, token spender`s address, amount of tokens (in weis) and the address/alias of the contract)
 * @param txConfig Configuration of how the transaction will be send to the network
 * @return The result of the request
 * @throws Exception

hancockClient.getTokenService().allowance(request, txConfig);
```  

## Transfer from

You can use "transferFrom" operation to transfer tokens from an account with enough balance to a specific account, the spender that invoke the operation must have sufficient allowance to transfer, the sender account must have sufficient balance to transfer.

```java
 * @param request The data of the transaction (approved spender`s address, token sender`s address, receiver, amount of tokens (in weis) and the address/alias of the contract)
 * @param txConfig Configuration of how the transaction will be send to the network
 * @return The result of the request
 * @throws Exception

hancockClient.getTokenService().transferFrom(request, txConfig);
```  