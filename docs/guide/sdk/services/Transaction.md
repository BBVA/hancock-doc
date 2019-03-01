# Transaction Service

The Transaction Service provides some methods to let the user to send transactions in different conditions:

## Send

Send a transaction to the network according to the specification in the txConfig. Could be signed and then send it, senden to a sign provider before send it or send it assuming that the node has this account unlocked.

```java
  * @param rawtx    A raw transaction which will be sent to Ethereum
  * @param txConfig Options which will be used to config the transaction
  * @return The result of the request
  * @throws Exception

ethereumClient.getTransactionService().send(rawtx, txConfig);
```  

## Sign Message

Sign a given message with the private key pass as a parameter. 

```java
  * @param message    A raw message which will be signed
  * @param privateKey The private key with which the raw message will be signed
  * @return The signed message as hex string

ethereumClient.getTransactionService().signMessage(message, privateKey);
```

## Sign Personal Message

Sign a raw personal message with the given private key using https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md

```java
  * @param message    A raw message which will be signed
  * @param privateKey The private key with which the raw message will be signed
  * @return The signed message as hex string

ethereumClient.getTransactionService().signPersonalMessage(message, privateKey);
```

## Sign Transaction

When we want to send a Transaction to the DLT, we have to sign it previosly if the node does not have the account unlocked.

```java
  * @param rawTransaction A raw transaction which will be signed with the privatekey
  * @param privateKey     The private key with which the raw transaction will be signed
  * @return The signed transaction

ethereumClient.getTransactionService().signTransaction(rawTransaction, privateKey);
```  

## Send Raw Transaction

Send a transaction to the DLT assuming that the node that receive the transaction has the account used as from unlocked.

```java
  * @param rawTx A raw transaction which will be sent to the network
  * @return The result of the transaction
  * @throws HancockException

ethereumClient.getTransactionService().sendRawTransaction(rawTx);
```

## Send To Sign Provider

Send a transaction to be sign in a third party sing provider and once signed, it will be send to the DLT

```java
  * @param rawTx    A raw transaction which will be signed by the sign provider
  * @param txConfig Options which will be used to config the transaction (provider and callBack Options(optional))
  * @return The result of the request
  * @throws HancockException

ethereumClient.getTransactionService().sendToSignProvider(rawTx, txConfig);
```

## Send Signed Transaction

Send a transaction to the WalletHub service that has been signed previosly.

```java

  * @param signedTransaction A signed transaction which will be send to the network
  * @param txConfig          Options which will be used to config the transaction
  * @return The result of the transaction
  * @throws Exception
  
ethereumClient.getTransactionService().sendSignedTransaction(signedTransaction, txConfig)
```

## Send Signed Transaction Locally

Send a transaction to the DLT, given in the config, that has been signed previosly.

```java

  * @param signedTransaction A signed transaction which will be send to the network
  * @return The transaction hash
  * @throws InterruptedException
  * @throws ExecutionException
  
hancockClient.getTransactionService().sendSignedTransactionLocally(signedTransaction)
```

## Subscribe

Create a websocket subscription with the broker to watch transactions of type "transactions" in the network.

```java

  * @param addresses An array of address that will be added to the watch list
  * @param consumer  A consumer plugin previously configured in hancock that will handle each received event
  * @return A HancockSocket object which can add new subscriptions and listen incoming message
  * @throws HancockException

ethereumClient.getTransactionService().subscribe(addresses, consumer)
´´´

     