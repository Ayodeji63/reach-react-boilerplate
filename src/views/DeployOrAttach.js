export function DeployOrAttach({ setAsDeployer }){
    return(
        <div className="DepOrAtt">
            <button
                onClick={() => setAsDeployer()}
            >Deploy new contract</button>
            <h2>Or</h2>
            <button
                onClick={() => setAsDeployer(false)}
            >Attach to already existing contract</button>
        </div>
    );
};