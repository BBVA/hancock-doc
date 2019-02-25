# Smart contract

Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible. DLT Adapter offer a set of api operations to manage all options with smart contracts in a dlt network.

# Deploy Smart Contract

First of all, we need to check the available accounts and select the address with enough balance to operate with, you can use the <a href="./Common.md/">Common</a> operations of the commponent.

Once we have our smart contract developed, we can adapt a Smart Contract deployment order to get the response raw to deploy the smart contract on dlt network. We need a raw serialized binary compilation and ABI of the contract stored in an accessible point, the constructor method of the contract, optionally the params of this method and finally the selected address as sender.

You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-deploy-smartcontract">link</a>.

To deploy the adapted deployment transaction, we can use the send transaction call of <a href="../wallet-hub/">Wallet-Hub</a> commponent to finish the deployment.

To check the smart contract deployment transaction, we can call to <a href="../dlt-broker/">Dlt Broker</a> commponent, with the selected address as sender to get the contract address.

Save the contract address, you will need it to register the smart contract.

# Register Smart Contract on Hancock

Once we finish the deploy, we can register the smart contract to operate with it in Hancock.

You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#register-smartcontract">link</a>.    

# Find a Smart Contract

To check the registered smart contracts, we can get a list of all contracts registered in Hancock, use the call descripted in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#list-of-smartcontracts">link</a>.

# Invoke a Smart Contract

After deploy and register our contract, we can use all operations of the contract with invoke operation.

We can adapt the invoke order to get the response raw to invoke an operation of the contract. We need the operation name, optionally the params of the method and finally the selected address as sender.

You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-invocation-method-of-smartcontract">link</a>.

Anyway we can operate with contract deployments on dlt network without register the contract before in Hancock. In that case, beside of the parameters, we need the abi of the contract, check <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-invocation-method-with-abit">the technical call</a> to know more details.