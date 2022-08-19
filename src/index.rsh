'reach 0.1';

const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const winner = (bobTotal, aliceTotal) => {
  if (bobTotal > 21 || (aliceTotal < 22 && aliceTotal > bobTotal)) {
    return A_WINS;
  } else {
    if (bobTotal < 22 && (bobTotal > aliceTotal || aliceTotal > 21)) {
      return B_WINS;
    } else return DRAW;
  }
};

const common = {
  ...hasRandom,
  board: Fun([], Null),
  dealCards: Fun([], Tuple(UInt, Bytes(8))),
  informTimeout: Fun([], Null),
  seeOutcome: Fun([UInt], Null),
  viewOpponentCards: Fun([Bytes(8)], Null),
}
export const main = Reach.App(() => {
  const Deployer =  Participant('Deployer', {
    ...common,
    wager: UInt,
    deadline: UInt,
    waitingForAttacher: Fun([], Null),
    deployerBoard: Fun([], Null),
  });
  const Attacher = Participant('Attacher', {
    ...common,
    acceptWager: Fun([UInt], Null),
    attacherBoard: Fun([], Null),
    stand: Fun([], Null),
  });

  init();

  const informTimeout = () => {
    each([Deployer, Attacher], () => {
      interact.informTimeout();
    });
  };

  Deployer.only(() => {
    const wager = declassify(interact.wager)
    const deadline = declassify(interact.deadline)
  })
  Deployer.publish(wager, deadline)
  .pay(wager);
  commit();


  Deployer.interact.waitingForAttacher();
  

  Attacher.only(() => {
    interact.acceptWager(wager)
  })
  
  Attacher.pay(wager).timeout(relativeTime(deadline), () =>
  closeTo(Deployer, informTimeout)
  );
  
  Attacher.interact.attacherBoard();
  Deployer.interact.deployerBoard();

  commit();

  Deployer.only(() => {
    const [_DeployerCardsTotal, _DeployerCardsVisible] = interact.dealCards();
    const [_DeployerCommit, _DeployerSalt] = makeCommitment(
      interact,
      _DeployerCardsVisible
    );
    const DeployerCommit = declassify(_DeployerCommit)
  });

  Deployer.publish(DeployerCommit).timeout(
    relativeTime(deadline),
    () => closeTo(Attacher, informTimeout)
  );
  
  Attacher.interact.stand();
  
  commit();

  Attacher.only(() => {
    const [AttacherCardsTotal, AttacherCardsVisible] = declassify(interact.dealCards());
  });

  Attacher.publish(AttacherCardsTotal, AttacherCardsVisible).timeout(
    relativeTime(deadline),
    () => closeTo(Deployer, informTimeout)
  );

  Deployer.only(() => {
    const DeployerSalt = declassify(_DeployerSalt);
    const DeployerVisibleCard = declassify(_DeployerCardsVisible)
  });

  commit();

  Deployer.publish(DeployerSalt, DeployerVisibleCard);

  checkCommitment(DeployerCommit, DeployerSalt, DeployerVisibleCard)

  Attacher.interact.viewOpponentCards(DeployerVisibleCard);

  commit();

  Deployer.only(() => {
    const DeployerCardsTotal = declassify(_DeployerCardsTotal);
    interact.viewOpponentCards(AttacherCardsVisible);
  });


  Deployer.publish(DeployerCardsTotal);

  const outcome = winner(AttacherCardsTotal, DeployerCardsTotal);

  each([Deployer, Attacher], () => {
    interact.seeOutcome(outcome);
  });

  if (outcome == A_WINS) {
    transfer(2 * wager).to(Deployer);
  } else if (outcome == B_WINS) {
    transfer((3 * wager) / 2).to(Attacher);
    transfer(wager / 2).to(Deployer);
  } else {
    transfer(wager).to(Attacher);
    transfer(wager).to(Deployer);
  }

  transfer(balance()).to(Deployer);

  commit();
  exit(); 
})
