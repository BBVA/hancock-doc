# Protocol

Hancock gives us a standard codification of messages to work with transactions and QR codes. The API adapts operations to Hancock Protocol, transforms the operations data to an encoded protocol to work with QR codes.

## Encode

The encode operation, transforms all the data about transfer operations to a raw parameter. The response can be used to generate a QR code that can be read to generate a predefined transfer operation.

You will need the following data to generate the code, before calling the API:
 - Action: The kind of action that will invoke on DLT network, in our case a "transfer".
 - To: The address that will receive the value.
 - Value: The amount of balance to be transferred.
 - Data: Information to describe the operation.
 - Dlt: Name of the DLT network, for example "Ethereum".

You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#encode">here</a>.

## Decode 

This API call gives us all parameters that are needed to form a transfer (parameters described in the encode call). We need the string codified to get all the data.

You can see the technical documentation, and an example of the call <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#decode">here</a>.