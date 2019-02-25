---
title: DLT Adapter
---

# Hancock DLT Adapter

Microservice belonging to Hancock's ecosystem, which adapts transactions described in a common schema to the different blockchain implementatations' internal schemas.

DLT Adapter aims to provide a high-level interface to operations that can be performed on DLT Networks. Allow operations like get balance, and adapt transfer operations to send to dlt network.

Offer different operations to manage smart contracts:
 - Deploy (Useful for deploying new contracts with the same interface)
 - Call/Query (read operations)
 - Invoke/Apply (write operations)

It holds a registry for human-friendly smart contract management/interaction.

# Api documentation

DLT Adapter provides some endpoints to interact with the blockchain, allowing read and adpat different operations with dlt. Take a look at the diferent sections of the API documentation to see examples of use.

```bash

curl www.google.es

```