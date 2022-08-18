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
      1: [ctc0, ctc1],
      2: [ctc0, ctc1]
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75, v76], secs: v78, time: v77, didSend: v31, from: v74 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v75), {
    at: './index.rsh:41:25:application',
    fs: ['at ./index.rsh:40:16:application call to [unknown function] (defined at: ./index.rsh:40:20:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v74, v75],
    evt_cnt: 0,
    funcNum: 1,
    lct: v77,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v86, time: v85, didSend: v42, from: v84 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v86, time: v85, didSend: v42, from: v84 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.board(), {
    at: './index.rsh:46:26:application',
    fs: ['at ./index.rsh:46:26:application call to [unknown function] (defined at: ./index.rsh:46:26:function exp)', 'at ./index.rsh:46:26:application call to "liftedInteract" (defined at: ./index.rsh:46:26:application)'],
    msg: 'board',
    who: 'Attacher'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v91, time: v90, didSend: v55, from: v89 } = txn3;
  ;
  const v92 = stdlib.addressEq(v74, v89);
  stdlib.assert(v92, {
    at: './index.rsh:49:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
    });
  ;
  return;
  
  
  
  
  
  
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
  const ctc2 = stdlib.T_Address;
  
  
  const v70 = stdlib.protect(ctc0, interact.deadline, 'for Deployer\'s interact field deadline');
  const v71 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v71, v70],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v71, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75, v76], secs: v78, time: v77, didSend: v31, from: v74 } = txn1;
      
      sim_r.txns.push({
        amt: v75,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v75, v76], secs: v78, time: v77, didSend: v31, from: v74 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.waitingForAttacher(), {
    at: './index.rsh:37:39:application',
    fs: ['at ./index.rsh:37:39:application call to [unknown function] (defined at: ./index.rsh:37:39:function exp)', 'at ./index.rsh:37:39:application call to "liftedInteract" (defined at: ./index.rsh:37:39:application)'],
    msg: 'waitingForAttacher',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v86, time: v85, didSend: v42, from: v84 } = txn2;
  ;
  stdlib.protect(ctc1, await interact.board(), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:47:26:application call to [unknown function] (defined at: ./index.rsh:47:26:function exp)', 'at ./index.rsh:47:26:application call to "liftedInteract" (defined at: ./index.rsh:47:26:application)'],
    msg: 'board',
    who: 'Deployer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v74, v75],
    evt_cnt: 0,
    funcNum: 2,
    lct: v85,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v91, time: v90, didSend: v55, from: v89 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v74,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v91, time: v90, didSend: v55, from: v89 } = txn3;
  ;
  const v92 = stdlib.addressEq(v74, v89);
  stdlib.assert(v92, {
    at: './index.rsh:49:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAECCCAmAgEAACI1ADEYQQFTKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACGSSQMQABAJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJEsSKyATQDIQRbsggjshA0/7IHs0IAkEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEmouRdLA0/zT+FlAoSwFXAChnSCQ1ATIGNQJCAGxIgaCNBogAtSI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULA0/4gAhTEANP8WUChLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
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
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T4",
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
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161098a38038061098a833981016040819052610022916101e7565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a160208101515161008c90341460076100ef565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e79260029290910190610118565b50505061027c565b816101145760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012490610241565b90600052602060002090601f016020900481019282610146576000855561018c565b82601f1061015f57805160ff191683800117855561018c565b8280016001018555821561018c579182015b8281111561018c578251825591602001919060010190610171565b5061019892915061019c565b5090565b5b80821115610198576000815560010161019d565b604080519081016001600160401b03811182821017156101e157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fa57600080fd5b6102026101b1565b835181526040601f198301121561021857600080fd5b6102206101b1565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025557607f821691505b6020821081141561027657634e487b7160e01b600052602260045260246000fd5b50919050565b6106ff8061028b6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a159146100785780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610570565b6100d6565b610052610099366004610570565b610254565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103d8565b60405161006f929190610588565b6100e66001600054146009610475565b610100813515806100f957506001548235145b600a610475565b600080805560028054610112906105e5565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105e5565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061061a565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101d692919061068c565b60405180910390a16101ea34156008610475565b6040805180820182526000808252602080830182815285516001600160a01b03168085528683015182526002938490554360015585518084019190915290518186015284518082038601815260609091019094528351929361024e9391019061049a565b50505050565b610264600260005414600d610475565b61027e8135158061027757506001548235145b600e610475565b600080805560028054610290906105e5565b80601f01602080910402602001604051908101604052809291908181526020018280546102bc906105e5565b80156103095780601f106102de57610100808354040283529160200191610309565b820191906000526020600020905b8154815290600101906020018083116102ec57829003601f168201915b5050505050806020019051810190610321919061061a565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161035492919061068c565b60405180910390a16103683415600b610475565b8051610380906001600160a01b03163314600c610475565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103bd573d6000803e3d6000fd5b50600080805560018190556103d49060029061051e565b5050565b6000606060005460028080546103ed906105e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610419906105e5565b80156104665780601f1061043b57610100808354040283529160200191610466565b820191906000526020600020905b81548152906001019060200180831161044957829003601f168201915b50505050509050915091509091565b816103d45760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104a6906105e5565b90600052602060002090601f0160209004810192826104c8576000855561050e565b82601f106104e157805160ff191683800117855561050e565b8280016001018555821561050e579182015b8281111561050e5782518255916020019190600101906104f3565b5061051a92915061055b565b5090565b50805461052a906105e5565b6000825580601f1061053a575050565b601f016020900490600052602060002090810190610558919061055b565b50565b5b8082111561051a576000815560010161055c565b60006040828403121561058257600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156105bc578581018301518582016060015282016105a0565b818111156105ce576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105f957607f821691505b6020821081141561058257634e487b7160e01b600052602260045260246000fd5b60006040828403121561062c57600080fd5b6040516040810181811067ffffffffffffffff8211171561065d57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461067757600080fd5b81526020928301519281019290925250919050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146106ba57600080fd5b8060408501525050939250505056fea2646970667358221220d4ae8997b44a9e46bcc22b16a990101f0a9523b323eaf1e9a4e28471f9353cf764736f6c634300080c0033`,
  BytecodeLen: 2442,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:51:11:after expr stmt semicolon',
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
