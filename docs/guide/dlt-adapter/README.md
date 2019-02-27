# Hancock DLT Adapter

Microservice belonging to Hancock's ecosystem, which adapts transactions described in a common schema to the different blockchain implementatations' internal schemas.

DLT Adapter aims to provide a high-level interface to operations that can be performed on DLT Networks. 

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

 - The code has been written following the clean architecture principles, as well as SOLID design principles.

 - The project is built in typescript v2.9.2 using the recommended guidelines. Also there is a linter rules configured to follow this guidelines, so you can search for a plugin for your favourite IDE to be warned about this linter errors.
