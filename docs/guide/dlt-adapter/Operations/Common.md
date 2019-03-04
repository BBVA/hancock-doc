# Common blockchain operations

DLT Adapter help us with common operations to work on blockchain networks. 

## Balance

Our first action with our account in a blockchain network, will be to check our balance.

You can check the balance of an existing address with a simple API call. You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#hancock-dlt-adapter-api--dlt-balance">here</a>.

## Transfer

Once we have an address, we can make our transactions to a DLT network. DLT Adapter allows us to adapt transactions to be sent to DLT network.

We can adapt a transaction and generate a <i>skeleton</i> with all parameters which need to be sent to a DLT network, with a simple API call. We generate the response based:
 - an input address
 - an output address
 - the value on the minimum unit of crypto currency
 - an optional concept.
 
 You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#hancock-dlt-adapter-api--dlt-transfers">here</a>.

After that, we can send the response to sign, and send it to a DLT network. You can use the <a href="../wallet-hub/">Wallet-Hub</a> commponent to finish the transaction.

