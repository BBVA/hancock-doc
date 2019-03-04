# Check transactions on Dlt Broker

This commponennt allow us open a connection to dlt network and listen all kind of events generated.

Actually DLT Broker can connect with Ethereum network. 

## Event kind

The DLT Broker accepts three kind of petitions to listen events of an Ethereum DLT network:

 - Watch-transfers: To get information about transfer registered in a transaction block of a specific address.
 - Watch-transactions: To get information about all events registered on Ethereum network of a specific address.
 - Watch-contracts: To get information and logs produced about all events registered on Ethereum network related with a specific contract.

The Ethereum network produces three kinds of events:

 - Tx: Event dispatched every time a watched address is related with a transaction of kind "transfer".
 - Event: Event dispatched every time a watched contract fires an event of any kind.
 - Log: Event dispatched with logs of operations.

To know more about specification and parameters, can be found the details [here](https://bbva.github.io/hancock-dlt-broker/api.html).

## Use case

The Hancock broker service is accessible by a standard web socket interface.

First of all, we need to subscribe to DLT-Broker transactions from a specific address.

```javascript
let request = { "kind": "watch-transactions", "body": ["0xd2Bb4b9C30DE543C2a247E818391F37A98E62D3F"], "status" : "pending" };

ws = new WebSocket(`ws://localhost:3009/dlt-broker/ethereum/subscribe`)

ws.sent(request)
```
After thar, for example, we have to perform a transaction from the selected address. To know more visit this  <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#hancock-dlt-adapter-api--dlt-transfers">link</a>.

Check the mined transaction event on your WebSocket client, you can see the details about the <a href="https://bbva.github.io/hancock-ms-dlt-broker/api.html#receivetxmessage">transaction</a>.