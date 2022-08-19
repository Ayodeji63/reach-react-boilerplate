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
      5: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v278, v279], secs: v281, time: v280, didSend: v31, from: v277 } = txn1;
  ;
  const v290 = stdlib.safeAdd(v280, v279);
  stdlib.protect(ctc1, await interact.acceptWager(v278), {
    at: './index.rsh:59:25:application',
    fs: ['at ./index.rsh:58:16:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v277, v278, v279, v290],
    evt_cnt: 0,
    funcNum: 1,
    lct: v280,
    onlyIf: true,
    out_tys: [],
    pay: [v278, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v297, time: v296, didSend: v44, from: v295 } = txn2;
      
      const v299 = stdlib.safeAdd(v278, v278);
      sim_r.txns.push({
        amt: v278,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      const v308 = stdlib.safeAdd(v296, v279);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v290],
    tys: [ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v277, v278, v279, v290],
      evt_cnt: 0,
      funcNum: 2,
      lct: v280,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v465, time: v464, didSend: v250, from: v463 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v277,
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
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v465, time: v464, didSend: v250, from: v463 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:42:29:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:63:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v297, time: v296, didSend: v44, from: v295 } = txn2;
    const v299 = stdlib.safeAdd(v278, v278);
    ;
    stdlib.protect(ctc1, await interact.attacherBoard(), {
      at: './index.rsh:66:34:application',
      fs: ['at ./index.rsh:66:34:application call to [unknown function] (defined at: ./index.rsh:66:34:function exp)', 'at ./index.rsh:66:34:application call to "liftedInteract" (defined at: ./index.rsh:66:34:application)'],
      msg: 'attacherBoard',
      who: 'Attacher'
      });
    
    const v308 = stdlib.safeAdd(v296, v279);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v308],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v277, v278, v279, v295, v299, v308],
        evt_cnt: 0,
        funcNum: 4,
        lct: v296,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v447, time: v446, didSend: v219, from: v445 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v295,
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
        tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v447, time: v446, didSend: v219, from: v445 } = txn4;
      ;
      const v448 = stdlib.addressEq(v295, v445);
      const v449 = stdlib.addressEq(v277, v445);
      const v450 = v448 ? true : v449;
      stdlib.assert(v450, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:82:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:42:29:application',
        fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:82:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Attacher'
        });
      
      return;
      
      }
    else {
      const {data: [v321], secs: v323, time: v322, didSend: v70, from: v320 } = txn3;
      ;
      const v324 = stdlib.addressEq(v277, v320);
      stdlib.assert(v324, {
        at: './index.rsh:80:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
        });
      const v331 = stdlib.safeAdd(v322, v279);
      const v335 = stdlib.protect(ctc4, await interact.dealCards(), {
        at: './index.rsh:90:85:application',
        fs: ['at ./index.rsh:89:16:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
        msg: 'dealCards',
        who: 'Attacher'
        });
      const v336 = v335[stdlib.checkedBigNumberify('./index.rsh:90:85:application', stdlib.UInt_max, '0')];
      const v337 = v335[stdlib.checkedBigNumberify('./index.rsh:90:85:application', stdlib.UInt_max, '1')];
      
      const txn4 = await (ctc.sendrecv({
        args: [v277, v278, v295, v299, v321, v331, v336, v337],
        evt_cnt: 2,
        funcNum: 5,
        lct: v322,
        onlyIf: true,
        out_tys: [ctc0, ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:93:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v341, v342], secs: v344, time: v343, didSend: v85, from: v340 } = txn4;
          
          ;
          
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v331],
        tys: [ctc5, ctc0, ctc5, ctc0, ctc2, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v277, v278, v295, v299, v321, v331],
          evt_cnt: 0,
          funcNum: 6,
          lct: v322,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v429, time: v428, didSend: v185, from: v427 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v277,
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
          tys: [ctc5, ctc0, ctc5, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v429, time: v428, didSend: v185, from: v427 } = txn5;
        ;
        const v430 = stdlib.addressEq(v295, v427);
        const v431 = stdlib.addressEq(v277, v427);
        const v432 = v430 ? true : v431;
        stdlib.assert(v432, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:95:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:42:29:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:95:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Attacher'
          });
        
        return;
        
        }
      else {
        const {data: [v341, v342], secs: v344, time: v343, didSend: v85, from: v340 } = txn4;
        ;
        const v345 = stdlib.addressEq(v295, v340);
        stdlib.assert(v345, {
          at: './index.rsh:93:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        stdlib.protect(ctc1, await interact.stand(), {
          at: './index.rsh:98:26:application',
          fs: ['at ./index.rsh:98:26:application call to [unknown function] (defined at: ./index.rsh:98:26:function exp)', 'at ./index.rsh:98:26:application call to "liftedInteract" (defined at: ./index.rsh:98:26:application)'],
          msg: 'stand',
          who: 'Attacher'
          });
        
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc3],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v350, v351], secs: v353, time: v352, didSend: v99, from: v349 } = txn5;
        ;
        const v354 = stdlib.addressEq(v277, v349);
        stdlib.assert(v354, {
          at: './index.rsh:107:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        const v355 = stdlib.digest(ctc4, [v350, v351]);
        const v356 = stdlib.digestEq(v321, v355);
        stdlib.assert(v356, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:109:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Attacher'
          });
        stdlib.protect(ctc1, await interact.viewOpponentCards(v351), {
          at: './index.rsh:111:38:application',
          fs: ['at ./index.rsh:111:38:application call to [unknown function] (defined at: ./index.rsh:111:38:function exp)', 'at ./index.rsh:111:38:application call to "liftedInteract" (defined at: ./index.rsh:111:38:application)'],
          msg: 'viewOpponentCards',
          who: 'Attacher'
          });
        
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v361], secs: v363, time: v362, didSend: v115, from: v360 } = txn6;
        ;
        const v364 = stdlib.addressEq(v277, v360);
        stdlib.assert(v364, {
          at: './index.rsh:121:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        let v365;
        const v366 = stdlib.gt(v341, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v367 = stdlib.lt(v361, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v368 = stdlib.gt(v361, v341);
        const v369 = v367 ? v368 : false;
        const v370 = v366 ? true : v369;
        if (v370) {
          v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v371 = stdlib.lt(v341, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v372 = stdlib.gt(v341, v361);
          const v373 = stdlib.gt(v361, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v374 = v372 ? true : v373;
          const v375 = v371 ? v374 : false;
          if (v375) {
            v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v365), {
          at: './index.rsh:126:24:application',
          fs: ['at ./index.rsh:125:7:application call to [unknown function] (defined at: ./index.rsh:125:33:function exp)'],
          msg: 'seeOutcome',
          who: 'Attacher'
          });
        
        const v380 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v380) {
          const v381 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, '2'), v278);
          const v385 = stdlib.safeSub(v299, v381);
          ;
          ;
          return;
          }
        else {
          const v393 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v393) {
            const v394 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:132:15:decimal', stdlib.UInt_max, '3'), v278);
            const v395 = stdlib.safeDiv(v394, stdlib.checkedBigNumberify('./index.rsh:132:28:decimal', stdlib.UInt_max, '2'));
            const v399 = stdlib.safeSub(v299, v395);
            ;
            const v400 = stdlib.safeDiv(v278, stdlib.checkedBigNumberify('./index.rsh:133:22:decimal', stdlib.UInt_max, '2'));
            const v404 = stdlib.safeSub(v399, v400);
            ;
            ;
            return;
            }
          else {
            const v415 = stdlib.safeSub(v299, v278);
            ;
            const v419 = stdlib.safeSub(v415, v278);
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
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Address;
  
  
  const v273 = stdlib.protect(ctc0, interact.deadline, 'for Deployer\'s interact field deadline');
  const v274 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v274, v273],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v274, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v278, v279], secs: v281, time: v280, didSend: v31, from: v277 } = txn1;
      
      sim_r.txns.push({
        amt: v278,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v290 = stdlib.safeAdd(v280, v279);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v278, v279], secs: v281, time: v280, didSend: v31, from: v277 } = txn1;
  ;
  const v290 = stdlib.safeAdd(v280, v279);
  stdlib.protect(ctc1, await interact.waitingForAttacher(), {
    at: './index.rsh:55:39:application',
    fs: ['at ./index.rsh:55:39:application call to [unknown function] (defined at: ./index.rsh:55:39:function exp)', 'at ./index.rsh:55:39:application call to "liftedInteract" (defined at: ./index.rsh:55:39:application)'],
    msg: 'waitingForAttacher',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v290],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v277, v278, v279, v290],
      evt_cnt: 0,
      funcNum: 2,
      lct: v280,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v465, time: v464, didSend: v250, from: v463 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v277,
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
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v465, time: v464, didSend: v250, from: v463 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:42:29:application',
      fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:63:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v297, time: v296, didSend: v44, from: v295 } = txn2;
    const v299 = stdlib.safeAdd(v278, v278);
    ;
    stdlib.protect(ctc1, await interact.deployerBoard(), {
      at: './index.rsh:67:34:application',
      fs: ['at ./index.rsh:67:34:application call to [unknown function] (defined at: ./index.rsh:67:34:function exp)', 'at ./index.rsh:67:34:application call to "liftedInteract" (defined at: ./index.rsh:67:34:application)'],
      msg: 'deployerBoard',
      who: 'Deployer'
      });
    
    const v308 = stdlib.safeAdd(v296, v279);
    const v312 = stdlib.protect(ctc3, await interact.dealCards(), {
      at: './index.rsh:72:76:application',
      fs: ['at ./index.rsh:71:16:application call to [unknown function] (defined at: ./index.rsh:71:20:function exp)'],
      msg: 'dealCards',
      who: 'Deployer'
      });
    const v313 = v312[stdlib.checkedBigNumberify('./index.rsh:72:76:application', stdlib.UInt_max, '0')];
    const v314 = v312[stdlib.checkedBigNumberify('./index.rsh:72:76:application', stdlib.UInt_max, '1')];
    const v317 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:73:60:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:16:application call to [unknown function] (defined at: ./index.rsh:71:20:function exp)'],
      msg: 'random',
      who: 'Deployer'
      });
    const v318 = stdlib.digest(ctc3, [v317, v314]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v277, v278, v279, v295, v299, v308, v318],
      evt_cnt: 1,
      funcNum: 3,
      lct: v296,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:80:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v321], secs: v323, time: v322, didSend: v70, from: v320 } = txn3;
        
        ;
        const v331 = stdlib.safeAdd(v322, v279);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v308],
      tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v277, v278, v279, v295, v299, v308],
        evt_cnt: 0,
        funcNum: 4,
        lct: v296,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v447, time: v446, didSend: v219, from: v445 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v295,
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
        tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v447, time: v446, didSend: v219, from: v445 } = txn4;
      ;
      const v448 = stdlib.addressEq(v295, v445);
      const v449 = stdlib.addressEq(v277, v445);
      const v450 = v448 ? true : v449;
      stdlib.assert(v450, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:82:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:42:29:application',
        fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:82:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Deployer'
        });
      
      return;
      
      }
    else {
      const {data: [v321], secs: v323, time: v322, didSend: v70, from: v320 } = txn3;
      ;
      const v324 = stdlib.addressEq(v277, v320);
      stdlib.assert(v324, {
        at: './index.rsh:80:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v331 = stdlib.safeAdd(v322, v279);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc2],
        timeoutAt: ['time', v331],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v277, v278, v295, v299, v321, v331],
          evt_cnt: 0,
          funcNum: 6,
          lct: v322,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v429, time: v428, didSend: v185, from: v427 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v277,
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
          tys: [ctc5, ctc0, ctc5, ctc0, ctc4, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v429, time: v428, didSend: v185, from: v427 } = txn5;
        ;
        const v430 = stdlib.addressEq(v295, v427);
        const v431 = stdlib.addressEq(v277, v427);
        const v432 = v430 ? true : v431;
        stdlib.assert(v432, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:95:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:42:29:application',
          fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:35:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:40:28:function exp)', 'at ./index.rsh:95:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Deployer'
          });
        
        return;
        
        }
      else {
        const {data: [v341, v342], secs: v344, time: v343, didSend: v85, from: v340 } = txn4;
        ;
        const v345 = stdlib.addressEq(v295, v340);
        stdlib.assert(v345, {
          at: './index.rsh:93:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const txn5 = await (ctc.sendrecv({
          args: [v277, v278, v295, v299, v321, v341, v317, v314],
          evt_cnt: 2,
          funcNum: 7,
          lct: v343,
          onlyIf: true,
          out_tys: [ctc0, ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v350, v351], secs: v353, time: v352, didSend: v99, from: v349 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc5, ctc0, ctc4, ctc0, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [v350, v351], secs: v353, time: v352, didSend: v99, from: v349 } = txn5;
        ;
        const v354 = stdlib.addressEq(v277, v349);
        stdlib.assert(v354, {
          at: './index.rsh:107:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v355 = stdlib.digest(ctc3, [v350, v351]);
        const v356 = stdlib.digestEq(v321, v355);
        stdlib.assert(v356, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:109:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        stdlib.protect(ctc1, await interact.viewOpponentCards(v342), {
          at: './index.rsh:117:31:application',
          fs: ['at ./index.rsh:115:16:application call to [unknown function] (defined at: ./index.rsh:115:20:function exp)'],
          msg: 'viewOpponentCards',
          who: 'Deployer'
          });
        
        const txn6 = await (ctc.sendrecv({
          args: [v277, v278, v295, v299, v341, v313],
          evt_cnt: 1,
          funcNum: 8,
          lct: v352,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:121:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v361], secs: v363, time: v362, didSend: v115, from: v360 } = txn6;
            
            ;
            let v365;
            const v366 = stdlib.gt(v341, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
            const v367 = stdlib.lt(v361, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
            const v368 = stdlib.gt(v361, v341);
            const v369 = v367 ? v368 : false;
            const v370 = v366 ? true : v369;
            if (v370) {
              v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v371 = stdlib.lt(v341, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
              const v372 = stdlib.gt(v341, v361);
              const v373 = stdlib.gt(v361, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
              const v374 = v372 ? true : v373;
              const v375 = v371 ? v374 : false;
              if (v375) {
                v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            
            const v380 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            if (v380) {
              const v381 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, '2'), v278);
              const v385 = stdlib.safeSub(v299, v381);
              sim_r.txns.push({
                kind: 'from',
                to: v277,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v277,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v393 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              if (v393) {
                const v394 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:132:15:decimal', stdlib.UInt_max, '3'), v278);
                const v395 = stdlib.safeDiv(v394, stdlib.checkedBigNumberify('./index.rsh:132:28:decimal', stdlib.UInt_max, '2'));
                const v399 = stdlib.safeSub(v299, v395);
                sim_r.txns.push({
                  kind: 'from',
                  to: v295,
                  tok: undefined /* Nothing */
                  });
                const v400 = stdlib.safeDiv(v278, stdlib.checkedBigNumberify('./index.rsh:133:22:decimal', stdlib.UInt_max, '2'));
                const v404 = stdlib.safeSub(v399, v400);
                sim_r.txns.push({
                  kind: 'from',
                  to: v277,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v277,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v415 = stdlib.safeSub(v299, v278);
                sim_r.txns.push({
                  kind: 'from',
                  to: v295,
                  tok: undefined /* Nothing */
                  });
                const v419 = stdlib.safeSub(v415, v278);
                sim_r.txns.push({
                  kind: 'from',
                  to: v277,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v277,
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
          tys: [ctc5, ctc0, ctc5, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v361], secs: v363, time: v362, didSend: v115, from: v360 } = txn6;
        ;
        const v364 = stdlib.addressEq(v277, v360);
        stdlib.assert(v364, {
          at: './index.rsh:121:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        let v365;
        const v366 = stdlib.gt(v341, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, '21'));
        const v367 = stdlib.lt(v361, stdlib.checkedBigNumberify('./index.rsh:6:38:decimal', stdlib.UInt_max, '22'));
        const v368 = stdlib.gt(v361, v341);
        const v369 = v367 ? v368 : false;
        const v370 = v366 ? true : v369;
        if (v370) {
          v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v371 = stdlib.lt(v341, stdlib.checkedBigNumberify('./index.rsh:9:20:decimal', stdlib.UInt_max, '22'));
          const v372 = stdlib.gt(v341, v361);
          const v373 = stdlib.gt(v361, stdlib.checkedBigNumberify('./index.rsh:9:65:decimal', stdlib.UInt_max, '21'));
          const v374 = v372 ? true : v373;
          const v375 = v371 ? v374 : false;
          if (v375) {
            v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v365 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        stdlib.protect(ctc1, await interact.seeOutcome(v365), {
          at: './index.rsh:126:24:application',
          fs: ['at ./index.rsh:125:7:application call to [unknown function] (defined at: ./index.rsh:125:33:function exp)'],
          msg: 'seeOutcome',
          who: 'Deployer'
          });
        
        const v380 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        if (v380) {
          const v381 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:130:14:decimal', stdlib.UInt_max, '2'), v278);
          const v385 = stdlib.safeSub(v299, v381);
          ;
          ;
          return;
          }
        else {
          const v393 = stdlib.eq(v365, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v393) {
            const v394 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:132:15:decimal', stdlib.UInt_max, '3'), v278);
            const v395 = stdlib.safeDiv(v394, stdlib.checkedBigNumberify('./index.rsh:132:28:decimal', stdlib.UInt_max, '2'));
            const v399 = stdlib.safeSub(v299, v395);
            ;
            const v400 = stdlib.safeDiv(v278, stdlib.checkedBigNumberify('./index.rsh:133:22:decimal', stdlib.UInt_max, '2'));
            const v404 = stdlib.safeSub(v399, v400);
            ;
            ;
            return;
            }
          else {
            const v415 = stdlib.safeSub(v299, v278);
            ;
            const v419 = stdlib.safeSub(v415, v278);
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
  appApproval: `BiAQAAECCCADBUgHUHAVFlgoMCYCAQAAIjUAMRhBBR4pZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAMDSYEGDEACIEkhCAxAAchJJQxAAT0lEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+VyggNf0hB1s1/CEJWzX7STUFFzX6gAQv2ukdNPoWULA0/zEAEkQ0+yELDTT6IQwMNPo0+w0QEUEABiI1+UIAHTT7IQwMNPs0+g00+iELDREQQQAGJDX5QgADIzX5NPkiEkEALCQ0/gs1+LEisgE0+LIII7IQNP+yB7OxIrIBNPw0+AmyCCOyEDT/sgezQgPXNPkkEkEASCEFNP4LJAo1+LEisgE0+LIII7IQNP2yB7M0/iQKNfexIrIBNPeyCCOyEDT/sgezsSKyATT8NPgJNPcJsggjshA0/7IHs0IDiLEisgE0/rIII7IQNP2yB7OxIrIBNP6yCCOyEDT/sgezsSKyATT8NP4JNP4JsggjshA0/7IHs0IDT0ghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/lcoIDX9IQdbNfwhCls1+0k1BUkiWzX6VwgINfmABG82BK40+hZQNPlQsDT/MQASRDQDV1AgNPoWNPlQARJENP80/hZQNP1QNPwWUDT7FlAoSwFXAFhnSCU1ATIGNQJCAuZIIQY0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARhtKwMsDIGNAMhClsPRDQDVyggMQASNP8xABIRRLEisgE0AyEHW7III7IQNP+yB7NCAnlJIQYMQACESCEGNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+VyggNf0hB1s1/FdQIDX7STUFSSJbNfpXCAg1+YAEYJfuLzT6FlA0+VCwMgY0AyEKWwxENP0xABJENP80/hZQNP1QNPwWUDT7UDT6FlAoSwFXAHhnSCEINQEyBjUCQgIKSCEFNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEkSc087AyBjQDIQ1bD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMhCVuyCCOyEDT/sgezQgGdSSQMQADBSSEFDEAAfEghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+VzAgNf0hCVs1/Ek1BTX7gAQT7upRNPtQsDIGNAMhDVsMRDT/MQASRDIGNAMhDlsINfo0/zT+FlA0/VA0/BZQNPtQNPoWUChLAVcAeGdIIQY1ATIGNQJCATBIIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEPWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IA1kkjDEAAcUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf4hDls1/YAEmouRdLAyBjQDIQ9bDEQ0/kkINfw0/ogA+zIGNP0INfs0/zT+FlA0/RZQMQBQNPwWUDT7FlAoSwFXAGBnSCEFNQEyBjUCQgB7SIGgjQaIAMQiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAJQyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCABwxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
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
                "name": "v278",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v279",
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
                "name": "v278",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v279",
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
                "name": "v321",
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
                "internalType": "uint256",
                "name": "v341",
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
                "internalType": "struct T10",
                "name": "v342",
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
                "internalType": "struct T10",
                "name": "v351",
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
                "name": "v361",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
                "name": "v321",
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
                "internalType": "uint256",
                "name": "v341",
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
                "internalType": "struct T10",
                "name": "v342",
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
                "internalType": "struct T10",
                "name": "v351",
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
                "name": "v361",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ea438038062001ea48339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611b27806200037d6000396000f3fe60806040526004361061009a5760003560e01c806383230757116100615780638323075714610113578063a7661d5414610128578063ab53f2c61461013b578063c79800371461015e578063ec37fbd414610171578063f4cedab01461018457005b80631e93b0f1146100a357806329bdceb9146100c75780632c10a159146100da5780633e655186146100ed5780637eea518c1461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461160c565b610197565b6100a16100e836600461160c565b6105c0565b6100a16100fb36600461163a565b61082a565b6100a161010e36600461160c565b610a95565b34801561011f57600080fd5b506001546100b4565b6100a161013636600461160c565b610c13565b34801561014757600080fd5b50610150610dae565b6040516100be929190611656565b6100a161016c36600461160c565b610e4b565b6100a161017f36600461163a565b610fe2565b6100a161019236600461160c565b6111c7565b6101a7600860005414602b6113a9565b6101c1813515806101ba57506001548235145b602c6113a9565b6000808055600280546101d3906116b3565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906116b3565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611704565b90506102916040518060800160405280600081526020016000815260200160008152602001600081525090565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516102c292919061178e565b60405180910390a16102d6341560296113a9565b81516102ee906001600160a01b03163314602a6113a9565b601582608001511161031d57601660208401351061030d576000610320565b6080820151602084013511610320565b60015b1561032e5760008152610373565b6016826080015110610341576000610360565b608082015160208401351061035d576015602084013511610360565b60015b1561036e5760028152610373565b600181525b805161042e57610388600283602001516113cf565b6020820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156103c6573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6103ea84606001518460200151611434565b6040518115909202916000818181858888f19350505050158015610412573d6000803e3d6000fd5b50600080805560018190556104299060029061151e565b505050565b8051600214156105105761045161044a600384602001516113cf565b6002611483565b60408083018290528381015190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610491573d6000803e3d6000fd5b506104a182602001516002611483565b6060820181905282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156104df573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6103ea61050685606001518560400151611434565b8460600151611434565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610551573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561058f573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc6103ea6105b685606001518660200151611434565b8560200151611434565b6105d060016000541460096113a9565b6105ea813515806105e357506001548235145b600a6113a9565b6000808055600280546105fc906116b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610628906116b3565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b505050505080602001905181019061068d91906117b5565b90506106ac604051806040016040528060008152602001600081525090565b6106bd82606001514310600b6113a9565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516106ee92919061182e565b60405180910390a1602082015161070590806114d1565b8152602082015161071990341460086113a9565b6107274383604001516114d1565b81602001818152505061077b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061082392919061155b565b5050505050565b61083a60076000541460276113a9565b6108548135158061084d57506001548235145b60286113a9565b600080805560028054610866906116b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610892906116b3565b80156108df5780601f106108b4576101008083540402835291602001916108df565b820191906000526020600020905b8154815290600101906020018083116108c257829003601f168201915b50505050508060200190518101906108f791906118ff565b90507f724daadb5342d69287d530a5a91bc86acc1a7c1ebc53950b42f4854c9734e7b4338360405161092a929190611959565b60405180910390a161093e341560246113a9565b8051610956906001600160a01b0316331460256113a9565b6040805161099891610972916020808701359287019101611976565b6040516020818303038152906040528051906020012060001c82608001511460266113a9565b6109dc6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501519084015260a084015160808401526008600055436001559051610a6b9183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080918201519181019190915260a00190565b60405160208183030381529060405260029080519060200190610a8f92919061155b565b50505050565b610aa5600160005414600d6113a9565b610abf81351580610ab857506001548235145b600e6113a9565b600080805560028054610ad1906116b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610afd906116b3565b8015610b4a5780601f10610b1f57610100808354040283529160200191610b4a565b820191906000526020600020905b815481529060010190602001808311610b2d57829003601f168201915b5050505050806020019051810190610b6291906117b5565b9050610b768160600151431015600f6113a9565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610ba792919061182e565b60405180910390a1610bbb3415600c6113a9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610bf8573d6000803e3d6000fd5b5060008080556001819055610c0f9060029061151e565b5050565b610c2360036000541460176113a9565b610c3d81351580610c3657506001548235145b60186113a9565b600080805560028054610c4f906116b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7b906116b3565b8015610cc85780601f10610c9d57610100808354040283529160200191610cc8565b820191906000526020600020905b815481529060010190602001808311610cab57829003601f168201915b5050505050806020019051810190610ce0919061198a565b9050610cf48160a0015143101560196113a9565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610d2592919061182e565b60405180910390a1610d39341560156113a9565b6060810151610d6d906001600160a01b03163314610d635781516001600160a01b03163314610d66565b60015b60166113a9565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610bf8573d6000803e3d6000fd5b600060606000546002808054610dc3906116b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610def906116b3565b8015610e3c5780601f10610e1157610100808354040283529160200191610e3c565b820191906000526020600020905b815481529060010190602001808311610e1f57829003601f168201915b50505050509050915091509091565b610e5b60056000541460216113a9565b610e7581351580610e6e57506001548235145b60226113a9565b600080805560028054610e87906116b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb3906116b3565b8015610f005780601f10610ed557610100808354040283529160200191610f00565b820191906000526020600020905b815481529060010190602001808311610ee357829003601f168201915b5050505050806020019051810190610f1891906118ff565b9050610f2c8160a0015143101560236113a9565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610f5d92919061182e565b60405180910390a1610f713415601f6113a9565b6040810151610fa5906001600160a01b03163314610f9b5781516001600160a01b03163314610f9e565b60015b60206113a9565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610bf8573d6000803e3d6000fd5b610ff2600560005414601c6113a9565b61100c8135158061100557506001548235145b601d6113a9565b60008080556002805461101e906116b3565b80601f016020809104026020016040519081016040528092919081815260200182805461104a906116b3565b80156110975780601f1061106c57610100808354040283529160200191611097565b820191906000526020600020905b81548152906001019060200180831161107a57829003601f168201915b50505050508060200190518101906110af91906118ff565b90506110c28160a001514310601e6113a9565b7fa5092a6367551aa1e2d7115052fd867eef1b3b772edb9dc09cdc8f9f5f869e9533836040516110f3929190611959565b60405180910390a16111073415601a6113a9565b6040810151611122906001600160a01b03163314601b6113a9565b61116d6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015190840152608080850151908401528481013560a08401526007600055436001559051610a6b91839101611a1e565b6111d760036000541460126113a9565b6111f1813515806111ea57506001548235145b60136113a9565b600080805560028054611203906116b3565b80601f016020809104026020016040519081016040528092919081815260200182805461122f906116b3565b801561127c5780601f106112515761010080835404028352916020019161127c565b820191906000526020600020905b81548152906001019060200180831161125f57829003601f168201915b5050505050806020019051810190611294919061198a565b90506112ac6040518060200160405280600081525090565b6112bd8260a00151431060146113a9565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133846040516112ee92919061178e565b60405180910390a1611302341560106113a9565b815161131a906001600160a01b0316331460116113a9565b6113284383604001516114d1565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d890151909752938c0151909516909352918901519091528883013590915285519052600590915543600155915190916107ff91839101611a1e565b81610c0f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008115806113f3575082826113e58183611a81565b92506113f19083611aa0565b145b61142e5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016113c6565b92915050565b6000826114418382611ac2565b915081111561142e5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016113c6565b6000816114c05760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016113c6565b6114ca8284611aa0565b9392505050565b6000826114de8382611ad9565b915081101561142e5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016113c6565b50805461152a906116b3565b6000825580601f1061153a575050565b601f01602090049060005260206000209081019061155891906115df565b50565b828054611567906116b3565b90600052602060002090601f01602090048101928261158957600085556115cf565b82601f106115a257805160ff19168380011785556115cf565b828001600101855582156115cf579182015b828111156115cf5782518255916020019190600101906115b4565b506115db9291506115df565b5090565b5b808211156115db57600081556001016115e0565b60006040828403121561160657600080fd5b50919050565b60006040828403121561161e57600080fd5b6114ca83836115f4565b60006060828403121561160657600080fd5b60006060828403121561164c57600080fd5b6114ca8383611628565b82815260006020604081840152835180604085015260005b8181101561168a5785810183015185820160600152820161166e565b8181111561169c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806116c757607f821691505b6020821081141561160657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146116ff57600080fd5b919050565b600060a0828403121561171657600080fd5b60405160a0810181811067ffffffffffffffff8211171561174757634e487b7160e01b600052604160045260246000fd5b604052611753836116e8565b81526020830151602082015261176b604084016116e8565b604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b0383168152606081016114ca602083018480358252602090810135910152565b6000608082840312156117c757600080fd5b6040516080810181811067ffffffffffffffff821117156117f857634e487b7160e01b600052604160045260246000fd5b604052611804836116e8565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461185c57600080fd5b80604085015250509392505050565b600060c0828403121561187d57600080fd5b60405160c0810181811067ffffffffffffffff821117156118ae57634e487b7160e01b600052604160045260246000fd5b6040529050806118bd836116e8565b8152602083015160208201526118d5604084016116e8565b6040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561191157600080fd5b6114ca838361186b565b80356001600160c01b0319811680821461193457600080fd5b9092525050565b8035825260208101356020830152610c0f604083016040830161191b565b6001600160a01b0383168152608081016114ca602083018461193b565b828152604081016114ca602083018461191b565b600060c0828403121561199c57600080fd5b60405160c0810181811067ffffffffffffffff821117156119cd57634e487b7160e01b600052604160045260246000fd5b6040526119d9836116e8565b815260208301516020820152604083015160408201526119fb606084016116e8565b60608201526080830151608082015260a083015160a08201528091505092915050565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0810161142e565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611a9b57611a9b611a6b565b500290565b600082611abd57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611ad457611ad4611a6b565b500390565b60008219821115611aec57611aec611a6b565b50019056fea2646970667358221220f2336ed1b9e75d9d331d2f35123e99c94d385f5ec657d843e99c9aaaef1baba764736f6c634300080c0033`,
  BytecodeLen: 7844,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:10:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:82:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:87:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:95:18:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:105:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:113:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:141:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:141:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:141:11:after expr stmt semicolon',
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
