"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[86633],{21154:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"final prefs = await SharedPreferences.getInstance();\nfinal privateKey = prefs.getString('privateKey') ?? '0';\nfinal client = Web3Client(rpcUrl, Client());\nfinal credential = EthPrivateKey.fromHex(privateKey);\n\nvar list = utf8.encode(TestContract.byteCode);\nUint8List payload = Uint8List.fromList(list);\nfinal Transaction transaction = Transaction(\n  to: null,\n  from: credential.address,\n  data: payload,\n  maxGas: 2000000);\nfinal String transactionId =\n  await client.sendTransaction(credential, transaction);\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},22779:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Get Account\n              ElevatedButton(\n                onPressed: () async {\n                  // highlight-start\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  debugPrint(\"Account, ${address.hexEip55}\");\n                  // highlight-end\n                },\n                child: const Text('Get Address'),\n              ),\n            ])));\n  }\n\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},58023:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Get Balance\n              ElevatedButton(\n                onPressed: () async {\n                  // highlight-start\n                  final prefs = await SharedPreferences.getInstance();\n                  final privateKey = prefs.getString('privateKey') ?? '0';\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final client = Web3Client(rpcUrl, Client());\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  final balance = await client.getBalance(address);\n                  debugPrint(\"Balance, ${balance}\");\n                  // highlight-end\n                },\n                child: const Text('Get Balance'),\n              ),\n            ])));\n  }\n\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},694:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n// highlight-next-line\nimport 'package:web3auth_flutter/web3auth_flutter.dart';\nimport 'package:web3auth_flutter/enums.dart';\nimport 'package:web3auth_flutter/input.dart';\nimport 'package:web3auth_flutter/output.dart';\nimport 'package:http/http.dart';\n// highlight-next-line\nimport 'package:web3dart/web3dart.dart';\nimport 'package:shared_preferences/shared_preferences.dart';\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatefulWidget {\n  @override\n  _MyAppState createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n\n  // highlight-next-line\n  String rpcUrl = \"\"; // EVM chain RPC URL\n\n  @override\n  void initState() {\n    super.initState();\n    initPlatformState();\n  }\n\n  Future<void> initPlatformState() async {\n    Uri redirectUrl;\n    if (Platform.isAndroid) {\n      redirectUrl = Uri.parse('{SCHEME}://{HOST}/auth');\n      // w3a://com.example.w3aflutter/auth\n    } else if (Platform.isIOS) {\n      redirectUrl = Uri.parse('{bundleId}://auth');\n      // com.example.w3aflutter://openlogin\n    } else {\n      throw UnKnownException('Unknown platform');\n    }\n\n    // highlight-start\n    await Web3AuthFlutter.init(Web3AuthOptions(\n        clientId: 'WEB3AUTH_CLIENT_ID_FROM_DASHBOARD',\n        network: Network.testnet,\n        redirectUrl: redirectUrl));\n    // highlight-end\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // Your page\n  }\n}\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},84853:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["To interact with the Ethereum blockchain in Flutter, you can use any ",(0,a.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,a.jsx)(n.code,{children:"EIP1193"})})," compatible package. Here,\nwe're using ",(0,a.jsx)(n.a,{href:"https://pub.dev/packages/web3dart",children:"web3dart"})," to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"flutter pub add web3dart shared_preferences\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: We will also be using ",(0,a.jsx)(n.code,{children:"shared_preferences"})," package to share ",(0,a.jsx)(n.code,{children:"privateKey"}),", used for making credentials for ",(0,a.jsx)(n.code,{children:"web3dart"}),", at various places in the\ncodes below."]}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},69170:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"final client = Web3Client(rpcUrl, Client());\n\nfinal contract = DeployedContract(\n    ContractAbi.fromJson(TestContract.contractAbi, ''),\n    TestContract.deployedAddress);\nfinal messageFunction = contract.function('message');\nvar message = await client.call(\ncontract: contract, function: messageFunction, params: []);\ndebugPrint(\"Contract Read Message, $message\");\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},25999:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Send Transaction\n              ElevatedButton(\n                onPressed: () async {\n                  final prefs = await SharedPreferences.getInstance();\n                  final privateKey = prefs.getString('privateKey') ?? '0';\n                  final client = Web3Client(rpcUrl, Client());\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  // highlight-start\n                  final receipt = await client.sendTransaction(\n                      credentials,\n                      Transaction(\n                        from: address,\n                        to: EthereumAddress.fromHex(\n                            '0x809D4310d578649D8539e718030EE11e603Ee8f3'),\n                        value: EtherAmount.fromUnitAndValue(\n                            EtherUnit.gwei, 50000000), // 0.05 ETH\n                      ),\n                      chainId: 5); // change chainId as per your chain.\n                  debugPrint(\"Receipt, ${receipt}\");\n                  // highlight-end\n                },\n                child: const Text('Send Transaction'),\n              ),\n            ])));\n  }\n\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},53248:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Send Transaction\n              ElevatedButton(\n                onPressed: () async {\n                  final prefs = await SharedPreferences.getInstance();\n                  final privateKey = prefs.getString('privateKey') ?? '0';\n                  final client = Web3Client(rpcUrl, Client());\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  // highlight-start\n                  final receipt = await client.signTransaction(\n                      credentials,\n                      Transaction(\n                        from: address,\n                        to: EthereumAddress.fromHex(\n                            '0x809D4310d578649D8539e718030EE11e603Ee8f3'),\n                        value: EtherAmount.fromUnitAndValue(\n                            EtherUnit.gwei, 50000000), // 0.05 ETH\n                      ),\n                      chainId: 5); // change chainId as per your chain.\n                  debugPrint(\"Receipt, ${receipt}\");\n                  // highlight-end\n                },\n                child: const Text('Sign Transaction'),\n              ),\n            ])));\n  }\n\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},11904:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In this example, we'll be demonstrating how to use ",(0,a.jsx)(n.code,{children:"Web3Auth"})," with ",(0,a.jsx)(n.code,{children:"web3dart"})," to interact with Solidity Smart Contracts. The simple Hello World\ncontract allows anyone to read and write a message to it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"pragma solidity ^0.5.10;\n\ncontract HelloWorld {\n\n  string public message;\n\n  constructor(string memory initMessage) public {\n    message = initMessage;\n  }\n\n  function update(string memory newMessage) public {\n    message = newMessage;\n  }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'class TestContract {\n  static final deployedAddress =\n  EthereumAddress.fromHex("0x1dce94bb358785c2fa27b74551f8aea24d3d0afe");\n  static const contractAbi = \'[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"update","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]\';\n  static const byteCode =\n      "0x608060405234801561001057600080fd5b506040516104623803806104628339818101604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100a3565b5050610148565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610112565b82800160010185558215610112579182015b828111156101115782518255916020019190600101906100f6565b5b50905061011f9190610123565b5090565b61014591905b80821115610141576000816000905550600101610129565b5090565b90565b61030b806101576000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633d7403a31461003b578063e21f37ce146100f6575b600080fd5b6100f46004803603602081101561005157600080fd5b810190808035906020019064010000000081111561006e57600080fd5b82018360208201111561008057600080fd5b803590602001918460018302840111640100000000831117156100a257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610179565b005b6100fe610193565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013e578082015181840152602081019050610123565b50505050905090810190601f16801561016b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b806000908051906020019061018f929190610231565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102295780601f106101fe57610100808354040283529160200191610229565b820191906000526020600020905b81548152906001019060200180831161020c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061027257805160ff19168380011785556102a0565b828001600101855582156102a0579182015b8281111561029f578251825591602001919060010190610284565b5b5090506102ad91906102b1565b5090565b6102d391905b808211156102cf5760008160009055506001016102b7565b5090565b9056fea265627a7a72305820a58716d2c2342b3cc5028e49842810b98f5c3f2c1591e8c7f3ec916096f6a03264736f6c634300050a0032";\n}\n'})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},59841:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You get the user information after a successful login returned from the ",(0,a.jsx)(n.code,{children:"login"})," method. The ",(0,a.jsx)(n.code,{children:"userInfo"})," object contains the user information, whereas\nthe ",(0,a.jsx)(n.code,{children:"privKey"})," object contains the private key that can be used to make blockchain calls."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Get Account\n              ElevatedButton(\n                onPressed: () async {\n                  // highlight-start\n                  // Upon ligin, gets the UserInfo along with priavteKey.\n                  final response = await Web3AuthFlutter.login(\n                    LoginParams(loginProvider: Provider.google)\n                    );\n                  debugPrint(\"UserInfo, ${response?.userinfo?.toString()}\");\n                  // highlight-end\n                  final prefs = await SharedPreferences.getInstance();\n                  // highlight-next-line\n                  await prefs.setString('privateKey', response?.privKey.toString());\n                  // Setting the privateKey to shared_preferences\n                },\n                child: const Text('Login'),\n              ),\n            ])));\n  }\n\n"})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},71077:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"final prefs = await SharedPreferences.getInstance();\nfinal privateKey = prefs.getString('privateKey') ?? '0';\nfinal client = Web3Client(rpcUrl, Client());\nfinal credential = EthPrivateKey.fromHex(privateKey);\n\nfinal contract = DeployedContract(\n  ContractAbi.fromJson(TestContract.contractAbi, ''),\n  TestContract.deployedAddress);\nfinal updateFunction = contract.function('update');\nvar transactionId = await client.sendTransaction(\n  credential,\n  Transaction.callContract(\n    contract: contract,\n    function: updateFunction,\n    parameters: [\"NEW_MESSAGE\"]));\ndebugPrint(\"Transaction Id, $transactionId\");\n"})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},35889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>v,default:()=>C,frontMatter:()=>j,metadata:()=>k,toc:()=>w});var a=t(85893),i=t(11151),r=t(84853),s=t(22779),l=t(59841),c=t(58023),o=t(694),d=t(53248),u=t(25999),h=t(11904),p=t(21154),m=t(69170),f=t(71077),b=t(74866),g=t(85162),x=t(30831);const j={title:"Integrate Web3Auth with the Skale Blockchain in Flutter",sidebar_label:"Flutter",image:"content-hub/guides/banners/skale.png",displayed_sidebar:"docs",keywords:["flutter","skale","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Skale Blockchain in Flutter | Documentation - Web3Auth"},v=void 0,k={id:"connect-blockchain/evm/skale/flutter",title:"Integrate Web3Auth with the Skale Blockchain in Flutter",description:"Integrate Web3Auth with the Skale Blockchain in Flutter | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/skale/flutter.mdx",sourceDirName:"connect-blockchain/evm/skale",slug:"/connect-blockchain/evm/skale/flutter",permalink:"/docs/connect-blockchain/evm/skale/flutter",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/skale/flutter.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Skale Blockchain in Flutter",sidebar_label:"Flutter",image:"content-hub/guides/banners/skale.png",displayed_sidebar:"docs",keywords:["flutter","skale","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Skale Blockchain in Flutter | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"React Native",permalink:"/docs/connect-blockchain/evm/skale/react-native"},next:{title:"Unity",permalink:"/docs/connect-blockchain/evm/skale/unity"}},y={},w=[{value:"Installation",id:"installation",level:2},{value:"Chain Details for Skale",id:"chain-details-for-skale",level:2},{value:"Getting the <code>chainConfig</code> for Europa Hub",id:"getting-the-chainconfig-for-europa-hub",level:3},{value:"Getting the <code>chainConfig</code> for Calypso Hub",id:"getting-the-chainconfig-for-calypso-hub",level:3},{value:"Getting the <code>chainConfig</code> for Nebula Gaming Hub",id:"getting-the-chainconfig-for-nebula-gaming-hub",level:3},{value:"Getting the <code>chainConfig</code> for Titan Hub",id:"getting-the-chainconfig-for-titan-hub",level:3},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2},{value:"Sign Transaction",id:"sign-transaction",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Deploy Contract",id:"deploy-contract",level:3},{value:"Read From Contract",id:"read-from-contract",level:3},{value:"Write to Contract",id:"write-to-contract",level:3}];function A(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{title:"Integrate Web3Auth with the Skale Blockchain in Flutter",description:"Integrate Web3Auth with the Skale Blockchain in Flutter | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/skale.png",slug:"/connect-blockchain/evm/skale/flutter"}),"\n",(0,a.jsxs)(n.p,{children:["While using the Web3Auth Flutter SDK, you get the private key within the user scope. This private key can interact with ",(0,a.jsx)(n.a,{href:"https://skale.space/",children:"SKALE"}),"\nto make any blockchain calls, like getting the user's ",(0,a.jsx)(n.code,{children:"account"}),", fetch ",(0,a.jsx)(n.code,{children:"balance"}),", ",(0,a.jsx)(n.code,{children:"sign transaction"}),", ",(0,a.jsx)(n.code,{children:"send transaction"}),", ",(0,a.jsx)(n.code,{children:"read"})," from and ",(0,a.jsx)(n.code,{children:"write"})," to\nthe smart contract, etc. We have highlighted a few here to get you started quickly on that."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(r.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"chain-details-for-skale",children:"Chain Details for Skale"}),"\n",(0,a.jsxs)(n.h3,{id:"getting-the-chainconfig-for-europa-hub",children:["Getting the ",(0,a.jsx)(n.code,{children:"chainConfig"})," for Europa Hub"]}),"\n",(0,a.jsxs)(b.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(g.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x79f99296"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://mainnet.skalenodes.com/v1/elated-tan-skat",children:"https://mainnet.skalenodes.com/v1/elated-tan-skat"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode\netc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Europa Hub Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://elated-tan-skat.explorer.mainnet.skalenodes.com",children:"https://elated-tan-skat.explorer.mainnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})}),(0,a.jsx)(g.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x561bf78b"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://testnet.skalenodes.com/v1/juicy-low-small-testnet",children:"https://testnet.skalenodes.com/v1/juicy-low-small-testnet"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Europa Hub Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://juicy-low-small-testnet.explorer.testnet.skalenodes.com",children:"https://juicy-low-small-testnet.explorer.testnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})})]}),"\n",(0,a.jsxs)(n.h3,{id:"getting-the-chainconfig-for-calypso-hub",children:["Getting the ",(0,a.jsx)(n.code,{children:"chainConfig"})," for Calypso Hub"]}),"\n",(0,a.jsxs)(b.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(g.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x5d456c62"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",children:"https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Calypso Hub Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",children:"https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})}),(0,a.jsx)(g.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x3a14269b"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://testnet.skalenodes.com/v1/giant-half-dual-testnet",children:"https://testnet.skalenodes.com/v1/giant-half-dual-testnet"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Calypso Hub Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://giant-half-dual-testnet.explorer.testnet.skalenodes.com",children:"https://giant-half-dual-testnet.explorer.testnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})})]}),"\n",(0,a.jsxs)(n.h3,{id:"getting-the-chainconfig-for-nebula-gaming-hub",children:["Getting the ",(0,a.jsx)(n.code,{children:"chainConfig"})," for Nebula Gaming Hub"]}),"\n",(0,a.jsxs)(b.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(g.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x3a14269b"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://mainnet.skalenodes.com/v1/green-giddy-denebola",children:"https://mainnet.skalenodes.com/v1/green-giddy-denebola"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Nebula Gaming Hub Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://green-giddy-denebola.explorer.mainnet.skalenodes.com",children:"https://green-giddy-denebola.explorer.mainnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})}),(0,a.jsx)(g.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x0235ddd0"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",children:"https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Nebula Gaming Hub Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com",children:"https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})})]}),"\n",(0,a.jsxs)(n.h3,{id:"getting-the-chainconfig-for-titan-hub",children:["Getting the ",(0,a.jsx)(n.code,{children:"chainConfig"})," for Titan Hub"]}),"\n",(0,a.jsxs)(b.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(g.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x507aaa2a"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://mainnet.skalenodes.com/v1/parallel-stormy-spica",children:"https://mainnet.skalenodes.com/v1/parallel-stormy-spica"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Titan Hub Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",children:"https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})}),(0,a.jsx)(g.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x3cd156dc"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://testnet.skalenodes.com/v1/aware-fake-trim-testnet",children:"https://testnet.skalenodes.com/v1/aware-fake-trim-testnet"})," (Avoid using public rpcTarget in production, use services like Infura,\nQuicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: SKALE Titan Hub Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com",children:"https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: sFUEL"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: sFUEL"}),"\n"]})})]}),"\n",(0,a.jsx)(n.h2,{id:"initialize",children:"Initialize"}),"\n",(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-account",children:"Get Account"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,a.jsx)(u.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"sign-transaction",children:"Sign Transaction"}),"\n",(0,a.jsx)(d.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,a.jsx)(h.ZP,{}),"\n",(0,a.jsx)(n.h3,{id:"deploy-contract",children:"Deploy Contract"}),"\n",(0,a.jsx)(p.ZP,{}),"\n",(0,a.jsx)(n.h3,{id:"read-from-contract",children:"Read From Contract"}),"\n",(0,a.jsx)(m.ZP,{}),"\n",(0,a.jsx)(n.h3,{id:"write-to-contract",children:"Write to Contract"}),"\n",(0,a.jsx)(f.ZP,{})]})}function C(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),i=t(36905),r=t(12466),s=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=o??f;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==a&&(o(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(k,{...e,children:u(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(35742),i=t(85893);function r(e){const{title:n,description:t,image:r,slug:s,keywords:l}=e;return(0,i.jsxs)(a.Z,{children:[n?(0,i.jsxs)("title",{children:[n," | Web3Auth "]}):(0,i.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{name:"description",content:t}):(0,i.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),l?l.length>0&&(0,i.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${l.join(", ")}`}):(0,i.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,i.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),n?(0,i.jsx)("meta",{property:"og:title",content:n}):(0,i.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{property:"og:description",content:t}):(0,i.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?(0,i.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${s}`}):(0,i.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),r?(0,i.jsx)("meta",{property:"og:image",content:r}):(0,i.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),r?(0,i.jsx)("meta",{name:"twitter:image",content:r}):(0,i.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,i.jsx)("meta",{itemProp:"name",content:n}):(0,i.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{itemProp:"description",content:t}):(0,i.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),r?(0,i.jsx)("meta",{itemProp:"image",content:r}):(0,i.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(67294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);