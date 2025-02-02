import {SendTransactionRequest, Wallet} from "@tonconnect/ui-react";

interface TxTestCase {
    title: string
    tx: (params: TxTestCaseParams) => any
}

export interface TxTestCaseParams {
    wallet: Wallet
    bounceableAddress: string
    nonBounceableAddress: string
    rawAddress: String
}

const defaultValidUntil = () => Math.floor(Date.now() / 1000) + 600

export const TxTestCases: TxTestCase[] = [
    {
        title: "’validUntil’ is less than now() + 5 minutes",
        tx: (params) => ({
            "validUntil": Math.floor(Date.now() / 1000) - (6 * 60),
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "’validUntil’ is more than now() + 5 minutes",
        tx: (params) => ({
            "validUntil":  Math.floor(Date.now() / 1000) + (5 * 60),
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "without ’validUntil’",
        tx: (params) => ({
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "’validUntil’ as NaN",
        tx: (params) => ({
            "validUntil": NaN,
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "’validUntil’ as null",
        tx: (params) => ({
            "validUntil": null,
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "Empty messages array",
        tx: (params) => ({
            "validUntil": null,
            "messages": []
        })
    },
    {
        title: "4 messages",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "5 messages",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [{
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "1 message is valid and 1 is invalid",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            },
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "50000000000000000000", // (invalid value in message)
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "without ‘address’ field",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [{
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }]
        })
    },
    {
        title: "bounceable address type",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "non-bounceable address type",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "UQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsAKJ",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "raw address type",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "0:8a5a9c7b70d329be670de4e6cce652d464765114aa98038c66c3d8ceaf2d19b0",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "invalid address (2nd letter omitted)",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "ECKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "amount exceeding the wallet account’s balance",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "500000000000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        }) 
    },
    {
        title: "without ‘amount’ field",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
        ]
        })
    },
    {
        title: "‘amount’ as a string",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "‘amount’ as an integer",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": 5000000,
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "with ‘stateInit’ field",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "without ‘stateInit’",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "‘stateInit’ with changed boc prefix",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te7cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "with ‘payload’ field",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })            
    },
    {
        title: "without ‘payload’",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA=="
            }
            ]
        })
    },
    {
        title: "‘payload’ with changed boc prefix",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te7ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ]
        })
    },
    {
        title: "“network”: “-3”",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "network": "-3"
        })
    },
    {
        title: "“network” as an integer",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "network": -239
        })
    },
    {
        title: "“network”: “-239”",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
                "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
                "amount": "5000000",
                "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
                "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "network": "-239"
        })
    },
    {
        title: "‘from’ with bounceable address type",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
            "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
            "amount": "5000000",
            "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
            "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "from": params.bounceableAddress,
        })
    },
    {
        title: "‘from’ with non-bounceable address type",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
            "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
            "amount": "5000000",
            "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
            "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "from": params.nonBounceableAddress,
        })
    },
    {
        title: "‘from’ with raw address type",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
            "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
            "amount": "5000000",
            "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
            "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "from": params.rawAddress,
        })
    },
    {
        title: "‘from’ with invalid address (2nd letter is omitted)",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
            "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
            "amount": "5000000",
            "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
            "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "from": "EAbLqOSDjYR_KcvIbnvJPl4BplXNfEmQ7DG0y0upoNqad6J",
        })
    },
    {
        title: "‘from’ contains an address that does not match the user’s wallet account address",
        tx: (params) => ({
            "validUntil": defaultValidUntil(),
            "messages": [
            {
            "address": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
            "amount": "5000000",
            "stateInit": "te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==",
            "payload": "te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g=="
            }
            ],
            "from": "EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M",
        })
    }
]