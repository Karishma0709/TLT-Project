import{r as a}from"./react-DI6l-HCL.js";import{i as p,m as z,j as P,A as L,p as M,s as W,g as D,r as J,a as A}from"./@remix-run-Cg-J7xM8.js";/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}const F=a.createContext(null),V=a.createContext(null),y=a.createContext(null),N=a.createContext(null),E=a.createContext({outlet:null,matches:[],isDataRoute:!1}),T=a.createContext(null);function de(e,t){let{relative:r}=t===void 0?{}:t;R()||p(!1);let{basename:n,navigator:i}=a.useContext(y),{hash:s,pathname:o,search:f}=Q(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:P([n,o])),i.createHref({pathname:c,search:f,hash:s})}function R(){return a.useContext(N)!=null}function k(){return R()||p(!1),a.useContext(N).location}function _(e){a.useContext(y).static||a.useLayoutEffect(e)}function fe(){let{isDataRoute:e}=a.useContext(E);return e?le():q()}function q(){R()||p(!1);let e=a.useContext(F),{basename:t,future:r,navigator:n}=a.useContext(y),{matches:i}=a.useContext(E),{pathname:s}=k(),o=JSON.stringify(D(i,r.v7_relativeSplatPath)),f=a.useRef(!1);return _(()=>{f.current=!0}),a.useCallback(function(v,u){if(u===void 0&&(u={}),!f.current)return;if(typeof v=="number"){n.go(v);return}let l=J(v,JSON.parse(o),s,u.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:P([t,l.pathname])),(u.replace?n.replace:n.push)(l,u.state,u)},[t,n,o,s,e])}const G=a.createContext(null);function K(e){let t=a.useContext(E).outlet;return t&&a.createElement(G.Provider,{value:e},t)}function Q(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=a.useContext(y),{matches:i}=a.useContext(E),{pathname:s}=k(),o=JSON.stringify(D(i,n.v7_relativeSplatPath));return a.useMemo(()=>J(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function X(e,t){return Y(e,t)}function Y(e,t,r,n){R()||p(!1);let{navigator:i}=a.useContext(y),{matches:s}=a.useContext(E),o=s[s.length-1],f=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let v=k(),u;if(t){var l;let d=typeof t=="string"?M(t):t;c==="/"||(l=d.pathname)!=null&&l.startsWith(c)||p(!1),u=d}else u=v;let h=u.pathname||"/",m=h;if(c!=="/"){let d=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=z(e,{pathname:m}),C=te(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:P([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),s,r,n);return t&&C?a.createElement(N.Provider,{value:{location:b({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:L.Pop}},C):C}function Z(){let e=oe(),t=A(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:i},r):null,null)}const $=a.createElement(Z,null);class H extends a.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?a.createElement(E.Provider,{value:this.props.routeContext},a.createElement(T.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ee(e){let{routeContext:t,match:r,children:n}=e,i=a.useContext(F);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(E.Provider,{value:t},n)}function te(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if((s=r)!=null&&s.errors)e=r.matches;else return null}let o=e,f=(i=r)==null?void 0:i.errors;if(f!=null){let u=o.findIndex(l=>l.route.id&&(f==null?void 0:f[l.route.id])!==void 0);u>=0||p(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,v=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(v=u),l.route.id){let{loaderData:h,errors:m}=r,g=l.route.loader&&h[l.route.id]===void 0&&(!m||m[l.route.id]===void 0);if(l.route.lazy||g){c=!0,v>=0?o=o.slice(0,v+1):o=[o[0]];break}}}return o.reduceRight((u,l,h)=>{let m,g=!1,C=null,d=null;r&&(m=f&&l.route.id?f[l.route.id]:void 0,C=l.route.errorElement||$,c&&(v<0&&h===0?(ie("route-fallback"),g=!0,d=null):v===h&&(g=!0,d=l.route.hydrateFallbackElement||null)));let O=t.concat(o.slice(0,h+1)),I=()=>{let x;return m?x=C:g?x=d:l.route.Component?x=a.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=u,a.createElement(ee,{match:l,routeContext:{outlet:u,matches:O,isDataRoute:r!=null},children:x})};return r&&(l.route.ErrorBoundary||l.route.errorElement||h===0)?a.createElement(H,{location:r.location,revalidation:r.revalidation,component:C,error:m,children:I(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):I()},null)}var w=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(w||{}),B=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(B||{});function re(e){let t=a.useContext(F);return t||p(!1),t}function ne(e){let t=a.useContext(V);return t||p(!1),t}function ae(e){let t=a.useContext(E);return t||p(!1),t}function S(e){let t=ae(),r=t.matches[t.matches.length-1];return r.route.id||p(!1),r.route.id}function oe(){var e;let t=a.useContext(T),r=ne(B.UseRouteError),n=S(B.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function le(){let{router:e}=re(w.UseNavigateStable),t=S(B.UseNavigateStable),r=a.useRef(!1);return _(()=>{r.current=!0}),a.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,b({fromRouteId:t},s)))},[e,t])}const j={};function ie(e,t,r){j[e]||(j[e]=!0)}function pe(e){return K(e.context)}function se(e){p(!1)}function ve(e){let{basename:t="/",children:r=null,location:n,navigationType:i=L.Pop,navigator:s,static:o=!1,future:f}=e;R()&&p(!1);let c=t.replace(/^\/*/,"/"),v=a.useMemo(()=>({basename:c,navigator:s,static:o,future:b({v7_relativeSplatPath:!1},f)}),[c,f,s,o]);typeof n=="string"&&(n=M(n));let{pathname:u="/",search:l="",hash:h="",state:m=null,key:g="default"}=n,C=a.useMemo(()=>{let d=W(u,c);return d==null?null:{location:{pathname:d,search:l,hash:h,state:m,key:g},navigationType:i}},[c,u,l,h,m,g,i]);return C==null?null:a.createElement(y.Provider,{value:v},a.createElement(N.Provider,{children:r,value:C}))}function he(e){let{children:t,location:r}=e;return X(U(t),r)}new Promise(()=>{});function U(e,t){t===void 0&&(t=[]);let r=[];return a.Children.forEach(e,(n,i)=>{if(!a.isValidElement(n))return;let s=[...t,i];if(n.type===a.Fragment){r.push.apply(r,U(n.props.children,s));return}n.type!==se&&p(!1),!n.props.index||!n.props.children||p(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=U(n.props.children,s)),r.push(o)}),r}function me(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:a.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:a.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:a.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{F as D,y as N,pe as O,ve as R,V as a,de as b,Q as c,k as d,fe as e,he as f,se as g,me as m,Y as u};
