# Smart contract

ERC20 is a standard smart contract template for Ethereum fungible tokens: link


# Deploy Smart Contract

Check the available accounts in the Ethereum Client and select the address to operate with:

    Ethereum JSON-RPC > Eth > Accounts

You may check balance of the selected account:

    Ethereum JSON-RPC > Eth > getBalance

Adapt a Smart Contract deployment (Voucher Smart Contract)

    Hancock > DLT-Adapter > Deploy
    Use the selected address as sender

Deploy the adapted deployment transaction
    
    Ethereum JSON-RPC > Eth > sendTransaction
    Replace params with adapted transaction

Check the smart contract deployment transaction on Ethereum Explorer

Save the contract address, you will need it to register the smart contract

# Register Smart Contract on Hancock

Check the registered smart contracts

    Hancock > DLT-Adapter > Find

Register the smart contract deployed in 1a

    Hancock > DLT-Adapter > Register
    The ABI is under BaseURL.abi
    
Verify that the smart contract is now registered
    Hancock > DLT-Adapter > Find

# Invoke a Smart Contract

Adapt a Smart Contract invocation (Token transfer) (alias: erc20-tkn)

    Hancock > DLT-Adapter > Invoke by Alias
