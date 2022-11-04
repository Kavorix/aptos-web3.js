"use strict";
// Copyright (c) Aptos
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
const aptos_client_1 = require("./aptos_client");
const test_helper_test_1 = require("./utils/test_helper.test");
const faucet_client_1 = require("./faucet_client");
const aptos_account_1 = require("./aptos_account");
const coin_client_1 = require("./coin_client");
test("transferCoins and checkBalance works", async () => {
    const client = new aptos_client_1.AptosClient(test_helper_test_1.NODE_URL);
    const faucetClient = new faucet_client_1.FaucetClient(test_helper_test_1.NODE_URL, test_helper_test_1.FAUCET_URL);
    const coinClient = new coin_client_1.CoinClient(client);
    const alice = new aptos_account_1.AptosAccount();
    const bob = new aptos_account_1.AptosAccount();
    await faucetClient.fundAccount(alice.address(), 100000000);
    await faucetClient.fundAccount(bob.address(), 0);
    await client.waitForTransaction(await coinClient.transfer(alice, bob, 42), { checkSuccess: true });
    expect(await coinClient.checkBalance(bob)).toBe(BigInt(42));
}, 30 * 1000);
//# sourceMappingURL=coin_client.test.js.map