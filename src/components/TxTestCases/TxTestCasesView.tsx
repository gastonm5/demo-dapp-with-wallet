import { useTonAddress, useTonConnectUI, useTonWallet, Wallet, WalletInfoWithOpenMethod } from '@tonconnect/ui-react';
import React, {useCallback, useState} from 'react';
import { TxTestCaseParams, TxTestCases } from './TxTestCases';
import { Address } from '@ton/core';
import './style.scss';

export const TxTestCasesView = () => {
    const wallet = useTonWallet();

    if (!wallet) {
        return <div></div>
    }

    const [tonConnectUi] = useTonConnectUI();
    const nonBounceableAddress = useTonAddress();
	const rawAddress = useTonAddress(false);
	const splitAddress = rawAddress.split(":");
	const coreAddress = new Address(parseInt(splitAddress[0]), Buffer.from(splitAddress[1], 'hex'));
	const bounceableAddress = coreAddress.toString({
		testOnly: false,
		bounceable: true,
	  });

    const params: TxTestCaseParams = {
        wallet,
        bounceableAddress,
        nonBounceableAddress,
        rawAddress
    }

    return <div className="test-cases-list">
        <h3>Test cases</h3>
        <div className="test-list-container">
            {TxTestCases.map((value, index) => 
            <div id={index.toString()}>
                <button onClick={() => tonConnectUi.sendTransaction(value.tx(params))}>
                    {index + 1}. {value.title}
                </button>
            </div>
            )} 
        </div>
    </div>
}