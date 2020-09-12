(this["webpackJsonpgraphql-countries-index"]=this["webpackJsonpgraphql-countries-index"]||[]).push([[0],{25:function(e,t,a){e.exports={fade:"Hero_fade__iVJjl",hero:"Hero_hero__3j6HR",subtitle:"Hero_subtitle__1EVrj",title:"Hero_title__1szOL"}},34:function(e,t,a){e.exports={continent:"Summary_continent__1tPvQ",country:"Summary_country__35gKt"}},35:function(e,t,a){e.exports={all:"Tally_all__2Y3RP",related:"Tally_related__3ycar"}},36:function(e,t,a){e.exports={result:"Result_result__rHD3n"}},37:function(e,t,a){e.exports={detailView:"DetailView_detailView__2uSWf",flag:"DetailView_flag__3B4BV",miniResults:"DetailView_miniResults__1Bs7k"}},38:function(e,t,a){e.exports={link:"Logo_link__pJ40V",logo:"Logo_logo__sqI9p"}},39:function(e,t,a){e.exports={bottom:"Grayout_bottom__2piWU",top:"Grayout_top__39qsz"}},58:function(e,t,a){e.exports={overview:"ContentCard_overview__1vUhd",detail:"ContentCard_detail__aW99j"}},59:function(e,t,a){e.exports={flag:"Flag_flag__qUCS2"}},60:function(e,t,a){e.exports={search:"Search_search__Eoksl"}},61:function(e,t,a){e.exports={textInput:"TextInput_textInput__2x_Xq"}},62:function(e,t,a){e.exports={fullScreenModal:"FullScreenModal_fullScreenModal__3Qhv3"}},63:function(e,t,a){e.exports={flexContainer:"FlexContainer_flexContainer__1w6Xo"}},64:function(e,t,a){e.exports={gridContainer:"GridContainer_gridContainer__Qp6w3"}},65:function(e,t,a){e.exports={background:"Background_background__N-cUb"}},66:function(e,t,a){e.exports={header:"Header_header__mLjKz"}},67:function(e,t,a){e.exports={main:"Main_main__j2P5T"}},68:function(e,t,a){e.exports={big:"Pillar_big__AIRuS",small:"Pillar_small__13Exe"}},69:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);a(70);var n=a(8),l=a(1),r=a.n(l);const c=new n.ApolloClient({cache:new n.InMemoryCache,connectToDevTools:!0,uri:"https://countries.trevorblades.com/graphql"}),o=({children:e})=>r.a.createElement(n.ApolloProvider,{client:c},e);var s=a(19);var i=a(25),u=a.n(i);const m=({title:e,subtitle:t})=>r.a.createElement("section",{className:u.a.hero},r.a.createElement("div",{className:u.a.fade},r.a.createElement("h1",{className:u.a.title},e),r.a.createElement("h5",{className:u.a.subtitle},t))),d=n.gql`
  fragment countryDetails on Country {
    capital
    code
    continent {
      name
    }
    currency
    languages {
      name
    }
    name
  }
`,h=n.gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${d}
`,v=(n.gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${d}
`,n.gql`
  query Country($code: ID!) {
    country(code: $code) {
      capital
      currency
      languages {
        name
      }
      name
      ...relatedCountriesDetails
    }
  }
  ${h}
`),f=()=>{},E=(...e)=>f;var _=a(58),p=a.n(_);const g=({children:e,look:t,onClick:a=E(),onMouseOver:n=E()})=>{const[c,o]=Object(l.useState)(!1);return r.a.createElement("article",{onClick:a,onMouseOver:()=>{c||(n(),o(!0))},className:p.a[t]},e)};var y=a(34),C=a.n(y);const b=({continent:e,country:t,facts:a})=>{if(a){const e=(({capital:e,continent:t,currency:a,languages:n})=>{var l,r,c;const o=[];o.push(null!==e&&void 0!==e?e:"",null!==(l=null===t||void 0===t?void 0:t.name)&&void 0!==l?l:"",a?a.split(",")[0]:"",null!==(r=null===n||void 0===n||null===(c=n[0])||void 0===c?void 0:c.name)&&void 0!==r?r:"");return o.filter(Boolean).join(" \u25cf ")})(a);return r.a.createElement("div",{className:C.a.country},r.a.createElement("h3",null,t),r.a.createElement("p",null,e," "))}return r.a.createElement("div",{className:C.a.continent},r.a.createElement("h2",null,t),r.a.createElement("h3",null,e))};var q=a(35),N=a.n(q);const x=({countries:e,matches:t,relatedCountries:a})=>a?r.a.createElement("h3",{className:N.a.related},a,"+ more"):r.a.createElement("div",{className:N.a.all},r.a.createElement("h3",null,"All Countries"),r.a.createElement("p",null,t,"/",e));var V=a(59),H=a.n(V);const w=({countryCode:e})=>r.a.createElement("img",{alt:"Flag of "+e,className:H.a.flag,src:`/graphql-countries-index/flags/${e.toLowerCase()}.png`}),M=n.gql`
  fragment countryDetails on Country {
    capital
    code
    continent {
      name
    }
    currency
    languages {
      name
    }
    name
  }
`,O=n.gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${M}
`,k=n.gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${M}
`;const j=n.gql`
  query Country($code: ID!) {
    country(code: $code) {
      capital
      currency
      languages {
        name
      }
      name
      ...relatedCountriesDetails
    }
  }
  ${O}
`;var D=a(36),L=a.n(D);const S=({onClick:e,searchString:t})=>{const{client:a,data:l,error:c,loading:o}=n.useQuery(k,s);var s;if(!t||o||c||!l)return r.a.createElement("section",{className:L.a.result});const{countries:i}=l,u=i.filter((function({name:e}){return e.toLowerCase().startsWith(t)})),m=u.sort((function({name:e},{name:t}){return e===t?0:e<t?-1:1}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{countries:i.length,matches:u.length}),r.a.createElement("section",{className:L.a.result},m.map(({code:t,name:n,...l})=>r.a.createElement(g,{look:"overview",onClick:()=>{e(t)},onMouseOver:()=>{a.query({query:v,variables:{code:t}})},key:t},r.a.createElement(w,{countryCode:t}),r.a.createElement(b,{country:n,facts:l})))))};var Z=a(60),R=a.n(Z);const A=({children:e})=>r.a.createElement("section",{className:R.a.search},e),I=(e,t)=>{document.addEventListener(e,t,{passive:!0});return()=>{document.removeEventListener(e,t)}};var $=a(37),T=a.n($);const P=({countryCode:e,onClickOutside:t})=>{const a=Object(l.useRef)(null);((e,t)=>{const a=Object(l.useCallback)(t,[e]);Object(l.useEffect)((function(){const t=t=>{e.current&&(e.current.contains(t.target)||a(t))},n=((...e)=>()=>{for(const t of e)t()})(I("mousedown",t),I("touchstart",t));return function(){n()}}),[e,a])})(a,t);const{data:c,error:o,loading:s}=(i={variables:{code:e}},n.useQuery(j,i));var i;if(s||o||!c)return null;const{country:u}=c;if(!u)return null;const{name:m,continent:d}=u,{countries:h}=d;if(!h)return null;const v=h.slice(0,3);return r.a.createElement("div",{className:T.a.detailView,ref:a},r.a.createElement(w,{countryCode:e}),r.a.createElement(b,{continent:d.name,country:m}),r.a.createElement("div",{className:T.a.miniResults},r.a.createElement("h4",null,"Other countries in ",d.name),v.map(({code:e,name:t,...a})=>r.a.createElement(g,{key:t,look:"detail"},r.a.createElement(w,{countryCode:e}),r.a.createElement(b,{country:t,facts:a})))),r.a.createElement(x,{relatedCountries:h.length}))};var Q=a(61),B=a.n(Q);const F=({onChange:e,placeholder:t,value:a})=>{const n=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.focus()}),[]),r.a.createElement("input",{className:B.a.textInput,id:"textInput",onChange:e,placeholder:t,ref:n,type:"text",value:a})};var z=a(62),U=a.n(z);const J=({children:e})=>Object(s.createPortal)(r.a.createElement("div",{className:U.a.fullScreenModal},e),document.body);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var G=r.a.createElement("defs",null,r.a.createElement("style",null,"\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: #1e1e1c;\n      }\n\n      .cls-3 {\n        fill: #4b69b0;\n      }\n\n    ")),K=r.a.createElement("title",null,"l2e_logo_white"),X=r.a.createElement("path",{className:"cls-1",d:"M2.09,118.14v-96H21.32v79.7H41.1v16.32Z",transform:"translate(-2.09)"}),Y=r.a.createElement("path",{className:"cls-1",d:"M54.29,118.14v-96H92.74V40.68H73.85V59.35H92v18.1H73.85v22H94v18.67Z",transform:"translate(-2.09)"}),ee=r.a.createElement("path",{className:"cls-1",d:"M105.6,118.14l9.27-96H147.4l9.16,96H138.35L137,102.6H125.38l-1.12,15.54Zm21.23-30.85h8.72L131.3,38.44h-.89Z",transform:"translate(-2.09)"}),te=r.a.createElement("path",{className:"cls-1",d:"M170.2,22.12h29.51q7,0,10.9,3.19a15.78,15.78,0,0,1,5.19,8.94A66.13,66.13,0,0,1,217.15,49q0,8.16-2.13,12.74a11.88,11.88,0,0,1-7.38,6.37A8.89,8.89,0,0,1,214,72.42c1.3,2.31,2,5.44,2,9.39l-.23,36.33H196.91V80.58q0-4-1.56-5.14c-1-.74-2.95-1.12-5.7-1.12v43.82H170.2Zm24.14,35.55q4,0,4-8.72a34.79,34.79,0,0,0-.34-5.7,4.21,4.21,0,0,0-1.23-2.63,4,4,0,0,0-2.57-.72h-4.47V57.67Z",transform:"translate(-2.09)"}),ae=r.a.createElement("path",{className:"cls-1",d:"M231.34,118.14v-96h19.78L260,68.06V22.12h18.56v96H259.73l-9.61-48.06v48.06Z",transform:"translate(-2.09)"}),ne=r.a.createElement("path",{className:"cls-1",d:"M464,118.14v-96h38.45V40.68H483.56V59.35h18.11v18.1H483.56v22h20.12v18.67Z",transform:"translate(-2.09)"}),le=r.a.createElement("path",{className:"cls-1",d:"M521.79,112.55Q516,106.07,516,91.65V82.26h18.89v12c0,4.77,1.52,7.15,4.58,7.15A4,4,0,0,0,543,99.86c.67-1,1-2.7,1-5.08A22.89,22.89,0,0,0,542.91,87a16.72,16.72,0,0,0-2.85-5.14q-1.72-2.07-6.2-6.43l-8.27-8.27Q516,57.78,516,46.38q0-12.3,5.64-18.72t16.49-6.43q13,0,18.66,6.87t5.71,21.52H542.91L542.8,43a4.18,4.18,0,0,0-1.06-3,3.87,3.87,0,0,0-3-1.12,4.29,4.29,0,0,0-3.35,1.23,4.78,4.78,0,0,0-1.12,3.35q0,4.7,5.36,9.73l11.18,10.73a63.06,63.06,0,0,1,6.48,7.21,28.15,28.15,0,0,1,4.14,8,34.63,34.63,0,0,1,1.56,11q0,14.19-5.19,21.51T540.68,119Q527.6,119,521.79,112.55Z",transform:"translate(-2.09)"}),re=r.a.createElement("path",{className:"cls-1",d:"M577.23,22.12H602.6q11.52,0,16.43,7.44T624,51.3q0,14.31-4.36,21.57t-15.65,7.27h-7.82v38H577.23Zm20,40.69a8.19,8.19,0,0,0,5.08-1.28,6.16,6.16,0,0,0,2.13-3.69A36.32,36.32,0,0,0,605,51q0-6-1.34-8.72c-.9-1.78-2.68-2.68-5.37-2.68h-2.12V62.81Z",transform:"translate(-2.09)"}),ce=r.a.createElement("path",{className:"cls-1",d:"M643.06,111.94q-6-7.11-6-20V46.27q0-12.41,6-18.72t17.66-6.32q11.63,0,17.66,6.32t6,18.72V92q0,13-6,20t-17.66,7Q649.1,119,643.06,111.94Zm21.13-12.8a17.58,17.58,0,0,0,.89-6.26V45.93a13,13,0,0,0-.84-5.08,3.31,3.31,0,0,0-3.41-2q-4.8,0-4.8,7.27V93a15.2,15.2,0,0,0,1,6.26,3.71,3.71,0,0,0,3.69,2.12A3.4,3.4,0,0,0,664.19,99.14Z",transform:"translate(-2.09)"}),oe=r.a.createElement("path",{className:"cls-1",d:"M700,22.12h29.5q7,0,10.9,3.19a15.82,15.82,0,0,1,5.2,8.94A66.81,66.81,0,0,1,746.9,49q0,8.16-2.12,12.74a11.93,11.93,0,0,1-7.38,6.37,8.91,8.91,0,0,1,6.32,4.36q1.95,3.47,1.95,9.39l-.22,36.33H726.67V80.58q0-4-1.56-5.14c-1.05-.74-3-1.12-5.71-1.12v43.82H700ZM724.1,57.67q4,0,4-8.72a36.22,36.22,0,0,0-.33-5.7,4.32,4.32,0,0,0-1.23-2.63A4,4,0,0,0,724,39.9h-4.47V57.67Z",transform:"translate(-2.09)"}),se=r.a.createElement("path",{className:"cls-1",d:"M769.37,118.14V40.57H758V22.12h42V40.57h-11.4v77.57Z",transform:"translate(-2.09)"}),ie=r.a.createElement("line",{className:"cls-2",x1:260.88,y1:40.31,x2:260.88,y2:41.93}),ue=r.a.createElement("path",{className:"cls-1",d:"M323.67,0l0,0A27.49,27.49,0,0,0,297.16,27.1h0V148.32H419l0,0a27.47,27.47,0,0,0,26.49-27.07h0V0Z",transform:"translate(-2.09)"}),me=r.a.createElement("path",{className:"cls-3",d:"M328.83,8l0,0A24.51,24.51,0,0,0,305.19,32.2h0V140.29h108.6l0,0a24.5,24.5,0,0,0,23.62-24.14h0V8Z",transform:"translate(-2.09)"}),de=r.a.createElement("line",{className:"cls-1",x1:413.69,y1:104.05,x2:423.08,y2:104.05}),he=r.a.createElement("path",{className:"cls-1",d:"M406.41,29H326.09a9.37,9.37,0,0,0-9.36,9h0v.22c0,.05,0,.11,0,.16s0,.11,0,.16v9.22h89.69V66.52h-89.7v56.29h99.08a9.37,9.37,0,0,0,9.36-9h0v-.22s0-.11,0-.16,0-.11,0-.17v-9.21H335.47V85.28h89.7V29Z",transform:"translate(-2.09)"});const ve=({svgRef:e,title:t,...a})=>r.a.createElement("svg",W({id:"Lager_1","data-name":"Lager 1",viewBox:"0 0 797.9 148.32",ref:e},a),G,void 0===t?K:t?r.a.createElement("title",null,t):null,X,Y,ee,te,ae,ne,le,re,ce,oe,se,ie,ue,me,de,he),fe=r.a.forwardRef((e,t)=>r.a.createElement(ve,W({svgRef:t},e)));a.p;const Ee=e=>{Object(l.useEffect)(()=>{try{new URL(e)}catch(t){t instanceof TypeError&&console.warn(`Expected valid absolute URL, received "${e}".`)}},[e])};var _e=a(38),pe=a.n(_e);const ge=({href:e="https://learn2esport.com/"})=>(Ee(e),r.a.createElement("div",null,r.a.createElement("a",{className:pe.a.link,href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(fe,{className:pe.a.logo,title:"Learn2Esports logo"}))));var ye=a(63),Ce=a.n(ye);const be=({children:e})=>r.a.createElement("div",{className:Ce.a.flexContainer},e);var qe=a(64),Ne=a.n(qe);const xe=({children:e})=>r.a.createElement("div",{className:Ne.a.gridContainer},e);var Ve=a(39),He=a.n(Ve);const we=()=>Object(s.createPortal)(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:He.a.top}),r.a.createElement("div",{className:He.a.bottom})),document.body);var Me=a(65),Oe=a.n(Me);const ke=({children:e})=>Object(s.createPortal)(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Oe.a.background}),r.a.createElement(we,null),r.a.createElement("div",null,e)),document.body);var je=a(66),De=a.n(je);const Le=({children:e})=>r.a.createElement("header",{className:De.a.header},e);var Se=a(67),Ze=a.n(Se);const Re=({children:e})=>r.a.createElement("main",{className:Ze.a.main},e);var Ae=a(68),Ie=a.n(Ae);const $e=({size:e})=>r.a.createElement("div",{className:Ie.a[e]}),Te=()=>{const[e,t]=Object(l.useState)(""),[a,n]=Object(l.useState)(""),[c,o,s]=((e=!1)=>{const[t,a]=Object(l.useState)(e);return[t,()=>{a(!0)},()=>{a(!1)},()=>{a(!t)}]})();return r.a.createElement(ke,null,r.a.createElement(xe,null,r.a.createElement(Le,null,r.a.createElement(ge,null)),r.a.createElement($e,{size:"small"}),r.a.createElement(Re,null,r.a.createElement(be,null,r.a.createElement(m,{subtitle:"Sit Dolor",title:"Lorem Ipsum"}),r.a.createElement(A,null,r.a.createElement(F,{onChange:({target:e})=>{const a=e.value.trim();if(!a)return t("");a.length<30&&t(a.toLowerCase())},placeholder:"Search for a country",value:e})),r.a.createElement(S,{searchString:e,onClick:e=>{n(e),o()}}))),r.a.createElement($e,{size:"big"})),c&&r.a.createElement(J,null,r.a.createElement(P,{countryCode:a,onClickOutside:s})))};a(81);const Pe=(e=>{const t=document.getElementById(e);if(a=t,Object.is(a,null))throw new ReferenceError(`Could not locate DOM element with ID "${e}"! This might indicate a problem in the HTML file.`);var a;return t})("root");Object(s.render)(r.a.createElement(l.StrictMode,null,r.a.createElement(o,null,r.a.createElement(Te,null))),Pe)}},[[69,1,2]]]);
//# sourceMappingURL=main.6b1146cb.chunk.js.map