(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{487:(e,t,r)=>{Promise.resolve().then(r.bind(r,4719)),Promise.resolve().then(r.t.bind(r,8563,23))},4719:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(5155),o=r(2115),u=r(8173),l=r.n(u);function i(){let[e,t]=(0,o.useState)("profile");return(0,o.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(e.target.id)})},{threshold:.5}),r=document.querySelectorAll("section[id]");return r.forEach(t=>e.observe(t)),()=>{r.forEach(t=>e.unobserve(t))}},[]),(0,n.jsx)("header",{className:"fixed top-0 left-0 right-0 bg-black/60 text-white z-50 backdrop-blur-sm",children:(0,n.jsxs)("nav",{className:"container mx-auto flex justify-between items-center py-4",children:[(0,n.jsx)("div",{className:"text-2xl font-bold",children:"Cisco"}),(0,n.jsxs)("ul",{className:"flex space-x-6",children:[(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"#profile",className:"hover:text-[#2d42ff] transition-colors ".concat("profile"===e?"underline decoration-[#2d42ff]":""),children:"Profile"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"#skills",className:"hover:text-[#2d42ff] transition-colors ".concat("skills"===e?"underline decoration-[#2d42ff]":""),children:"Skills"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"#contact",className:"hover:text-[#2d42ff] transition-colors ".concat("contact"===e?"underline decoration-[#2d42ff]":""),children:"Contact"})})]})]})})}},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(306),o=r(5155),u=n._(r(2115)),l=r(180),i=r(1394),a=r(4116),c=r(4445),s=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let y=u.default.forwardRef(function(e,t){let r,n;let{href:l,as:y,children:b,prefetch:m=null,passHref:g,replace:v,shallow:j,scroll:x,onClick:P,onMouseEnter:E,onTouchStart:_,legacyBehavior:O=!1,...k}=e;r=b,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let C=u.default.useContext(i.AppRouterContext),M=!1!==m,w=null===m?c.PrefetchKind.AUTO:c.PrefetchKind.FULL,{href:N,as:I}=u.default.useMemo(()=>{let e=h(l);return{href:e,as:y?h(y):e}},[l,y]),S=u.default.useRef(N),T=u.default.useRef(I);O&&(n=u.default.Children.only(r));let A=O?n&&"object"==typeof n&&n.ref:t,[R,U,F]=(0,a.useIntersection)({rootMargin:"200px"}),L=u.default.useCallback(e=>{(T.current!==I||S.current!==N)&&(F(),T.current=I,S.current=N),R(e)},[I,N,F,R]),q=(0,s.useMergedRef)(L,A);u.default.useEffect(()=>{C&&U&&M&&p(C,N,{kind:w})},[I,N,U,M,C,w]);let K={ref:q,onClick(e){O||"function"!=typeof P||P(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),C&&!e.defaultPrevented&&function(e,t,r,n,o,l,i){let{nodeName:a}=e.currentTarget;"A"===a.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,C,N,I,v,j,x)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),C&&M&&p(C,N,{kind:w})},onTouchStart:function(e){O||"function"!=typeof _||_(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),C&&M&&p(C,N,{kind:w})}};return(0,f.isAbsoluteUrl)(I)?K.href=I:O&&!g&&("a"!==n.type||"href"in n.props)||(K.href=(0,d.addBasePath)(I)),O?u.default.cloneElement(n,K):(0,o.jsx)("a",{...k,...K,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(2115),o=r(8571),u="function"==typeof IntersectionObserver,l=new Map,i=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!u,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]),[p,s,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return i},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",l=e.pathname||"",i=e.hash||"",a=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),a&&"object"==typeof a&&(a=String(n.urlQueryToSearchParams(a)));let s=e.search||a&&"?"+a||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==c?(c="//"+(c||""),l&&"/"!==l[0]&&(l="/"+l)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),s&&"?"!==s[0]&&(s="?"+s),""+u+c+(l=l.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+i}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return u(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return a},getLocationOrigin:function(){return l},getURL:function(){return i},isAbsoluteUrl:function(){return u},isResSent:function(){return c},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return s},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=l();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function s(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Error('"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},8563:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[306,441,517,358],()=>t(487)),_N_E=e.O()}]);