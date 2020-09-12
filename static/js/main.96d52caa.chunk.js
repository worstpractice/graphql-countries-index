(this["webpackJsonpgraphql-countries-index"]=this["webpackJsonpgraphql-countries-index"]||[]).push([[0],{25:function(e,t,n){e.exports={fade:"Hero_fade__iVJjl",hero:"Hero_hero__3j6HR",subtitle:"Hero_subtitle__1EVrj",title:"Hero_title__1szOL"}},34:function(e,t,n){e.exports={continent:"Summary_continent__1tPvQ",country:"Summary_country__35gKt"}},35:function(e,t,n){e.exports={all:"Tally_all__2Y3RP",related:"Tally_related__3ycar"}},36:function(e,t,n){e.exports={result:"Result_result__rHD3n"}},37:function(e,t,n){e.exports={detailView:"DetailView_detailView__2uSWf",flag:"DetailView_flag__3B4BV",miniResults:"DetailView_miniResults__1Bs7k"}},38:function(e,t,n){e.exports={link:"Logo_link__pJ40V",logo:"Logo_logo__sqI9p"}},39:function(e,t,n){e.exports={bottom:"Grayout_bottom__2piWU",top:"Grayout_top__39qsz"}},58:function(e,t,n){e.exports={overview:"ContentCard_overview__1vUhd",detail:"ContentCard_detail__aW99j"}},59:function(e,t,n){e.exports={flag:"Flag_flag__qUCS2"}},60:function(e,t,n){e.exports={search:"Search_search__Eoksl"}},61:function(e,t,n){e.exports={textInput:"TextInput_textInput__2x_Xq"}},62:function(e,t,n){e.exports={fullScreenModal:"FullScreenModal_fullScreenModal__3Qhv3"}},63:function(e,t,n){e.exports=n.p+"static/media/logo.8a0a03c1.svg"},64:function(e,t,n){e.exports={flexContainer:"FlexContainer_flexContainer__1w6Xo"}},65:function(e,t,n){e.exports={gridContainer:"GridContainer_gridContainer__Qp6w3"}},66:function(e,t,n){e.exports={background:"Background_background__N-cUb"}},67:function(e,t,n){e.exports={header:"Header_header__mLjKz"}},68:function(e,t,n){e.exports={main:"Main_main__j2P5T"}},69:function(e,t,n){e.exports={big:"Pillar_big__AIRuS",small:"Pillar_small__13Exe"}},70:function(e,t,n){e.exports=n(83)},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);n(71);var a=n(8),r=n(2),l=n.n(r);const c=new a.ApolloClient({cache:new a.InMemoryCache,connectToDevTools:!0,uri:"https://countries.trevorblades.com/graphql"}),o=({children:e})=>l.a.createElement(a.ApolloProvider,{client:c},e);var s=n(19);var i=n(25),u=n.n(i);const m=({title:e,subtitle:t})=>l.a.createElement("section",{className:u.a.hero},l.a.createElement("div",{className:u.a.fade},l.a.createElement("h1",{className:u.a.title},e),l.a.createElement("h5",{className:u.a.subtitle},t))),d=a.gql`
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
`,_=a.gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${d}
`,E=(a.gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${d}
`,a.gql`
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
  ${_}
`),f=()=>{},v=(...e)=>f;var g=n(58),p=n.n(g);const h=({children:e,look:t,onClick:n=v(),onMouseOver:a=v()})=>{const[c,o]=Object(r.useState)(!1);return l.a.createElement("article",{onClick:n,onMouseOver:()=>{c||(a(),o(!0))},className:p.a[t]},e)};var y=n(34),C=n.n(y);const b=({continent:e,country:t,facts:n})=>{if(n){const e=(({capital:e,continent:t,currency:n,languages:a})=>{var r,l,c;const o=[];o.push(null!==e&&void 0!==e?e:"",null!==(r=null===t||void 0===t?void 0:t.name)&&void 0!==r?r:"",n?n.split(",")[0]:"",null!==(l=null===a||void 0===a||null===(c=a[0])||void 0===c?void 0:c.name)&&void 0!==l?l:"");return o.filter(Boolean).join(" \u25cf ")})(n);return l.a.createElement("div",{className:C.a.country},l.a.createElement("h3",null,t),l.a.createElement("p",null,e," "))}return l.a.createElement("div",{className:C.a.continent},l.a.createElement("h2",null,t),l.a.createElement("h3",null,e))};var x=n(35),N=n.n(x);const k=({countries:e,matches:t,relatedCountries:n})=>n?l.a.createElement("h3",{className:N.a.related},n,"+ more"):l.a.createElement("div",{className:N.a.all},l.a.createElement("h3",null,"All Countries"),l.a.createElement("p",null,t,"/",e));var w=n(59),O=n.n(w);const j=({countryCode:e})=>(console.log(e),l.a.createElement("img",{alt:"Flag of "+e,className:O.a.flag,src:`/graphql-countries-index/flags/${e}.png`})),q=a.gql`
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
`,D=a.gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${q}
`,S=a.gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${q}
`;const I=a.gql`
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
  ${D}
`;var L=n(36),$=n.n(L);const M=({onClick:e,searchString:t})=>{const{client:n,data:r,error:c,loading:o}=a.useQuery(S,s);var s;if(!t||o||c||!r)return l.a.createElement("section",{className:$.a.result});const{countries:i}=r,u=i.filter((function({name:e}){return e.toLowerCase().startsWith(t)})),m=u.sort((function({name:e},{name:t}){return e===t?0:e<t?-1:1}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{countries:i.length,matches:u.length}),l.a.createElement("section",{className:$.a.result},m.map(({code:t,name:a,...r})=>l.a.createElement(h,{look:"overview",onClick:()=>{e(t)},onMouseOver:()=>{n.query({query:E,variables:{code:t}})},key:t},l.a.createElement(j,{countryCode:t}),l.a.createElement(b,{country:a,facts:r})))))};var R=n(60),V=n.n(R);const P=({children:e})=>l.a.createElement("section",{className:V.a.search},e),T=(e,t)=>{document.addEventListener(e,t,{passive:!0});return()=>{document.removeEventListener(e,t)}};var H=n(37),F=n.n(H);const z=({countryCode:e,onClickOutside:t})=>{const n=Object(r.useRef)(null);((e,t)=>{const n=Object(r.useCallback)(t,[e]);Object(r.useEffect)((function(){const t=t=>{e.current&&(e.current.contains(t.target)||n(t))},a=((...e)=>()=>{for(const t of e)t()})(T("mousedown",t),T("touchstart",t));return function(){a()}}),[e,n])})(n,t);const{data:c,error:o,loading:s}=(i={variables:{code:e}},a.useQuery(I,i));var i;if(s||o||!c)return null;const{country:u}=c;if(!u)return null;const{name:m,continent:d}=u,{countries:_}=d;if(!_)return null;const E=_.slice(0,3);return l.a.createElement("div",{className:F.a.detailView,ref:n},l.a.createElement(j,{countryCode:e}),l.a.createElement(b,{continent:d.name,country:m}),l.a.createElement("div",{className:F.a.miniResults},l.a.createElement("h4",null,"Other countries in ",d.name),E.map(({code:e,name:t,...n})=>l.a.createElement(h,{key:t,look:"detail"},l.a.createElement(j,{countryCode:e}),l.a.createElement(b,{country:t,facts:n})))),l.a.createElement(k,{relatedCountries:_.length}))};var B=n(61),U=n.n(B);const Q=({onChange:e,placeholder:t,value:n})=>{const a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;null===a||void 0===a||null===(e=a.current)||void 0===e||e.focus()}),[]),l.a.createElement("input",{className:U.a.textInput,id:"textInput",onChange:e,placeholder:t,ref:a,type:"text",value:n})};var A=n(62),J=n.n(A);const W=({children:e})=>Object(s.createPortal)(l.a.createElement("div",{className:J.a.fullScreenModal},e),document.body);var G=n(63),K=n.n(G);const X=e=>{Object(r.useEffect)(()=>{try{new URL(e)}catch(t){t instanceof TypeError&&console.warn(`Expected valid absolute URL, received "${e}".`)}},[e])};var Y=n(38),Z=n.n(Y);const ee=({href:e="https://learn2esport.com/"})=>(X(e),l.a.createElement("div",null,l.a.createElement("a",{className:Z.a.link,href:e,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:Z.a.logo,src:K.a,alt:"Learn2Esports logo"}))));var te=n(64),ne=n.n(te);const ae=({children:e})=>l.a.createElement("div",{className:ne.a.flexContainer},e);var re=n(65),le=n.n(re);const ce=({children:e})=>l.a.createElement("div",{className:le.a.gridContainer},e);var oe=n(39),se=n.n(oe);const ie=()=>Object(s.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:se.a.top}),l.a.createElement("div",{className:se.a.bottom})),document.body);var ue=n(66),me=n.n(ue);const de=({children:e})=>Object(s.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:me.a.background}),l.a.createElement(ie,null),l.a.createElement("div",null,e)),document.body);var _e=n(67),Ee=n.n(_e);const fe=({children:e})=>l.a.createElement("header",{className:Ee.a.header},e);var ve=n(68),ge=n.n(ve);const pe=({children:e})=>l.a.createElement("main",{className:ge.a.main},e);var he=n(69),ye=n.n(he);const Ce=({size:e})=>l.a.createElement("div",{className:ye.a[e]}),be=()=>{const[e,t]=Object(r.useState)(""),[n,a]=Object(r.useState)(""),[c,o,s]=((e=!1)=>{const[t,n]=Object(r.useState)(e);return[t,()=>{n(!0)},()=>{n(!1)},()=>{n(!t)}]})();return l.a.createElement(de,null,l.a.createElement(ce,null,l.a.createElement(fe,null,l.a.createElement(ee,null)),l.a.createElement(Ce,{size:"small"}),l.a.createElement(pe,null,l.a.createElement(ae,null,l.a.createElement(m,{subtitle:"Sit Dolor",title:"Lorem Ipsum"}),l.a.createElement(P,null,l.a.createElement(Q,{onChange:({target:e})=>{const n=e.value.trim();if(!n)return t("");n.length<30&&t(n.toLowerCase())},placeholder:"Search for a country",value:e})),l.a.createElement(M,{searchString:e,onClick:e=>{a(e),o()}}))),l.a.createElement(Ce,{size:"big"})),c&&l.a.createElement(W,null,l.a.createElement(z,{countryCode:n,onClickOutside:s})))};n(82);const xe=(e=>{const t=document.getElementById(e);if(n=t,Object.is(n,null))throw new ReferenceError(`Could not locate DOM element with ID "${e}"! This might indicate a problem in the HTML file.`);var n;return t})("root");Object(s.render)(l.a.createElement(r.StrictMode,null,l.a.createElement(o,null,l.a.createElement(be,null))),xe)}},[[70,1,2]]]);
//# sourceMappingURL=main.96d52caa.chunk.js.map