---
title: DLT Broker
---

# Hancock DLT Broker

Microservice belonging to Hancock's ecosystem which creates a subscription to the blockchain watching for events related with some addresses or smart contracts.

Because blockchain is an event-based system, data writing is asynchronous. To facilitate the management of these events to third parties, a service that allows standardized subscription through a client-server socket is required, thus serving the changes detected in the ledger by means of said socket.

The service will connect to the blockchain when a client connects to the websocket exposed by the service.

The blockchain will be specified in the request by query-param. The fields allowed for the filter are a sender address and/or a contract address. If a sender address is specified, all pending transaction events related to the sender will be captured. If a contract address is specified, all the events programmed in it will be captured. It is mandatory specify at least one filter.

When an event is triggered in the blockchain that meets the requirements of the filter, the service will capture and launch it to the connected client that started the connection through websocket.

# Using the service

The hancock broker service is accessible by an standard web socket interface. You can test it in a browser console.

# Api documentation

Take a look at the diferent sections of the API documentation to see examples of use:

<a href="https://bbva.github.io/hancock-dlt-broker/api.html">API Documentation</a>

```bash

curl www.google.es

```