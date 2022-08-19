import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
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
  const [isHit, setIsHit] = useState(false);
  const [stand, setStand] = useState(false)

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
    cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
    cardsMap: {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
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

 
const OUTCOME = ['Deployer Wins !!!', 'Draw', 'Attacher Wins !!!']

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

    viewOpponentCards:(opponentCard) => {
      let viewCard = [...opponentCard]
     let setCard =  viewCard.filter(String);
      console.log(`This are opponent Cards ${setCard}`);
      for (let i = 0; i < viewCard.length; i++) {
       if (viewCard[i] !== ",") {
        const card = viewCard[i];
        setOpponentCard(preCards => [...preCards, <Card card={card}/>])
       }
      }
    },

    seeOutcome: (outcome) => {
      setText(OUTCOME[outcome])
    }
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
    deployerBoard: () => setView(views.DEPLOYER_BOARD)
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
    attacherBoard: () => setView(views.ATTACHER_BOARD),
    stand: () => {
      console.log('click again');
      setStand(true)
      setView(views.ATTACHER_BOARD)
    }
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
          <DeployerView
          blackJackGame={blackJackGame}
          randomCards = {randomCards}
          submitCards = {resolver.resolve}
          deployerCard = {deployerCard}
          deployerScore = {deployerScore}
          setDeployerScore = {setDeployerScore}
          setDeployerCard = {setDeployerCard}
          opponentCard = {opponentCard}
          text = {text}
          setText = {setText}
          // drop={drop}
        /> 
        }
         {
          view === views.ATTACHER_BOARD &&
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
          deploy = {stand}
          // drop={drop}
        /> 
        }
      </header>
    </div>
  );
}

export default App;