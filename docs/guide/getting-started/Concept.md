# Concepts

Hancock offers a sdk (Software Development Kit) and an API (Application Programming Interface) to manage connections and operations on blockchain networks. But before knowing all Hancock services, you need to be au fait with the basic concepts of blockchain.

## Dlt or Blockchain

A <strong>DLT</strong> is simply a decentralized database that is managed by various participants. There is no central authority that acts as arbitrator or monitor. As a distributed log of records, there is greater transparency – making fraud and manipulation more difficult – and it is more complicated to hack the system. Not all DLTs are blockchains.

A <strong>blockchain</strong> is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.

## Ethereum

Hancock supports Ethereum network. <a href="https://github.com/ethereum/wiki/wiki">Ethereum</a> is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.

These apps run on a custom-built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property.

<strong>Ether</strong> is a fundamental cryptocurrency to operate on Ethereum, which thereby provides a public distributed ledger for transactions. It is used to pay for <i>gas</i>, a unit of computation used in transactions and other state transitions. Mistakenly, this currency is also referred to as Ethereum. Wei is the minimal unit of measurement to operate with Ether.

To work on there Ethereum network we need to know some concepts:
- address: Ethereum addresses are composed of the prefix "0x" (a common identifier for hexadecimal), and contain 40 hexadecimal digits. The address is the unique identifier of a specific account or contract.
- nonce: Counter to make sure that each transaction can only be processed once.
- balance: The current amount of <i>Ether</i> in a specific account.
- gas: Represents the fee the sender pays per computational step.

There are several proposals of any kind to improve the Ethereum network. <a href="http://eips.ethereum.org/">Ethereum Improvement Proposals</a>   (EIPs) describe standards for the Ethereum platform, including core protocol specifications, client APIs, and contract standards.

## Smart Contracts

A smart contract is a computer program that directly controls the transfer of digital currencies or assets between parties under certain conditions. Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible.

The Ethereum network also contains ERC (Ethereum Request for Comments) improvement proposals: application-level standards and conventions, including contract standards.

Ethereum-based tokens are smart contracts that implement the <a href="http://eips.ethereum.org/EIPS/eip-20">ERC20</a> Token Standard. This standard allows for the implementation of a standard API for tokens within smart contracts. It also provides a basic functionality to transfer tokens, and allows tokens to be approved so they can be spent by another on-chain third party.
