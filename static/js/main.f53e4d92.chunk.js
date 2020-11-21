(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{26:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),l=t(17),c=t(24),u=t(3),m=t(2),f=t(12),s={purple:"#b388ff",blue:"#80d8ff",darkBlue:"#304ffe",green:"#00c853",lightYellow:"#fff9c4",yellow:"#feed89",red:"#ff899b",orange:"#ffc400",dark1:"#172b4d",dark2:"#505f79",dark3:"#97a0af",light1:"#f4f5f7",light2:"#ebecf0",light3:"#dfe1e5",light4:"#c6c9c9",black:"#000000",white:"#ffffff",transparent:"rgba(0,0,0,0)",breakpoints:{zero:0,mobile:600}},p={light:Object(f.a)(Object(f.a)({},s),{},{text:s.black,background:s.white,primary:"#FC4349",link:"#F2594B",accent:"#F6D1C3",subtitle:s.dark3,isDark:!1}),dark:Object(f.a)(Object(f.a)({},s),{},{text:s.white,background:"#020202",primary:"#448aff",link:"#00b0ff",accent:"#ffff8d",subtitle:s.light3,isDark:!0})},d=Object(r.createContext)({}),g=t(13),h=t(4),b=t(42),v=t(41),w=t(43),x=t(44);function k(){var e=Object(u.a)(["\n  position: relative;\n  font-weight: 500;\n  color: ",";\n  transition: 0.2s all ease-in-out;\n\n  ",'\n\n  background-size: 0;\n  background-repeat: no-repeat;\n\n  &::after {\n    position: absolute;\n    content: "";\n    background-color: ',";\n    height: ",";\n    ","\n    ","\n    white-space: nowrap;\n  }\n\n  &:hover {\n    background-size: 100%;\n    color: ",";\n  }\n"]);return k=function(){return e},e}function E(){var e=Object(u.a)(["\n  max-width: ","px;\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 32px;\n  padding-right: 32px;\n\n  @media only screen and (max-width: ","px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return E=function(){return e},e}function y(){var e=Object(u.a)(["\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px;\n  width: 100vw;\n"]);return y=function(){return e},e}var j=m.c.div(y()),O=m.c.div(E(),720,720),z=m.c.a(k(),(function(e){return e.theme.link}),(function(e){var n=e.theme;return n.isDark?"background-image: linear-gradient(\n          ".concat(n.lightYellow," 0%,\n          ").concat(n.lightYellow," 100%\n        );"):"background-image: linear-gradient(\n          transparent 60%,\n          ".concat(n.accent," 12px\n        );")}),(function(e){var n=e.theme;return n.isDark?n.lightYellow:n.accent}),(function(e){return e.theme.isDark?"120%":"8px"}),(function(e){return e.theme.isDark?"top: -10%;":"top: 100%;"}),(function(e){return e.theme.isDark?"":"transform: translateY(-100%);"}),(function(e){var n=e.theme;return n.isDark?n.darkBlue:n.link})),C=t(39),D=t(40);function S(){var e=Object(u.a)(["\n  margin-right: 24px;\n  align-items: center;\n  display: flex;\n\n  svg {\n    margin-right: 4px;\n  }\n\n  @media only screen and (max-width: ","px) {\n    margin-bottom: 8px;\n  }\n"]);return S=function(){return e},e}function U(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return U=function(){return e},e}function I(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return e},e}function P(){var e=Object(u.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"]);return P=function(){return e},e}function _(){var e=Object(u.a)(["\n  position: relative;\n  font-size: 14px;\n  font-weight: 400;\n  display: inline-block;\n  padding: 1px 4px;\n  max-width: fit-content;\n  color: ",";\n  background-color: ",';\n  border-radius: 4px;\n  white-space: nowrap;\n  margin-right: 4px;\n  margin-bottom: 4px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: ',"80;\n    z-index: -1;\n  }\n"]);return _=function(){return e},e}function A(){var e=Object(u.a)(["\n  width: 180px;\n\n  @media only screen and (max-width: ","px) {\n    width: 100%;\n    margin-bottom: 16px;\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(u.a)(["\n  display: flex;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 16px;\n"]);return B=function(){return e},e}function F(){var e=Object(u.a)(["\n  margin: ",";\n  display: flex;\n  flex-direction: row;\n\n  @media only screen and (max-width: ","px) {\n    flex-direction: column;\n  }\n"]);return F=function(){return e},e}var R=function(e){var n=e.title,t=e.description,r=e.tags,o=void 0===r?[]:r,i=e.tagColors,l=void 0===i?[]:i,c=e.demoUrl,u=e.codeUrl,m=e.paperUrl,f=e.privRepo,s=e.margin,p=void 0===s?"48px 0 0 0":s;return a.a.createElement(Y,{margin:p},a.a.createElement(L,{style:{marginRight:"60px"}},a.a.createElement(H,null,n),a.a.createElement(M,null,o.map((function(e,n){return a.a.createElement(J,{color:l[n]},e)})))),a.a.createElement(L,null,a.a.createElement(T,null,t),a.a.createElement(W,null,c&&a.a.createElement(q,null,a.a.createElement(C.a,{size:16}),a.a.createElement(z,{href:c,target:"_blank",rel:"noopener noreferrer"},"Demo")),f&&a.a.createElement(q,null,a.a.createElement(D.a,{size:16}),a.a.createElement(z,{href:c,target:"_blank",rel:"noopener noreferrer"},"Private Repository")),u&&a.a.createElement(q,null,a.a.createElement(D.a,{size:16}),a.a.createElement(z,{href:u,target:"_blank",rel:"noopener noreferrer"},"Code")),m&&a.a.createElement(q,null,a.a.createElement(v.a,{size:16}),a.a.createElement(z,{href:m,target:"_blank",rel:"noopener noreferrer"},"Case Study")))))},Y=m.c.div(F(),(function(e){return e.margin}),(function(e){return e.theme.breakpoints.mobile})),H=m.c.div(B(),(function(e){return e.theme.text})),M=m.c.div(A(),(function(e){return e.theme.breakpoints.mobile})),J=m.c.div(_(),(function(e){return e.theme.dark1}),(function(e){return e.color}),(function(e){return e.theme.white})),T=m.c.div(P(),(function(e){return e.theme.text})),L=m.c.div(I()),W=m.c.div(U()),q=m.c.div(S(),(function(e){return e.theme.breakpoints.mobile}));function K(){var e=Object(u.a)(['\n  display: inline-block;\n  position: relative;\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 32px;\n\n  &::after {\n    content: "";\n    background-color: ',";\n    height: 8px;\n    position: absolute;\n    top: 60%;\n    left: 0;\n    width: 100%;\n    z-index: -1;\n    opacity: 0.5;\n    transition: 0.2s all ease-in-out;\n  }\n"]);return K=function(){return e},e}function N(){var e=Object(u.a)(["\n  margin-bottom: 100px;\n"]);return N=function(){return e},e}function V(){var e=Object(u.a)(["\n  line-height: 1.5;\n  margin-bottom: ","px;\n"]);return V=function(){return e},e}function X(){var e=Object(u.a)(["\n  display: inline-block;\n  margin-right: 24px;\n\n  svg {\n    width: 22px;\n    margin-right: 16px;\n    stroke: ",";\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(u.a)(["\n  &:hover {\n    background-size: 0;\n    svg {\n      fill: ",";\n      transition: 0.2s all ease-in-out;\n    }\n  }\n"]);return Z=function(){return e},e}function G(){var e=Object(u.a)(["\n  font-weight: 400;\n  font-size: 20px;\n  margin-bottom: 40px;\n  color: ",";\n"]);return G=function(){return e},e}function Q(){var e=Object(u.a)(["\n  font-weight: 700;\n  font-size: 48px;\n  margin-bottom: 8px;\n  color: ",";\n"]);return Q=function(){return e},e}function $(){var e=Object(u.a)(["\n  margin: 120px auto 100px auto;\n"]);return $=function(){return e},e}var ee=function(){var e=Object(m.d)();return a.a.createElement(j,null,a.a.createElement(O,null,a.a.createElement(ne,null,a.a.createElement(te,null,"Arav Watwani"),a.a.createElement(re,null,"Software Engineer & Product Designer"),a.a.createElement(oe,null,a.a.createElement(ae,{href:"https://github.com/aravwatwani",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(b.a,null)),a.a.createElement(ae,{href:"resume.pdf",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(v.a,null)),a.a.createElement(ae,{href:"mailto:arav@berkeley.edu",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(w.a,null)),a.a.createElement(ae,{href:"https://linkedin.com/in/aravwatwani",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(x.a,null)))),a.a.createElement(le,null,a.a.createElement(ce,null,"About"),a.a.createElement(ie,null,"Hello! I'm Arav Watwani\u2014a first-year computer science student at the",a.a.createElement(z,{href:"https://berkeley.edu",target:"_blank",rel:"noopener noreferrer"}," University of California, Berkeley"),", and an aspiring software engineer and product designer."," "),a.a.createElement(ie,null,"Currently, I work as an undergraduate research assistant in the Haas School of Business, applying data science techniques to build data pipelines of relevant information to aid my research group. In the near future, I hope to learn more about full-stack development, distributed systems, and digital signal processing."),a.a.createElement(ie,null,"Aside from being a full-time student, I enjoy playing and finding new music. I'm also an avid photographer and traveler, and enjoy extending my view of the world to let others live through my eyes at any particular moment. You can find some of my work ",a.a.createElement(z,{href:"https://ocf.io/~aravwatwani",target:"_blank",rel:"noopener noreferrer"}," here"),"."),a.a.createElement(ie,null,"Feel free to contact me at",a.a.createElement(z,{href:"mailto:arav@berkeley.edu",target:"_blank",rel:"noopener noreferrer"}," arav@berkeley.edu"),".")),a.a.createElement(le,null,a.a.createElement(ce,null,"Projects"),a.a.createElement(R,{title:"Save Money!",description:"A full-stack web application that allows college students to appropriately manage their expenses and mitigate overspending.",demoUrl:"https://github.com/aravwatwani/save-money",codeUrl:"https://github.com/aravwatwani/save-money",tags:["Node.js","MongoDB","React","Front-End"],tagColors:[e.blue,e.red,e.purple,e.orange],margin:"0"}),a.a.createElement(R,{title:"Scheme Interpreter",description:"A Python-based interpreter for the Scheme language that addresses implementation decisions that arise in the design of programming languages.",privRepo:"https://uwflow.com",tags:["Scheme (Lisp)","Python","Functional Programming"],tagColors:[e.red,e.blue,e.purple]}),a.a.createElement(R,{title:"Mental Health Resources",description:"A case study and prototype of an application that streamlines multiple mental health resources to promote well-being during COVID-19.",paperUrl:"https://www.behance.net/aravwatwani",tags:["UX Research","Figma","Prototyping","Design"],tagColors:[e.blue,e.red,e.purple,e.orange]}),a.a.createElement(R,{title:"Photography Portfolio",description:"A personal web portfolio to showcase and display my photography endeavors.",demoUrl:"https://ocf.io/~aravwatwani",codeUrl:"https://github.com/aravwatwani/photo-site",tags:["HTML","CSS","JavaScript","Design"],tagColors:[e.blue,e.purple,e.red,e.orange]}),a.a.createElement(R,{title:"KirbyMap",description:"A program that inputs a user-created text file of a map and uses a pathfinding algorithm to determinethe shortest distance between two given characters.",codeUrl:"https://github.com/aravwatwani/Pathfinding",tags:["Java"],tagColors:[e.red]}))))},ne=m.c.div($()),te=m.c.div(Q(),(function(e){return e.theme.primary})),re=m.c.div(G(),(function(e){return e.theme.subtitle})),ae=Object(m.c)(z)(Z(),(function(e){return e.theme.accent})),oe=m.c.div(X(),(function(e){return e.theme.subtitle})),ie=m.c.div(V(),(function(e){var n=e.marginBottom;return void 0===n?24:n})),le=m.c.div(N()),ce=m.c.div(K(),(function(e){e.theme;return"#F2594B"}));function ue(){var e=Object(u.a)(["\n  font-size: 32px;\n  font-weight: 700;\n  margin-top: 120px;\n  margin-bottom: 40px;\n"]);return ue=function(){return e},e}var me=function(){return Object(r.useEffect)((function(){document.title="Edwin Zhang"}),[]),a.a.createElement(j,null,a.a.createElement(O,null,a.a.createElement(fe,null,"This page doesn't exist!"),a.a.createElement(g.b,{to:"/"},a.a.createElement(z,null,"\u2190 Home"))))},fe=m.c.div(ue()),se=function(){return a.a.createElement(g.a,null,a.a.createElement(h.c,null,a.a.createElement(h.a,{exact:!0,path:"/",component:ee}),a.a.createElement(h.a,{component:me})))};function pe(){var e=Object(u.a)(["\n  min-height: 100vh;\n  color: ",";\n  background: ",";\n  transition: 0.2s background ease-in-out;\n"]);return pe=function(){return e},e}function de(){var e=Object(u.a)(["\n  body, html {\n    color: ",";\n    background: ",";\n  }\n"]);return de=function(){return e},e}var ge=Object(m.b)(de(),(function(e){return e.theme.text}),(function(e){return e.theme.background})),he=function(){Object(r.useEffect)((function(){}),[]);var e=Object(r.useState)(function(){var e=localStorage.getItem("theme");return"light"===e||"dark"===e?e:"light"}()),n=Object(c.a)(e,2),t=n[0],o=n[1];return a.a.createElement(d.Provider,{value:{theme:t,toggleTheme:function(){var e="light"===t?"dark":"light";o(e),localStorage.setItem("theme",e)}}},a.a.createElement(m.a,{theme:"light"===t?p.light:p.dark},a.a.createElement(ge,null),a.a.createElement(be,null,a.a.createElement(se,null))))},be=m.c.div(pe(),(function(e){return e.theme.text}),(function(e){return e.theme.background}));t(37);l.a.initialize("UA-101333629-1"),l.a.pageview(window.location.pathname+window.location.search),i.a.render(a.a.createElement(he,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f53e4d92.chunk.js.map