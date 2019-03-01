# Transaction Service

The Transfer Service provides some methods to let the user to send transactions between two addresses, as well as subscribe to listen for transfers and adapt transfers.

## Send

Send a transaction of ether between to accounts to the network according to the specification in the txConfig. Could be signed and then sent, sent to a sign provider before send it to the dlt or sent it assuming that the node has this account unlocked. Internally it call to the send of Transaction service.

```java

  * @param tx       Data of the transaction (sender address, receiver addres, amount of ether, data)
  * @param txConfig Configuration of how the transaction will be send to the network
  * @return The result of the request
  * @throws Exception

ethereumClient.getTransferService().send(tx, txConfig);
```  

## Adapt Transfer

Adapt a transaction to get all the info necessary before send it, that is: nonce, gas and gasPrice. Return the transaction ready to be signed.

```java

  * @param txRequest The transaction with the minimum data to be fill (From, To, Value)
  * @return The transaction with all the data fill (Gas, GasPrice, Nonce)
  * @throws Exception

ethereumClient.getTransferService().adaptTransfer(tx, txConfig);
```  

## Subscribe

Create a websocket subscription with the broker to watch transactions of type "transfer" in the network.

```java

  * @param addresses An array of address that will be added to the watch list
  * @param consumer  A consumer plugin previously configured in hancock that will handle each received event
  * @return A HancockSocket object which can add new subscriptions and listen incoming message
  * @throws HancockException

ethereumClient.getTransferService().subscribe(addresses, consumer);
´´´

     