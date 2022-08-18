import { useState } from "react"

export function PasteContractInfo({attach}){
    const [ contractInfo, setContractInfo ] = useState('')
    return(
        <div>
            <textarea 
                placeholder="Paste Contract Info" 
                value={contractInfo}
                onChange={ e => setContractInfo(e.target.value)}
            />
            <br />
            <button onClick={() => attach(contractInfo)}>Attach To Contract</button>
        </div>
    )
};