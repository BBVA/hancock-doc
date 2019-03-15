# SmartContract

Smart contracts allow running credible transactions without third parties. These transactions are trackable and irreversible. The DLT Adapter offers a set of API operations to manage all options with smart contracts in a DLT network.

## Deploy Smart Contract

First of all, we need to check the available accounts and select an address with enough balance to operate with. This is explained in the <a href="./Common">Common</a> section.

Once we have our smart contract developed, we can adapt a Smart Contract deployment order to get the response raw to deploy the smart contract on DLT network. We need:
 - A raw serialized binary compilation
 - An ABI of the contract stored in an accessible point
 - The constructor method of the contract
 - Optionally the params of this method
 - The selected address as sender.

You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-deploy-smartcontract">here</a>.

To deploy the adapted deployment transaction, we can use the <i>send transaction</i> call of the <a href="../../wallet-hub/">Wallet-Hub</a> component to finish the deployment.

To locate the smart contract deployment transaction, we can call the <a href="../../dlt-broker/">DLT Broker</a> component, with the selected address as <i>sender</i> to get the contract address.

Once the contract address is saved, you will need to register the smart contract.

## Register Smart Contract in Hancock

Once you finished the deployment, we can register the smart contract to operate with it in Hancock.

You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#register-smartcontract">here</a>.    

## Find a Smart Contract

To check the registered smart contracts, we can get a list of all contracts registered in Hancock. Use the call described <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#list-of-smartcontracts">here</a>.

## Invoke a Smart Contract

After deploying and registering our contract, we can use all operations of the contract with <i>invoke</i> operation.

We can adapt the invoke order to get the response raw to invoke an operation of the contract. We need:
 - The operation name
 - optionally the params of the method
 - The selected address as sender.

You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-invocation-method-of-smartcontract">here</a>.

Anyway, we can operate with smart contract deployed on a DLT network without registering the contract beforehand in Hancock. In that case, apart from the parameters, we need the ABI of the contract Check <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-invocation-method-with-abit">the technical call</a> to know more details.