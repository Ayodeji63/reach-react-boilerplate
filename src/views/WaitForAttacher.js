export function WaitForAttacher({contractInfo}){
    return(
        <div>
            <h2 className="animate">Waiting for attacher</h2>
            <textarea value={contractInfo} disabled/>
        </div>
    )
}