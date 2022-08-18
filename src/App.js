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

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),

    board: () => setView(views.TEST_VIEW)
  }

  const Deployer = {
    ...Common,
    wager: 0,

    deadline: 0,

    setWagerAndDeadline: (wager, deadline) => {
      this.wager = wager;
      this.deadline = deadline;
    },

    waitingForAttacher: () => {
      setView(views.WAIT_FOR_ATTACHER);
    },
  }

  const Attacher = {
    ...Common,
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
          view === views.TEST_VIEW &&
          <DeployerView
          // blackJackGame={blackJackGame}
          // deployerCard={deployerCard}
          // deployHit={deployHit}
          // drop={drop}
        /> 
        }
      </header>
    </div>
  );
}

export default App;