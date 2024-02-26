"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[58160],{21378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(85893),s=t(11151);const o={title:"Web3Auth Core Kit Single Factor Auth Web SDK",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Web SDK | Documentation - Web3Auth"},r=void 0,a={id:"sdk/core-kit/sfa-web/sfa-web",title:"Web3Auth Core Kit Single Factor Auth Web SDK",description:"Web3Auth Core Kit Single Factor Auth Web SDK | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/sfa-web/sfa-web.mdx",sourceDirName:"sdk/core-kit/sfa-web",slug:"/sdk/core-kit/sfa-web/",permalink:"/docs/sdk/core-kit/sfa-web/",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/sfa-web/sfa-web.mdx",tags:[],version:"current",frontMatter:{title:"Web3Auth Core Kit Single Factor Auth Web SDK",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Web SDK | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Share Transfer Module",permalink:"/docs/sdk/core-kit/tkey-android/modules/share-transfer"},next:{title:"Install",permalink:"/docs/sdk/core-kit/sfa-web/install"}},l={},h=[{value:"This Documentation is based on the <code>7.0.1</code> SDK Version.",id:"this-documentation-is-based-on-the-701-sdk-version",level:4},{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Helper SDKs",id:"helper-sdks",level:2},{value:"Provider packages",id:"provider-packages",level:3},{value:"Plugin packages",id:"plugin-packages",level:3},{value:"Common Types and Interfaces",id:"common-types-and-interfaces",level:3},{value:"<code>@web3auth/base</code>",id:"web3authbase",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Web3Auth's ",(0,i.jsx)(n.code,{children:"@web3auth/single-factor-auth"})," SDK is simple and easy-to-use SDK, which helps you implement the Web3Auth without redirection in a single\nkey pair flow."]}),"\n",(0,i.jsxs)(n.p,{children:["With the Web3Auth Plug and Play Web SDKs you can easily and quickly authenticate users and reconstruct their private key. Web3Auth Plug and Play Web\nSDK redirects users to a Web3Auth-hosted screen (i.e. ",(0,i.jsx)(n.code,{children:"http://app.openlogin.com"}),"). This flow is great for most use cases. Still, sometimes you may\nwant to customize the authentication flow such that you can have more control over the UI and UX of the authentication process (i.e. to avoid the\nredirection). This can be achieved through our new ",(0,i.jsx)(n.code,{children:"@web3auth/single-factor-auth"})," SDK, where now, you'll be able to use Web3Auth and avoid the\nredirection to OpenLogin-hosted screens."]}),"\n",(0,i.jsxs)(n.admonition,{title:"This SDK gives you semi-custodial keys",type:"info",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@web3auth/single-factor-auth"})," SDK gives you the simplest flow for onboarding a user with Web3Auth. The user just needs to click on the login\nbutton, connect to their favorite social account (OAuth) or any passwordless flow, like email-passwordless, biometric authentication etc., and a\nprivate key is generated for them. This flow has a 1/1 Key Share setup and the whole key via Web3Auth Auth Network key shares is provided directly to\nyour app, and reconstructed within it."]}),(0,i.jsx)(n.p,{children:"This flow is still noncustodial since the nodes in the Web3Auth network have a 5/9 consensus mechanism to generate the key shares. However, one can\nclaim that this flow is custodial to the OAuth Login provider since this is directly generated using credentials provided by them."}),(0,i.jsx)(n.p,{children:"Hence we can call this flow a semi-custodial flow, and encourage users to enable MFA to have a 2/3 Key Share setup, which is fully non-custodial."})]}),"\n",(0,i.jsxs)(n.h4,{id:"this-documentation-is-based-on-the-701-sdk-version",children:["This Documentation is based on the ",(0,i.jsx)(n.code,{children:"7.0.1"})," SDK Version."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This is a frontend SDK and can only run in a browser environment"}),"\n",(0,i.jsx)(n.li,{children:"Basic knowledge of JavaScipt"}),"\n",(0,i.jsx)(n.li,{children:"Supports all major JavaScript Frameworks, Libraries and Bundlers"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The minimum ",(0,i.jsx)(n.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the ",(0,i.jsx)(n.strong,{children:"Growth Plan"})," since custom verifier\nsetup is a needed feature for Core Kit SDKs. You can use this SDK with all features enabled in the development environment for free."]})}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=REACT&stepIndex=0",children:"Quick Start"}),": Get Started with an easy-to-follow integration of Web3Auth"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/examples?product=Core+Kit&sdk=Single+Factor+Auth+Web+SDK",children:"Example Applications"}),": Explore our example applications and try the SDK yourself."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/troubleshooting",children:"Troubleshooting"}),": Find quick solutions to common issues faced by developers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Web3Auth/single-factor-auth-web/",children:"Source Code"}),": Web3Auth is open sourced. You can find the source code on our GitHub repository."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://web3auth.io/community/c/help-core-kit/core-kit-sfa-web/22",children:"Community Support Portal"}),": Join our community to get support from our team and\nother developers."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"One Key Flow Guide",type:"info",children:(0,i.jsx)(n.p,{children:"For an optimal flow that allows users to create an MFA setup if desired, use a combination of Web3Auth Single Factor Auth Web SDK and Web3Auth No\nModal SDK for a one-key flow without redirection."})}),"\n",(0,i.jsx)(n.h2,{id:"helper-sdks",children:"Helper SDKs"}),"\n",(0,i.jsx)(n.h3,{id:"provider-packages",children:"Provider packages"}),"\n",(0,i.jsx)(n.p,{children:"For making RPC calls within your dApp, Web3Auth exposes respective providers for different chains. This provider can be used to interact with the\nconnected chain using exposed functions within the provider. Currently, Web3Auth supports providers for both EVM and Solana chains. For other chains,\none can easily get the private key from the Web3Auth SDK."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"/sdk/helper-sdks/providers",children:"Providers SDK Reference"})," to learn more."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/evm",children:["For EVM based Chains ",(0,i.jsx)(n.code,{children:"@web3auth/ethereum-provider"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/solana",children:["For Solana Blockchain ",(0,i.jsx)(n.code,{children:"@web3auth/solana-provider"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/common",children:["Common Key Provider for other Blockchains ",(0,i.jsx)(n.code,{children:"@web3auth/base-provider"})]})}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"plugin-packages",children:"Plugin packages"}),"\n",(0,i.jsx)(n.p,{children:"Plugins extend the functionality of Web3Auth, helping you to add more features to your application. These features can be used to extend the UI\nfunctionalities, making your Web3Auth instance more interoperable, adding wallet features and a lot more!"}),"\n",(0,i.jsx)(n.p,{children:"Currently, we support UI plugins for wallet operations, helping you with flows to add funds, manage transactions, provide wallet UI and much more.\nThis helps you avoid making wallet flows within your application. Additionally, for interoperability with multiple applications, these packages give\nyou the advantage of using the same key from Web3Auth across multiple applications."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"/sdk/helper-sdks/plugins",children:"Plugins SDK Reference"})," to learn more."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"/sdk/helper-sdks/plugins/evm-wallet",children:["EVM Wallet UI Plugin ",(0,i.jsx)(n.code,{children:"@web3auth/torus-wallet-connector-plugin"})]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"/sdk/helper-sdks/plugins/solana-wallet",children:["Solana Wallet UI Plugin ",(0,i.jsx)(n.code,{children:"@web3auth/solana-wallet-connector-plugin"})]})}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"common-types-and-interfaces",children:"Common Types and Interfaces"}),"\n",(0,i.jsx)(n.h4,{id:"web3authbase",children:(0,i.jsx)(n.a,{href:"https://npmjs.com/package/@web3auth/base",children:(0,i.jsx)(n.code,{children:"@web3auth/base"})})}),"\n",(0,i.jsx)(n.p,{children:"This package gives access to common types and interfaces for Web3Auth. This comes in handy by providing you with a standard way of importing the\nvalues you need to work with the SDKs. We highly recommend using it while working with Typescript."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);