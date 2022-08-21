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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2],
      6: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc7 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v31, from: v299 } = txn1;
  ;
  const v312 = stdlib.safeAdd(v302, v301);
  stdlib.protect(ctc1, await interact.acceptWager(v300), {
    at: './index.rsh:74:25:application',
    fs: ['at ./index.rsh:73:16:application call to [unknown function] (defined at: ./index.rsh:73:20:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v299, v300, v301, v312],
    evt_cnt: 0,
    funcNum: 1,
    lct: v302,
    onlyIf: true,
    out_tys: [],
    pay: [v300, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v319, time: v318, didSend: v44, from: v317 } = txn2;
      
      const v321 = stdlib.safeAdd(v300, v300);
      sim_r.txns.push({
        amt: v300,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v330 = stdlib.safeAdd(v318, v301);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v312],
    tys: [ctc7, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v299, v300, v301, v312],
      evt_cnt: 0,
      funcNum: 2,
      lct: v302,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v505, time: v504, didSend: v272, from: v503 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v299,
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
      tys: [ctc7, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v505, time: v504, didSend: v272, from: v503 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:57:29:application',
      fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:78:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v319, time: v318, didSend: v44, from: v317 } = txn2;
    const v321 = stdlib.safeAdd(v300, v300);
    ;
    stdlib.protect(ctc1, await interact.attacherBoard(), {
      at: './index.rsh:81:34:application',
      fs: ['at ./index.rsh:81:34:application call to [unknown function] (defined at: ./index.rsh:81:34:function exp)', 'at ./index.rsh:81:34:application call to "liftedInteract" (defined at: ./index.rsh:81:34:application)'],
      msg: 'attacherBoard',
      who: 'Attacher'
      });
    
    const v330 = stdlib.safeAdd(v318, v301);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc2],
      timeoutAt: ['time', v330],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v299, v300, v301, v317, v321, v330],
        evt_cnt: 0,
        funcNum: 4,
        lct: v318,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v487, time: v486, didSend: v241, from: v485 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v317,
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
        tys: [ctc7, ctc0, ctc0, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v487, time: v486, didSend: v241, from: v485 } = txn4;
      ;
      const v488 = stdlib.addressEq(v317, v485);
      const v489 = stdlib.addressEq(v299, v485);
      const v490 = v488 ? true : v489;
      stdlib.assert(v490, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:99:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:57:29:application',
        fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:99:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Attacher'
        });
      
      return;
      
      }
    else {
      const {data: [v346, v347], secs: v349, time: v348, didSend: v75, from: v345 } = txn3;
      ;
      const v350 = stdlib.addressEq(v299, v345);
      stdlib.assert(v350, {
        at: './index.rsh:97:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
        });
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v355], secs: v357, time: v356, didSend: v85, from: v354 } = txn4;
      ;
      const v358 = stdlib.addressEq(v299, v354);
      stdlib.assert(v358, {
        at: './index.rsh:108:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
        });
      const v365 = stdlib.safeAdd(v356, v301);
      stdlib.protect(ctc1, await interact.deploy(v355), {
        at: './index.rsh:113:27:application',
        fs: ['at ./index.rsh:113:27:application call to [unknown function] (defined at: ./index.rsh:113:27:function exp)', 'at ./index.rsh:113:27:application call to "liftedInteract" (defined at: ./index.rsh:113:27:application)'],
        msg: 'deploy',
        who: 'Attacher'
        });
      
      const v370 = stdlib.protect(ctc5, await interact.dealCards(), {
        at: './index.rsh:116:85:application',
        fs: ['at ./index.rsh:115:16:application call to [unknown function] (defined at: ./index.rsh:115:20:function exp)'],
        msg: 'dealCards',
        who: 'Attacher'
        });
      const v371 = v370[stdlib.checkedBigNumberify('./index.rsh:116:85:application', stdlib.UInt_max, '0')];
      const v372 = v370[stdlib.checkedBigNumberify('./index.rsh:116:85:application', stdlib.UInt_max, '1')];
      
      const txn5 = await (ctc.sendrecv({
        args: [v299, v300, v317, v321, v346, v347, v365, v371, v372],
        evt_cnt: 2,
        funcNum: 6,
        lct: v356,
        onlyIf: true,
        out_tys: [ctc0, ctc4],
        pay: [stdlib.checkedBigNumberify('./index.rsh:120:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v376, v377], secs: v379, time: v378, didSend: v104, from: v375 } = txn5;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v365],
        tys: [ctc7, ctc0, ctc7, ctc0, ctc2, ctc2, ctc0, ctc0, ctc4],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v299, v300, v317, v321, v346, v347, v365],
          evt_cnt: 0,
          funcNum: 7,
          lct: v356,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v469, time: v468, didSend: v207, from: v467 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v299,
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
          tys: [ctc7, ctc0, ctc7, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v469, time: v468, didSend: v207, from: v467 } = txn6;
        ;
        const v470 = stdlib.addressEq(v317, v467);
        const v471 = stdlib.addressEq(v299, v467);
        const v472 = v470 ? true : v471;
        stdlib.assert(v472, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:122:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:57:29:application',
          fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:122:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Attacher'
          });
        
        return;
        
        }
      else {
        const {data: [v376, v377], secs: v379, time: v378, didSend: v104, from: v375 } = txn5;
        ;
        const v380 = stdlib.addressEq(v317, v375);
        stdlib.assert(v380, {
          at: './index.rsh:120:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 8,
          out_tys: [ctc0, ctc4, ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v384, v385, v386, v387], secs: v389, time: v388, didSend: v116, from: v383 } = txn6;
        ;
        const v390 = stdlib.addressEq(v299, v383);
        stdlib.assert(v390, {
          at: './index.rsh:135:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        const v391 = stdlib.digest(ctc5, [v384, v385]);
        const v392 = stdlib.digestEq(v346, v391);
        stdlib.assert(v392, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:137:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Attacher'
          });
        const v393 = stdlib.digest(ctc6, [v386, v387]);
        const v394 = stdlib.digestEq(v347, v393);
        stdlib.assert(v394, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:138:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Attacher'
          });
        const v396 = [v386, v385];
        stdlib.protect(ctc1, await interact.viewOpponentCards(v396), {
          at: './index.rsh:140:38:application',
          fs: ['at ./index.rsh:140:38:application call to [unknown function] (defined at: ./index.rsh:140:38:function exp)', 'at ./index.rsh:140:38:application call to "liftedInteract" (defined at: ./index.rsh:140:38:application)'],
          msg: 'viewOpponentCards',
          who: 'Attacher'
          });
        
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 9,
          out_tys: [ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v401], secs: v403, time: v402, didSend: v137, from: v400 } = txn7;
        ;
        const v404 = stdlib.addressEq(v299, v400);
        stdlib.assert(v404, {
          at: './index.rsh:150:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        let v405;
        const v406 = stdlib.gt(v376, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v407 = stdlib.lt(v401, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v408 = stdlib.gt(v401, v376);
        const v409 = v407 ? v408 : false;
        const v410 = v406 ? true : v409;
        if (v410) {
          v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v411 = stdlib.lt(v376, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v412 = stdlib.gt(v376, v401);
          const v413 = stdlib.gt(v401, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v414 = v412 ? true : v413;
          const v415 = v411 ? v414 : false;
          if (v415) {
            v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v405), {
          at: './index.rsh:155:24:application',
          fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:33:function exp)'],
          msg: 'seeOutcome',
          who: 'Attacher'
          });
        
        const v420 = stdlib.eq(v405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v420) {
          const v421 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:159:14:decimal', stdlib.UInt_max, '2'), v300);
          const v425 = stdlib.safeSub(v321, v421);
          ;
          ;
          return;
          }
        else {
          const v433 = stdlib.eq(v405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v433) {
            const v434 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, '3'), v300);
            const v435 = stdlib.safeDiv(v434, stdlib.checkedBigNumberify('./index.rsh:161:28:decimal', stdlib.UInt_max, '2'));
            const v439 = stdlib.safeSub(v321, v435);
            ;
            const v440 = stdlib.safeDiv(v300, stdlib.checkedBigNumberify('./index.rsh:162:22:decimal', stdlib.UInt_max, '2'));
            const v444 = stdlib.safeSub(v439, v440);
            ;
            ;
            return;
            }
          else {
            const v455 = stdlib.safeSub(v321, v300);
            ;
            const v459 = stdlib.safeSub(v455, v300);
            ;
            ;
            return;
            }}
        
        
        
        }
      
      
      
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
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  
  
  const v295 = stdlib.protect(ctc0, interact.deadline, 'for Deployer\'s interact field deadline');
  const v296 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v296, v295],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:65:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v296, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v300, v301], secs: v303, time: v302, didSend: v31, from: v299 } = txn1;
      
      sim_r.txns.push({
        amt: v300,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v312 = stdlib.safeAdd(v302, v301);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v31, from: v299 } = txn1;
  ;
  const v312 = stdlib.safeAdd(v302, v301);
  stdlib.protect(ctc1, await interact.waitingForAttacher(), {
    at: './index.rsh:70:39:application',
    fs: ['at ./index.rsh:70:39:application call to [unknown function] (defined at: ./index.rsh:70:39:function exp)', 'at ./index.rsh:70:39:application call to "liftedInteract" (defined at: ./index.rsh:70:39:application)'],
    msg: 'waitingForAttacher',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v312],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v299, v300, v301, v312],
      evt_cnt: 0,
      funcNum: 2,
      lct: v302,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v505, time: v504, didSend: v272, from: v503 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v299,
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
      tys: [ctc7, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v505, time: v504, didSend: v272, from: v503 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:57:29:application',
      fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:78:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v319, time: v318, didSend: v44, from: v317 } = txn2;
    const v321 = stdlib.safeAdd(v300, v300);
    ;
    stdlib.protect(ctc1, await interact.deployerBoard(), {
      at: './index.rsh:82:34:application',
      fs: ['at ./index.rsh:82:34:application call to [unknown function] (defined at: ./index.rsh:82:34:function exp)', 'at ./index.rsh:82:34:application call to "liftedInteract" (defined at: ./index.rsh:82:34:application)'],
      msg: 'deployerBoard',
      who: 'Deployer'
      });
    
    const v330 = stdlib.safeAdd(v318, v301);
    const v334 = stdlib.protect(ctc3, await interact.dealCards(), {
      at: './index.rsh:87:76:application',
      fs: ['at ./index.rsh:86:16:application call to [unknown function] (defined at: ./index.rsh:86:20:function exp)'],
      msg: 'dealCards',
      who: 'Deployer'
      });
    const v335 = v334[stdlib.checkedBigNumberify('./index.rsh:87:76:application', stdlib.UInt_max, '0')];
    const v336 = v334[stdlib.checkedBigNumberify('./index.rsh:87:76:application', stdlib.UInt_max, '1')];
    const v339 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:88:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:86:16:application call to [unknown function] (defined at: ./index.rsh:86:20:function exp)'],
      msg: 'random',
      who: 'Deployer'
      });
    const v340 = stdlib.digest(ctc3, [v339, v336]);
    const v342 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:92:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:86:16:application call to [unknown function] (defined at: ./index.rsh:86:20:function exp)'],
      msg: 'random',
      who: 'Deployer'
      });
    const v343 = stdlib.digest(ctc4, [v342, v335]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v299, v300, v301, v317, v321, v330, v340, v343],
      evt_cnt: 2,
      funcNum: 3,
      lct: v318,
      onlyIf: true,
      out_tys: [ctc5, ctc5],
      pay: [stdlib.checkedBigNumberify('./index.rsh:97:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v346, v347], secs: v349, time: v348, didSend: v75, from: v345 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v330],
      tys: [ctc7, ctc0, ctc0, ctc7, ctc0, ctc0, ctc5, ctc5],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v299, v300, v301, v317, v321, v330],
        evt_cnt: 0,
        funcNum: 4,
        lct: v318,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v487, time: v486, didSend: v241, from: v485 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v317,
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
        tys: [ctc7, ctc0, ctc0, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v487, time: v486, didSend: v241, from: v485 } = txn4;
      ;
      const v488 = stdlib.addressEq(v317, v485);
      const v489 = stdlib.addressEq(v299, v485);
      const v490 = v488 ? true : v489;
      stdlib.assert(v490, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:99:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:57:29:application',
        fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:99:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Deployer'
        });
      
      return;
      
      }
    else {
      const {data: [v346, v347], secs: v349, time: v348, didSend: v75, from: v345 } = txn3;
      ;
      const v350 = stdlib.addressEq(v299, v345);
      stdlib.assert(v350, {
        at: './index.rsh:97:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v353 = stdlib.protect(ctc6, await interact.stand(), {
        at: './index.rsh:106:44:application',
        fs: ['at ./index.rsh:105:16:application call to [unknown function] (defined at: ./index.rsh:105:20:function exp)'],
        msg: 'stand',
        who: 'Deployer'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v299, v300, v301, v317, v321, v346, v347, v353],
        evt_cnt: 1,
        funcNum: 5,
        lct: v348,
        onlyIf: true,
        out_tys: [ctc6],
        pay: [stdlib.checkedBigNumberify('./index.rsh:108:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v355], secs: v357, time: v356, didSend: v85, from: v354 } = txn4;
          
          ;
          const v365 = stdlib.safeAdd(v356, v301);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc0, ctc0, ctc7, ctc0, ctc5, ctc5, ctc6],
        waitIfNotPresent: false
        }));
      const {data: [v355], secs: v357, time: v356, didSend: v85, from: v354 } = txn4;
      ;
      const v358 = stdlib.addressEq(v299, v354);
      stdlib.assert(v358, {
        at: './index.rsh:108:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v365 = stdlib.safeAdd(v356, v301);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 6,
        out_tys: [ctc0, ctc2],
        timeoutAt: ['time', v365],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v299, v300, v317, v321, v346, v347, v365],
          evt_cnt: 0,
          funcNum: 7,
          lct: v356,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v469, time: v468, didSend: v207, from: v467 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v299,
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
          tys: [ctc7, ctc0, ctc7, ctc0, ctc5, ctc5, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v469, time: v468, didSend: v207, from: v467 } = txn6;
        ;
        const v470 = stdlib.addressEq(v317, v467);
        const v471 = stdlib.addressEq(v299, v467);
        const v472 = v470 ? true : v471;
        stdlib.assert(v472, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:122:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:57:29:application',
          fs: ['at ./index.rsh:56:9:application call to [unknown function] (defined at: ./index.rsh:56:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:28:function exp)', 'at ./index.rsh:122:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Deployer'
          });
        
        return;
        
        }
      else {
        const {data: [v376, v377], secs: v379, time: v378, didSend: v104, from: v375 } = txn5;
        ;
        const v380 = stdlib.addressEq(v317, v375);
        stdlib.assert(v380, {
          at: './index.rsh:120:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const txn6 = await (ctc.sendrecv({
          args: [v299, v300, v317, v321, v346, v347, v376, v339, v336, v342, v335],
          evt_cnt: 4,
          funcNum: 8,
          lct: v378,
          onlyIf: true,
          out_tys: [ctc0, ctc2, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:135:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v384, v385, v386, v387], secs: v389, time: v388, didSend: v116, from: v383 } = txn6;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc0, ctc7, ctc0, ctc5, ctc5, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v384, v385, v386, v387], secs: v389, time: v388, didSend: v116, from: v383 } = txn6;
        ;
        const v390 = stdlib.addressEq(v299, v383);
        stdlib.assert(v390, {
          at: './index.rsh:135:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v391 = stdlib.digest(ctc3, [v384, v385]);
        const v392 = stdlib.digestEq(v346, v391);
        stdlib.assert(v392, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:137:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v393 = stdlib.digest(ctc4, [v386, v387]);
        const v394 = stdlib.digestEq(v347, v393);
        stdlib.assert(v394, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:138:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v399 = [v376, v377];
        stdlib.protect(ctc1, await interact.viewOpponentCards(v399), {
          at: './index.rsh:146:31:application',
          fs: ['at ./index.rsh:144:16:application call to [unknown function] (defined at: ./index.rsh:144:20:function exp)'],
          msg: 'viewOpponentCards',
          who: 'Deployer'
          });
        
        const txn7 = await (ctc.sendrecv({
          args: [v299, v300, v317, v321, v376, v335],
          evt_cnt: 1,
          funcNum: 9,
          lct: v388,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:150:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v401], secs: v403, time: v402, didSend: v137, from: v400 } = txn7;
            
            ;
            let v405;
            const v406 = stdlib.gt(v376, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
            const v407 = stdlib.lt(v401, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
            const v408 = stdlib.gt(v401, v376);
            const v409 = v407 ? v408 : false;
            const v410 = v406 ? true : v409;
            if (v410) {
              v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v411 = stdlib.lt(v376, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
              const v412 = stdlib.gt(v376, v401);
              const v413 = stdlib.gt(v401, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
              const v414 = v412 ? true : v413;
              const v415 = v411 ? v414 : false;
              if (v415) {
                v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            
            const v420 = stdlib.eq(v405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v420) {
              const v421 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:159:14:decimal', stdlib.UInt_max, '2'), v300);
              const v425 = stdlib.safeSub(v321, v421);
              sim_r.txns.push({
                kind: 'from',
                to: v299,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v299,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v433 = stdlib.eq(v405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              if (v433) {
                const v434 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, '3'), v300);
                const v435 = stdlib.safeDiv(v434, stdlib.checkedBigNumberify('./index.rsh:161:28:decimal', stdlib.UInt_max, '2'));
                const v439 = stdlib.safeSub(v321, v435);
                sim_r.txns.push({
                  kind: 'from',
                  to: v317,
                  tok: undefined /* Nothing */
                  });
                const v440 = stdlib.safeDiv(v300, stdlib.checkedBigNumberify('./index.rsh:162:22:decimal', stdlib.UInt_max, '2'));
                const v444 = stdlib.safeSub(v439, v440);
                sim_r.txns.push({
                  kind: 'from',
                  to: v299,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v299,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v455 = stdlib.safeSub(v321, v300);
                sim_r.txns.push({
                  kind: 'from',
                  to: v317,
                  tok: undefined /* Nothing */
                  });
                const v459 = stdlib.safeSub(v455, v300);
                sim_r.txns.push({
                  kind: 'from',
                  to: v299,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v299,
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
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc0, ctc7, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v401], secs: v403, time: v402, didSend: v137, from: v400 } = txn7;
        ;
        const v404 = stdlib.addressEq(v299, v400);
        stdlib.assert(v404, {
          at: './index.rsh:150:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v405;
        const v406 = stdlib.gt(v376, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v407 = stdlib.lt(v401, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v408 = stdlib.gt(v401, v376);
        const v409 = v407 ? v408 : false;
        const v410 = v406 ? true : v409;
        if (v410) {
          v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v411 = stdlib.lt(v376, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v412 = stdlib.gt(v376, v401);
          const v413 = stdlib.gt(v401, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v414 = v412 ? true : v413;
          const v415 = v411 ? v414 : false;
          if (v415) {
            v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v405 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v405), {
          at: './index.rsh:155:24:application',
          fs: ['at ./index.rsh:154:7:application call to [unknown function] (defined at: ./index.rsh:154:33:function exp)'],
          msg: 'seeOutcome',
          who: 'Deployer'
          });
        
        const v420 = stdlib.eq(v405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v420) {
          const v421 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:159:14:decimal', stdlib.UInt_max, '2'), v300);
          const v425 = stdlib.safeSub(v321, v421);
          ;
          ;
          return;
          }
        else {
          const v433 = stdlib.eq(v405, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v433) {
            const v434 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, '3'), v300);
            const v435 = stdlib.safeDiv(v434, stdlib.checkedBigNumberify('./index.rsh:161:28:decimal', stdlib.UInt_max, '2'));
            const v439 = stdlib.safeSub(v321, v435);
            ;
            const v440 = stdlib.safeDiv(v300, stdlib.checkedBigNumberify('./index.rsh:162:22:decimal', stdlib.UInt_max, '2'));
            const v444 = stdlib.safeSub(v439, v440);
            ;
            ;
            return;
            }
          else {
            const v455 = stdlib.safeSub(v321, v300);
            ;
            const v459 = stdlib.safeSub(v455, v300);
            ;
            ;
            return;
            }}
        
        
        
        }
      
      
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiARAAEgAgMIBQlIUAaQASgVFlgwJgMBAAEBACI1ADEYQQYAKmRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBgxAA3xJgQcMQAJKSSEFDEAB70khBwxAAT4hBxJEIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JFs1/lcoIDX9IQhbNfwhCVs1+0k1BRc1+oAEY1dRXDT6FlCwNP8xABJENPshDQ00+iEODDT6NPsNEBFBAAYiNflCAB00+yEODDT7NPoNNPohDQ0REEEABiU1+UIAAyM1+TT5IhJBACwlNP4LNfixIrIBNPiyCCOyEDT/sgezsSKyATT8NPgJsggjshA0/7IHs0IEtjT5JRJBAEghBDT+CyUKNfixIrIBNPiyCCOyEDT9sgezNP4lCjX3sSKyATT3sggjshA0/7IHs7EisgE0/DT4CTT3CbIII7IQNP+yB7NCBGexIrIBNP6yCCOyEDT9sgezsSKyATT+sggjshA0/7IHs7EisgE0/DT+CTT+CbIII7IQNP+yB7NCBC5IIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSVcAIDX/JFs1/lcoIDX9IQhbNfwhC1s1+0k1BUlKIls1+lcICDX5gRBbNfiBGFs194AExlLANTT6FlA0+VA0+BZQNPcWULA0/zEAEkQ0A1dQIDT6FjT5UAESRDQDV3AgNPgWNPcWUAESRDT/NP4WUDT9UDT8FlA0+xZQKEsBVwBYZ0ghBzUBMgY1AkIDoEghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyELWw9ENANXKCAxABI0/zEAEhFEsSKyATQDIQhbsggjshA0/7IHs0IDMEkhCgxAAJVIIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/JFs1/lcoIDX9IQhbNfxXUCA1+1dwIDX6STUFSSJbNflXCAg1+IAE+lEiFzT5FlA0+FCwMgY0AyELWwxENP0xABJENP80/hZQNP1QNPwWUDT7UDT6UDT5FlAoSwFXAH9nKUsBV38ZZ0ghBTUBMgY1AkICsEghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8kWzX+VzAgNf0hCVs1/FdYIDX7V3ggNfpJNQUXNfmABLCliFA0+RZRBwhQsDT/MQASRDIGNAMhDFsINfg0/zT+FlA0/VA0/BZQNPtQNPpQNPgWUChLAVcAf2cpSwFXfxlnSCEKNQEyBjUCQgIhSSUMQAEpSSEEDEAA5UmBBAxAAFFIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gASRJzTzsDIGNAMhD1sPRDT/MQASNANXACAxABIRRLEisgE0AyEJW7III7IQNP+yB7NCAaBIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JFs1/iEMWzX9VzAgNfwhCVs1+0k1BUlXACA1+lcgIDX5gAQeboLjNPpQNPlQsDIGNAMhD1sMRDT/MQASRDT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQKEsBVwB/ZylLAVd/GWdIIQY1ATIGNQJCAS9IIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEQWw9EsSKyATQDJFuyCCOyEDQDVwAgsgezQgDWSSMMQABwSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8kWzX+IQxbNf2ABJqLkXSwMgY0AyEQWwxENP5JCDX8NP6IAP0yBjT9CDX7NP80/hZQNP0WUDEAUDT8FlA0+xZQKEsBVwBgZ0ghBDUBMgY1AkIAfEiBoI0GiADGIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQVbNf6ABKzRH8M0/xZQNP4WULA0/4gAlTIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAHDEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
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
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
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
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
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
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v355",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
                "name": "v376",
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
                "internalType": "struct T13",
                "name": "v377",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                "name": "v384",
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
                "internalType": "struct T13",
                "name": "v385",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
                "name": "v401",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
                "internalType": "uint256",
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v355",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                "name": "v376",
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
                "internalType": "struct T13",
                "name": "v377",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "name": "v384",
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
                "internalType": "struct T13",
                "name": "v385",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v386",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
                "name": "v401",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002269380380620022698339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611eec806200037d6000396000f3fe6080604052600436106100a55760003560e01c8063ab53f2c611610061578063ab53f2c614610133578063ad2d91d114610156578063ad9fa3d814610169578063bf2c5b241461017c578063ebfaeee51461018f578063f3799a6e146101a257005b806309687c88146100ae5780631e93b0f1146100c15780632c10a159146100e55780637eea518c146100f8578063832307571461010b578063a7661d541461012057005b366100ac57005b005b6100ac6100bc3660046118e4565b6101b5565b3480156100cd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100f33660046118e4565b6105ea565b6100ac6101063660046118e4565b610854565b34801561011757600080fd5b506001546100d2565b6100ac61012e3660046118e4565b6109d2565b34801561013f57600080fd5b50610148610b6d565b6040516100dc929190611900565b6100ac61016436600461196f565b610c0a565b6100ac6101773660046118e4565b610e7e565b6100ac61018a3660046118e4565b61107b565b6100ac61019d36600461196f565b611212565b6100ac6101b036600461198b565b611408565b6101c56009600054146030611681565b6101df813515806101d857506001548235145b6031611681565b6000808055600280546101f19061199d565b80601f016020809104026020016040519081016040528092919081815260200182805461021d9061199d565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b505050505080602001905181019061028291906119ee565b90506102af6040518060800160405280600081526020016000815260200160008152602001600081525090565b6040805133815284356020808301919091528501358183015290517fff3d454f6571b2b8fde3c8158eaa68ae1f803294ce0837fed155169daa443f8b9181900360600190a16103003415602e611681565b8151610318906001600160a01b03163314602f611681565b601582608001511161034757601660208401351061033757600061034a565b608082015160208401351161034a565b60015b15610358576000815261039d565b601682608001511061036b57600061038a565b608082015160208401351061038757601560208401351161038a565b60015b15610398576002815261039d565b600181525b8051610458576103b2600283602001516116a7565b6020820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156103f0573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6104148460600151846020015161170c565b6040518115909202916000818181858888f1935050505015801561043c573d6000803e3d6000fd5b5060008080556001819055610453906002906117f6565b505050565b80516002141561053a5761047b610474600384602001516116a7565b600261175b565b60408083018290528381015190516001600160a01b039091169180156108fc02916000818181858888f193505050501580156104bb573d6000803e3d6000fd5b506104cb8260200151600261175b565b6060820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610509573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6104146105308560600151856040015161170c565b846060015161170c565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f1935050505015801561057b573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105b9573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6104146105e08560600151866020015161170c565b856020015161170c565b6105fa6001600054146009611681565b6106148135158061060d57506001548235145b600a611681565b6000808055600280546106269061199d565b80601f01602080910402602001604051908101604052809291908181526020018280546106529061199d565b801561069f5780601f106106745761010080835404028352916020019161069f565b820191906000526020600020905b81548152906001019060200180831161068257829003601f168201915b50505050508060200190518101906106b79190611a78565b90506106d6604051806040016040528060008152602001600081525090565b6106e782606001514310600b611681565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610718929190611b01565b60405180910390a1602082015161072f90806117a9565b815260208201516107439034146008611681565b6107514383604001516117a9565b8160200181815250506107a56040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061084d929190611833565b5050505050565b610864600160005414600d611681565b61087e8135158061087757506001548235145b600e611681565b6000808055600280546108909061199d565b80601f01602080910402602001604051908101604052809291908181526020018280546108bc9061199d565b80156109095780601f106108de57610100808354040283529160200191610909565b820191906000526020600020905b8154815290600101906020018083116108ec57829003601f168201915b50505050508060200190518101906109219190611a78565b90506109358160600151431015600f611681565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610966929190611b01565b60405180910390a161097a3415600c611681565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109b7573d6000803e3d6000fd5b50600080805560018190556109ce906002906117f6565b5050565b6109e26003600054146017611681565b6109fc813515806109f557506001548235145b6018611681565b600080805560028054610a0e9061199d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3a9061199d565b8015610a875780601f10610a5c57610100808354040283529160200191610a87565b820191906000526020600020905b815481529060010190602001808311610a6a57829003601f168201915b5050505050806020019051810190610a9f9190611b36565b9050610ab38160a001514310156019611681565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610ae4929190611b01565b60405180910390a1610af834156015611681565b6060810151610b2c906001600160a01b03163314610b225781516001600160a01b03163314610b25565b60015b6016611681565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156109b7573d6000803e3d6000fd5b600060606000546002808054610b829061199d565b80601f0160208091040260200160405190810160405280929190818152602001828054610bae9061199d565b8015610bfb5780601f10610bd057610100808354040283529160200191610bfb565b820191906000526020600020905b815481529060010190602001808311610bde57829003601f168201915b50505050509050915091509091565b610c1a6003600054146012611681565b610c3481351580610c2d57506001548235145b6013611681565b600080805560028054610c469061199d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c729061199d565b8015610cbf5780601f10610c9457610100808354040283529160200191610cbf565b820191906000526020600020905b815481529060010190602001808311610ca257829003601f168201915b5050505050806020019051810190610cd79190611b36565b9050610cea8160a0015143106014611681565b604080513381528335602080830191909152840135818301529083013560608201527f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16349060800160405180910390a1610d4534156010611681565b8051610d5d906001600160a01b031633146011611681565b610daf6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c88013560a0808d019182528e88013560c0808f0191825260056000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100015b60405160208183030381529060405260029080519060200190610e78929190611833565b50505050565b610e8e600560005414601c611681565b610ea881351580610ea157506001548235145b601d611681565b600080805560028054610eba9061199d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee69061199d565b8015610f335780601f10610f0857610100808354040283529160200191610f33565b820191906000526020600020905b815481529060010190602001808311610f1657829003601f168201915b5050505050806020019051810190610f4b9190611bca565b9050610f636040518060200160405280600081525090565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213653384604051610f94929190611b01565b60405180910390a1610fa83415601a611681565b8151610fc0906001600160a01b03163314601b611681565b610fce4383604001516117a9565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168252602080850151818401526060808601519092166040808501919091526080808701519385019390935260a0808701519385019390935260c08087015193850193909352845192840192909252600660005543600155905161082991839101611c68565b61108b6006600054146025611681565b6110a58135158061109e57506001548235145b6026611681565b6000808055600280546110b79061199d565b80601f01602080910402602001604051908101604052809291908181526020018280546110e39061199d565b80156111305780601f1061110557610100808354040283529160200191611130565b820191906000526020600020905b81548152906001019060200180831161111357829003601f168201915b50505050508060200190518101906111489190611d5d565b905061115c8160c001514310156027611681565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338360405161118d929190611b01565b60405180910390a16111a134156023611681565b60408101516111d5906001600160a01b031633146111cb5781516001600160a01b031633146111ce565b60015b6024611681565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109b7573d6000803e3d6000fd5b6112226006600054146020611681565b61123c8135158061123557506001548235145b6021611681565b60008080556002805461124e9061199d565b80601f016020809104026020016040519081016040528092919081815260200182805461127a9061199d565b80156112c75780601f1061129c576101008083540402835291602001916112c7565b820191906000526020600020905b8154815290600101906020018083116112aa57829003601f168201915b50505050508060200190518101906112df9190611d5d565b90506112f28160c0015143106022611681565b7f743720a8a8019f9562e650b473c07df59b61ff6da2f3717d30f4f175c28a25383383604051611323929190611d99565b60405180910390a16113373415601e611681565b6040810151611352906001600160a01b03163314601f611681565b6113a46040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015190921682840152606080850151908401526080808501519084015260a080850151908401528481013560c08401526008600055436001559051610e5491839101611c68565b611418600860005414602c611681565b6114328135158061142b57506001548235145b602d611681565b6000808055600280546114449061199d565b80601f01602080910402602001604051908101604052809291908181526020018280546114709061199d565b80156114bd5780601f10611492576101008083540402835291602001916114bd565b820191906000526020600020905b8154815290600101906020018083116114a057829003601f168201915b50505050508060200190518101906114d59190611d5d565b90507f82458a31993838d41567d9c7a5eea7a5a8edfc1c4bfde3e3335c2126adc3f2ce3383604051611508929190611dcd565b60405180910390a161151c34156028611681565b8051611534906001600160a01b031633146029611681565b6040805161157691611550916020808701359287019101611e1c565b6040516020818303038152906040528051906020012060001c826080015114602a611681565b6040805160608481013560208301526080850135928201929092526115bc91016040516020818303038152906040528051906020012060001c8260a0015114602b611681565b6116006040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03908116808352602080850151818501908152604080870151851681870190815260608089015181890190815260c0808b01516080808c01918252600960005543600155865198890199909952955194870194909452915190961695840195909552935192820192909252905160a082015201610e54565b816109ce5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008115806116cb575082826116bd8183611e46565b92506116c99083611e65565b145b6117065760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161169e565b92915050565b6000826117198382611e87565b91508111156117065760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161169e565b6000816117985760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161169e565b6117a28284611e65565b9392505050565b6000826117b68382611e9e565b91508110156117065760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161169e565b5080546118029061199d565b6000825580601f10611812575050565b601f01602090049060005260206000209081019061183091906118b7565b50565b82805461183f9061199d565b90600052602060002090601f01602090048101928261186157600085556118a7565b82601f1061187a57805160ff19168380011785556118a7565b828001600101855582156118a7579182015b828111156118a757825182559160200191906001019061188c565b506118b39291506118b7565b5090565b5b808211156118b357600081556001016118b8565b6000604082840312156118de57600080fd5b50919050565b6000604082840312156118f657600080fd5b6117a283836118cc565b82815260006020604081840152835180604085015260005b8181101561193457858101830151858201606001528201611918565b81811115611946576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156118de57600080fd5b60006060828403121561198157600080fd5b6117a2838361195d565b600060a082840312156118de57600080fd5b600181811c908216806119b157607f821691505b602082108114156118de57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146119e957600080fd5b919050565b600060a08284031215611a0057600080fd5b60405160a0810181811067ffffffffffffffff82111715611a3157634e487b7160e01b600052604160045260246000fd5b604052611a3d836119d2565b815260208301516020820152611a55604084016119d2565b604082015260608301516060820152608083015160808201528091505092915050565b600060808284031215611a8a57600080fd5b6040516080810181811067ffffffffffffffff82111715611abb57634e487b7160e01b600052604160045260246000fd5b604052611ac7836119d2565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b803580151581146119e957600080fd5b6001600160a01b038316815281356020808301919091526060820190611b28908401611af1565b151560408301529392505050565b600060c08284031215611b4857600080fd5b60405160c0810181811067ffffffffffffffff82111715611b7957634e487b7160e01b600052604160045260246000fd5b604052611b85836119d2565b81526020830151602082015260408301516040820152611ba7606084016119d2565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215611bdc57600080fd5b60405160e0810181811067ffffffffffffffff82111715611c0d57634e487b7160e01b600052604160045260246000fd5b604052611c19836119d2565b81526020830151602082015260408301516040820152611c3b606084016119d2565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08101611706565b600060e08284031215611cd157600080fd5b60405160e0810181811067ffffffffffffffff82111715611d0257634e487b7160e01b600052604160045260246000fd5b604052905080611d11836119d2565b815260208301516020820152611d29604084016119d2565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e08284031215611d6f57600080fd5b6117a28383611cbf565b80356001600160c01b03198116808214611d9257600080fd5b9092525050565b600060808201905060018060a01b038416825282356020830152602083013560408301526117a26060830160408501611d79565b600060c08201905060018060a01b03841682528235602083015260208301356040830152611e016060830160408501611d79565b60608301356080830152608083013560a08301529392505050565b828152604081016117a26020830184611d79565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611e6057611e60611e30565b500290565b600082611e8257634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611e9957611e99611e30565b500390565b60008219821115611eb157611eb1611e30565b50019056fea264697066735822122007ccd1d781e9736ce4d2bfa7f3807b8d176fdad0c91c06bbd4eda80b326aaf6464736f6c634300080c0033`,
  BytecodeLen: 8809,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:78:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:84:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:99:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:111:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:122:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:133:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:142:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:170:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:170:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:170:11:after expr stmt semicolon',
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
