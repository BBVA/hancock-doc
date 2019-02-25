# Token

Facilitate a simply interface to work with a special case of Ethereum smartcontracts, with common ERC20 interface. ERC20 is a standard smart contract template for Ethereum fungible tokens, to know more read the next <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md">link</a>.

To work with it we need an ERC20 contract deployed. We can register the contract in Hancock to operate with it, anyway we can use all operations with any contract deployed, if add "smartContractAddress" param in body request with contract address on it.

## Register

We can register this kind of contract only with the address of the contract and an alias. You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#token-register">link</a>. 

## Balance