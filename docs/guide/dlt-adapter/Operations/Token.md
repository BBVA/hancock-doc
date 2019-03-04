# Token

Facilitate a simple interface to work with a special case of Ethereum smart contracts, with a common ERC20 interface. ERC20 is a standard smart contract template for Ethereum fungible tokens. More info <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">here</a>.

To work with this token, we need an ERC20 contract deployed. To operate with the contract, we can register it in Hancock, (anyway we can use all operations with any contract deployed, if we add <i>"smartContractAddress"</i> parameter in body request, with the contract address on it, and delete {AddressAlias} parameter in path).

## Register

We can register this kind of contracts, with the address of the contract and an alias only. You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-register">here</a>. 

Once we register the contract, we can get the complete list of ERC20 contracts registered in Hancock with <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-list">this call</a>. 

## Metadata

To know all details about a contract make <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-metadata">this call</a>. 

This gives us the common data about this kind of contracts:
 - Name: Name of the token.
 - Symbol: Abbreviation to identify the token.
 - Decimals: Accuracy of the unit of measurement of the token.
 - TotalSupply: Total amount of tokens available.

## Balance

The first action with our contract will be to know our current tokens balance. We only need a simple API call to get it. You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-balance">here</a>. 

## Transfer

You can make a transfer of an amount of your balance from your account to a specific account. You only need to have enough tokens to make the transfer.

This operation gives us a response with everything you need to sign and send to an Ethereum DLT. More info and an example <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-token-transfer">here</a>. 

## Approve

This operation allows the owner to approve a specific amount of tokens for the spender. This spender can perform the "transferFrom" operation until the maximum amount is approved.

This operation gives us a response with everything you need to sign and send to a Ethereum DLT. More info and an example <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-token-approve">here</a>. 

## Allowance

To consult the amount of tokens (approved by the owner) that can be transfer with a "transferFrom" operation from the spender's account, you need to call this operation, that returns the amount of approved value. More info and an example <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-allowance">here</a>. 

## Transfer from

You can use "transferFrom" operation to transfer tokens from an account with enough token balance to a specific account. The spender that invokes the operation must have sufficient allowance to transfer. More info and an example <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-token-transferfrom">here</a>. 

Remember that after getting the response, we can send the response to sign, and send it to DLT network. You can use the <a href="../wallet-hub/">Wallet-Hub</a> component to finish the operations.