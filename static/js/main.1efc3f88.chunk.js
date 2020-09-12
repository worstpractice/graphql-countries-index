(this["webpackJsonpgraphql-countries-index"]=this["webpackJsonpgraphql-countries-index"]||[]).push([[0],{25:function(e,t,a){e.exports={fade:"Hero_fade__iVJjl",hero:"Hero_hero__3j6HR",subtitle:"Hero_subtitle__1EVrj",title:"Hero_title__1szOL"}},34:function(e,t,a){e.exports={continent:"Summary_continent__1tPvQ",country:"Summary_country__35gKt"}},35:function(e,t,a){e.exports={all:"Tally_all__2Y3RP",related:"Tally_related__3ycar"}},36:function(e,t,a){e.exports={result:"Result_result__rHD3n"}},37:function(e,t,a){e.exports={detailView:"DetailView_detailView__2uSWf",flag:"DetailView_flag__3B4BV",miniResults:"DetailView_miniResults__1Bs7k"}},38:function(e,t,a){e.exports={link:"Logo_link__pJ40V",logo:"Logo_logo__sqI9p"}},39:function(e,t,a){e.exports={bottom:"Grayout_bottom__2piWU",top:"Grayout_top__39qsz"}},58:function(e,t,a){e.exports={overview:"ContentCard_overview__1vUhd",detail:"ContentCard_detail__aW99j"}},59:function(e,t,a){e.exports={flag:"Flag_flag__qUCS2"}},60:function(e,t,a){e.exports={search:"Search_search__Eoksl"}},61:function(e,t,a){e.exports={textInput:"TextInput_textInput__2x_Xq"}},62:function(e,t,a){e.exports={fullScreenModal:"FullScreenModal_fullScreenModal__3Qhv3"}},63:function(e,t,a){e.exports={flexContainer:"FlexContainer_flexContainer__1w6Xo"}},64:function(e,t,a){e.exports={gridContainer:"GridContainer_gridContainer__Qp6w3"}},65:function(e,t,a){e.exports={background:"Background_background__N-cUb"}},66:function(e,t,a){e.exports={header:"Header_header__mLjKz"}},67:function(e,t,a){e.exports={main:"Main_main__j2P5T"}},68:function(e,t,a){e.exports={big:"Pillar_big__AIRuS",small:"Pillar_small__13Exe"}},69:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);a(70);var n=a(8),r=a(1),l=a.n(r);const c=new n.ApolloClient({cache:new n.InMemoryCache,connectToDevTools:!0,uri:"https://countries.trevorblades.com/graphql"}),o=({children:e})=>l.a.createElement(n.ApolloProvider,{client:c},e);var s=a(19);var i=a(25),m=a.n(i);const u=({title:e,subtitle:t})=>l.a.createElement("section",{className:m.a.hero},l.a.createElement("div",{className:m.a.fade},l.a.createElement("h1",{className:m.a.title},e),l.a.createElement("h5",{className:m.a.subtitle},t))),d=n.gql`
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
`),f=()=>{},E=(...e)=>f;var _=a(58),p=a.n(_);const g=({children:e,look:t,onClick:a=E(),onMouseOver:n=E()})=>{const[c,o]=Object(r.useState)(!1);return l.a.createElement("article",{onClick:a,onMouseOver:()=>{c||(n(),o(!0))},className:p.a[t]},e)};var y=a(34),C=a.n(y);const N=({continentName:e,countryName:t,countrySummary:a})=>e?l.a.createElement("div",{className:C.a.continent},l.a.createElement("h2",null,t),l.a.createElement("h3",null,e)):l.a.createElement("div",{className:C.a.country},l.a.createElement("h3",null,t),l.a.createElement("p",null,a," "));var b=a(35),q=a.n(b);const x=({countries:e,matches:t,relatedCountries:a})=>a?l.a.createElement("h3",{className:q.a.related},a,"+ more"):l.a.createElement("div",{className:q.a.all},l.a.createElement("h3",null,"All Countries"),l.a.createElement("p",null,t,"/",e));var V=a(59),H=a.n(V);const w=({countryCode:e})=>l.a.createElement("img",{alt:"Flag of "+e,className:H.a.flag,src:`/graphql-countries-index/flags/${e.toLowerCase()}.png`}),M=n.gql`
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
`;const S=({capital:e,continent:t,currency:a,languages:n})=>{var r,l,c;const o=[];o.push(null!==e&&void 0!==e?e:"",null!==(r=null===t||void 0===t?void 0:t.name)&&void 0!==r?r:"",a?a.split(",")[0]:"",null!==(l=null===n||void 0===n||null===(c=n[0])||void 0===c?void 0:c.name)&&void 0!==l?l:"");return o.filter(Boolean).join(" \u25cf ")};var D=a(36),L=a.n(D);const Z=({onClick:e,searchString:t})=>{const{client:a,data:r,error:c,loading:o}=n.useQuery(k,s);var s;if(!t||o||c||!r)return l.a.createElement("section",{className:L.a.result});const{countries:i}=r,m=i.filter(({name:e})=>e.toLowerCase().startsWith(t)),u=m.sort((e,t)=>e.name===t.name?0:e.name<t.name?-1:1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{countries:i.length,matches:m.length}),l.a.createElement("section",{className:L.a.result},u.map(({code:t,name:n,...r})=>{const c=S(r);return l.a.createElement(g,{look:"overview",onClick:()=>e(t),onMouseOver:()=>{a.query({query:v,variables:{code:t}})},key:n},l.a.createElement(w,{countryCode:t}),l.a.createElement(N,{countryName:n,countrySummary:c}))})))};var R=a(60),A=a.n(R);const I=({children:e})=>l.a.createElement("section",{className:A.a.search},e),$=(e,t)=>{document.addEventListener(e,t,{passive:!0});return()=>{document.removeEventListener(e,t)}};var T=a(37),P=a.n(T);const Q=({countryCode:e,onClickOutside:t})=>{const a=Object(r.useRef)(null);((e,t)=>{const a=Object(r.useCallback)(t,[e]);Object(r.useEffect)((function(){const t=t=>{e.current&&(e.current.contains(t.target)||a(t))},n=((...e)=>()=>{for(const t of e)t()})($("mousedown",t),$("touchstart",t));return function(){n()}}),[e,a])})(a,t);const{data:c,error:o,loading:s}=(i={variables:{code:e}},n.useQuery(j,i));var i;if(s||o||!c)return null;const{country:m}=c;if(!m)return null;const{name:u,continent:d}=m,{countries:h}=d;if(!h)return null;const v=h.slice(0,3);return l.a.createElement("div",{className:P.a.detailView,ref:a},l.a.createElement(w,{countryCode:e}),l.a.createElement(N,{continentName:d.name,countryName:u}),l.a.createElement("div",{className:P.a.miniResults},l.a.createElement("h4",null,"Other countries in ",d.name),v.map(({code:e,name:t,...a})=>{const n=S(a);return l.a.createElement(g,{key:t,look:"detail"},l.a.createElement(w,{countryCode:e}),l.a.createElement(N,{countryName:t,countrySummary:n}))})),l.a.createElement(x,{relatedCountries:h.length}))};var B=a(61),F=a.n(B);const z=({onChange:e,placeholder:t,value:a})=>{const n=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.focus()}),[]),l.a.createElement("input",{className:F.a.textInput,id:"textInput",onChange:e,placeholder:t,ref:n,type:"text",value:a})};var U=a(62),J=a.n(U);const W=({children:e})=>Object(s.createPortal)(l.a.createElement("div",{className:J.a.fullScreenModal},e),document.body);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var K=l.a.createElement("defs",null,l.a.createElement("style",null,"\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: #1e1e1c;\n      }\n\n      .cls-3 {\n        fill: #4b69b0;\n      }\n\n    ")),X=l.a.createElement("title",null,"l2e_logo_white"),Y=l.a.createElement("path",{className:"cls-1",d:"M2.09,118.14v-96H21.32v79.7H41.1v16.32Z",transform:"translate(-2.09)"}),ee=l.a.createElement("path",{className:"cls-1",d:"M54.29,118.14v-96H92.74V40.68H73.85V59.35H92v18.1H73.85v22H94v18.67Z",transform:"translate(-2.09)"}),te=l.a.createElement("path",{className:"cls-1",d:"M105.6,118.14l9.27-96H147.4l9.16,96H138.35L137,102.6H125.38l-1.12,15.54Zm21.23-30.85h8.72L131.3,38.44h-.89Z",transform:"translate(-2.09)"}),ae=l.a.createElement("path",{className:"cls-1",d:"M170.2,22.12h29.51q7,0,10.9,3.19a15.78,15.78,0,0,1,5.19,8.94A66.13,66.13,0,0,1,217.15,49q0,8.16-2.13,12.74a11.88,11.88,0,0,1-7.38,6.37A8.89,8.89,0,0,1,214,72.42c1.3,2.31,2,5.44,2,9.39l-.23,36.33H196.91V80.58q0-4-1.56-5.14c-1-.74-2.95-1.12-5.7-1.12v43.82H170.2Zm24.14,35.55q4,0,4-8.72a34.79,34.79,0,0,0-.34-5.7,4.21,4.21,0,0,0-1.23-2.63,4,4,0,0,0-2.57-.72h-4.47V57.67Z",transform:"translate(-2.09)"}),ne=l.a.createElement("path",{className:"cls-1",d:"M231.34,118.14v-96h19.78L260,68.06V22.12h18.56v96H259.73l-9.61-48.06v48.06Z",transform:"translate(-2.09)"}),re=l.a.createElement("path",{className:"cls-1",d:"M464,118.14v-96h38.45V40.68H483.56V59.35h18.11v18.1H483.56v22h20.12v18.67Z",transform:"translate(-2.09)"}),le=l.a.createElement("path",{className:"cls-1",d:"M521.79,112.55Q516,106.07,516,91.65V82.26h18.89v12c0,4.77,1.52,7.15,4.58,7.15A4,4,0,0,0,543,99.86c.67-1,1-2.7,1-5.08A22.89,22.89,0,0,0,542.91,87a16.72,16.72,0,0,0-2.85-5.14q-1.72-2.07-6.2-6.43l-8.27-8.27Q516,57.78,516,46.38q0-12.3,5.64-18.72t16.49-6.43q13,0,18.66,6.87t5.71,21.52H542.91L542.8,43a4.18,4.18,0,0,0-1.06-3,3.87,3.87,0,0,0-3-1.12,4.29,4.29,0,0,0-3.35,1.23,4.78,4.78,0,0,0-1.12,3.35q0,4.7,5.36,9.73l11.18,10.73a63.06,63.06,0,0,1,6.48,7.21,28.15,28.15,0,0,1,4.14,8,34.63,34.63,0,0,1,1.56,11q0,14.19-5.19,21.51T540.68,119Q527.6,119,521.79,112.55Z",transform:"translate(-2.09)"}),ce=l.a.createElement("path",{className:"cls-1",d:"M577.23,22.12H602.6q11.52,0,16.43,7.44T624,51.3q0,14.31-4.36,21.57t-15.65,7.27h-7.82v38H577.23Zm20,40.69a8.19,8.19,0,0,0,5.08-1.28,6.16,6.16,0,0,0,2.13-3.69A36.32,36.32,0,0,0,605,51q0-6-1.34-8.72c-.9-1.78-2.68-2.68-5.37-2.68h-2.12V62.81Z",transform:"translate(-2.09)"}),oe=l.a.createElement("path",{className:"cls-1",d:"M643.06,111.94q-6-7.11-6-20V46.27q0-12.41,6-18.72t17.66-6.32q11.63,0,17.66,6.32t6,18.72V92q0,13-6,20t-17.66,7Q649.1,119,643.06,111.94Zm21.13-12.8a17.58,17.58,0,0,0,.89-6.26V45.93a13,13,0,0,0-.84-5.08,3.31,3.31,0,0,0-3.41-2q-4.8,0-4.8,7.27V93a15.2,15.2,0,0,0,1,6.26,3.71,3.71,0,0,0,3.69,2.12A3.4,3.4,0,0,0,664.19,99.14Z",transform:"translate(-2.09)"}),se=l.a.createElement("path",{className:"cls-1",d:"M700,22.12h29.5q7,0,10.9,3.19a15.82,15.82,0,0,1,5.2,8.94A66.81,66.81,0,0,1,746.9,49q0,8.16-2.12,12.74a11.93,11.93,0,0,1-7.38,6.37,8.91,8.91,0,0,1,6.32,4.36q1.95,3.47,1.95,9.39l-.22,36.33H726.67V80.58q0-4-1.56-5.14c-1.05-.74-3-1.12-5.71-1.12v43.82H700ZM724.1,57.67q4,0,4-8.72a36.22,36.22,0,0,0-.33-5.7,4.32,4.32,0,0,0-1.23-2.63A4,4,0,0,0,724,39.9h-4.47V57.67Z",transform:"translate(-2.09)"}),ie=l.a.createElement("path",{className:"cls-1",d:"M769.37,118.14V40.57H758V22.12h42V40.57h-11.4v77.57Z",transform:"translate(-2.09)"}),me=l.a.createElement("line",{className:"cls-2",x1:260.88,y1:40.31,x2:260.88,y2:41.93}),ue=l.a.createElement("path",{className:"cls-1",d:"M323.67,0l0,0A27.49,27.49,0,0,0,297.16,27.1h0V148.32H419l0,0a27.47,27.47,0,0,0,26.49-27.07h0V0Z",transform:"translate(-2.09)"}),de=l.a.createElement("path",{className:"cls-3",d:"M328.83,8l0,0A24.51,24.51,0,0,0,305.19,32.2h0V140.29h108.6l0,0a24.5,24.5,0,0,0,23.62-24.14h0V8Z",transform:"translate(-2.09)"}),he=l.a.createElement("line",{className:"cls-1",x1:413.69,y1:104.05,x2:423.08,y2:104.05}),ve=l.a.createElement("path",{className:"cls-1",d:"M406.41,29H326.09a9.37,9.37,0,0,0-9.36,9h0v.22c0,.05,0,.11,0,.16s0,.11,0,.16v9.22h89.69V66.52h-89.7v56.29h99.08a9.37,9.37,0,0,0,9.36-9h0v-.22s0-.11,0-.16,0-.11,0-.17v-9.21H335.47V85.28h89.7V29Z",transform:"translate(-2.09)"});const fe=({svgRef:e,title:t,...a})=>l.a.createElement("svg",G({id:"Lager_1","data-name":"Lager 1",viewBox:"0 0 797.9 148.32",ref:e},a),K,void 0===t?X:t?l.a.createElement("title",null,t):null,Y,ee,te,ae,ne,re,le,ce,oe,se,ie,me,ue,de,he,ve),Ee=l.a.forwardRef((e,t)=>l.a.createElement(fe,G({svgRef:t},e)));a.p;const _e=e=>{Object(r.useEffect)(()=>{try{new URL(e)}catch(t){t instanceof TypeError&&console.warn(`Expected valid absolute URL, received "${e}".`)}},[e])};var pe=a(38),ge=a.n(pe);const ye=({href:e="https://learn2esport.com/"})=>(_e(e),l.a.createElement("div",null,l.a.createElement("a",{className:ge.a.link,href:e,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(Ee,{className:ge.a.logo,title:"Learn2Esports logo"}))));var Ce=a(63),Ne=a.n(Ce);const be=({children:e})=>l.a.createElement("div",{className:Ne.a.flexContainer},e);var qe=a(64),xe=a.n(qe);const Ve=({children:e})=>l.a.createElement("div",{className:xe.a.gridContainer},e);var He=a(39),we=a.n(He);const Me=()=>Object(s.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:we.a.top}),l.a.createElement("div",{className:we.a.bottom})),document.body);var Oe=a(65),ke=a.n(Oe);const je=({children:e})=>Object(s.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:ke.a.background}),l.a.createElement(Me,null),l.a.createElement("div",null,e)),document.body);var Se=a(66),De=a.n(Se);const Le=({children:e})=>l.a.createElement("header",{className:De.a.header},e);var Ze=a(67),Re=a.n(Ze);const Ae=({children:e})=>l.a.createElement("main",{className:Re.a.main},e);var Ie=a(68),$e=a.n(Ie);const Te=({size:e})=>l.a.createElement("div",{className:$e.a[e]}),Pe=()=>{const[e,t]=Object(r.useState)(""),[a,n]=Object(r.useState)(""),[c,o,s]=((e=!1)=>{const[t,a]=Object(r.useState)(e);return[t,()=>{a(!0)},()=>{a(!1)},()=>{a(!t)}]})();return l.a.createElement(je,null,l.a.createElement(Ve,null,l.a.createElement(Le,null,l.a.createElement(ye,null)),l.a.createElement(Te,{size:"small"}),l.a.createElement(Ae,null,l.a.createElement(be,null,l.a.createElement(u,{subtitle:"Sit Dolor",title:"Lorem Ipsum"}),l.a.createElement(I,null,l.a.createElement(z,{onChange:({target:e})=>{const a=e.value.trim();if(!a)return t("");a.length<30&&t(a.toLowerCase())},placeholder:"Search for a country",value:e})),l.a.createElement(Z,{searchString:e,onClick:e=>{n(e),o()}}))),l.a.createElement(Te,{size:"big"})),c&&l.a.createElement(W,null,l.a.createElement(Q,{countryCode:a,onClickOutside:s})))};a(81);const Qe=(e=>{const t=document.getElementById(e);if(a=t,Object.is(a,null))throw new ReferenceError(`Could not locate DOM element with ID "${e}"! This might indicate a problem in the HTML file.`);var a;return t})("root");Object(s.render)(l.a.createElement(r.StrictMode,null,l.a.createElement(o,null,l.a.createElement(Pe,null))),Qe)}},[[69,1,2]]]);
//# sourceMappingURL=main.1efc3f88.chunk.js.map