"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[66357],{4439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(85893),i=n(11151),o=n(23165);const s={title:"Web3Auth for dApps",image:"images/docs-meta-cards/documentation-card.png",displayed_sidebar:"docs",description:"Web3Auth for dApp | Documentation - Web3Auth"},r=void 0,l={id:"product-fit/web3auth-for-dapps",title:"Web3Auth for dApps",description:"Web3Auth for dApp | Documentation - Web3Auth",source:"@site/docs/product-fit/web3auth-for-dapps.mdx",sourceDirName:"product-fit",slug:"/product-fit/web3auth-for-dapps",permalink:"/docs/product-fit/web3auth-for-dapps",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/product-fit/web3auth-for-dapps.mdx",tags:[],version:"current",frontMatter:{title:"Web3Auth for dApps",image:"images/docs-meta-cards/documentation-card.png",displayed_sidebar:"docs",description:"Web3Auth for dApp | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Web3Auth for Wallets",permalink:"/docs/product-fit/web3auth-for-wallets"},next:{title:"Web3Auth Wallet Management Infrastructure",permalink:"/docs/infrastructure/"}},h={},u=[{value:"Using Web3Auth to build your dApp",id:"using-web3auth-to-build-your-dapp",level:2},{value:"Using Web3Auth with other Wallets via Adapters",id:"using-web3auth-with-other-wallets-via-adapters",level:2},{value:"This diagram below, describes the relationship between the Web3Auth SDK and integrating application",id:"this-diagram-below-describes-the-relationship-between-the-web3auth-sdk-and-integrating-application",level:5}];function c(e){const t={a:"a",code:"code",h2:"h2",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"As a decentralised application, if you're looking for more customised flows for your application, Web3Auth is the way for you to go. While using a\nwallet might be the easiest way for you to handle blockchain transactions, it comes with a cost of sacrificing the control of the user flow and\ntrusting them with the understanding of how to make a blockchain transaction. This also comes with a cost of losing users to the complex terminologies\nand flows, that can be easily avoided if you're customising flows according to your needs."}),"\n",(0,a.jsx)(t.p,{children:"Hence using a wallet infrastructure like Web3Auth can be a huge boon for you to build a customised user flow. It is important to note that Web3Auth is\nnot a wallet, it is wallet infrastructure that is plugged into any applications. Web3Auth results in a standard cryptographic key provider specific to\nthe user and application. While using Web3Auth, you have the flexibility of creating your own wallet within your application or using one of our pre\nexisting adapters, that can handle the complexity of linking your application to a wallet."}),"\n",(0,a.jsx)(t.h2,{id:"using-web3auth-to-build-your-dapp",children:"Using Web3Auth to build your dApp"}),"\n",(0,a.jsx)(t.p,{children:"A wallet is basically a wrapper around a user's private key. It is an app that allows users to interact with the blockchain. By using Web3Auth, your\nown application is in terms becoming a pseudo wallet. This is because you're doing all the transactions for the users by directly calling Web3Auth\nfunctions and not any other wallet. This has the following advantages:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["The dApp owns the whole experience, with minimal external branding. You can even surpass that (have ",(0,a.jsx)(t.strong,{children:"zero Web3Auth Branding"}),") if you use\n",(0,a.jsx)(t.a,{href:"/core-kit/introduction",children:"Web3Auth Core Kit"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["You're even able to use your own OAuth 2.0 / Single Sign-On or any other flow for validating your user. You just need to provide Web3Auth with a\nJWT ",(0,a.jsx)(t.code,{children:"id_token"})," and it will handle the key generation for you."]}),"\n",(0,a.jsx)(t.li,{children:"First-time users don't need the mental overhead of understanding the concept of a \"wallet\" to use your application. Just a standard Web2 login,\nthey're onboarded using Web3Auth!"}),"\n",(0,a.jsx)(t.li,{children:"You can create your application for any chain, depending on your needs. Web3Auth generates the private key that can be used for any chain."}),"\n",(0,a.jsx)(t.li,{children:"You can have users interact with their wallet and make transactions within your application, making the whole experience more seamless and specific\nto your app."}),"\n",(0,a.jsx)(t.li,{children:"You can use the variety of interoperability flows provided by Web3Auth to make your application's private key more accessible to users."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Although being the best experience for your users, building your own wallet comes with some hurdles. Generally, linking it to other dApps/apps is a\nbit harder. To help you along the way, we have multiple solutions, such as natively integrated\n",(0,a.jsx)(t.a,{href:"/sdk/pnp/web/adapters/wallet-connect-v1",children:(0,a.jsx)(t.code,{children:"wallet-connect"})}),", ",(0,a.jsx)(t.a,{href:"/sdk/helper-sdks/plugins/evm-wallet",children:(0,a.jsx)(t.code,{children:"torus-wallet-connector-plugin"})}),", and other\nWeb3Auth ",(0,a.jsx)(t.a,{href:"/pnp/features/interoperability",children:"interoperability"})," features."]}),"\n",(0,a.jsx)(t.h2,{id:"using-web3auth-with-other-wallets-via-adapters",children:"Using Web3Auth with other Wallets via Adapters"}),"\n",(0,a.jsxs)(t.p,{children:["In the Web SDK, we have adapters, which are essentially connectors between Web3Auth and the underlying wallet provider. For example, an adapter for\nconnecting with torus wallet is available under web3auth as ",(0,a.jsx)(t.code,{children:"@web3auth/torus-evm-adapter"}),". Each adapter exposes provider on a successful user login\nthat can be used to invoke the RPC calls on wallet and connected blockchain."]}),"\n",(0,a.jsx)(t.p,{children:"Additionally, you can get Web3Auth to securely expose the private key of the user to your application's frontend. Using the private key, you can use\nthe wallet of your choice to make the further transactions within your application."}),"\n",(0,a.jsx)(t.h5,{id:"this-diagram-below-describes-the-relationship-between-the-web3auth-sdk-and-integrating-application",children:"This diagram below, describes the relationship between the Web3Auth SDK and integrating application"}),"\n",(0,a.jsx)("img",{style:{display:"block",maxHeight:"600px",margin:"20px auto"},src:o.Z,alt:"This diagram describes the relationship between the Web3Auth SDK and integrating application"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},23165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web3auth-architecture-49006f4066a4ddf454beae2cbbba8eaf.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);