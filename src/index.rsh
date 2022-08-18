'reach 0.1';

const common = {
  ...hasRandom,
  board: Fun([], Null),
  informTimeout: Fun([], Null),
}
export const main = Reach.App(() => {
  const Deployer =  Participant('Deployer', {
    ...common,
    wager: UInt,
    deadline: UInt,
    waitingForAttacher: Fun([], Null)
  });
  const Attacher = Participant('Attacher', {
    ...common,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
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
  Attacher.publish();
  commit();

  Attacher.interact.board();
  Deployer.interact.board();

  Deployer.publish();
  transfer(wager).to(Deployer);
  commit();
  exit(); 
})
