// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v275, v276], secs: v278, time: v277, didSend: v31, from: v274 } = txn1;
  ;
  const v287 = stdlib.safeAdd(v277, v276);
  stdlib.protect(ctc1, await interact.acceptWager(v275), {
    at: './index.rsh:60:25:application',
    fs: ['at ./index.rsh:59:16:application call to [unknown function] (defined at: ./index.rsh:59:20:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v274, v275, v276, v287],
    evt_cnt: 0,
    funcNum: 1,
    lct: v277,
    onlyIf: true,
    out_tys: [],
    pay: [v275, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v294, time: v293, didSend: v44, from: v292 } = txn2;
      
      const v296 = stdlib.safeAdd(v275, v275);
      sim_r.txns.push({
        amt: v275,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v287],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v274, v275, v276, v287],
      evt_cnt: 0,
      funcNum: 2,
      lct: v277,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v456, time: v455, didSend: v247, from: v454 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v274,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v456, time: v455, didSend: v247, from: v454 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:43:29:application',
      fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:64:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v294, time: v293, didSend: v44, from: v292 } = txn2;
    const v296 = stdlib.safeAdd(v275, v275);
    ;
    stdlib.protect(ctc1, await interact.attacherBoard(), {
      at: './index.rsh:67:34:application',
      fs: ['at ./index.rsh:67:34:application call to [unknown function] (defined at: ./index.rsh:67:34:function exp)', 'at ./index.rsh:67:34:application call to "liftedInteract" (defined at: ./index.rsh:67:34:application)'],
      msg: 'attacherBoard',
      who: 'Attacher'
      });
    
    stdlib.protect(ctc1, await interact.starterCards(), {
      at: './index.rsh:70:33:application',
      fs: ['at ./index.rsh:70:33:application call to [unknown function] (defined at: ./index.rsh:70:33:function exp)', 'at ./index.rsh:70:33:application call to "liftedInteract" (defined at: ./index.rsh:70:33:application)'],
      msg: 'starterCards',
      who: 'Attacher'
      });
    
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v312], secs: v314, time: v313, didSend: v78, from: v311 } = txn3;
    ;
    const v315 = stdlib.addressEq(v274, v311);
    stdlib.assert(v315, {
      at: './index.rsh:84:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
      });
    const v322 = stdlib.safeAdd(v313, v276);
    stdlib.protect(ctc1, await interact.viewOpponentCards(v312), {
      at: './index.rsh:87:38:application',
      fs: ['at ./index.rsh:87:38:application call to [unknown function] (defined at: ./index.rsh:87:38:function exp)', 'at ./index.rsh:87:38:application call to "liftedInteract" (defined at: ./index.rsh:87:38:application)'],
      msg: 'viewOpponentCards',
      who: 'Attacher'
      });
    
    const v327 = stdlib.protect(ctc3, await interact.dealCards(), {
      at: './index.rsh:91:85:application',
      fs: ['at ./index.rsh:89:16:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
      msg: 'dealCards',
      who: 'Attacher'
      });
    const v328 = v327[stdlib.checkedBigNumberify('./index.rsh:91:85:application', stdlib.UInt_max, '0')];
    const v329 = v327[stdlib.checkedBigNumberify('./index.rsh:91:85:application', stdlib.UInt_max, '1')];
    
    const txn4 = await (ctc.sendrecv({
      args: [v274, v275, v276, v292, v296, v322, v328, v329],
      evt_cnt: 2,
      funcNum: 4,
      lct: v313,
      onlyIf: true,
      out_tys: [ctc0, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v333, v334], secs: v336, time: v335, didSend: v97, from: v332 } = txn4;
        
        ;
        const v344 = stdlib.safeAdd(v335, v276);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v322],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v274, v275, v276, v292, v296, v322],
        evt_cnt: 0,
        funcNum: 5,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v438, time: v437, didSend: v216, from: v436 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v274,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v438, time: v437, didSend: v216, from: v436 } = txn5;
      ;
      const v439 = stdlib.addressEq(v292, v436);
      const v440 = stdlib.addressEq(v274, v436);
      const v441 = v439 ? true : v440;
      stdlib.assert(v441, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:96:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:43:29:application',
        fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:96:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Attacher'
        });
      
      return;
      
      }
    else {
      const {data: [v333, v334], secs: v336, time: v335, didSend: v97, from: v332 } = txn4;
      ;
      const v337 = stdlib.addressEq(v292, v332);
      stdlib.assert(v337, {
        at: './index.rsh:94:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
        });
      const v344 = stdlib.safeAdd(v335, v276);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 6,
        out_tys: [ctc0, ctc2],
        timeoutAt: ['time', v344],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v274, v275, v292, v296, v333, v344],
          evt_cnt: 0,
          funcNum: 7,
          lct: v335,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v420, time: v419, didSend: v182, from: v418 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v292,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v420, time: v419, didSend: v182, from: v418 } = txn6;
        ;
        const v421 = stdlib.addressEq(v292, v418);
        const v422 = stdlib.addressEq(v274, v418);
        const v423 = v421 ? true : v422;
        stdlib.assert(v423, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:109:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:43:29:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:109:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Attacher'
          });
        
        return;
        
        }
      else {
        const {data: [v350, v351], secs: v353, time: v352, didSend: v108, from: v349 } = txn5;
        ;
        const v354 = stdlib.addressEq(v274, v349);
        stdlib.assert(v354, {
          at: './index.rsh:107:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        stdlib.protect(ctc1, await interact.viewOpponentCards(v351), {
          at: './index.rsh:112:38:application',
          fs: ['at ./index.rsh:112:38:application call to [unknown function] (defined at: ./index.rsh:112:38:function exp)', 'at ./index.rsh:112:38:application call to "liftedInteract" (defined at: ./index.rsh:112:38:application)'],
          msg: 'viewOpponentCards',
          who: 'Attacher'
          });
        
        let v356;
        const v357 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v358 = stdlib.lt(v350, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v359 = stdlib.gt(v350, v333);
        const v360 = v358 ? v359 : false;
        const v361 = v357 ? true : v360;
        if (v361) {
          v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v362 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v363 = stdlib.gt(v333, v350);
          const v364 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v365 = v363 ? true : v364;
          const v366 = v362 ? v365 : false;
          if (v366) {
            v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v356), {
          at: './index.rsh:117:24:application',
          fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:33:function exp)'],
          msg: 'seeOutcome',
          who: 'Attacher'
          });
        
        const v371 = stdlib.eq(v356, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v371) {
          const v372 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:121:14:decimal', stdlib.UInt_max, '2'), v275);
          const v376 = stdlib.safeSub(v296, v372);
          ;
          ;
          return;
          }
        else {
          const v384 = stdlib.eq(v356, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v384) {
            const v385 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:123:15:decimal', stdlib.UInt_max, '3'), v275);
            const v386 = stdlib.safeDiv(v385, stdlib.checkedBigNumberify('./index.rsh:123:28:decimal', stdlib.UInt_max, '2'));
            const v390 = stdlib.safeSub(v296, v386);
            ;
            const v391 = stdlib.safeDiv(v275, stdlib.checkedBigNumberify('./index.rsh:124:22:decimal', stdlib.UInt_max, '2'));
            const v395 = stdlib.safeSub(v390, v391);
            ;
            ;
            return;
            }
          else {
            const v406 = stdlib.safeSub(v296, v275);
            ;
            const v410 = stdlib.safeSub(v406, v275);
            ;
            ;
            return;
            }}}
      
      }
    
    
    
    }
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Address;
  
  
  const v270 = stdlib.protect(ctc0, interact.deadline, 'for Deployer\'s interact field deadline');
  const v271 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v271, v270],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v271, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v275, v276], secs: v278, time: v277, didSend: v31, from: v274 } = txn1;
      
      sim_r.txns.push({
        amt: v275,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v287 = stdlib.safeAdd(v277, v276);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v275, v276], secs: v278, time: v277, didSend: v31, from: v274 } = txn1;
  ;
  const v287 = stdlib.safeAdd(v277, v276);
  stdlib.protect(ctc1, await interact.waitingForAttacher(), {
    at: './index.rsh:56:39:application',
    fs: ['at ./index.rsh:56:39:application call to [unknown function] (defined at: ./index.rsh:56:39:function exp)', 'at ./index.rsh:56:39:application call to "liftedInteract" (defined at: ./index.rsh:56:39:application)'],
    msg: 'waitingForAttacher',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v287],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v274, v275, v276, v287],
      evt_cnt: 0,
      funcNum: 2,
      lct: v277,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v456, time: v455, didSend: v247, from: v454 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v274,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v456, time: v455, didSend: v247, from: v454 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:43:29:application',
      fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:64:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v294, time: v293, didSend: v44, from: v292 } = txn2;
    const v296 = stdlib.safeAdd(v275, v275);
    ;
    stdlib.protect(ctc1, await interact.deployerBoard(), {
      at: './index.rsh:68:34:application',
      fs: ['at ./index.rsh:68:34:application call to [unknown function] (defined at: ./index.rsh:68:34:function exp)', 'at ./index.rsh:68:34:application call to "liftedInteract" (defined at: ./index.rsh:68:34:application)'],
      msg: 'deployerBoard',
      who: 'Deployer'
      });
    
    stdlib.protect(ctc1, await interact.starterCards(), {
      at: './index.rsh:71:33:application',
      fs: ['at ./index.rsh:71:33:application call to [unknown function] (defined at: ./index.rsh:71:33:function exp)', 'at ./index.rsh:71:33:application call to "liftedInteract" (defined at: ./index.rsh:71:33:application)'],
      msg: 'starterCards',
      who: 'Deployer'
      });
    
    const v303 = stdlib.protect(ctc3, await interact.dealCards(), {
      at: './index.rsh:76:76:application',
      fs: ['at ./index.rsh:75:16:application call to [unknown function] (defined at: ./index.rsh:75:20:function exp)'],
      msg: 'dealCards',
      who: 'Deployer'
      });
    const v304 = v303[stdlib.checkedBigNumberify('./index.rsh:76:76:application', stdlib.UInt_max, '0')];
    const v305 = v303[stdlib.checkedBigNumberify('./index.rsh:76:76:application', stdlib.UInt_max, '1')];
    stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:78:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:75:16:application call to [unknown function] (defined at: ./index.rsh:75:20:function exp)'],
      msg: 'random',
      who: 'Deployer'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v274, v275, v276, v292, v296, v305],
      evt_cnt: 1,
      funcNum: 3,
      lct: v293,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:84:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v312], secs: v314, time: v313, didSend: v78, from: v311 } = txn3;
        
        ;
        const v322 = stdlib.safeAdd(v313, v276);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v312], secs: v314, time: v313, didSend: v78, from: v311 } = txn3;
    ;
    const v315 = stdlib.addressEq(v274, v311);
    stdlib.assert(v315, {
      at: './index.rsh:84:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v322 = stdlib.safeAdd(v313, v276);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc2],
      timeoutAt: ['time', v322],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v274, v275, v276, v292, v296, v322],
        evt_cnt: 0,
        funcNum: 5,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v438, time: v437, didSend: v216, from: v436 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v274,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v438, time: v437, didSend: v216, from: v436 } = txn5;
      ;
      const v439 = stdlib.addressEq(v292, v436);
      const v440 = stdlib.addressEq(v274, v436);
      const v441 = v439 ? true : v440;
      stdlib.assert(v441, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:96:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:43:29:application',
        fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:96:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Deployer'
        });
      
      return;
      
      }
    else {
      const {data: [v333, v334], secs: v336, time: v335, didSend: v97, from: v332 } = txn4;
      ;
      const v337 = stdlib.addressEq(v292, v332);
      stdlib.assert(v337, {
        at: './index.rsh:94:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v344 = stdlib.safeAdd(v335, v276);
      stdlib.protect(ctc1, await interact.viewOpponentCards(v334), {
        at: './index.rsh:103:31:application',
        fs: ['at ./index.rsh:101:16:application call to [unknown function] (defined at: ./index.rsh:101:20:function exp)'],
        msg: 'viewOpponentCards',
        who: 'Deployer'
        });
      const v348 = stdlib.protect(ctc2, await interact.revealCards(), {
        at: './index.rsh:104:63:application',
        fs: ['at ./index.rsh:101:16:application call to [unknown function] (defined at: ./index.rsh:101:20:function exp)'],
        msg: 'revealCards',
        who: 'Deployer'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v274, v275, v292, v296, v333, v344, v304, v348],
        evt_cnt: 2,
        funcNum: 6,
        lct: v335,
        onlyIf: true,
        out_tys: [ctc0, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v350, v351], secs: v353, time: v352, didSend: v108, from: v349 } = txn5;
          
          ;
          let v356;
          const v357 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
          const v358 = stdlib.lt(v350, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
          const v359 = stdlib.gt(v350, v333);
          const v360 = v358 ? v359 : false;
          const v361 = v357 ? true : v360;
          if (v361) {
            v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            const v362 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
            const v363 = stdlib.gt(v333, v350);
            const v364 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
            const v365 = v363 ? true : v364;
            const v366 = v362 ? v365 : false;
            if (v366) {
              v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              }
            else {
              v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            }
          
          const v371 = stdlib.eq(v356, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v371) {
            const v372 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:121:14:decimal', stdlib.UInt_max, '2'), v275);
            const v376 = stdlib.safeSub(v296, v372);
            sim_r.txns.push({
              kind: 'from',
              to: v274,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v274,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v384 = stdlib.eq(v356, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            if (v384) {
              const v385 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:123:15:decimal', stdlib.UInt_max, '3'), v275);
              const v386 = stdlib.safeDiv(v385, stdlib.checkedBigNumberify('./index.rsh:123:28:decimal', stdlib.UInt_max, '2'));
              const v390 = stdlib.safeSub(v296, v386);
              sim_r.txns.push({
                kind: 'from',
                to: v292,
                tok: undefined /* Nothing */
                });
              const v391 = stdlib.safeDiv(v275, stdlib.checkedBigNumberify('./index.rsh:124:22:decimal', stdlib.UInt_max, '2'));
              const v395 = stdlib.safeSub(v390, v391);
              sim_r.txns.push({
                kind: 'from',
                to: v274,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v274,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v406 = stdlib.safeSub(v296, v275);
              sim_r.txns.push({
                kind: 'from',
                to: v292,
                tok: undefined /* Nothing */
                });
              const v410 = stdlib.safeSub(v406, v275);
              sim_r.txns.push({
                kind: 'from',
                to: v274,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v274,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v344],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v274, v275, v292, v296, v333, v344],
          evt_cnt: 0,
          funcNum: 7,
          lct: v335,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v420, time: v419, didSend: v182, from: v418 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v292,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v420, time: v419, didSend: v182, from: v418 } = txn6;
        ;
        const v421 = stdlib.addressEq(v292, v418);
        const v422 = stdlib.addressEq(v274, v418);
        const v423 = v421 ? true : v422;
        stdlib.assert(v423, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:109:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:43:29:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:41:28:function exp)', 'at ./index.rsh:109:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Deployer'
          });
        
        return;
        
        }
      else {
        const {data: [v350, v351], secs: v353, time: v352, didSend: v108, from: v349 } = txn5;
        ;
        const v354 = stdlib.addressEq(v274, v349);
        stdlib.assert(v354, {
          at: './index.rsh:107:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v356;
        const v357 = stdlib.gt(v333, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v358 = stdlib.lt(v350, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v359 = stdlib.gt(v350, v333);
        const v360 = v358 ? v359 : false;
        const v361 = v357 ? true : v360;
        if (v361) {
          v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v362 = stdlib.lt(v333, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v363 = stdlib.gt(v333, v350);
          const v364 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v365 = v363 ? true : v364;
          const v366 = v362 ? v365 : false;
          if (v366) {
            v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v356 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v356), {
          at: './index.rsh:117:24:application',
          fs: ['at ./index.rsh:116:7:application call to [unknown function] (defined at: ./index.rsh:116:33:function exp)'],
          msg: 'seeOutcome',
          who: 'Deployer'
          });
        
        const v371 = stdlib.eq(v356, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v371) {
          const v372 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:121:14:decimal', stdlib.UInt_max, '2'), v275);
          const v376 = stdlib.safeSub(v296, v372);
          ;
          ;
          return;
          }
        else {
          const v384 = stdlib.eq(v356, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v384) {
            const v385 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:123:15:decimal', stdlib.UInt_max, '3'), v275);
            const v386 = stdlib.safeDiv(v385, stdlib.checkedBigNumberify('./index.rsh:123:28:decimal', stdlib.UInt_max, '2'));
            const v390 = stdlib.safeSub(v296, v386);
            ;
            const v391 = stdlib.safeDiv(v275, stdlib.checkedBigNumberify('./index.rsh:124:22:decimal', stdlib.UInt_max, '2'));
            const v395 = stdlib.safeSub(v390, v391);
            ;
            ;
            return;
            }
          else {
            const v406 = stdlib.safeSub(v296, v275);
            ;
            const v410 = stdlib.safeSub(v406, v275);
            ;
            ;
            return;
            }}}
      
      }
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiARAAECIAQGWFADKAgHSBUWBTAmAgEAACI1ADEYQQSaKWRJIls1ASEKWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAApBJIQUMQAGpSSELDEAAVCELEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABOIbs6mwMgY0AyEGWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDIQxbsggjshA0/7IHs0IDuUghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+VyggNf0hDFs1/CEHWzX7STUFSSJbNfpXCAg1+YAE+lEiFzT6FlA0+VCwMgY0AyEGWwxENP8xABJENPshDQ00+iEODDT6NPsNEBFBAAYiNfhCAB00+yEODDT7NPoNNPohDQ0REEEABiQ1+EIAAyM1+DT4IhJBACwkNP4LNfexIrIBNPeyCCOyEDT/sgezsSKyATT8NPcJsggjshA0/7IHs0IC8zT4JBJBAEghCDT+CyQKNfexIrIBNPeyCCOyEDT9sgezNP4kCjX2sSKyATT2sggjshA0/7IHs7EisgE0/DT3CTT2CbIII7IQNP+yB7NCAqSxIrIBNP6yCCOyEDT9sgezsSKyATT+sggjshA0/7IHs7EisgE0/DT+CTT+CbIII7IQNP+yB7NCAmtJIQ8MQABRSCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLAyBjQDIQZbD0Q0A1cwIDEAEjT/MQASEUSxIrIBNAMhB1uyCCOyEDT/sgezQgITSCEENAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/lcwIDX9IQdbNfxJNQVJIls1+1cICDX6gAQTk9TuNPsWUDT6ULAyBjQDIQZbDEQ0/TEAEkQyBjQDIQlbCDX5NP80/hZQNP1QNPwWUDT7FlA0+RZQKEsBVwBgZ0ghBTUBMgY1AkIBp0kkDEAAukkhCAxAAHZIIQg0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/iEJWzX9VzAgNfwhB1s1+0k1BTX6gAQLJ4i+NPpQsDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT5FlAoSwFXAGBnSCEENQEyBjUCQgEkSCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhEFsPRLEisgE0AyVbsggjshA0A1cAILIHs0IAy0kjDEAAZUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEJWzX9gASai5F0sDIGNAMhEFsMRDT+SQg1/DT+iADxNP80/hZQNP0WUDEAUDT8FlAoSwFXAFhnSCEINQEyBjUCQgB8SIGgjQaIAMUiNAESRDQESSISTDQCEhFESTUFSSJbNf8hCls1/oAErNEfwzT/FlA0/hZQsDT/iACUMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgAcMRkhDxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v276",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v276",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v312",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v334",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v351",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v312",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v333",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v334",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T7",
                "name": "v351",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001be338038062001be38339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611866806200037d6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bd80fa0414610140578063bf2c5b2414610153578063ebfaeee51461016657005b80631e93b0f1146100985780632754e351146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046113e4565b610179565b6100966100dd3660046113e4565b6103b7565b6100966100f03660046113e4565b6105cf565b34801561010157600080fd5b506001546100a9565b6100966101183660046113e4565b61074d565b34801561012957600080fd5b506101326108e4565b6040516100b3929190611400565b61009661014e36600461146f565b610981565b6100966101613660046113e4565b610bac565b61009661017436600461146f565b610d47565b6101896003600054146012611181565b6101a38135158061019c57506001548235145b6013611181565b6000808055600280546101b59061148b565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061148b565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611513565b905061025e6040518060200160405280600081525090565b7ff612951e6c1530ea6c8423f892ba3c90a42a7a42349da8930e850d762eb21a6e338460405161028f9291906115bd565b60405180910390a16102a334156010611181565b81516102bb906001600160a01b031633146011611181565b6102c94383604001516111a7565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528b5160a0808d019182526004600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103b09291906112f6565b5050505050565b6103c76001600054146009611181565b6103e1813515806103da57506001548235145b600a611181565b6000808055600280546103f39061148b565b80601f016020809104026020016040519081016040528092919081815260200182805461041f9061148b565b801561046c5780601f106104415761010080835404028352916020019161046c565b820191906000526020600020905b81548152906001019060200180831161044f57829003601f168201915b505050505080602001905181019061048491906115e9565b905061049c6040518060200160405280600081525090565b6104ad82606001514310600b611181565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516104de929190611662565b60405180910390a160208201516104f590806111a7565b815260208201516105099034146008611181565b61054d6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152835160808401526003600055436001555161038c9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b6105df600160005414600d611181565b6105f9813515806105f257506001548235145b600e611181565b60008080556002805461060b9061148b565b80601f01602080910402602001604051908101604052809291908181526020018280546106379061148b565b80156106845780601f1061065957610100808354040283529160200191610684565b820191906000526020600020905b81548152906001019060200180831161066757829003601f168201915b505050505080602001905181019061069c91906115e9565b90506106b08160600151431015600f611181565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106e1929190611662565b60405180910390a16106f53415600c611181565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610732573d6000803e3d6000fd5b50600080805560018190556107499060029061137a565b5050565b61075d600460005414601b611181565b6107778135158061077057506001548235145b601c611181565b6000808055600280546107899061148b565b80601f01602080910402602001604051908101604052809291908181526020018280546107b59061148b565b80156108025780601f106107d757610100808354040283529160200191610802565b820191906000526020600020905b8154815290600101906020018083116107e557829003601f168201915b505050505080602001905181019061081a919061169f565b905061082e8160a00151431015601d611181565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161085f929190611662565b60405180910390a161087334156019611181565b60608101516108a7906001600160a01b0316331461089d5781516001600160a01b031633146108a0565b60015b601a611181565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610732573d6000803e3d6000fd5b6000606060005460028080546108f99061148b565b80601f01602080910402602001604051908101604052809291908181526020018280546109259061148b565b80156109725780601f1061094757610100808354040283529160200191610972565b820191906000526020600020905b81548152906001019060200180831161095557829003601f168201915b50505050509050915091509091565b6109916004600054146016611181565b6109ab813515806109a457506001548235145b6017611181565b6000808055600280546109bd9061148b565b80601f01602080910402602001604051908101604052809291908181526020018280546109e99061148b565b8015610a365780601f10610a0b57610100808354040283529160200191610a36565b820191906000526020600020905b815481529060010190602001808311610a1957829003601f168201915b5050505050806020019051810190610a4e919061169f565b9050610a666040518060200160405280600081525090565b610a778260a0015143106018611181565b7f1680f1f49bab5bce70fda067a0e2ef3df5bfbefb13a6c3c5c3026cc5f0ddc7b13384604051610aa8929190611725565b60405180910390a1610abc34156014611181565b6060820151610ad7906001600160a01b031633146015611181565b610ae54383604001516111a7565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b03908116808352602080860151818501908152606080880151851660408088019182526080808b0151848a019081528c870135828b019081528b5160a0808d019182526006600055436001558551998a019a909a529651938801939093529251909716928501929092525194830194909452925191810191909152905160c082015260e00161038c565b610bbc6006600054146025611181565b610bd681351580610bcf57506001548235145b6026611181565b600080805560028054610be89061148b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c149061148b565b8015610c615780601f10610c3657610100808354040283529160200191610c61565b820191906000526020600020905b815481529060010190602001808311610c4457829003601f168201915b5050505050806020019051810190610c799190611742565b9050610c8d8160a001514310156027611181565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610cbe929190611662565b60405180910390a1610cd234156023611181565b6040810151610d06906001600160a01b03163314610cfc5781516001600160a01b03163314610cff565b60015b6024611181565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610732573d6000803e3d6000fd5b610d576006600054146020611181565b610d7181351580610d6a57506001548235145b6021611181565b600080805560028054610d839061148b565b80601f0160208091040260200160405190810160405280929190818152602001828054610daf9061148b565b8015610dfc5780601f10610dd157610100808354040283529160200191610dfc565b820191906000526020600020905b815481529060010190602001808311610ddf57829003601f168201915b5050505050806020019051810190610e149190611742565b9050610e416040518060800160405280600081526020016000815260200160008152602001600081525090565b610e528260a0015143106022611181565b7f743720a8a8019f9562e650b473c07df59b61ff6da2f3717d30f4f175c28a25383384604051610e83929190611725565b60405180910390a1610e973415601e611181565b8151610eaf906001600160a01b03163314601f611181565b6015826080015111610ede576016602084013510610ece576000610ee1565b6080820151602084013511610ee1565b60015b15610eef5760008152610f34565b6016826080015110610f02576000610f21565b6080820151602084013510610f1e576015602084013511610f21565b60015b15610f2f5760028152610f34565b600181525b8051610fef57610f49600283602001516111fa565b6020820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610f87573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc610fab84606001518460200151611259565b6040518115909202916000818181858888f19350505050158015610fd3573d6000803e3d6000fd5b5060008080556001819055610fea9060029061137a565b505050565b8051600214156110d15761101261100b600384602001516111fa565b60026112a8565b60408083018290528381015190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611052573d6000803e3d6000fd5b50611062826020015160026112a8565b6060820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156110a0573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc610fab6110c785606001518560400151611259565b8460600151611259565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015611112573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611150573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc610fab61117785606001518660200151611259565b8560200151611259565b816107495760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826111b483826117c0565b91508110156111f45760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161119e565b92915050565b600081158061121e5750828261121081836117d8565b925061121c90836117f7565b145b6111f45760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161119e565b6000826112668382611819565b91508111156111f45760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161119e565b6000816112e55760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161119e565b6112ef82846117f7565b9392505050565b8280546113029061148b565b90600052602060002090601f016020900481019282611324576000855561136a565b82601f1061133d57805160ff191683800117855561136a565b8280016001018555821561136a579182015b8281111561136a57825182559160200191906001019061134f565b506113769291506113b7565b5090565b5080546113869061148b565b6000825580601f10611396575050565b601f0160209004906000526020600020908101906113b491906113b7565b50565b5b8082111561137657600081556001016113b8565b6000604082840312156113de57600080fd5b50919050565b6000604082840312156113f657600080fd5b6112ef83836113cc565b82815260006020604081840152835180604085015260005b8181101561143457858101830151858201606001528201611418565b81811115611446576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156113de57600080fd5b60006060828403121561148157600080fd5b6112ef838361145d565b600181811c9082168061149f57607f821691505b602082108114156113de57634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff811182821017156114f157634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461150e57600080fd5b919050565b600060a0828403121561152557600080fd5b60405160a0810181811067ffffffffffffffff8211171561155657634e487b7160e01b600052604160045260246000fd5b604052611562836114f7565b81526020830151602082015260408301516040820152611584606084016114f7565b6060820152608083015160808201528091505092915050565b80356001600160c01b031981168082146115b657600080fd5b9092525050565b6001600160a01b0383168152813560208083019190915260608201906112ef906040840190850161159d565b6000608082840312156115fb57600080fd5b6040516080810181811067ffffffffffffffff8211171561162c57634e487b7160e01b600052604160045260246000fd5b604052611638836114f7565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461169057600080fd5b80604085015250509392505050565b600060c082840312156116b157600080fd5b6116b96114c0565b6116c2836114f7565b815260208301516020820152604083015160408201526116e4606084016114f7565b60608201526080830151608082015260a083015160a08201528091505092915050565b8035825260208101356020830152610749604083016040830161159d565b6001600160a01b0383168152608081016112ef6020830184611707565b600060c0828403121561175457600080fd5b61175c6114c0565b611765836114f7565b81526020830151602082015261177d604084016114f7565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117d3576117d36117aa565b500190565b60008160001904831182151516156117f2576117f26117aa565b500290565b60008261181457634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561182b5761182b6117aa565b50039056fea2646970667358221220580bd2681cd231ec9db5e65f00da14df64f12966822e5aebd918f2a5fa37ada464736f6c634300080c0033`,
  BytecodeLen: 7139,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:86:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:96:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:99:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:109:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:132:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher": Attacher,
  "Deployer": Deployer
  };
export const _APIs = {
  };
