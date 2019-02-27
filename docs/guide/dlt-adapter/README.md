# Hancock DLT Adapter

Microservice belonging to Hancock's ecosystem, which adapts transactions described in a common schema to the different blockchain implementatations' internal schemas.

## Motivation

Smart Contracts are small programs that serve as interfaces for state changes on a distributed ledger. Currently there is no standard specification for these interfaces and invocations are done in a very specific and unusable way, e.g. in Ethereum by translating transactions into a binary interface.

Furthermore, in order to exploit full decentralization provided by blockchain, users should retain control over their wallets and trusted peers and avoid scenarios where communication with blockchain is centralized on a gateway service that controls user private keys and trusted peers.
Proposed Change

## Proposed Change

DLT Adapter aims to provide a high-level interface to operations that can be performed on DLT Networks. 

DLT Adapter is a web service that abstracts user interactions with DLT networks on a high-level common HTTP REST interface that conveniently provides the user with the specific DLT type adapted transaction that can be easily inspected, signed and personally sent to a DLT network trusted node of the choice of the user.

There are 4 identified high-level interactions with a blockchain:

 - Smart Contract creation
 - Smart Contract transactions
 - Token transfers
 - Notarizations

It is necessary to keep in mind to include the chain identifier in adapted transaction, which must be executed just in the appropriate network.

## Current blockchains supported

* Ethereum

## Building the service

Clone the project:
```bash
  # Clone the project 
  git clone https://github.com/BBVA/hancock-dlt-adapter.git
  cd kst-hancock-ms-dlt-adapter
```
With node and npm or yarn:
```bash
  # With npm
  npm install
  npm run build:ts
  npm run serve:prod

  # With yarn
  yarn install
  yarn run build:ts
  yarn run serve:prod
```
With docker:
```bash
  # Build the docker image
  docker build -t hancock_dlt_adapter .

  # Run the docker container
  docker run -d -it --name -p 80:80 hancock_dlt_adapter_container hancock_dlt_adapter
```
## Setting up the service

Once we have built the service, we need to configure a few things before launching it. You can find all environment vars available to configure the service in config/custom-environment-variables.yaml.

An example of configuration of the most important vars:

    Ethereum rpc node:
```bash
  export HANCOCK_BLOCKCHAIN_ETHEREUM_PROTOCOL="http"
  export HANCOCK_BLOCKCHAIN_ETHEREUM_HOST="52.80.128.77"
  export HANCOCK_BLOCKCHAIN_ETHEREUM_PORT="34774"
```
    Mongo ddbb host:
```bash
  export HANCOCK_DB_HOSTS="localhost:27017"
  export HANCOCK_DB_DATABASE="hancock"
  export HANCOCK_DB_ETHEREUM_DATABASE="hancock_eth"
```
## Using the service

Next sections describe the operations available on Hancock DLT Adapter.

### Common operations

Allow operations like get balance, and adapt transfer operations to send to dlt network.

To Know more consult <a href="./Operations/Common/">Common operations</a> over blockchain network. 

### Smartcontracts operations

Offer different operations to manage smart contracts:
 - Deploy (Useful for deploying new contracts with the same interface)
 - Call/Query (read operations)
 - Invoke/Apply (write operations)

It holds a registry for human-friendly smart contract management/interaction.

To Know more consult <a href="./Operations/SmartContract/">SmartContract operations</a> over blockchain network. 

### Token operations

Facilitate a simply interface to work with a special case of Ethereum smartcontracts, with common ERC20 interface.

To Know more consult <a href="./Operations/Token/">Token operations</a> over Ethereum network. 

### Hancock protocol

Use Hancock protocol to encode and decode operations and work with data on qr code.

To Know more consult <a href="./Operations/Protocol/">Protocol operations</a>. 

## Api documentation

DLT Adapter provides some endpoints to interact with the blockchain, allowing read and adapt different operations with dlt. Take a look at the different sections of the API documentation to see examples of use:

<a href="https://bbva.github.io/hancock-dlt-adapter/api.html">API Documentation</a>

## Contribution guidelines

If you are thinking about contributing to the project, you should know that:

- The code has been written following the [clean architecture principles](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html), as well as [SOLID design principles](https://es.wikipedia.org/wiki/SOLID).

- The project is built in [typescript](https://www.typescriptlang.org/) v2.9.2 using the [recommended guidelines](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts). Also there is a linter rules configured to follow this guidelines, so you can search for a plugin for your favourite IDE to be warned about this linter errors.
