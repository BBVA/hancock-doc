# Common blockchain operations

DLT Adapter help us with common operations to work on blockchain networks. 

## Balance

Our first action with our account in a blockchain network, will be to check our balance.

You can check the balance of an existing address with a simple api call. You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#hancock-dlt-adapter-api--dlt-balance">link</a>.

## Transfer

Once we have an address, we can make our transactions to dlt network. DLT Adapter allow us adapt transactions to be send to dlt network.

We can adapt a transaction and generate a skeleton with all parameters needed to send to dlt network with a simple api call. We generate the response based on an input address, output address, the value on the minimum unit of crypto currency, and with an optional concept. You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#hancock-dlt-adapter-api--dlt-transfers">link</a>.

After that we can sent the response to sign and send it to dlt network, you can use the <a href="../wallet-hub/">Wallet-Hub</a> commponent to finish the transaction.

