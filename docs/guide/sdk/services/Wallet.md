# Wallet Service

The Wallet Service provides some methods to let the user to consult their balances and generate new wallets

## Generate Wallet

Generate a new wallet locally, that means that the info is create in the sdk without call any service.

```java

  * @return address, publicKey, and privateKey of the new wallet
  * @throws HancockException

ethereumClient.getWalletService().generateWallet();
```  

## Get Balance

Retrieves the balance in the account of address

```java

  * @param address The token owner´s address
  * @return The account balance (in weis)
  * @throws HancockException

ethereumClient.getWalletService().getBalance(address);
```  

     