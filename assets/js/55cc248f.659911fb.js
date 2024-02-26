"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[84203],{86341:(e,n,t)=>{t.d(n,{ZP:()=>a});var r=t(85893),i=t(11151),s=t(85162),c=t(74866);function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"addchain",children:(0,r.jsx)(n.code,{children:"addChain()"})}),"\n",(0,r.jsxs)(n.p,{children:["To add a chain config to a connected adapter, you need to call ",(0,r.jsx)(n.code,{children:"addChain()"})," function. This function helps you add the chain config by taking the\nfollowing parameter:"]}),"\n",(0,r.jsxs)(c.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Function Definition",value:"definition"}],children:[(0,r.jsx)(s.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Mandatory"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"chainConfig"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CustomChainConfig"})}),(0,r.jsx)(n.td,{children:"Custom Chain Config"}),(0,r.jsx)(n.td,{children:"Yes"})]})})]})}),(0,r.jsx)(s.Z,{value:"definition",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"async addChain(chainConfig: CustomChainConfig): Promise<void> {\n    if (this.status !== ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw WalletLoginError.notConnectedError(`No wallet is connected`);\n    return this.walletAdapters[this.connectedAdapterName].addChain(chainConfig);\n}\n\nexport type CustomChainConfig = {\n  chainNamespace: ChainNamespaceType;\n  /**\n   * The chain id of the chain\n   */\n  chainId: string;\n  /**\n   * RPC target Url for the chain\n   */\n  rpcTarget: string;\n  /**\n   * Display Name for the chain\n   */\n  displayName: string;\n  /**\n   * Url of the block explorer\n   */\n  blockExplorerUrl: string;\n  /**\n   * Default currency ticker of the network (e.g: ETH)\n   */\n  ticker: string;\n  /**\n   * Name for currency ticker (e.g: `Ethereum`)\n   */\n  tickerName: string;\n  /**\n   * Number of decimals for the currency ticker (e.g: 18)\n   */\n  decimals?: number;\n   /**\n   * Logo for the chain\n   */\n  logo: string;\n  /**\n   * Whether the network is testnet or not\n   */\n  isTestnet?: boolean;\n};\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'await web3auth.addChain({\n  chainId: "0xaa36a7",\n  displayName: "Ethereum Sepolia",\n  chainNamespace: CHAIN_NAMESPACES.EIP155,\n  tickerName: "Sepolia",\n  ticker: "ETH",\n  decimals: 18,\n  rpcTarget: "https://rpc.ankr.com/eth_sepolia",\n  blockExplorerUrl: "https://sepolia.etherscan.io",\n  logo: "https://images.toruswallet.io/eth.svg",\n  isTestnet: true,\n});\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21738:(e,n,t)=>{t.d(n,{ZP:()=>c});var r=t(85893),i=t(11151);function s(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["For Connecting to Blockchain and making RPC calls within your dApp, you can use the ",(0,r.jsx)(n.code,{children:"IProvider"})," instance returned while logging in the user. This\ninstance gives you the respective provider for your selection of blockchain. This provider can be used to interact with the connected chain using\nexposed functions within the provider."]}),"\n",(0,r.jsxs)(n.p,{children:["Web3Auth is chain agnostic, ie. be it any chain you're connecting to, you can use Web3Auth to connect to it. You can use the ",(0,r.jsx)(n.code,{children:"EVM"})," or ",(0,r.jsx)(n.code,{children:"Solana"}),"\nprovider, that contain the native functions to connect to the blockchain or use the private key directly to connecting to the respective blockchain."]}),"\n",(0,r.jsx)(n.p,{children:"Currently web3auth supports providers for both EVM and Solana chains. For other chains, one can easily get the private key from the base provider from\nWeb3Auth."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Checkout the ",(0,r.jsx)(n.a,{href:"/sdk/helper-sdks/providers",children:"Providers SDK Reference"})," to learn more."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/evm",children:["For EVM based Chains ",(0,r.jsx)(n.code,{children:"@web3auth/ethereum-provider"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/solana",children:["For Solana Blockchain ",(0,r.jsx)(n.code,{children:"@web3auth/solana-provider"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/sdk/helper-sdks/providers/common",children:"Default Provider for all other Blockchains"})}),"\n"]})]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},80572:(e,n,t)=>{t.d(n,{ZP:()=>c});var r=t(85893),i=t(11151);function s(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can configure a lot of ",(0,r.jsx)(n.a,{href:"/sdk/pnp/web/adapters",children:"adapters"})," in the Web3Auth instance. If you have installed one of the adapters, you can fetch the\n",(0,r.jsx)(n.code,{children:"connectedAdapterName"})," variable to get the currently used adapter."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Initialized Web3Auth instance\n\n// User is logged in using one of the adapters (metamask, torus-evm, etc.)\n\nconst adapterName = web3auth.connectedAdapterName;\n// contains the currently used adapter name (metamask, torus-evm, etc.)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},53041:(e,n,t)=>{t.d(n,{ZP:()=>a});var r=t(85893),i=t(11151),s=t(85162),c=t(74866);function d(e){const n={admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"authenticateuser",children:(0,r.jsx)(n.code,{children:"authenticateUser()"})}),"\n",(0,r.jsxs)(n.p,{children:["You can get the ",(0,r.jsx)(n.code,{children:"idToken"})," from Web3Auth by calling ",(0,r.jsx)(n.code,{children:"authenticateUser()"})," function."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This function will only return information based on the connected adapter. These details are not stored anywhere and are fetched from the adapter\nduring the connection and remain in the session."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"await web3auth.authenticateUser();\n"})}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(c.Z,{defaultValue:"social-login",values:[{label:"Social Login",value:"social-login"},{label:"External Wallet",value:"external-wallet"}],children:[(0,r.jsxs)(s.Z,{value:"social-login",children:[(0,r.jsxs)(c.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type Declarations",value:"type"}],children:[(0,r.jsx)(s.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"iat"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:'The "iat" (issued at) claim identifies the time at which the JWT was issued.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aud"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:['The "aud" (audience) claim identifies the recipients that the JWT is intended for. (Here, it\'s the dapp ',(0,r.jsx)(n.code,{children:"client_id"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"iss"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:['The "iss" (issuer) claim identifies who issued the JWT. (Here, it\'s Web3Auth ',(0,r.jsx)(n.code,{children:"https://api.openlogin.com/"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"email"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The email address of the user (optional)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The name of the user (optional)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"profileImage"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"The profile image of the user (optional)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"verifier"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Web3auth's verifier used while user login"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"verifierId"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Unique user id given by OAuth login provider"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aggregateVerifier"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Name of the verifier if you are using a single id verifier (aggregateVerifier) (optional)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"exp"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsxs)(n.td,{children:['The "exp" (expiration time) claim identifies the expiration time on or after which the ',(0,r.jsx)(n.em,{children:"JWT MUST NOT be accepted for processing"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"wallets"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"array"})}),(0,r.jsxs)(n.td,{children:["list of wallets for which this token is issued: ",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"curve"}),' "secp256k1" (default) or "ed25519" ',(0,r.jsx)("br",{})," You can specify which curve you want use for the encoded public key in the login parameters",(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"type"}),' "web3auth_key" incase of social logins']}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"public_key"})," compressed public key derived based on the specified curve "]})]})]})]})]})]})}),(0,r.jsxs)(s.Z,{value:"type",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"authenticateUser(): Promise<UserAuthInfo>"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"export type UserAuthInfo = { idToken: string };\n"})})]})]}),(0,r.jsx)(n.h4,{id:"sample-response",children:"Sample Response"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "iat": 1655835494,\n  "aud": "BCtbnOamqh0cJFEUYA0NB5YkvBECZ3HLZsKfvSRBvew2EiiKW3UxpyQASSR0artjQkiUOCHeZ_ZeygXpYpxZjOs",\n  "iss": "https://api.openlogin.com/",\n  "email": "xyz@xyz.com",\n  "name": "John Doe",\n  "profileImage": "https://lh3.googleusercontent.com/a/AATXAJx3lnGmHiM4K97uLo9Rb0AxOceH-dQCBSRqGbck=s96-c",\n  "verifier": "torus",\n  "verifierId": "xyz@xyz.com",\n  "aggregateVerifier": "tkey-google-lrc",\n  "exp": 1655921894,\n  "wallets": [\n    {\n      "public_key": "035143318b83eb5d31611f8c03582ab1200494f66f5e11a67c34f5581f48c1b70b",\n      "type": "web3auth_key",\n      "curve": "secp256k1"\n    }\n  ]\n}\n'})})]}),(0,r.jsxs)(s.Z,{value:"external-wallet",children:[(0,r.jsxs)(c.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type Declarations",value:"type"}],children:[(0,r.jsx)(s.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"iat"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:'The "iat" (issued at) claim identifies the time at which the JWT was issued.'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aud"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:['The "audience" claim identifies the recipients that the JWT is intended for. (Here, it\'s ',(0,r.jsx)(n.code,{children:"website's url"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"iss"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:['The "issuer" claim identifies who issued the JWT. ',(0,r.jsx)("br",{})," Here, issuer could be ",(0,r.jsx)(n.code,{children:"torus-evm"}),", ",(0,r.jsx)(n.code,{children:"torus-solana"}),", ",(0,r.jsx)(n.code,{children:"metamask"}),", ",(0,r.jsx)(n.code,{children:"phantom"}),", ",(0,r.jsx)(n.code,{children:"walletconnect-v1"}),", ",(0,r.jsx)(n.code,{children:"coinbase"}),", ",(0,r.jsx)(n.code,{children:"slope"}),", ",(0,r.jsx)(n.code,{children:"solflare"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"wallets"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"array"})}),(0,r.jsxs)(n.td,{children:["list of wallets for which this token is issued: ",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"address"})," : Wallet public address"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"type"}),' Network Type such as "ethereum", "solana" or "starkware" incase of external wallets ']})]})]})]})]})]})}),(0,r.jsxs)(s.Z,{value:"type",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"authenticateUser(): Promise<UserAuthInfo>"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"export type UserAuthInfo = { idToken: string };\n"})})]})]}),(0,r.jsx)(n.h4,{id:"sample-response-1",children:"Sample Response"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "iat": 1661158877,\n  "issuer": "<issuer-name>",\n  "audience": "https://requesting.website",\n  "wallets": [\n    {\n      "address": "0x809d4310d578649d8539e718030ee11e603ee8f3",\n      "type": "ethereum"\n    }\n  ],\n  "exp": 1661245277\n}\n'})})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},59328:(e,n,t)=>{t.d(n,{ZP:()=>c});var r=t(85893),i=t(11151);function s(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "email": "john@gmail.com",\n  "name": "John Dash",\n  "profileImage": "https://lh3.googleusercontent.com/a/Ajjjsdsmdjmnm...",\n  "aggregateVerifier": "tkey-google-lrc",\n  "verifier": "torus",\n  "verifierId": "john@gmail.com",\n  "typeOfLogin": "google",\n  "dappShare": "<24 words seed phrase>", // will be sent only incase of custom verifiers\n  "idToken": "<jwtToken issued by Web3Auth>",\n  "oAuthIdToken": "<jwtToken issued by OAuth Provider>", // will be sent only incase of custom verifiers\n  "oAuthAccessToken": "<accessToken issued by OAuth Provider>" // will be sent only incase of custom verifiers\n}\n'})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},39668:(e,n,t)=>{t.d(n,{ZP:()=>l});var r=t(85893),i=t(11151),s=t(85162),c=t(74866),d=t(59328);function a(e){const n={admonition:"admonition",code:"code",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"getuserinfo",children:(0,r.jsx)(n.code,{children:"getUserInfo()"})}),"\n",(0,r.jsxs)(n.p,{children:["You can get the information about connected user by calling ",(0,r.jsx)(n.code,{children:"getUserInfo()"})," function."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This function will only return information based on the connected adapter. These details are not stored anywhere and are fetched from the adapter\nduring the connection and remain in the session."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"await web3auth.getUserInfo();\n"})}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(c.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type Declarations",value:"type"}],children:[(0,r.jsx)(s.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"email"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Email of the connected user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Name of the connected user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"profileImage"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Profile image of the connected user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"aggregateVerifier"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Details of the aggregate verifier - if present"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"verifier"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:["Details of the verifier (verifier type, ie. ",(0,r.jsx)(n.code,{children:"torus"}),", ",(0,r.jsx)(n.code,{children:"metamask"}),", ",(0,r.jsx)(n.code,{children:"openlogin"})," etc.)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"verifierId"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Verifier ID - if custom authentication is enabled, it will show the verifier identifier you set on dashboard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"typeOfLogin"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsxs)(n.td,{children:["Type of login done by the user (like ",(0,r.jsx)(n.code,{children:"google"}),", ",(0,r.jsx)(n.code,{children:"facebook"}),", ",(0,r.jsx)(n.code,{children:"twitter"}),", ",(0,r.jsx)(n.code,{children:"github"}),", etc.)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dappShare"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"If you are using a Custom Verifier, you can get a dapp share after successful login. (dappShare is a 24 word seed phrase). This share can act as a replacement to your user's device share."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"idToken"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"JWT token (Note: This is issued by Web3Auth and is not bound to your OAuth provider)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"oAuthIdToken"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"JWT token (Note: This is issued by your OAuth provider and will be issued only for custom verifiers.)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"oAuthAccessToken"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"Access token (Note: This is issued by your OAuth provider and will be issued only for custom verifiers.)"})]})]})]})}),(0,r.jsxs)(s.Z,{value:"type",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"getUserInfo(): Promise<Partial<UserInfo>>;"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"declare type UserInfo = OpenloginUserInfo;\n\ndeclare type OpenloginUserInfo = {\n  email: string;\n  name: string;\n  profileImage: string;\n  aggregateVerifier: string;\n  verifier: string;\n  verifierId: string;\n  typeOfLogin: LOGIN_PROVIDER_TYPE | CUSTOM_LOGIN_PROVIDER_TYPE;\n  dappShare?: string;\n  idToken?: string;\n  oAuthIdToken?: string;\n  oAuthAccessToken?: string;\n};\n"})})]})]}),"\n",(0,r.jsx)(n.h4,{id:"sample-response",children:"Sample Response"}),"\n",(0,r.jsx)(d.ZP,{})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},10528:(e,n,t)=>{t.d(n,{ZP:()=>c});var r=t(85893),i=t(11151);function s(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"web3authlogout",children:(0,r.jsx)(n.code,{children:"web3auth.logout()"})}),"\n",(0,r.jsxs)(n.p,{children:["You can disconnect from connected wallet using ",(0,r.jsx)(n.code,{children:"logout"})," function."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"await web3auth.logout();\n"})}),"\n",(0,r.jsx)(n.h4,{id:"type-reference",children:"Type Reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"logout(options?: { cleanup: boolean; }): Promise<void>;\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},3045:(e,n,t)=>{t.d(n,{ZP:()=>a});var r=t(85893),i=t(11151),s=t(85162),c=t(74866);function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"switchchain",children:(0,r.jsx)(n.code,{children:"switchChain()"})}),"\n",(0,r.jsxs)(n.p,{children:["To switch the Chain to the added chain config, you need to call ",(0,r.jsx)(n.code,{children:"switchChain()"})," function. This function takes the following parameter:"]}),"\n",(0,r.jsxs)(c.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Function Definition",value:"definition"}],children:[(0,r.jsx)(s.Z,{value:"table",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Mandatory"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{ chainId: "0xaa36a7" }'})}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["chainId of the added chain config, e.g ",(0,r.jsx)(n.code,{children:'{ chainId: "0xaa36a7" }'})]}),(0,r.jsx)(n.td,{children:"Yes"})]})})]})}),(0,r.jsx)(s.Z,{value:"definition",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"async switchChain(params: { chainId: string }): Promise<void> {\n    if (this.status !== ADAPTER_STATUS.CONNECTED || !this.connectedAdapterName) throw WalletLoginError.notConnectedError(`No wallet is connected`);\n    return this.walletAdapters[this.connectedAdapterName].switchChain(params);\n}\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'await web3auth.switchChain({ chainId: "0xaa36a7" });\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},18892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>x,default:()=>m,frontMatter:()=>u,metadata:()=>j,toc:()=>g});var r=t(85893),i=t(11151),s=t(86341),c=t(21738),d=t(80572),a=t(53041),l=t(39668),o=t(10528),h=t(3045);const u={title:"Using PnP Web Modal SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"@web3auth/modal Usage | Documentation - Web3Auth"},x=void 0,j={id:"sdk/pnp/web/modal/usage",title:"Using PnP Web Modal SDK",description:"@web3auth/modal Usage | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/web/modal/usage.mdx",sourceDirName:"sdk/pnp/web/modal",slug:"/sdk/pnp/web/modal/usage",permalink:"/docs/sdk/pnp/web/modal/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/web/modal/usage.mdx",tags:[],version:"current",frontMatter:{title:"Using PnP Web Modal SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"@web3auth/modal Usage | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Initialize",permalink:"/docs/sdk/pnp/web/modal/initialize"},next:{title:"Whitelabel",permalink:"/docs/sdk/pnp/web/modal/whitelabel"}},p={},g=[{value:"Logging in the User",id:"logging-in-the-user",level:2},{value:"<code>connect()</code>",id:"connect",level:4},{value:"Returns",id:"returns",level:4},{value:"Get a native provider",id:"get-a-native-provider",level:2},{value:"Returns",id:"returns-1",level:4},{value:"Get connected status",id:"get-connected-status",level:2},{value:"Returns",id:"returns-2",level:4},{value:"Get User&#39;s Information",id:"get-users-information",level:2},{value:"Get idToken",id:"get-idtoken",level:2},{value:"Add Chain",id:"add-chain",level:2},{value:"Switch Chain",id:"switch-chain",level:2},{value:"Logging out the User",id:"logging-out-the-user",level:2},{value:"Connecting to a Blockchain",id:"connecting-to-a-blockchain",level:2},{value:"Fetching the Connected Adapter",id:"fetching-the-connected-adapter",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Once you've installed and successfully initialized Web3Auth, you can use it to authenticate your users. Further, you can use the native provider given\nby Web3Auth to connect the users to the respective blockchain network."}),"\n",(0,r.jsxs)(n.p,{children:["Natively, the instance of ",(0,r.jsx)(n.code,{children:"Web3Auth"})," ",(0,r.jsxs)(n.em,{children:["(referred to as ",(0,r.jsx)(n.code,{children:"web3auth"})," in our examples)"]})," returns the following functions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connect()"})," - Showing the Modal and Logging in the User"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"provider()"})," - Returns the native provider that can be used to make different blockchain transactions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connected()"})," - Returns ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"})," depending on whether the web3auth instance is available or not."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getUserInfo()"})," - Getting the User's Information"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authenticateUser()"})," - Getting the idToken from Web3Auth"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addChain()"})," - Add chain config details to the connected adapter."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"switchChain()"})," - Switch chain as per chainId already added to chain config."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getAdapter()"})," - Get the connected adapter instance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"configureAdapter()"})," - Configure the adapter instance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"clearCache()"})," - Clear the cache."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addPlugin()"})," - Add a plugin to Web3Auth."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"logout()"})," - Logging out the User"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"logging-in-the-user",children:"Logging in the User"}),"\n",(0,r.jsx)(n.h4,{id:"connect",children:(0,r.jsx)(n.code,{children:"connect()"})}),"\n",(0,r.jsxs)(n.p,{children:["You can show the modal in the browser by calling ",(0,r.jsx)(n.code,{children:"connect()"})," function on ",(0,r.jsx)(n.code,{children:"web3auth"})," instance. Your user can choose their preferred login method and\naccess your application."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"await web3auth.connect();\n"})}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"connect(): Promise<IProvider | null>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["On successful login, the ",(0,r.jsx)(n.code,{children:"connect()"})," function returns a ",(0,r.jsx)(n.code,{children:"IProvider"})," instance. This instance contains the respective provider corresponding to your\nselected blockchain. You can use this provider to connect your user to the blockchain and make transactions."]}),"\n",(0,r.jsxs)(n.p,{children:["On unsuccessful login, this function will return a ",(0,r.jsx)(n.code,{children:"null"})," value."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Read more about connecting your users with the selected blockchain in the ",(0,r.jsx)(n.a,{href:"/sdk/helper-sdks/providers",children:"Providers SDK Reference"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"get-a-native-provider",children:"Get a native provider"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"provider()"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the native provider that can be used to make different blockchain transactions."}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"get provider(): IProvider | null;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-connected-status",children:"Get connected status"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"connected()"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(n.code,{children:"true"})," or ",(0,r.jsx)(n.code,{children:"false"})," depending on whether the web3auth instance is available or not."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"get connected(): boolean;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-users-information",children:"Get User's Information"}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-idtoken",children:"Get idToken"}),"\n",(0,r.jsx)(a.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"add-chain",children:"Add Chain"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"switch-chain",children:"Switch Chain"}),"\n",(0,r.jsx)(h.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"logging-out-the-user",children:"Logging out the User"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"connecting-to-a-blockchain",children:"Connecting to a Blockchain"}),"\n",(0,r.jsx)(c.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"fetching-the-connected-adapter",children:"Fetching the Connected Adapter"}),"\n",(0,r.jsx)(d.ZP,{})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),i=t(36905),s=t(12466),c=t(16550),d=t(20469),a=t(91980),l=t(67392),o=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const i=(0,c.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[c,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,h]=j({queryString:t,groupId:i}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,o.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=l??p;return x({value:e,tabValues:s})?e:null})();(0,d.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),o=e=>{const n=e.currentTarget,t=a.indexOf(n),i=d[t].value;i!==r&&(l(n),c(i))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:o,...s,className:(0,i.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(b,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var r=t(67294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);