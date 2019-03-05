# Hancock Wallet hub

This microservice belonging to Hancock's ecosystem, allows you to send transactions to a DLT and to sign the transactions with the help of a sign provider service previously configured.

## Motivation

To be able to sign transactions in blockchain we need a private key. To avoid centralizing the user's private key we need to support differents signature providers. 

## Proposed Change

In order to have different signature providers, we need to add a service to the system that will allow suppliers to be registered, making it possible for the system to be able to consume them, thus allowing a user to choose their signature provider. The signing keys will not leave those signature providers.

## Current blockchains supported

 - Ethereum

## Using this package

Clone the project:
```bash
  # Clone the project  
  git clone https://github.com/BBVA/hancock-wallet-hub.git
  cd kst-hancock-ms-dlt-adapter 
```
Installation

Once you have downloaded:
```bash
  # with npm
  npm install 
  nnpm run build:ts 
  npm run serve:prod 

  # or using yarn
  yarn install
  yarn run build:ts   
  yarn run serve:prod 
```
With docker:
```bash
  # Build the docker image 
  docker build -t hancock_wallet_hub . 
  # Run the docker container 
  docker run -d -it --name -p 80:80 hancock_wallet_hub_container hancock_wallet_hub 
```
## Setting up the service

Once the installation of the service has finished, we need to fix some environment vars. You can find all environment vars
available to configure the service in config/custom-environment-variables.yaml.

An example of configuration of the most important vars:
```bash
    Ethereum rpc node:

  export HANCOCK_BLOCKCHAIN_ETHEREUM_PROTOCOL="http"  
  export HANCOCK_BLOCKCHAIN_ETHEREUM_HOST="52.80.128.77"  
  export HANCOCK_BLOCKCHAIN_ETHEREUM_PORT="34774"  

    Mongo ddbb host:

  export HANCOCK_DB_HOSTS="localhost:27017"  
  export HANCOCK_DB_DATABASE="hancock"  
  export HANCOCK_DB_ETHEREUM_DATABASE="hancock_eth"  
```

Select a signature provider

Before signing our transactions, we need to insert a new row in mongodb, into "providers" collection with the data of our signer.

```bash
    "alias" : "fakeprovider"
    "className" : "FakeProviderSigner"
```

We have a specific option to configure Cryptvault like our signer, to that end, we need to fill the cryptvault environment vars of the config section.

## Using the service

For more info, go to <a href="./Operations/">operations</a> facilitated by Wallet Hub component.

## Api documentation

Wallet-HUB provides some endpoints to interact with the blockchain, allowing sending and signing transactions with an external signer to a specific DLT. Take a look at the diferent sections of the API documentation to see examples of use.

<a href="https://bbva.github.io/hancock-wallet-hub/api.html">API Documentation</a>

## Contribution guidelines

If you are thinking about contributing to the project, you should know that:

- The code has been written following the [clean architecture principles](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html), as well as [SOLID design principles](https://es.wikipedia.org/wiki/SOLID).

- The project is built in [typescript](https://www.typescriptlang.org/) v2.9.2 using the [recommended guidelines](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts). Also there is a linter rules configured to follow this guidelines, so you can search for a plugin for your favourite IDE to be warned about this linter errors.