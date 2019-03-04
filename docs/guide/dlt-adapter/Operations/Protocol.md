# Protocol

Hancock give us a standard codification of messages to work with transactions and qr codes. The api adapt operations to Hancock Protocol, transform the data operations to a encode protocol to work with qr code.

## Encode

The encode operation, transform all data about transfer operations to a raw parameter. The respond can be used to generate a qr code that can be read to generate a predefined transfer operation.

You will need the next data to generate the code, before to call the api:
 - Action: The kind of action that will invoke on dlt network, in our case a "transfer".
 - To: The address that will receive the value.
 - Value: The amount of balance to be transfer.
 - Data: Information to describe the operation.
 - Dlt: Name of the dlt network, for example "Ethereum".

You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#encode">link</a>.

## Decode 

This api call give us all parameters that is needed to form a transfer (described in encode call), we need the string codified to get all the data.

You can see the technical documentation, and an example of the call in the next <a href="https://bbva.github.io/hancock-dlt-adapter/api.html#decode">link</a>.