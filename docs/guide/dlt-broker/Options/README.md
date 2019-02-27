# Check transactions on Dlt Broker

This commponennt allow us open a connection to dlt network and listen all kind of events generated.

Actually DLT Broker can connect with Ethereum network. 

## Event kind

The DLT Broker accept three kind of petitions to listen events of Ethereum dlt network:

 - Watch-transfers:
 - Watch-transactions:
 - Watch-contracts:

The Ethereum network produce three kind of events:

 - Tx:
 - Event:
 - Log:


## Use case

The hancock broker service is accessible by an standard web socket interface.

First of all, we need to subscribe to DLT-Broker transactions from a specific address.

```javascript
let request = { "kind": "watch-transactions", "body": ["0xd2Bb4b9C30DE543C2a247E818391F37A98E62D3F"], "status" : "pending" };

ws = new WebSocket(`ws://localhost:3009/dlt-broker/ethereum/subscribe`)

ws.sent(request)
```
After thar, for example, we have to perform a transaction from the selected address. To know more visit this  <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#hancock-dlt-adapter-api--dlt-transfers">link</a>.

Check the mined transaction event on your WebSocket client, you can see the details about the <a href="https://bbva.github.io/hancock-ms-dlt-broker/api.html#receivetxmessage">transaction</a>.