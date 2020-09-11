(this["webpackJsonpgraphql-countries-index"]=this["webpackJsonpgraphql-countries-index"]||[]).push([[0],{25:function(e,t,n){e.exports={fade:"Hero_fade__iVJjl",hero:"Hero_hero__3j6HR",subtitle:"Hero_subtitle__1EVrj",title:"Hero_title__1szOL"}},34:function(e,t,n){e.exports={continent:"Summary_continent__1tPvQ",country:"Summary_country__35gKt"}},35:function(e,t,n){e.exports={all:"Tally_all__2Y3RP",related:"Tally_related__3ycar"}},36:function(e,t,n){e.exports={result:"Result_result__rHD3n"}},37:function(e,t,n){e.exports={link:"Logo_link__pJ40V",logo:"Logo_logo__sqI9p"}},38:function(e,t,n){e.exports={bottom:"Grayout_bottom__2piWU",top:"Grayout_top__39qsz"}},57:function(e,t,n){e.exports=n.p+"static/media/logo.8a0a03c1.svg"},58:function(e,t,n){e.exports={overview:"ContentCard_overview__1vUhd",detail:"ContentCard_detail__aW99j"}},59:function(e,t,n){e.exports={flag:"Flag_flag__qUCS2"}},60:function(e,t,n){e.exports={search:"Search_search__Eoksl"}},61:function(e,t,n){e.exports={detailView:"DetailView_detailView__2uSWf",flag:"DetailView_flag__3B4BV"}},62:function(e,t,n){e.exports={textInput:"TextInput_textInput__2x_Xq"}},63:function(e,t,n){e.exports={fullScreenModal:"FullScreenModal_fullScreenModal__3Qhv3"}},64:function(e,t,n){e.exports={flexContainer:"FlexContainer_flexContainer__1w6Xo"}},65:function(e,t,n){e.exports={gridContainer:"GridContainer_gridContainer__Qp6w3"}},66:function(e,t,n){e.exports={background:"Background_background__N-cUb"}},67:function(e,t,n){e.exports={header:"Header_header__mLjKz"}},68:function(e,t,n){e.exports={main:"Main_main__j2P5T"}},69:function(e,t,n){e.exports={big:"Pillar_big__AIRuS",small:"Pillar_small__13Exe"}},70:function(e,t,n){e.exports=n(83)},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);n(71);var a=n(8),r=n(2),l=n.n(r);const o=new a.ApolloClient({cache:new a.InMemoryCache,connectToDevTools:!0,uri:"https://countries.trevorblades.com/graphql"}),c=({children:e})=>l.a.createElement(a.ApolloProvider,{client:o},e);var s=n(19);var i=n(57),u=n.n(i),m=n(25),d=n.n(m);const _=({title:e,subtitle:t})=>l.a.createElement("section",{className:d.a.hero},l.a.createElement("div",{className:d.a.fade},l.a.createElement("h1",{className:d.a.title},e),l.a.createElement("h5",{className:d.a.subtitle},t))),E=a.gql`
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
`,g=a.gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${E}
`,v=(a.gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${E}
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
  ${g}
`),f=()=>{},p=(...e)=>f;var h=n(58),y=n.n(h);const C=({children:e,look:t,onClick:n=p(),onMouseOver:a=p()})=>{const[o,c]=Object(r.useState)(!1);return l.a.createElement("article",{onClick:n,onMouseOver:()=>{o||(a(),c(!0))},className:y.a[t]},e)};var b=n(34),x=n.n(b);const N=({continentName:e,countryName:t,countrySummary:n})=>e?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:x.a.continent},l.a.createElement("h2",null,t),l.a.createElement("h3",null,e)),l.a.createElement("h4",null,"Other countries in ",e)):l.a.createElement("div",{className:x.a.country},l.a.createElement("h3",null,t),l.a.createElement("p",null,n," "));var k=n(35),w=n.n(k);const O=({countries:e,matches:t,relatedCountries:n})=>n?l.a.createElement("h3",{className:w.a.related},n,"+ more"):l.a.createElement("div",{className:w.a.all},l.a.createElement("h3",null,"All Countries"),l.a.createElement("p",null,t,"/",e));var S=n(59),j=n.n(S);const q=({countryCode:e})=>l.a.createElement("img",{alt:"Flag of "+e,className:j.a.flag,src:`flags/${e.toLowerCase()}.png`}),D=a.gql`
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
`,L=a.gql`
  fragment relatedCountriesDetails on Country {
    continent {
      name
      countries {
        ...countryDetails
      }
    }
  }
  ${D}
`,I=a.gql`
  query Countries {
    countries {
      ...countryDetails
    }
  }
  ${D}
`;const $=a.gql`
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
  ${L}
`;const M=({capital:e,continent:t,currency:n,languages:a})=>{var r,l,o;const c=[];c.push(null!==e&&void 0!==e?e:"",null!==(r=null===t||void 0===t?void 0:t.name)&&void 0!==r?r:"",n?n.split(",")[0]:"",null!==(l=null===a||void 0===a||null===(o=a[0])||void 0===o?void 0:o.name)&&void 0!==l?l:"");return c.filter(Boolean).join(" \u25cf ")};var P=n(36),R=n.n(P);const T=({onClick:e,searchString:t})=>{const{client:n,data:r,error:o,loading:c}=a.useQuery(I,s);var s;if(!t||c||o||!r)return l.a.createElement("section",{className:R.a.result});const{countries:i}=r,u=i.filter(({name:e})=>e.toLowerCase().startsWith(t)),m=u.sort((e,t)=>e.name===t.name?0:e.name<t.name?-1:1);return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{countries:i.length,matches:u.length}),l.a.createElement("section",{className:R.a.result},m.map(({code:t,name:a,...r})=>{const o=M(r);return l.a.createElement(C,{look:"overview",onClick:()=>e(t),onMouseOver:()=>{n.query({query:v,variables:{code:t}})},key:a},l.a.createElement(q,{countryCode:t}),l.a.createElement(N,{countryName:a,countrySummary:o}))})))};var V=n(60),F=n.n(V);const H=({children:e})=>l.a.createElement("section",{className:F.a.search},e),z=(e,t)=>{document.addEventListener(e,t,{passive:!0});return()=>{document.removeEventListener(e,t)}};var U=n(61),B=n.n(U);const Q=({countryCode:e,onClickOutside:t})=>{const n=Object(r.useRef)(null);((e,t)=>{const n=Object(r.useCallback)(t,[e]);Object(r.useEffect)((function(){const t=t=>{e.current&&(e.current.contains(t.target)||n(t))},a=((...e)=>()=>{for(const t of e)t()})(z("mousedown",t),z("touchstart",t));return function(){a()}}),[e,n])})(n,t);const{data:o,error:c,loading:s}=(i={variables:{code:e}},a.useQuery($,i));var i;if(s||c||!o)return null;const{country:u}=o;if(!u)return null;const{name:m,continent:d}=u,{countries:_}=d;if(!_)return null;const E=_.slice(0,3);return l.a.createElement("div",{className:B.a.detailView,ref:n},l.a.createElement(q,{countryCode:e}),l.a.createElement(N,{continentName:d.name,countryName:m}),E.map(({code:e,name:t,...n})=>{const a=M(n);return l.a.createElement(C,{key:t,look:"detail"},l.a.createElement(q,{countryCode:e}),l.a.createElement(N,{countryName:t,countrySummary:a}))}),l.a.createElement(O,{relatedCountries:_.length}))};var A=n(62),J=n.n(A);const W=({onChange:e,placeholder:t,value:n})=>{const a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e;null===a||void 0===a||null===(e=a.current)||void 0===e||e.focus()}),[]),l.a.createElement("input",{className:J.a.textInput,id:"textInput",onChange:e,placeholder:t,ref:a,type:"text",value:n})};var G=n(63),K=n.n(G);const X=({children:e})=>Object(s.createPortal)(l.a.createElement("div",{className:K.a.fullScreenModal},e),document.body),Y=e=>{Object(r.useEffect)(()=>{try{new URL(e)}catch(t){t instanceof TypeError&&console.warn(`Expected valid absolute URL, received "${e}".`)}},[e])};var Z=n(37),ee=n.n(Z);const te=({alt:e,href:t,logo:n})=>(Y(t),l.a.createElement("div",null,l.a.createElement("a",{className:ee.a.link,href:t,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:ee.a.logo,src:n,alt:e}))));var ne=n(64),ae=n.n(ne);const re=({children:e})=>l.a.createElement("div",{className:ae.a.flexContainer},e);var le=n(65),oe=n.n(le);const ce=({children:e})=>l.a.createElement("div",{className:oe.a.gridContainer},e);var se=n(38),ie=n.n(se);const ue=()=>Object(s.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:ie.a.top}),l.a.createElement("div",{className:ie.a.bottom})),document.body);var me=n(66),de=n.n(me);const _e=({children:e})=>Object(s.createPortal)(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:de.a.background}),l.a.createElement(ue,null),l.a.createElement("div",null,e)),document.body);var Ee=n(67),ge=n.n(Ee);const ve=({children:e})=>l.a.createElement("header",{className:ge.a.header},e);var fe=n(68),pe=n.n(fe);const he=({children:e})=>l.a.createElement("main",{className:pe.a.main},e);var ye=n(69),Ce=n.n(ye);const be=({size:e})=>l.a.createElement("div",{className:Ce.a[e]}),xe=()=>{const[e,t]=Object(r.useState)(""),[n,a]=Object(r.useState)(""),[o,c,s]=((e=!1)=>{const[t,n]=Object(r.useState)(e);return[t,()=>{n(!0)},()=>{n(!1)},()=>{n(!t)}]})();return l.a.createElement(_e,null,l.a.createElement(ce,null,l.a.createElement(ve,null,l.a.createElement(te,{alt:"Learn2ESport Logo",href:"https://learn2esport.se",logo:u.a})),l.a.createElement(be,{size:"small"}),l.a.createElement(he,null,l.a.createElement(re,null,l.a.createElement(_,{subtitle:"Sit Dolor",title:"Lorem Ipsum"}),l.a.createElement(H,null,l.a.createElement(W,{onChange:({target:e})=>{const n=e.value.trim();if(!n)return t("");n.length<30&&t(n.toLowerCase())},placeholder:"Search for a country",value:e})),l.a.createElement(T,{searchString:e,onClick:e=>{a(e),c()}}))),l.a.createElement(be,{size:"big"})),o&&l.a.createElement(X,null,l.a.createElement(Q,{countryCode:n,onClickOutside:s})))};n(82);const Ne=(e=>{const t=document.getElementById(e);if(n=t,Object.is(n,null))throw new ReferenceError(`Could not locate DOM element with ID "${e}"! This might indicate a problem in the HTML file.`);var n;return t})("root");Object(s.render)(l.a.createElement(r.StrictMode,null,l.a.createElement(c,null,l.a.createElement(xe,null))),Ne)}},[[70,1,2]]]);
//# sourceMappingURL=main.8c960099.chunk.js.map