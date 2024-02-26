"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[87971,66390,35543,4462,91566,67203,71574,14783,98828,7602,59694],{66431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=a(85893),n=a(11151),r=a(74866),s=a(85162);const o={title:"Web3Auth SFA Android Quick Start"},u=void 0,c={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/android/stepContent/androidQuickStart",source:"@site/src/pages/quick-start/builder/core_kit/sfa/android/stepContent/androidQuickStart.mdx",title:"Web3Auth SFA Android Quick Start",description:"This guide is designed to help you quickly integrate a basic instance of Web3Auth SFA in your Android app.",frontMatter:{title:"Web3Auth SFA Android Quick Start"},unlisted:!1},l={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This guide is designed to help you quickly integrate a basic instance of Web3Auth SFA in your Android app."}),"\n",(0,i.jsxs)(t.p,{children:["If you face any problem anytime, you can always find help in the\n",(0,i.jsx)(t.a,{href:"https://web3auth.io/community/c/help-core-kit/core-kit-sfa-android/26",children:"Web3Auth Community"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"building locally",type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Clone the SFA Android Quick Start Application"}),"\n",(0,i.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-android/sfa-android-quick-start sfa-android-quick-start\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-android/sfa-android-quick-start sfa-android-quick-start\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-android/sfa-android-quick-start sfa-android-quick-start\n"})})})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Install & Run"}),"\n",(0,i.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,i.jsx)(s.Z,{value:"npm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd sfa-android-quick-start\n# run android project in Android Studio\n"})})}),(0,i.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd sfa-android-quick-start\n# run android project in Android Studio\n"})})}),(0,i.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"cd sfa-android-quick-start\n# run android project in Android Studio\n"})})})]}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},38551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Create and initialize the Web3Auth SFA instance"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/android/stepContent/initialize",source:"@site/src/pages/quick-start/builder/core_kit/sfa/android/stepContent/initialize.mdx",title:"Create and initialize the Web3Auth SFA instance",description:"Let's now create an instance of the SingleFactorAuth.",frontMatter:{title:"Create and initialize the Web3Auth SFA instance"},unlisted:!1},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Let's now create an instance of the ",(0,i.jsx)(t.code,{children:"SingleFactorAuth"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We need the ",(0,i.jsx)(t.code,{children:"network"})," to initialize SingleFactorAuth class. ",(0,i.jsx)(t.code,{children:"network"})," signifies the type of network(",(0,i.jsx)(t.code,{children:"sapphire-mainnet"})," or ",(0,i.jsx)(t.code,{children:"sapphire-devnet"}),") you want\nto initialize web3auth with."]}),"\n",(0,i.jsx)(t.admonition,{title:"sdk reference",type:"info",children:(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/sdk/core-kit/sfa-android",children:"SFA Android SDK"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Installation"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/android/stepContent/installation",source:"@site/src/pages/quick-start/builder/core_kit/sfa/android/stepContent/installation.mdx",title:"Installation",description:"Add Web3Auth's SFA Android SDK to the dependency list. In your app-level build.gradle dependencies section, add the following:",frontMatter:{title:"Installation"},unlisted:!1},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Add Web3Auth's SFA Android SDK to the dependency list. In your app-level ",(0,i.jsx)(t.code,{children:"build.gradle"})," dependencies section, add the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",children:"dependencies {\n    implementation 'com.github.web3auth:single-factor-auth-android:0.0.6'\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Update to the Latest-SDK",type:"warning",children:(0,i.jsxs)(t.p,{children:["Please use the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/Web3Auth/single-factor-auth-android/releases",children:"latest version"})})," of Web3Auth's SFA Android SDK."]})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},84426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Logging in your User"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/android/stepContent/login",source:"@site/src/pages/quick-start/builder/core_kit/sfa/android/stepContent/login.mdx",title:"Logging in your User",description:"Use the getKey function in the Web3Auth SFA Instance to log in the user.",frontMatter:{title:"Logging in your User"},unlisted:!1},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"getKey"})," function in the Web3Auth SFA Instance to log in the user."]}),"\n",(0,i.jsx)(t.p,{children:"Using the information provided by your auth provider, within the id token, after verification, web3auth will return the private key for the respective\nuser."}),"\n",(0,i.jsx)(t.admonition,{title:"SDK Reference",type:"info",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.a,{href:"/sdk/core-kit/sfa-android/usage#getkey",children:[(0,i.jsx)(t.code,{children:"getKey()"})," function"]}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},41638:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(85893),n=a(11151);const r={},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/android/stepContent/requirements",source:"@site/src/pages/quick-start/builder/core_kit/sfa/android/stepContent/requirements.mdx",description:"- Android API version 24 or newer is required.",frontMatter:{},unlisted:!1},u={},c=[];function l(e){const t={admonition:"admonition",code:"code",li:"li",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Requirements",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Android API version ",(0,i.jsx)(t.code,{children:"24"})," or newer is required."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"targetSdk"})," & ",(0,i.jsx)(t.code,{children:"compileSdk"})," should be ",(0,i.jsx)(t.code,{children:"33"})," or newer."]}),"\n"]})})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},62183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(85893),n=a(11151);const r={title:"Trigger Login using your Auth Provider"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/commonSteps/authProviderLogin",source:"@site/src/pages/quick-start/commonSteps/authProviderLogin.mdx",title:"Trigger Login using your Auth Provider",description:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication",frontMatter:{title:"Trigger Login using your Auth Provider"},unlisted:!1},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication\nwill return an ID Token, which will be passed to Web3Auth."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["In this example, we're using Firebase as the authentication service. Web3Auth supports any OAuth2.0 compliant authentication service, we have\ndocumented a few of the most common ones ",(0,i.jsx)(t.a,{href:"/auth-provider-setup/",children:"here"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},53641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var i=a(85893),n=a(11151);const r=a.p+"assets/images/create-verifier-d18533b1f4eb8c914bbc54b841e7caab.png",s={title:"Setting up your Verifier"},o=void 0,u={type:"mdx",permalink:"/docs/quick-start/commonSteps/createVerifier",source:"@site/src/pages/quick-start/commonSteps/createVerifier.mdx",title:"Setting up your Verifier",description:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication",frontMatter:{title:"Setting up your Verifier"},unlisted:!1},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication\nin your Web3Auth Dashboard."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Read more about ",(0,i.jsx)(t.a,{href:"/auth-provider-setup/verifiers",children:"Verifier Creation"})," and ",(0,i.jsx)(t.a,{href:"/auth-provider-setup/",children:"Custom Authentication Setup"})," for your Auth Provider."]})}),"\n",(0,i.jsx)("img",{src:r,style:{alignSelf:"center",maxWidth:"100%"},alt:"Verifier Modal on Web3Auth Dashboard"}),"\n",(0,i.jsx)("a",{className:"button button--primary",href:"https://dashboard.web3auth.io",target:"_blank",rel:"noreferrer noopener",children:(0,i.jsx)("span",{children:"Go to Developer Dashboard"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var i=a(36905);const n={tabItem:"tabItem_Ymn6"};var r=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(n.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>A});var i=a(67294),n=a(36905),r=a(12466),s=a(16550),o=a(20469),u=a(91980),c=a(67392),l=a(50012);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[s,u]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:a,groupId:n}),[b,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,l.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{f&&u(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),k(e)}),[d,k,r]),tabValues:r}}var k=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),l=e=>{const t=e.currentTarget,a=u.indexOf(t),n=o[a].value;n!==i&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>u.push(e),onKeyDown:d,onClick:l,...r,className:(0,n.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function q(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function A(e){const t=(0,k.Z)();return(0,g.jsx)(q,{...e,children:d(e.children)},String(t))}},26276:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var i=a(64310),n=a(1003),r=a(27229);const s={build(e){let{filenames:t,files:a,steps:s}=e;const o=new n.ReplaceFileAggregator;return(0,r.default)(s,a,o),t.push(i.nr),t.push(i.kZ),t.push(i.Fp),t.push(i.Nu),t.push(i.xK),t.push(i.lN),{filenames:t,files:a,steps:s}}}},77167:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(53641),n=a(1003),r=a(38551),s=a(62183),o=a(3107),u=a(84426),c=a(66431),l=a(41638);const d=(0,n.toSteps)({androidQuickStart:c,requirements:l,installation:o,createVerifier:i,initialization:r,login:u,authProviderLogin:s})},27229:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var i=a(64310),n=a(77167);function r(e,t,a){e.push({...n.default.androidQuickStart,pointer:a.highlightRange(i.nr,t[i.nr],"Quick Start")},{...n.default.requirements,pointer:a.highlightRange(i.Fp,t[i.Fp],"Requirements")},{...n.default.installation,pointer:a.highlightRange(i.Fp,t[i.Fp],"Installation")},{...n.default.createVerifier,pointer:a.highlightRange(i.nr,t[i.nr],"Verifier Creation")},{...n.default.initialization,pointer:a.highlightRange(i.nr,t[i.nr],"Initialize Web3Auth SFA")},{...n.default.authProviderLogin,pointer:a.highlightRange(i.nr,t[i.nr],"Auth Provider Login")},{...n.default.login,pointer:a.highlightRange(i.nr,t[i.nr],"Get Key")})}},1003:(e,t,a)=>{a.r(t),a.d(t,{ReplaceFileAggregator:()=>s,replaceFileVariable:()=>o,toStep:()=>n,toSteps:()=>r});a(67294);var i=a(85893);function n(e){const t=e.default;return{title:e.frontMatter.title,content:(0,i.jsx)(t,{})}}function r(e){return Object.fromEntries(Object.entries(e).map((e=>{let[t,a]=e;return[t,n(a)]})))}class s{replacementOutcomes=[];replaceFileVariable(e,t,a,i){const n=i.split("\n").length-3,r=e.split("\n");let s;for(let u=0;u<r.length;u+=1)r[u].includes(a)&&(s=u);s+=1;const o=new RegExp(`\n *// REPLACE-${a}-\n *`,"gm");return this.replacementOutcomes.push({filename:t,replacementLineCount:n,variableLine:s}),e.replace(o,i)}highlightRange(e,t,a){const i=t.split("\n"),n=[],r=[];for(let s=0;s<i.length;s+=1)i[s].includes(`IMP START - ${a}`)&&n.push(s),i[s].includes(`IMP END - ${a}`)&&r.push(s);return{range:`${n[0]}-${r[0]}`,filename:e,fileContent:t,variableName:a}}rangeOffsetEditor(e){const t=e.range.split("-");for(let a=0;a<t.length;a+=1){let i=parseInt(t[a],10),n=0;for(let t=0;t<this.replacementOutcomes.length;t+=1){i+n>this.replacementOutcomes[t].variableLine&&this.replacementOutcomes[t].filename===e.filename&&(n+=this.replacementOutcomes[t].replacementLineCount)}i+=n,t[a]=i.toString()}return{range:t.join("-"),filename:e.filename}}}function o(e,t,a){const i=new RegExp(`\n *// REPLACE-${t}-\n *`,"gm");return e.replace(i,a)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var i=a(67294);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},64310:e=>{e.exports=JSON.parse('{"qb":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/react-modal-quick-start/src/App.tsx","mH":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/react-modal-quick-start/package.json","Ns":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/react-modal-quick-start/config-overrides.js","uJ":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/nextjs-modal-quick-start/app/page.tsx","zg":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/nextjs-modal-quick-start/package.json","Ld":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/src/app/app.component.ts","cg":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/src/app/app.component.html","b1":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/src/polyfills.ts","qy":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/package.json","Or":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/angular-modal-quick-start/tsconfig.json","nG":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start/index.html","t4":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start/script.js","z7":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start/style.css","Lc":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vue-modal-quick-start/vue.config.js","V6":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vue-modal-quick-start/package.json","IK":"Web3Auth/web3auth-pnp-examples/main/web-modal-sdk/quick-starts/vue-modal-quick-start/src/Home.vue","dh":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start/src/App.tsx","or":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start/package.json","y_":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start/config-overrides.js","ED":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/nextjs-no-modal-quick-start/app/page.tsx","sq":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/nextjs-no-modal-quick-start/package.json","ZL":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/src/app/app.component.ts","sJ":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/src/app/app.component.html","n3":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/src/polyfills.ts","VQ":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/package.json","Y4":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start/tsconfig.json","kk":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start/vue.config.js","tu":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start/package.json","pv":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start/src/Home.vue","OA":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start/index.html","vR":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start/script.js","sk":"Web3Auth/web3auth-pnp-examples/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start/style.css","lS":"Web3Auth/web3auth-pnp-examples/main/unity/unity-quick-start/Assets/Web3AuthScript.cs","lK":"Web3Auth/web3auth-pnp-examples/main/unity/unity-quick-start/Assets/Plugins/Android/AndroidManifest.xml","cr":"Web3Auth/web3auth-pnp-examples/main/unity/unity-quick-start/Packages/manifest.json","Jf":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/App.tsx","bL":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/package.json","Kb":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/metro.config.js","X4":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/globals.js","wO":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/index.js","zx":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/ios/Podfile","Dh":"Web3Auth/web3auth-pnp-examples/main/react-native/rn-bare-quick-start/android/build.gradle","xm":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/ContentView.swift","nV":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/LoginView.swift","ZQ":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/UserDetailView.swift","sn":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/ViewModel.swift","Ow":"Web3Auth/web3auth-pnp-examples/main/ios/ios-quick-start/ios-example/web3RPC.swift","F$":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/lib/main.dart","Kv":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/android/app/build.gradle","QP":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/ios/Podfile","du":"Web3Auth/web3auth-pnp-examples/main/flutter/flutter-quick-start/pubspec.yaml","Ck":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/java/com/sbz/web3authdemoapp/MainActivity.kt","el":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/AndroidManifest.xml","EO":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/build.gradle","fh":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/settings.gradle","g$":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/res/values/strings.xml","GF":"Web3Auth/web3auth-pnp-examples/main/android/android-quick-start/app/src/main/res/layout/activity_main.xml","aV":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-react-quick-start/src/App.tsx","MF":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-react-quick-start/package.json","oi":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-react-quick-start/config-overrides.js","wG":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-nextjs-quick-start/app/page.tsx","zf":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-nextjs-quick-start/package.json","tc":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/src/app/app.component.ts","ZK":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/src/app/app.component.html","FD":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/src/polyfills.ts","gQ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/package.json","sj":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start/tsconfig.json","OO":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start/vue.config.js","Al":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start/package.json","tk":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start/src/Home.vue","UP":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start/index.html","Qt":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start/script.js","gI":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start/style.css","x1":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/App.tsx","zU":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/package.json","kF":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/metro.config.js","ey":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/globals.js","Xy":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/index.js","j2":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/ios/Podfile","wY":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-react-native/sfa-rn-bare-quick-start/android/build.gradle","MQ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/ContentView.swift","oo":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/LoginView.swift","zb":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/UserDetailView.swift","$d":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-ios/sfa-ios-quick-start/ios-firebase-example/ViewModel.swift","Sb":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-node/sfa-node-quick-start/index.js","bZ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-node/sfa-node-quick-start/package.json","nr":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/java/com/example/androidsfaexample/MainActivity.kt","kZ":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/AndroidManifest.xml","Fp":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/build.gradle","Nu":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/settings.gradle","xK":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/res/values/strings.xml","lN":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-android/sfa-android-quick-start/app/src/main/res/layout/activity_main.xml","$9":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/pubspec.yaml","Uq":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/lib/auth_service.dart","T1":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/lib/main.dart","oH":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/ios/Podfile","gd":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/android/app/build.gradle","ic":"Web3Auth/web3auth-core-kit-examples/main/single-factor-auth-flutter/sfa_flutter_quick_start/android/build.gradle","I1":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start/src/App.tsx","sz":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start/package.json","f2":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start/config-overrides.js","KD":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-nextjs-quick-start/app/page.tsx","qj":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-nextjs-quick-start/package.json","_S":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/src/app/app.component.ts","s5":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/src/app/app.component.html","aU":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/src/polyfills.ts","WW":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/package.json","nf":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start/tsconfig.json","og":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start/vue.config.js","Ik":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start/package.json","St":"Web3Auth/web3auth-core-kit-examples/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start/src/Home.vue"}')}}]);