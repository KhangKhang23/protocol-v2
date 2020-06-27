/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { LendingPoolAddressesProvider } from "./LendingPoolAddressesProvider";

export class LendingPoolAddressesProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: TransactionOverrides
  ): Promise<LendingPoolAddressesProvider> {
    return super.deploy(overrides) as Promise<LendingPoolAddressesProvider>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): LendingPoolAddressesProvider {
    return super.attach(address) as LendingPoolAddressesProvider;
  }
  connect(signer: Signer): LendingPoolAddressesProviderFactory {
    return super.connect(signer) as LendingPoolAddressesProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolAddressesProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolAddressesProvider;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "EthereumAddressUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "FeeProviderUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolConfiguratorUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolLiquidationManagerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolManagerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingPoolUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "LendingRateOracleUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "PriceOracleUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "ProxyCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address"
      }
    ],
    name: "TokenDistributorUpdated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getFeeProvider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLendingPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLendingPoolConfigurator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLendingPoolLiquidationManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLendingPoolManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLendingRateOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPriceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokenDistributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeProvider",
        type: "address"
      }
    ],
    name: "setFeeProviderImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_configurator",
        type: "address"
      }
    ],
    name: "setLendingPoolConfiguratorImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address"
      }
    ],
    name: "setLendingPoolImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address"
      }
    ],
    name: "setLendingPoolLiquidationManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lendingPoolManager",
        type: "address"
      }
    ],
    name: "setLendingPoolManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lendingRateOracle",
        type: "address"
      }
    ],
    name: "setLendingRateOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceOracle",
        type: "address"
      }
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenDistributor",
        type: "address"
      }
    ],
    name: "setTokenDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100246001600160e01b0361007316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610077565b3390565b61186a806100866000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80635aef021f116100ad578063c12542df11610071578063c12542df146102ae578063ee891296146102d4578063f2fde38b146102dc578063fbeefc3c14610302578063fca513a81461030a5761012c565b80635aef021f1461024a578063715018a614610270578063820d12741461027857806385c858b11461029e5780638da5cb5b146102a65761012c565b806338280e6b116100f457806338280e6b146101aa57806340fdcadc146101d057806344ce375b146101f6578063530e784f1461021c5780635834eb9a146102425761012c565b80630261bf8b1461013157806321f8a721146101555780632a62c6361461017257806333128d591461019a5780633618abba146101a2575b600080fd5b610139610312565b604080516001600160a01b039092168252519081900360200190f35b6101396004803603602081101561016b57600080fd5b5035610331565b6101986004803603602081101561018857600080fd5b50356001600160a01b031661034c565b005b6101396103f4565b610139610416565b610198600480360360208110156101c057600080fd5b50356001600160a01b0316610437565b610198600480360360208110156101e657600080fd5b50356001600160a01b03166104e4565b6101986004803603602081101561020c57600080fd5b50356001600160a01b0316610594565b6101986004803603602081101561023257600080fd5b50356001600160a01b0316610643565b6101396106eb565b6101986004803603602081101561026057600080fd5b50356001600160a01b031661070c565b6101986107b4565b6101986004803603602081101561028e57600080fd5b50356001600160a01b0316610856565b610139610905565b61013961092c565b610198600480360360208110156102c457600080fd5b50356001600160a01b031661093b565b6101396109f0565b610198600480360360208110156102f257600080fd5b50356001600160a01b0316610a0f565b610139610b07565b610139610b21565b600061032c6b13115391125391d7d413d3d360a21b610331565b905090565b6000908152600160205260409020546001600160a01b031690565b610354610b3b565b6000546001600160a01b039081169116146103a4576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b6103bd6b2322a2afa82927ab24a222a960a11b82610b3f565b6040516001600160a01b038216907f18e1a55b8eff9c93921eecfa1462d6a8cbb80b3988db3eb14c039e43fdb2266190600090a250565b600061032c732622a72224a723afa827a7a62fa6a0a720a3a2a960611b610331565b600061032c724c454e44494e475f524154455f4f5241434c4560681b610331565b61043f610b3b565b6000546001600160a01b0390811691161461048f576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b6104ad702a27a5a2a72fa224a9aa2924a12aaa27a960791b82610dd8565b6040516001600160a01b038216907fa8b48a56ec01f81c3615a21ec43e16b925c26293e0801cf6330427f2a687f05390600090a250565b6104ec610b3b565b6000546001600160a01b0390811691161461053c576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b61055d732622a72224a723afa827a7a62fa6a0a720a3a2a960611b82610dd8565b6040516001600160a01b038216907fd5280c51185a38d36f7a0f5e56cac6248312bb70d0974782fa5a595127e0e08e90600090a250565b61059c610b3b565b6000546001600160a01b039081169116146105ec576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b61060c722624a8aaa4a220aa24a7a72fa6a0a720a3a2a960691b82610dd8565b6040516001600160a01b038216907f1a76cb769b814bc038223da86932b099b20aae03473683e6d98f5c3554e2606490600090a250565b61064b610b3b565b6000546001600160a01b0390811691161461069b576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b6106b46b50524943455f4f5241434c4560a01b82610dd8565b6040516001600160a01b038216907fefe8ab924ca486283a79dc604baa67add51afb82af1db8ac386ebbba643cdffd90600090a250565b600061032c722624a8aaa4a220aa24a7a72fa6a0a720a3a2a960691b610331565b610714610b3b565b6000546001600160a01b03908116911614610764576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b61077d6b13115391125391d7d413d3d360a21b82610b3f565b6040516001600160a01b038216907fc4e6c6cdf28d0edbd8bcf071d724d33cc2e7a30be7d06443925656e9cb492aa490600090a250565b6107bc610b3b565b6000546001600160a01b0390811691161461080c576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61085e610b3b565b6000546001600160a01b039081169116146108ae576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b6108ce724c454e44494e475f524154455f4f5241434c4560681b82610dd8565b6040516001600160a01b038216907f5c29179aba6942020a8a2d38f65de02fb6b7f784e7f049ed3a3cab97621859b590600090a250565b600061032c782622a72224a723afa827a7a62fa1a7a72324a3aaa920aa27a960391b610331565b6000546001600160a01b031690565b610943610b3b565b6000546001600160a01b03908116911614610993576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b6109b9782622a72224a723afa827a7a62fa1a7a72324a3aaa920aa27a960391b82610b3f565b6040516001600160a01b038216907fdfabe479bad36782fb1e77fbfddd4e382671713527e4786cfc93a022ae76372990600090a250565b600061032c702a27a5a2a72fa224a9aa2924a12aaa27a960791b610331565b610a17610b3b565b6000546001600160a01b03908116911614610a67576040805162461bcd60e51b81526020600482018190526024820152600080516020611815833981519152604482015290519081900360640190fd5b6001600160a01b038116610aac5760405162461bcd60e51b81526004018080602001828103825260268152602001806117ef6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600061032c6b2322a2afa82927ab24a222a960a11b610331565b600061032c6b50524943455f4f5241434c4560a01b610331565b3390565b6000610b4a83610331565b60408051306024808301919091528251808303909101815260449091019091526020810180516001600160e01b031663189acdbd60e31b17905290915081906001600160a01b038216610d0457604051610ba390610e06565b604051809103906000f080158015610bbf573d6000803e3d6000fd5b509150816001600160a01b031663cf7a1d778530846040518463ffffffff1660e01b815260040180846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c50578181015183820152602001610c38565b50505050905090810190601f168015610c7d5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610c9e57600080fd5b505af1158015610cb2573d6000803e3d6000fd5b50505050610cc08583610dd8565b6040805186815290516001600160a01b038416917f1eb35cb4b5bbb23d152f3b4016a5a46c37a07ae930ed0956aba951e231142438919081900360200190a2610dd1565b6040805163278f794360e11b81526001600160a01b03868116600483019081526024830193845284516044840152845191861693634f1ef2869389938793929160640190602085019080838360005b83811015610d6b578181015183820152602001610d53565b50505050905090810190601f168015610d985780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610db857600080fd5b505af1158015610dcc573d6000803e3d6000fd5b505050505b5050505050565b60009182526001602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6109db80610e148339019056fe608060405234801561001057600080fd5b506109bb806100206000396000f3fe6080604052600436106100705760003560e01c80638f2839701161004e5780638f2839701461015e578063cf7a1d7714610191578063d1f5789414610250578063f851a4401461030657610070565b80633659cfe61461007a5780634f1ef286146100ad5780635c60da1b1461012d575b61007861031b565b005b34801561008657600080fd5b506100786004803603602081101561009d57600080fd5b50356001600160a01b0316610335565b610078600480360360408110156100c357600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100ee57600080fd5b82018360208201111561010057600080fd5b8035906020019184600183028401116401000000008311171561012257600080fd5b50909250905061036f565b34801561013957600080fd5b5061014261041c565b604080516001600160a01b039092168252519081900360200190f35b34801561016a57600080fd5b506100786004803603602081101561018157600080fd5b50356001600160a01b0316610459565b610078600480360360608110156101a757600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101db57600080fd5b8201836020820111156101ed57600080fd5b8035906020019184600183028401116401000000008311171561020f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610513945050505050565b6100786004803603604081101561026657600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561029157600080fd5b8201836020820111156102a357600080fd5b803590602001918460018302840111640100000000831117156102c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610599945050505050565b34801561031257600080fd5b506101426106d9565b610323610704565b61033361032e61070c565b610731565b565b61033d610755565b6001600160a01b0316336001600160a01b031614156103645761035f8161077a565b61036c565b61036c61031b565b50565b610377610755565b6001600160a01b0316336001600160a01b0316141561040f576103998361077a565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d80600081146103f6576040519150601f19603f3d011682016040523d82523d6000602084013e6103fb565b606091505b505090508061040957600080fd5b50610417565b61041761031b565b505050565b6000610426610755565b6001600160a01b0316336001600160a01b0316141561044e5761044761070c565b9050610456565b61045661031b565b90565b610461610755565b6001600160a01b0316336001600160a01b03161415610364576001600160a01b0381166104bf5760405162461bcd60e51b81526004018080602001828103825260368152602001806109156036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104e8610755565b604080516001600160a01b03928316815291841660208301528051918290030190a161035f816107ba565b600061051d61070c565b6001600160a01b03161461053057600080fd5b61053a8382610599565b604080517232b4b8189c9b1b97383937bc3c9730b236b4b760691b815290519081900360130190207fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036000199091011461059057fe5b610417826107ba565b60006105a361070c565b6001600160a01b0316146105b657600080fd5b604080517f656970313936372e70726f78792e696d706c656d656e746174696f6e000000008152905190819003601c0190207f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6000199091011461061657fe5b61061f826107de565b8051156106d5576000826001600160a01b0316826040518082805190602001908083835b602083106106625780518252601f199092019160209182019101610643565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146106c2576040519150601f19603f3d011682016040523d82523d6000602084013e6106c7565b606091505b505090508061041757600080fd5b5050565b60006106e3610755565b6001600160a01b0316336001600160a01b0316141561044e57610447610755565b610333610846565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015610750573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610783816107de565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6107e7816108a6565b6108225760405162461bcd60e51b815260040180806020018281038252603b81526020018061094b603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b61084e610755565b6001600160a01b0316336001600160a01b0316141561089e5760405162461bcd60e51b81526004018080602001828103825260328152602001806108e36032913960400191505060405180910390fd5b610333610333565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906108da57508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a264697066735822122035de0c1e272b30ae5617b5f778db920ec93f73458f52a1b5224c72d593d0e7f864736f6c634300060800334f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220fdb8f2b348585a9fef5a3d3fecbedfddeb80ff3b317d439ffbb102513e89070e64736f6c63430006080033";
