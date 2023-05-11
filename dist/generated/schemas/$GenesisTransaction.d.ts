export declare const $GenesisTransaction: {
    readonly description: "The genesis transaction\n\n    This only occurs at the genesis transaction (version 0)";
    readonly properties: {
        readonly version: {
            readonly type: "U64";
            readonly isRequired: true;
        };
        readonly hash: {
            readonly type: "HashValue";
            readonly isRequired: true;
        };
        readonly state_change_hash: {
            readonly type: "HashValue";
            readonly isRequired: true;
        };
        readonly event_root_hash: {
            readonly type: "HashValue";
            readonly isRequired: true;
        };
        readonly state_checkpoint_hash: {
            readonly type: "HashValue";
        };
        readonly gas_used: {
            readonly type: "U64";
            readonly isRequired: true;
        };
        readonly success: {
            readonly type: "boolean";
            readonly description: "Whether the transaction was successful";
            readonly isRequired: true;
        };
        readonly vm_status: {
            readonly type: "string";
            readonly description: "The VM status of the transaction, can tell useful information in a failure";
            readonly isRequired: true;
        };
        readonly accumulator_root_hash: {
            readonly type: "HashValue";
            readonly isRequired: true;
        };
        readonly changes: {
            readonly type: "array";
            readonly contains: {
                readonly type: "WriteSetChange";
            };
            readonly isRequired: true;
        };
        readonly payload: {
            readonly type: "GenesisPayload";
            readonly isRequired: true;
        };
        readonly events: {
            readonly type: "array";
            readonly contains: {
                readonly type: "Event";
            };
            readonly isRequired: true;
        };
    };
};
//# sourceMappingURL=$GenesisTransaction.d.ts.map