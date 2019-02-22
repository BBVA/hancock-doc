# Invoke a Smart Contract

Open your preferred WebSocket client (e.g. chrome Simple WebSocket Client extension )

Subscribe to DLT-Broker transactions from the selected address
ws://localhost:3001/ethereum/subscribe?sender=0xde8e772f0350e992ddef81bf8f51d94a8ea9216d

Perform a transaction from the selected address, e.g. Ether Transfer

    Ethereum JSON-RPC > Eth > sendTransaction

Check the mined transaction event on your WebSocket client
