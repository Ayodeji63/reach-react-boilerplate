import * as backend from "./reach/build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";

import "./App.css";
import { views, GameOutcome, blackJackGame } from "./utils/constants.js";
import { useState } from "react";

//views
import {
  AcceptWager,
  Attaching,
  ConnectAccount,
  Deploying,
  DeployOrAttach,
  PasteContractInfo,
  SetWager,
  WaitForAttacher,
  GameOutcomeView,
  GamePlayView
} from "./views/";

import { Card } from "./cardComponents/index";
import { Header } from "./components/Header.js";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const { standardUnit } = reach;

function App() {
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  // const [view, setView] = useState(views.GAME_PLAY);

  const [account, setAccount] = useState({});
  const [contractInfo, setContractInfo] = useState();
  const [isAlice, setIsAlice] = useState(true);
  const [wager, setWager] = useState();
  const [resolver, setResolver] = useState({ resolve: () => null });
  const [gameOutcome, setGameOutcome] = useState(GameOutcome.UNDECIDED);
  const [opponentCards, setOpponentCards] = useState([]);
  const [myCards, setMyCards] = useState('');
  const [hasSeenSomeOpponentCards, setHasSeenSomeOpponentCards] = useState(false);
  const [canViewAllOpponentCards, setCanViewAllOpponentCards] = useState(false);

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if (deployer) {
        setIsAlice(true);
        setView(views.SET_WAGER);
      } else {
        setIsAlice(false);
        setView(views.PASTE_CONTRACT_INFO);
      }
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
      Alice.wager = reach.parseCurrency(wager);
      Alice.deadline = deadline;
      backend.Alice(contract, Alice);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob);
    },
  };

  const Player = {
    random: () => reach.hasRandom.random(),
    informTimeout: () => {
      setView(views.TIME_OUT);
      alert("Time out!!!!");
      window.location.reload();
    },

    dealCards: async () => {
      setView(views.GAME_PLAY);

      return await new Promise((resolve) => {
        setResolver({
          resolve
        })
      })
    },

    seeOutcome: async (value) => {
      const outcome = parseInt(value);
      console.log("The outcome is", outcome);

      if (outcome === 0) {
        setGameOutcome(isAlice? GameOutcome.WINNER : GameOutcome.LOSS)
      }
      else if (outcome === 1) {
        setGameOutcome(GameOutcome.DRAW)
      }
      else {
        setGameOutcome(isAlice? GameOutcome.LOSS : GameOutcome.WINNER)
      }

      setView(views.SEE_WINNER);
    },

    viewOpponentCards: async (cards) => {
      let splittedCard = cards.split("");
      let returnedCards = "";

      // check if it is a character
      splittedCard.forEach((char) => {
        //check if the char in array is among accepted cards
        if (blackJackGame.cards.indexOf(char) > -1) {
          returnedCards += char;
        }
      });

      setOpponentCards(returnedCards.split(''));

      if (isAlice) {
        setCanViewAllOpponentCards(true);
      }
      else {
        if (hasSeenSomeOpponentCards) {
          setCanViewAllOpponentCards(true);
        }
        else {
          setHasSeenSomeOpponentCards(true);
        }
      }
    }
  };

  const Alice = {
    ...Player,

    wager: 0,

    deadline: 0,

    setWagerAndDeadline: (wager, deadline) => {
      this.wager = wager;
      this.deadline = deadline;
    },

    waitingForAttacher: () => {
      setView(views.WAIT_FOR_ATTACHER);
    },

    revealCards: () => {
      return myCards
    }
  };

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
        });
      });
    },
  };

  const handleCardsChange = (cards) => {
    setMyCards(cards);
  }

  return (
    <div className="App">
      <div className="topnav">
      <Header
          text2="BlackJack"
          span="Game"
          spanClass="Intro__span"
          class2="Intro__sub"
        />
      </div>

      {view === views.CONNECT_ACCOUNT && (
        <ConnectAccount connect={reachFunctions.connect} />
      )}

      {view === views.DEPLOY_OR_ATTACH && (
        <DeployOrAttach setAsDeployer={reachFunctions.setAsDeployer} />
      )}

      {view === views.SET_WAGER && <SetWager deploy={reachFunctions.deploy} />}

      {view === views.DEPLOYING && <Deploying />}

      {view === views.WAIT_FOR_ATTACHER && (
        <WaitForAttacher contractInfo={contractInfo} />
      )}

      {view === views.PASTE_CONTRACT_INFO && (
        <PasteContractInfo attach={reachFunctions.attach} />
      )}

      {view === views.ACCEPT_WAGER && (
        <AcceptWager
          wager={wager}
          standardUnit={standardUnit}
          accept={resolver.resolve}
          decline={() => setView(views.DEPLOY_OR_ATTACH)}
        />
      )}

      {view === views.ATTACHING && <Attaching />}

      { view === views.SEE_WINNER && <GameOutcomeView outcome={gameOutcome}/> }

      { view === views.GAME_PLAY && 
        <GamePlayView 
          onCardsChange = { handleCardsChange }
          opponentCards = { opponentCards }
          isAlice = { isAlice }
          canViewAllOpponentCards = { canViewAllOpponentCards }
          submitCards = { resolver.resolve }
        /> 
      }
    </div>
  );
}

export default App;
