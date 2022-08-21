import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs'
import { useState } from 'react';
import { Loader } from './utils/';
import { views, GameOutcome} from "./utils/constants.js";
import { ConnectAccount, PasteContractInfo, SelectRole, TestView, WaitForAttacher } from './screens';
import { Header } from "./Components/Header"
// import { SetWager } from './views';

//views
import {
  DeployOrAttach,
  SetWager,
  Deploying,
  AcceptWager,
  Attaching,
  WaitForTurn,
  PlayTurn,
  Timeout,
  SeeWinner,
  DeployerView,
  AttacherView,
} from './views/';
import { Card } from './Components';
import { GameOutcomeView } from './views/GameOutcome';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
const { standardUnit } = reach;
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({})
  const [view, setView] = useState(views.CONNECT_ACCOUNT)
  const [contractInfo, setContractInfo] = useState()
  const [resolver, setResolver] = useState();
  const [isDeployer, setIsDeployer] = useState(false)
  const [ wager, setWager ] = useState();
  const [deployerCard, setDeployerCard] = useState([]);
  const [attacherCard, setAttacherCard] = useState([]);
  const [opponentCard, setOpponentCard] = useState([])
  const [deployerScore, setDeployerScore] = useState(0);
  const [attacherScore, setAttacherScore] = useState(0);
  const [text, setText] = useState('You will be given two cards')
  const [deploy, setDeploy] = useState(false)
  const [opponentScore, setOpponentScore] = useState(0)
  const [gameOutcome, setGameOutcome] = useState(GameOutcome.UNDECIDED);
  const [outcome, setOutcome] = useState(false)

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
      if (deployer) {
        setIsDeployer(true);
        setView(views.SET_WAGER);
      }
      else {
        setIsDeployer(false);
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
      Deployer.wager = reach.parseCurrency(wager);
      Deployer.deadline = deadline;
      backend.Deployer(contract, Deployer);
      setView(views.DEPLOYING);
      setContractInfo(JSON.stringify(await contract.getInfo(), null, 2));
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Attacher(contract, Attacher)
    },

    playAgain : () => {
     window.location.reload();
    }

  };

  let blackJackGame = {
    deployer: {
      cards: deployerCard,
      score: deployerScore,
    },
    attacher: {
      cards: attacherCard,
      score: attacherScore,
    },
    cards: ["2", "3", "4", "5", "6", "7", "8", "9", "T", "K", "Q", "J", "A"],
    cardsMap: {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      T: 10,
      K: 10,
      J: 10,
      Q: 10,
      A: [1, 11],
    },
  };

  const randomCards = () => {
    // let randomIndex = Math.floor(Math.random() * 13);
    let randomCard = blackJackGame["cards"][Math.floor(Math.random() * 12)];
    let cardValue = blackJackGame.cardsMap[randomCard];
    return randomCard;
  };

   //Update Score

 



  //Participant Objects
  const Common = (who) => ({
    random: () => reach.hasRandom.random(),
    starterCards: () => { 
    },

    dealCards: async () => {
      return await new Promise((resolve) => {
        setResolver({
          resolve
        })
      })
    },

    viewOpponentCards:([Score, cards]) => {
      let splittedCard = cards.split("");

      splittedCard.forEach((char) => {
        if (blackJackGame.cards.indexOf(char) > -1) {
          setOpponentCard(preCards => [...preCards, <Card card={char}/>])
        }
        console.log(splittedCard);
      })
    },

    seeOutcome: async (value) => {
      const outcome = parseInt(value);
      console.log("The outcome is", outcome);

      if (outcome === 0) {
        setGameOutcome(isDeployer? GameOutcome.WINNER : GameOutcome.LOSS)
      }
      else if (outcome === 1) {
        setGameOutcome(GameOutcome.DRAW)
      }
      else {
        setGameOutcome(isDeployer? GameOutcome.LOSS : GameOutcome.WINNER)
      }

      // setView(views.SEE_WINNER);
      setOutcome(true)
    },

  })

  const Deployer = {
    ...Common('Deployer'),
    wager: 0,

    deadline: 0,

    setWagerAndDeadline: (wager, deadline) => {
      this.wager = wager;
      this.deadline = deadline;
    },

    waitingForAttacher: () => {
      setView(views.WAIT_FOR_ATTACHER);
    },
    deployerBoard: () => setView(views.DEPLOYER_BOARD),

    stand: () => {
      return true;
    }
  
  }

  const Attacher = {
    ...Common('Attacher'),
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
    deploy: (Bool) => {
      if (Bool) {
        setDeploy(true)
        setText('Click the Stand button Again')
      }
    },
    attacherBoard: () => setView(views.ATTACHER_BOARD),
 
  }

  return (
    <div className="App">
      <div className='top'>
        <Header
          text2="BlackJack"
          span="Game"
          spanClass="Intro__span"
          class2="Intro__sub"
        />
      </div>
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT &&
          <ConnectAccount connect={helperFunctions.connect} />
        }


        {
          view === views.DEPLOY_OR_ATTACH &&
          <DeployOrAttach setAsDeployer={helperFunctions.setAsDeployer} />
        }

        {
          view === views.SET_WAGER &&
          <SetWager deploy={helperFunctions.deploy} />
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.WAIT_FOR_ATTACHER &&
          <WaitForAttacher info={contractInfo} />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={helperFunctions.attach} />
        }

        {
          view === views.ACCEPT_WAGER &&
          <AcceptWager 
          wager={wager} 
          standardUnit={standardUnit} 
          accept={resolver.resolve} 
          decline={() => setView(views.DEPLOY_OR_ATTACH)} />
        }

        {
          view === views.DEPLOYER_BOARD &&
          <div className='Main_Board'>
          <DeployerView
          blackJackGame={blackJackGame}
          randomCards = {randomCards}
          submitCards = {resolver.resolve}
          deployerCard = {deployerCard}
          deployerScore = {deployerScore}
          setDeployerScore = {setDeployerScore}
          setDeployerCard = {setDeployerCard}
          opponentCard = {opponentCard}
          opponentScore = {opponentScore}
          text = {text}
          setText = {setText}
        /> 
        {outcome && <GameOutcomeView 
        outcome={gameOutcome}
        playAgain = {helperFunctions.playAgain}
        />}
        </div>
        }
         {
          view === views.ATTACHER_BOARD &&
          <div className='Main_Board'>
          <AttacherView
          blackJackGame={blackJackGame}
           randomCards = {randomCards}
          submitCards = {resolver.resolve}
          attacherCard = {attacherCard}
          setAttacherCard = {setAttacherCard}
          attacherScore = {attacherScore}
          setAttacherScore = {setAttacherScore}
          opponentCard = {opponentCard}
          text = {text}
          setText = {setText}
          deploy= {deploy}
          opponentScore = {opponentScore}
          // drop={drop}
        /> 
        {outcome && 
        <GameOutcomeView 
        outcome={gameOutcome}
        playAgain = {helperFunctions.playAgain}
        />}
        </div>
        }
      </header>
    </div>
  );
}

export default App;