import { useState } from "react";


export function ConnectAccount({connect}){
    const [ secret, setSecret ] = useState('');

    return(
        <div>
            <button onClick={() => connect()}>Connect To MyAlgoConnect Wallet</button>
            <hr />
            <div className="mnemonic">
                <textarea 
                    placeholder="Paste Mnemonic Key"
                    onChange={ e => setSecret(e.target.value) }
                />
                <br/>
                <button
                    onClick={() => connect(secret.trim(), true)}
                >Connect</button>
            </div>
        </div>
    );
};