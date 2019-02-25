---
title: DLT Adapter
---

# Hancock DLT Adapter

Microservice belonging to Hancock's ecosystem, which adapts transactions described in a common schema to the different blockchain implementatations' internal schemas.

DLT Adapter aims to provide a high-level interface to operations that can be performed on DLT Networks. 

## Common operations

Allow operations like get balance, and adapt transfer operations to send to dlt network.

To Know more consult <a href="/guide/dlt-adapter/Common.md/">Common operations</a> over blockchain network. 

## Smartcontracts operations

Offer different operations to manage smart contracts:
 - Deploy (Useful for deploying new contracts with the same interface)
 - Call/Query (read operations)
 - Invoke/Apply (write operations)

It holds a registry for human-friendly smart contract management/interaction.

To Know more consult <a href="/guide/dlt-adapter/SmartContract.md/">SmartContract operations</a> over blockchain network. 

## Token operations

Facilitate a simply interface to work with a special case of Ethereum smartcontracts, with common ERC20 interface.

To Know more consult <a href="/guide/dlt-adapter/Token.md/">Token operations</a> over Ethereum network. 

## Hancock protocol

Use Hancock protocol to encode and decode operations and work with data on qr code.

To Know more consult <a href="/guide/dlt-adapter/Protocol.md/">Protocol operations</a>. 

# Api documentation

DLT Adapter provides some endpoints to interact with the blockchain, allowing read and adapt different operations with dlt. Take a look at the different sections of the API documentation to see examples of use:

<a href="https://bbva.github.io/hancock-dlt-adapter/api.html">API Documentation</a>

```bash

curl www.google.es

```