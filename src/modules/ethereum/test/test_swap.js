// Imports
let eth  = require('../src/main')
let web3 = require('web3')
let crypto = require('crypto')

// Settings
let ETH = new eth()
let PrivKey	= ''
let PROJECTID = ''
let urlR = `https://ropsten.infura.io/v3/${PROJECTID}`
let {accounts,Contract,sendSignedTransaction} = new web3(urlR).eth
let utils = new web3(urlR).utils
let ropAccounts = [
  {Address:'',PrivKey:''},
  {Address:'',PrivKey:''},
  {Address:'',PrivKey:''}
]

// Maincode
// ETH.NewWallet('main',PrivKey).then(({address}) => {
//   ETH.AccountBalance('main',address).then(console.log)
// })

// Testing
// let ByteCode_Swapper = '0x60806040523480156200001157600080fd5b50604051620011a2380380620011a283398181016040528101906200003791906200011d565b83600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826006819055508160038190555080600181905550505050506200022a565b600081519050620000e981620001dc565b92915050565b6000815190506200010081620001f6565b92915050565b600081519050620001178162000210565b92915050565b600080600080608085870312156200013a5762000139620001d7565b5b60006200014a87828801620000d8565b94505060206200015d8782880162000106565b93505060406200017087828801620000ef565b9250506060620001838782880162000106565b91505092959194509250565b60006200019c82620001ad565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b620001e7816200018f565b8114620001f357600080fd5b50565b6200020181620001a3565b81146200020d57600080fd5b50565b6200021b81620001cd565b81146200022757600080fd5b50565b610f68806200023a6000396000f3fe6080604052600436106100c25760003560e01c806392c003cf1161007f578063b411ee9411610059578063b411ee9414610236578063b60d428814610273578063d1efd30d1461027d578063f3fe12c9146102a8576100c2565b806392c003cf146101b5578063aa8c217c146101e0578063b1581c561461020b576100c2565b806312065fe0146100c75780632c6f940d146100f2578063590e1ae31461011d57806366d003ac1461013457806379a37bd01461015f5780638da5cb5b1461018a575b600080fd5b3480156100d357600080fd5b506100dc6102d1565b6040516100e99190610b87565b60405180910390f35b3480156100fe57600080fd5b506101076102d9565b6040516101149190610aca565b60405180910390f35b34801561012957600080fd5b506101326102df565b005b34801561014057600080fd5b5061014961040e565b6040516101569190610aaf565b60405180910390f35b34801561016b57600080fd5b50610174610434565b6040516101819190610b87565b60405180910390f35b34801561019657600080fd5b5061019f61043c565b6040516101ac9190610aaf565b60405180910390f35b3480156101c157600080fd5b506101ca610462565b6040516101d79190610b87565b60405180910390f35b3480156101ec57600080fd5b506101f5610468565b6040516102029190610b87565b60405180910390f35b34801561021757600080fd5b5061022061046e565b60405161022d9190610b87565b60405180910390f35b34801561024257600080fd5b5061025d600480360381019061025891906108ac565b610474565b60405161026a9190610aca565b60405180910390f35b61027b6104ec565b005b34801561028957600080fd5b50610292610585565b60405161029f9190610ae5565b60405180910390f35b3480156102b457600080fd5b506102cf60048036038101906102ca91906108ac565b610613565b005b600047905090565b60035481565b6001546000546102ef9190610c35565b4211610330576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032790610b47565b60405180910390fd5b600061033a6102d1565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260405161038490610a9a565b60006040518083038185875af1925050503d80600081146103c1576040519150601f19603f3d011682016040523d82523d6000602084013e6103c6565b606091505b505090508061040a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040190610b07565b60405180910390fd5b5050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600042905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60065481565b60005481565b60006002826040516020016104899190610a83565b6040516020818303038152906040526040516104a59190610a6c565b602060405180830381855afa1580156104c2573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906104e5919061087f565b9050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461057c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057390610b27565b60405180910390fd5b42600081905550565b6002805461059290610d13565b80601f01602080910402602001604051908101604052809291908181526020018280546105be90610d13565b801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b505050505081565b8060035461062082610474565b14610660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065790610b67565b60405180910390fd5b8160029080519060200190610676929190610757565b5060006106816102d1565b90506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516106cb90610a9a565b60006040518083038185875af1925050503d8060008114610708576040519150601f19603f3d011682016040523d82523d6000602084013e61070d565b606091505b5050905080610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074890610b07565b60405180910390fd5b50505050565b82805461076390610d13565b90600052602060002090601f01602090048101928261078557600085556107cc565b82601f1061079e57805160ff19168380011785556107cc565b828001600101855582156107cc579182015b828111156107cb5782518255916020019190600101906107b0565b5b5090506107d991906107dd565b5090565b5b808211156107f65760008160009055506001016107de565b5090565b600061080d61080884610bc7565b610ba2565b90508281526020810184848401111561082957610828610e08565b5b610834848285610cd1565b509392505050565b60008151905061084b81610f1b565b92915050565b600082601f83011261086657610865610e03565b5b81356108768482602086016107fa565b91505092915050565b60006020828403121561089557610894610e12565b5b60006108a38482850161083c565b91505092915050565b6000602082840312156108c2576108c1610e12565b5b600082013567ffffffffffffffff8111156108e0576108df610e0d565b5b6108ec84828501610851565b91505092915050565b6108fe81610c8b565b82525050565b61090d81610c9d565b82525050565b600061091e82610bf8565b6109288185610c0e565b9350610938818560208601610ce0565b80840191505092915050565b600061094f82610c03565b6109598185610c19565b9350610969818560208601610ce0565b61097281610e17565b840191505092915050565b600061098882610c03565b6109928185610c2a565b93506109a2818560208601610ce0565b80840191505092915050565b60006109bb601683610c19565b91506109c682610e28565b602082019050919050565b60006109de602083610c19565b91506109e982610e51565b602082019050919050565b6000610a01600083610c0e565b9150610a0c82610e7a565b600082019050919050565b6000610a24603183610c19565b9150610a2f82610e7d565b604082019050919050565b6000610a47602783610c19565b9150610a5282610ecc565b604082019050919050565b610a6681610cc7565b82525050565b6000610a788284610913565b915081905092915050565b6000610a8f828461097d565b915081905092915050565b6000610aa5826109f4565b9150819050919050565b6000602082019050610ac460008301846108f5565b92915050565b6000602082019050610adf6000830184610904565b92915050565b60006020820190508181036000830152610aff8184610944565b905092915050565b60006020820190508181036000830152610b20816109ae565b9050919050565b60006020820190508181036000830152610b40816109d1565b9050919050565b60006020820190508181036000830152610b6081610a17565b9050919050565b60006020820190508181036000830152610b8081610a3a565b9050919050565b6000602082019050610b9c6000830184610a5d565b92915050565b6000610bac610bbd565b9050610bb88282610d45565b919050565b6000604051905090565b600067ffffffffffffffff821115610be257610be1610dd4565b5b610beb82610e17565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000610c4082610cc7565b9150610c4b83610cc7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c8057610c7f610d76565b5b828201905092915050565b6000610c9682610ca7565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610cfe578082015181840152602081019050610ce3565b83811115610d0d576000848401525b50505050565b60006002820490506001821680610d2b57607f821691505b60208210811415610d3f57610d3e610da5565b5b50919050565b610d4e82610e17565b810181811067ffffffffffffffff82111715610d6d57610d6c610dd4565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552524f523a205472616e73666572204661696c656400000000000000000000600082015250565b7f4552524f523a20556e617574686f72697a6564204c6f636b20417474656d7074600082015250565b50565b7f4552524f523a20556e617574686f72697a65642053776170202d20526566756e60008201527f642079657420556e617661696c61626c65000000000000000000000000000000602082015250565b7f4552524f523a20556e617574686f72697a65642053776170202d2046616c736560008201527f2053656372657400000000000000000000000000000000000000000000000000602082015250565b610f2481610c9d565b8114610f2f57600080fd5b5056fea26469706673582212206890efa51c16a8f46e69dcdbd5c1fd07256f08c9e5b42a98958a7556607b2dae64736f6c63430008070033'
// let ABI_SWAPPER  = [{"inputs":[{"internalType":"address","name":"rec","type":"address"},{"internalType":"uint256","name":"sum","type":"uint256"},{"internalType":"bytes32","name":"pass","type":"bytes32"},{"internalType":"uint256","name":"locktime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"inpSecret","type":"string"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fund","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"input","type":"string"}],"name":"hash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"passhash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secret","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tellTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"time_lock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"time_start","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
  // Contract Constructor Arguments
// let receiverAddr = ropAccounts[0].Address
// let RewardTotal  = utils.toWei('0.05','ether')
// let HashPassword = '0x'+crypto.createHash('sha256').update('123').digest('hex')
// let timelock = 60 // Refund Period: 1 min
// let contractArgs = [receiverAddr,RewardTotal,HashPassword,timelock]
// Promise.all(ropAccounts.map(x => ETH.AccountBalance('ropsten',x.Address))).then(console.log)
// ETH.deployContract('ropsten',ropAccounts[1].Address,ropAccounts[1].PrivKey,ABI_SWAPPER,ByteCode_Swapper,contractArgs).then(console.log())
// ETH.lockETH('ropsten',ropAccounts[1].Address,ropAccounts[1].PrivKey,'0.06').then(console.log)
// ETH.claimETH('ropsten',ropAccounts[0].Address,ropAccounts[0].PrivKey,'123').then(console.log)
// ETH.refundETH('ropsten',ropAccounts[1].Address,ropAccounts[1].PrivKey).then(console.log)