# Token

Facilitate a simply interface to work with a special case of Ethereum smartcontracts, with common ERC20 interface. ERC20 is a standard smart contract template for Ethereum fungible tokens, to know more read the next <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">link</a>.

To work with it we need an ERC20 contract deployed. We can register the contract in Hancock to operate with it, anyway we can use all operations with any contract deployed, if add "smartContractAddress" param in body request with contract address on it and delete {AddressAlias} parameter in path.

## Register

We can register this kind of contract only with the address of the contract and an alias. You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-register">link</a>. 

Once we register the contract, we can get the complete list of ERC20 contract registered on hancock with this <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-list">call</a>. 

## Metadata

To know all detail about a contract make the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-metadata">call</a>. 

This give us the common data about this kind of contracts:
 - Name: Name of the token.
 - Symbol: Abbreviation to identify the token.
 - Decimals: Accuracy of the unit of measurement of the token.
 - TotalSupply: Total amount of tokens available.

## Balance

The first action with our contract will be to know our current tokens balance. We only need a simple api call to get it. You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-balance">link</a>. 

## Transfer

You can make a transfer of an amount of your balance from your account to a specific account. Only need to have enough tokens balance to make the transfer.

This operation give us a response with everything you need to sign and send to ethereum dlt. To know more and see an example visit this <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-token-transfer">link</a>. 

## Approve

This operation allow to owner approve a specific amount of tokens for spender. This spender can perform the "transferFrom" operation until the maximum amount approved.

This operation give us a response with everything you need to sign and send to ethereum dlt. To know more and see an example visit this <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#adapt-token-approve">link</a>. 