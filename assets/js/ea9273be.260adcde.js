"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[73239],{20230:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=a(85893),s=a(11151),i=a(85162),r=a(74866);const l={title:"Coinbase Wallet Adapter",sidebar_label:"Coinbase Wallet",displayed_sidebar:"sdk",description:"Web3Auth PnP Web Adapter SDKs - Coinbase | Documentation - Web3Auth"},c="Coinbase Adapter",d={id:"sdk/pnp/web/adapters/coinbase",title:"Coinbase Wallet Adapter",description:"Web3Auth PnP Web Adapter SDKs - Coinbase | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/web/adapters/coinbase.mdx",sourceDirName:"sdk/pnp/web/adapters",slug:"/sdk/pnp/web/adapters/coinbase",permalink:"/docs/sdk/pnp/web/adapters/coinbase",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/web/adapters/coinbase.mdx",tags:[],version:"current",frontMatter:{title:"Coinbase Wallet Adapter",sidebar_label:"Coinbase Wallet",displayed_sidebar:"sdk",description:"Web3Auth PnP Web Adapter SDKs - Coinbase | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Wallet Connect V2",permalink:"/docs/sdk/pnp/web/adapters/wallet-connect-v2"},next:{title:"Slope Wallet",permalink:"/docs/sdk/pnp/web/adapters/slope"}},o={},h=[{value:"<code>@web3auth/coinbase-adapter</code>",id:"web3authcoinbase-adapter",level:2},{value:"Basic Details",id:"basic-details",level:2},{value:"Adapter Name: <code>coinbase</code>",id:"adapter-name-coinbase",level:4},{value:"Package Name: <code>@web3auth/coinbase-adapter</code>",id:"package-name-web3authcoinbase-adapter",level:4},{value:"authMode: <code>DAPP</code>",id:"authmode-dapp",level:4},{value:"chainNamespace: <code>EIP155</code>",id:"chainnamespace-eip155",level:4},{value:"Default: <code>YES</code>",id:"default-yes",level:4},{value:"Installation",id:"installation",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Custom Chain Config",id:"custom-chain-config",level:3},{value:"<code>chainConfig</code>",id:"chainconfig",level:4},{value:"<code>CoinbaseWalletSDKOptions</code>",id:"coinbasewalletsdkoptions",level:4},{value:"Change Adapter Settings",id:"change-adapter-settings",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coinbase-adapter",children:"Coinbase Adapter"}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"web3authcoinbase-adapter",children:(0,t.jsx)(n.a,{href:"https://npmjs.com/package/@web3auth/coinbase-adapter",children:(0,t.jsx)(n.code,{children:"@web3auth/coinbase-adapter"})})}),"\n",(0,t.jsxs)(n.p,{children:["Coinbase adapter allows you to connect with coinbase wallet. You can read more about coinbase wallet\nhere.(",(0,t.jsx)(n.a,{href:"https://docs.cloud.coinbase.com/wallet-sdk/docs",children:"https://docs.cloud.coinbase.com/wallet-sdk/docs"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"basic-details",children:"Basic Details"}),"\n",(0,t.jsxs)(n.h4,{id:"adapter-name-coinbase",children:["Adapter Name: ",(0,t.jsx)(n.code,{children:"coinbase"})]}),"\n",(0,t.jsxs)(n.h4,{id:"package-name-web3authcoinbase-adapter",children:["Package Name: ",(0,t.jsx)(n.a,{href:"https://npmjs.com/package/@web3auth/coinbase-adapter",children:(0,t.jsx)(n.code,{children:"@web3auth/coinbase-adapter"})})]}),"\n",(0,t.jsxs)(n.h4,{id:"authmode-dapp",children:["authMode: ",(0,t.jsx)(n.code,{children:"DAPP"})]}),"\n",(0,t.jsxs)(n.h4,{id:"chainnamespace-eip155",children:["chainNamespace: ",(0,t.jsx)(n.code,{children:"EIP155"})]}),"\n",(0,t.jsxs)(n.h4,{id:"default-yes",children:["Default: ",(0,t.jsx)(n.code,{children:"YES"})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/coinbase-adapter\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/coinbase-adapter\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/coinbase-adapter\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Interface",value:"interface"}],children:[(0,t.jsx)(i.Z,{value:"table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chainConfig?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustomChainConfig"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"adapterSettings?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CoinbaseWalletSDKOptions"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"clientId?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sessionTime?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"web3AuthNetwork?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OPENLOGIN_NETWORK_TYPE"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"interface",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface CoinbaseAdapterOptions {\n  chainConfig?: CustomChainConfig;\n  adapterSettings?: CoinbaseWalletSDKOptions;\n  clientId?: string;\n  sessionTime?: number;\n  web3AuthNetwork?: OPENLOGIN_NETWORK_TYPE;\n}\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"custom-chain-config",children:"Custom Chain Config"}),"\n",(0,t.jsx)(n.h4,{id:"chainconfig",children:(0,t.jsx)(n.code,{children:"chainConfig"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["While you can pass your ",(0,t.jsx)(n.code,{children:"chainConfig"}),", it is not required since you can directly pass it over to the ",(0,t.jsx)(n.code,{children:"Web3Auth"}),"/ ",(0,t.jsx)(n.code,{children:"Web3AuthNoModal"})," configuration while\ninstantiating it."]}),(0,t.jsx)(n.p,{children:"Read more about it in their respective sections:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/sdk/pnp/web/modal/initialize#adding-a-custom-chain-configuration",children:(0,t.jsx)(n.code,{children:"web3auth/modal"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/sdk/pnp/web/no-modal/initialize#adding-a-custom-chain-configuration",children:(0,t.jsx)(n.code,{children:"web3auth/no-modal"})})}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you do pass ",(0,t.jsx)(n.code,{children:"chainConfig"})," in an Adapter, it overwrites the ",(0,t.jsx)(n.code,{children:"chainConfig"})," passed over to the ",(0,t.jsx)(n.code,{children:"Web3Auth"}),"/ ",(0,t.jsx)(n.code,{children:"Web3AuthNoModal"})," constructor."]})}),"\n",(0,t.jsx)(n.h4,{id:"coinbasewalletsdkoptions",children:(0,t.jsx)(n.code,{children:"CoinbaseWalletSDKOptions"})}),"\n",(0,t.jsxs)(n.p,{children:["Checkout the ",(0,t.jsx)(n.a,{href:"https://docs.cloud.coinbase.com/wallet-sdk/docs/initializing#initializing",children:"Coinbase Wallet SDK Documentation"})," for these options."]}),"\n",(0,t.jsx)(n.h2,{id:"change-adapter-settings",children:"Change Adapter Settings"}),"\n",(0,t.jsxs)(n.p,{children:["You can change the adapter settings by calling the ",(0,t.jsx)(n.code,{children:"setAdapterSettings()"})," function on the adapter instance."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments-1",children:"Arguments"}),"\n",(0,t.jsxs)(r.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Interface",value:"interface"}],children:[(0,t.jsx)(i.Z,{value:"table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"clientId?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sessionTime?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chainConfig?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustomChainConfig"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"web3AuthNetwork?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OPENLOGIN_NETWORK_TYPE"})})]})]})]})}),(0,t.jsx)(i.Z,{value:"interface",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface BaseAdapterSettings {\n  clientId?: string;\n  sessionTime?: number;\n  chainConfig?: CustomChainConfig;\n  web3AuthNetwork?: OPENLOGIN_NETWORK_TYPE;\n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { CoinbaseAdapter } from "@web3auth/coinbase-adapter";\nconst coinbaseAdapter = new CoinbaseAdapter({\n  clientId: "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ",\n  sessionTime: 3600, // 1 hour in seconds\n  chainConfig: {\n    chainNamespace: CHAIN_NAMESPACES.EIP155,\n    chainId: "0x1",\n    rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app\n  },\n  web3AuthNetwork: "sapphire_mainnet",\n});\nweb3auth.configureAdapter(coinbaseAdapter);\n\n// You can also change the adapter settings later on\ncoinbaseAdapter.setAdapterSettings({\n  sessionTime: 86400, // 1 day in seconds\n  chainConfig: {\n    chainNamespace: CHAIN_NAMESPACES.EIP155,\n    chainId: "0x1",\n    rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app\n  },\n  web3AuthNetwork: "sapphire_mainnet",\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>r});a(67294);var t=a(36905);const s={tabItem:"tabItem_Ymn6"};var i=a(85893);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,r),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>C});var t=a(67294),s=a(36905),i=a(12466),r=a(16550),l=a(20469),c=a(91980),d=a(67392),o=a(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,i=u(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,h]=b({queryString:a,groupId:s}),[x,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,o.Nk)(a);return[s,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:s}),j=(()=>{const e=d??x;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=a(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function g(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),o=e=>{const n=e.currentTarget,a=c.indexOf(n),s=l[a].value;s!==t&&(d(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function C(e){const n=(0,m.Z)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(67294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);