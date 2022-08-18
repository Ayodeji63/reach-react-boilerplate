import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

import './App.css';
import { views } from './helpers/constants.js';
import { useEffect, useState } from 'react';

//views
import { 
  ConnectAccount,
  DeployOrAttach,
  SetWager,
  Deploying,
  WaitForAttacher,
  AcceptWager,
  Attaching,
  WaitForTurn,
  PlayTurn,
  Timeout,
  SeeWinner,
  PasteContractInfo
} from './views/';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const { standardUnit } = reach;

function App() {
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT);
  const [ guess, setGuess ] = useState(undefined);
  const [ round, setRound ] = useState(0);
  const [ outcome, setOutcome ] = useState();
  const [ getHand, setGetHand ] = useState(false);
  const [ playedTurn, setPlayedTurn ] = useState(false);
  const [ account, setAccount ] = useState({});
  const [ isAlice, setIsAlice ] = useState(true);
  const [ resolver, setResolver ] = useState();
  const [ contractInfo, setContractInfo ] = useState("");
  const [ wager, setWager ] = useState();

  const helperFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if(deployer){
        setIsAlice(true);
        setView(views.SET_WAGER);
      }
      else{
        setIsAlice(false);
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      Alice.wager = reach.parseCurrency(wager);
      Alice.deadline = deadline;
      backend.Alice(contract, Alice);
      setView(views.DEPLOYING);
      setContractInfo( JSON.stringify(await contract.getInfo(), null, 2) );
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob)
    },

    guess: (hand) => {
      setGuess(hand)
    },

    played: () => {
      setPlayedTurn(true);
      setView(views.WAIT_FOR_TURN)
    },

    playAgain: () => {
      setView(views.DEPLOY_OR_ATTACH);
      setRound(0);
    }

  };

  const Player = {
    random: () => reach.hasRandom.random(),

    informNewRound: () => {
      setRound(round => round + 1);
      setView(views.PLAY_TURN);
      setGuess(undefined);
      setPlayedTurn(false);
      setResolver();
    },
  
    getRandom: () => {
      const random = Math.floor(Math.random()*5);
      console.log("random", random);
      return random;
    },

    seeOutcome: (outcomeHex) => {
      const outcome = parseInt(outcomeHex);
      setOutcome(outcome)
      setView(views.SEE_WINNER)
    },

    informTimeout: () => {
      setView(views.TIME_OUT);
    },

    getHand: async () => {
      setGetHand(true);
      return new Promise(resolve => {
        setResolver({
          resolve: (hand) => {
            resolve(hand);
          },
        })
      })
    }
  }

  const Alice = {
    ...Player,

    wager: 0,

    deadline: 0,
  
    setWagerAndDeadline: ( wager, deadline) => {
      this.wager = wager;
      this.deadline = deadline;
    },
  
    waitingForAttacher: () => {
      setView(views.WAIT_FOR_ATTACHER);
    },
  }

  const Bob = {
    ...Player,

    acceptWager: async (wager) => {
      setView(views.ACCEPT_WAGER);
      setWager(reach.formatCurrency(wager, 4));
      return new Promise((resolve) => {
        setResolver({
          resolve: () => {
            setView(views.ATTACHING);
            resolve();
          },
        })
      });
    },
  }

  useEffect(()=>{
    if(getHand && playedTurn){
      resolver.resolve(guess);
      setGetHand(false);
    }
  }, [getHand, playedTurn, guess, resolver])


  return (
    <div className="App">

      <div className='topnav'>
        <h1>Price Is Right</h1>
      </div>
      
      {
        view === views.CONNECT_ACCOUNT &&
        <ConnectAccount connect={helperFunctions.connect}/>
      }

      {
        view === views.DEPLOY_OR_ATTACH &&
        <DeployOrAttach setAsDeployer={helperFunctions.setAsDeployer}/>
      }

      {
        view === views.SET_WAGER &&
        <SetWager deploy={helperFunctions.deploy}/>
      }

      {
        view === views.DEPLOYING &&
        <Deploying />
      }

      {
        view === views.WAIT_FOR_ATTACHER &&
        <WaitForAttacher contractInfo={contractInfo}/>
      }

      {
        view === views.PASTE_CONTRACT_INFO && 
        <PasteContractInfo attach={helperFunctions.attach}/>
      }

      {
        view === views.ACCEPT_WAGER &&
        <AcceptWager wager={wager} standardUnit={standardUnit} accept={resolver.resolve} decline={() => setView(views.DEPLOY_OR_ATTACH)}/>
      }

      {
        view === views.ATTACHING &&
        <Attaching />
      }

      {
        view === views.WAIT_FOR_TURN &&
        <>
          {
            guess !== undefined && <h3 className='guess'>You played {guess}</h3>
          }
          <WaitForTurn />
        </>
        
      }

      {
        view === views.PLAY_TURN && 
        <PlayTurn 
          guess={helperFunctions.guess} 
          played={helperFunctions.played}
          round={round}
        />
      }

      {
        view === views.TIME_OUT &&
        <Timeout />
      }

      {
        view === views.SEE_WINNER &&
        <SeeWinner outcome={outcome} isAlice={isAlice} playAgain={helperFunctions.playAgain}/>
      }
    </div>
  );
}

export default App;
