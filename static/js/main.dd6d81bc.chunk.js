(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{33:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/fb_image.501e73d1.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/strise.e3429b7d.png"},52:function(e,t,a){e.exports=a.p+"static/media/robotProject.8c39dd08.png"},53:function(e,t,a){e.exports=a.p+"static/media/pathfindingVisualizer.6952ee0d.gif"},54:function(e,t,a){e.exports=a.p+"static/media/sortingVisualizer.a571fa2e.gif"},55:function(e,t,a){e.exports=a.p+"static/media/Background.1829ef53.JPG"},56:function(e,t,a){e.exports=a.p+"static/media/tree.1aacff2e.jpg"},61:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),l=(a(66),a(11)),c=a(106),s=a(42),m=a.n(s),d=a(43),u=a.n(d),g=a(44),p=a.n(g),h=(a(33),a(103)),f=a(75),E=a(101),y=function(e){var t=e.isHome,a="about"===e.currentPage,n="projects"===e.currentPage,i=e.isSmallScreen?{fontSize:"2em"}:{fontSize:"calc(".concat(1,"em + ",1,"vw)")},o=e.isSmallScreen?{fontSize:"2em"}:{fontSize:"calc(".concat(1,"em + ",1,"vw)"),backgroundColor:"rgb(".concat([220,220,220,.2],")")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{orientation:"vertical",size:"large"},e.isSmallScreen&&t||r.a.createElement(f.a,{variant:"text",color:"inherit",style:t?o:i,disabled:t,onClick:function(){return e.handleClick("home")}}," Home "),r.a.createElement(f.a,{variant:"text",color:"inherit",style:a?o:i,disabled:a,onClick:function(){return e.handleClick("about")}}," About "),r.a.createElement(f.a,{variant:"text",color:"inherit",style:n?o:i,disabled:n,onClick:function(){return e.handleClick("projects")}}," Projects ")))},b=a(19),x=a(41),v=a.n(x),w=a(104),S=a(105),k=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],o=a[1],c=function(t){o(null),t!==e.currentPage&&e.handleClick(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{style:{fontSize:"1em",color:"rgb(".concat([230,230,230,1],")")},"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(v.a,{style:{fontSize:"2em"}})),r.a.createElement(w.a,{anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:function(){return c(e.currentPage)}},r.a.createElement(S.a,{onClick:function(){return c("home")}}," ",r.a.createElement("p",{style:Object(b.a)({},"home"===e.currentPage&&{color:"#ccc"})}," HOME ")," "),r.a.createElement(S.a,{onClick:function(){return c("about")}}," ",r.a.createElement("p",{style:Object(b.a)({},"about"===e.currentPage&&{color:"#ccc"})}," ABOUT ")," "),r.a.createElement(S.a,{onClick:function(){return c("projects")}}," ",r.a.createElement("p",{style:Object(b.a)({},"projects"===e.currentPage&&{color:"#ccc"})}," PROJECTS ")," ")))},j=function(e){var t=e.setPageInParent,a=Object(n.useState)("home"),i=Object(l.a)(a,2),o=i[0],s=i[1],d=Object(n.useState)(!0),g=Object(l.a)(d,2),f=g[0],E=g[1],b=function(e){s(e),E("home"===e),t(e),sessionStorage.setItem("initialMount","false")};f&&sessionStorage.setItem("visited","false");var x=Object(h.a)("(max-width:800px)"),v="rgb(".concat([230,230,230,1],")"),w={height:"100%",position:"fixed",zIndex:2,top:"0%",left:f?"39%":"0%",display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"space-between",color:v,backgroundColor:"rgb(".concat([40,40,40,1],")")},S={float:"center",width:"100%",height:f?"100%":"10%",position:"fixed",zIndex:2,display:"flex",flexDirection:f?"column":"row",textAlign:"center",verticalAlign:"bottom",justifyContent:"space-between",color:v,backgroundColor:"rgb(".concat([40,40,40,f?.8:1],")"),borderBottom:"1px solid rgb(".concat([220,220,220,1],")")},j={fontSize:x?"2em":"calc(".concat(.5,"em + ","home"===o?2.5:2,"vw)"),fontWeight:"bold",marginTop:"3vw"},z=f?{fontSize:"3em",marginTop:"8%"}:{fontSize:"2em",marginLeft:"5%"},O={marginBottom:x?"8%":"3vw",justifySelf:"right"},C=x?{width:"2em",height:"2em"}:{width:"calc(".concat(.5,"em + ",2,"vw)"),height:"calc(".concat(.5,"em + ",2,"vw)")};return r.a.createElement("div",{className:x?"":"false"!==sessionStorage.getItem("initialMount")?"fadeIn":f?"moveRight":"moveLeft",style:x?S:w},x?r.a.createElement("h1",{style:z}," ",f?"WELCOME":o.toUpperCase()," "):r.a.createElement("h1",{style:j}," ",f?"WELCOME":o.toUpperCase()," "),x&&!f?r.a.createElement(k,{currentPage:o,handleClick:b}):r.a.createElement(y,{isSmallScreen:x,isHome:f,currentPage:o,handleClick:b}),x&&!f||r.a.createElement("div",{style:O},r.a.createElement(c.a,{style:{color:v},target:"_blank",href:"https://www.facebook.com/martin.stiles.9"}," ",r.a.createElement(m.a,{style:C})," "),r.a.createElement(c.a,{style:{color:v,margin:"0 10% 0 10%"},target:"_blank",href:"https://www.linkedin.com/in/martin-stiles-39b662171/"}," ",r.a.createElement(u.a,{style:C})," "),r.a.createElement(c.a,{style:{color:v},target:"_blank",href:"https://www.instagram.com/msstiles/"}," ",r.a.createElement(p.a,{style:C})," ")))},z=a(45),O=a.n(z),C=a(46),I=a.n(C),T=a(47),A=a.n(T),R=function(){var e=Object(h.a)("(max-width:800px)"),t={position:"relative",margin:e?"5% 4% 5% 4%":"3% 4% 5% 4%",color:"rgb(".concat([220,220,220,1],")"),backgroundColor:"rgb(".concat([40,40,40,1],")"),padding:"10px",borderRadius:"5px",display:"flex",flexDirection:e?"column":"row",justifyContent:e?"center":"space-around"},a={flex:e?"100%":"33.3%",maxWidth:e?"100%":"33.3%",display:"flex",textAlign:"center"},n=Object(b.a)({flex:"65%",maxWidth:"65%",marginLeft:"2%",display:"flex",textAlign:"left",flexDirection:"column",justifyContent:"space-around"},e&&{marginBottom:"5px"}),i={flex:"50%",maxHeight:"50%",margin:"0",fontSize:e?"0.8em":"1.2em"},o={width:e?"1em":"2em",height:e?"1em":"2em"},l={flex:"35%",maxWidth:"35%",textAlign:"right"};return r.a.createElement("div",{style:t},r.a.createElement("div",{style:a},r.a.createElement("div",{style:l},r.a.createElement(O.a,{style:o})),r.a.createElement("div",{style:n},r.a.createElement("p",{style:i}," 7068 Trondheim "),r.a.createElement("p",{style:i}," Norway "))),r.a.createElement("div",{style:a},r.a.createElement("div",{style:l},r.a.createElement(I.a,{style:o})),r.a.createElement("div",{style:n},r.a.createElement("p",{style:i}," +47 401 04 816 "),r.a.createElement("p",{style:i},"  MON - FRI "))),r.a.createElement("div",{style:a},r.a.createElement("div",{style:l},r.a.createElement(A.a,{style:o})),r.a.createElement("div",{style:n},r.a.createElement("p",{style:i}," martin.stiles@live.no "),r.a.createElement("p",{style:i}," 24 / 7 "))))},L=a(48),P=a.n(L),N=a(34),B=(a(71),function(e){var t=Object(h.a)("(max-width:800px)"),a={display:"flex",flexDirection:t?"column":"row",textAlign:"left",margin:"0 5% 3% 5%"},n={fontSize:t?"1.8em":"2em",marginBottom:0};return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{style:{width:"90%",border:"2px solid",borderRadius:"5px"}}),r.a.createElement("div",{style:a},r.a.createElement("div",{style:Object(b.a)({flex:"35%"},t&&{textAlign:"center"})},r.a.createElement("h1",{style:n}," ",e.header," ")),r.a.createElement("div",{style:{flex:"65%",margin:t?0:"0 1% 0 3%"}},e.children)))}),D=function(e){var t=e.percentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{overflow:"hidden",textOverflow:"ellipsis"}},r.a.createElement("h1",{style:{fontSize:"1.4em"}}," ",e.header," ")),r.a.createElement(N.a,{value:t,text:"".concat(t,"%"),styles:Object(N.b)({textColor:"rgb(".concat([230,230,230,1],")"),trailColor:"rgb(".concat([230,230,230,1],")")})}))},M=function(e){var t={flex:"33%",maxWidth:Object(h.a)("(max-width:1100px)")?"6em":"8em",textAlign:"center",textOverflow:"ellipsis"},a={fontSize:Object(h.a)("(max-width:800px)")?"1.2em":"1.4em"};return r.a.createElement(B,{header:"PROFESSIONAL PATH"},r.a.createElement("p",{style:a},"Since the time of my lego addiction, problem solving has always been one of my favorite activities. As an aspiring tech geek I always seek to obtain knowledge about my field: computer science. I aim to specialize in the research part, like Data Analysis and AI, although I am currently doing a lot of web development."),r.a.createElement("p",{style:a},"Consequently, my skills vary a lot. In university I have built a strong engineering foundation, but as I feel university offers too much breadth of learning, I often do online courses and reading to acquire more in depth knowledge. Thus, programming technologies I claim to have good experience in are: Python, React, JavaScript, CSS, HTML, Java."),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"0%"}},r.a.createElement("div",{style:t},r.a.createElement(D,{header:"WebDev",percentage:85})),r.a.createElement("div",{style:t},r.a.createElement(D,{header:"DataSci",percentage:75})),r.a.createElement("div",{style:t},r.a.createElement(D,{header:"AI",percentage:60}))))},J=function(){var e=Object(h.a)("(max-width:800px)"),t={fontSize:e?"1.5em":"2em",marginBottom:"2px"},a={fontSize:e?"1.2em":"1.6em",color:"rgb(".concat([90,172,235],")"),textDecoration:"underline",margin:"4px 0"},n={fontSize:e?"1.2em":"1.4em",margin:"4px 0"},i={fontSize:e?"1.1em":"1.2em",marginBottom:"1em",marginTop:"8px"};return r.a.createElement(B,{header:"WORK EXPERIENCE - IT"},r.a.createElement("h1",{style:t}," SOFTWARE DEVELOPER "),r.a.createElement(c.a,{target:"_blank",color:"inherit",variant:"inherit",href:"https://strise.ai/"}," ",r.a.createElement("h1",{style:a}," Strise ")," "),r.a.createElement("p",{style:n}," January 2020 - July 2020 "),r.a.createElement("p",{style:i},"Interning as a front end developer. Strise aims to revolutionize enterprise software, and being a part of the team is such a unique experience. I am learning a lot in this position, both technical and soft skills. Combining this with studies has forced me to be more efficient. "),r.a.createElement("h1",{style:t}," LEARNING ASSISTANT "),r.a.createElement(c.a,{target:"_blank",color:"inherit",variant:"inherit",href:"https://www.ntnu.no/idi"}," ",r.a.createElement("h1",{style:a}," NTNU ")," "),r.a.createElement("p",{style:n}," January 2020 - May 2020 "),r.a.createElement("p",{style:i}," Student assistant in the course TDT4145: Data Modelling and Database Systems. Helping others professionally turns out to be something I enjoy more than I imagined. "))},W=function(){var e=Object(h.a)("(max-width:800px)"),t={fontSize:e?"1.5em":"2em",marginBottom:"2px"},a={fontSize:e?"1.2em":"1.6em",color:"rgb(".concat([90,172,235],")"),textDecoration:"underline",margin:"4px 0"},n={fontSize:e?"1.2em":"1.4em",margin:"4px 0"},i={fontSize:e?"1.1em":"1.2em",marginBottom:"1em",marginTop:"8px"};return r.a.createElement(B,{header:"WORK EXPERIENCE - OTHER"},r.a.createElement("h1",{style:t}," RIDER "),r.a.createElement(c.a,{target:"_blank",color:"inherit",variant:"inherit",href:"https://www.foodora.com/"}," ",r.a.createElement("h1",{style:a}," Foodora ")," "),r.a.createElement("p",{style:n}," March 2019 - november 2019 "),r.a.createElement("p",{style:i},"Food delivery cyclist. A mix of exercise and income was a great combination for a part time job."),r.a.createElement("h1",{style:t}," BARTENDER "),r.a.createElement(c.a,{target:"_blank",color:"inherit",variant:"inherit",href:"https://www.facebook.com/menightclub/"}," ",r.a.createElement("h1",{style:a}," Me Nightclub ")," "),r.a.createElement("p",{style:n}," June 2018 - July 2019 "),r.a.createElement("p",{style:i},'Working part time as a bartender was a really fun experiece. And besides, being good at making drinks is a "surprisingly" useful skill. '),r.a.createElement("h1",{style:t}," Tactical Command Assistant "),r.a.createElement(c.a,{target:"_blank",color:"inherit",variant:"inherit",href:"https://forsvaret.no/hogskolene/studiekatalog-bibliotek/Luftkrigsskolen/utdanning/utdanningstilbud/luftvern"}," ",r.a.createElement("h1",{style:a}," Norwegian Army ")," "),r.a.createElement("p",{style:n}," July 2016 - July 2017 "),r.a.createElement("p",{style:i}," One year in the Norwegian Air Defence Battalion, honing both self discipline and communication skills. "))},_=function(){var e=Object(h.a)("(max-width:800px)"),t={fontSize:e?"1.5em":"2em",marginBottom:"2px"},a={fontSize:e?"1.2em":"1.6em",color:"rgb(".concat([90,172,235],")"),textDecoration:"underline",margin:"4px 0"},n={fontSize:e?"1.2em":"1.4em",margin:"4px 0"},i={fontSize:e?"1.1em":"1.2em",marginBottom:"1em",marginTop:"8px"};return r.a.createElement(B,{header:"EDUCATION"},r.a.createElement("h1",{style:t}," M.Sc. student in Computer Science "),r.a.createElement(c.a,{target:"_blank",color:"inherit",variant:"inherit",href:"https://www.ntnu.no/studier/mtdt"}," ",r.a.createElement("h1",{style:a}," NTNU ")," "),r.a.createElement("p",{style:n}," August 2017 - Present "),r.a.createElement("p",{style:i},"5 year integrated Masters degree at the Norwegian University of Science and Technology. Currently specializing in database systems, search engines and AI."))},F=function(){var e=Object(h.a)("(max-width:800px)"),t={bottom:"0",margin:"0 4% 0 4%",color:"rgb(".concat([220,220,220,1],")"),backgroundColor:"rgb(".concat([40,40,40,1],")"),borderTopLeftRadius:"5px",borderTopRightRadius:"5px",overflow:"auto",paddingBottom:"5%",zIndex:1},a={fontSize:e?"3em":"4em",marginTop:e?"26%":"13%",marginBottom:0},n={fontSize:e?"1.5em":"2em",margin:"0.3em 30px 1em 30px"};return r.a.createElement("div",{style:t},r.a.createElement("h1",{style:a}," Martin Stiles "),r.a.createElement("h1",{style:n}," Software developer. Tech enthusiast. Eater of tacos."),r.a.createElement(M,null),r.a.createElement(_,null),r.a.createElement(J,null),r.a.createElement(W,null),r.a.createElement("hr",{style:{width:"90%",border:"2px solid",borderRadius:"5px"}}))},H=function(){var e=Object(h.a)("(max-width:800px)"),t={width:e?"40%":"20%",borderRadius:"50%",border:"3px solid rgb(".concat([40,40,40,1],")"),margin:e?"0 0 -22% 0":"0 0 -10% 0",zIndex:10,position:"relative"};return r.a.createElement("div",null,r.a.createElement("img",{style:t,src:P.a,alt:""}),r.a.createElement(F,null))},U=function(){var e=Object(h.a)("(max-width:800px)"),t={position:"fixed",width:e?"100%":"84%",marginLeft:e?"0%":"16%",marginTop:e?"10%":"0",height:e?"90%":"100%",bottom:0,overflow:"scroll",textAlign:"center",fontWeight:"bold",backgroundColor:"rgb(".concat([220,220,220,1],")")};return r.a.createElement("div",{style:t,className:function(){var e="true"!==sessionStorage.getItem("visited");return e&&sessionStorage.setItem("visited","true"),e}()?"appear":""},r.a.createElement(R,null),r.a.createElement(H,null))},V=function(e){var t=e.view,a={fontSize:"1.5em",margin:"0px"};return r.a.createElement("div",{style:{marginTop:"1.5em"}},"personal"===t&&r.a.createElement("h1",{style:a}," My personal "),r.a.createElement("h1",{style:{fontSize:"4em",margin:"0px"}}," PROJECTS "),"professional"===t&&r.a.createElement("h1",{style:a}," I am a part of "),r.a.createElement("hr",{style:{width:"90%",border:"1px solid",marginTop:"10px",marginBottom:"3em"}}))},q=function(e){var t="rgb(".concat([40,40,40,1],")"),a=e.type,n={height:"100%",borderRight:!e.smallScreen&&"personal"===a&&"1px solid ".concat(t),overflow:"auto",position:"relative"};return r.a.createElement("div",{style:n},r.a.createElement(V,{view:a}),e.children)},G=(a(72),a(50)),K=a.n(G),X=a(49),Q=a.n(X),Y=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],o=a[1],c={width:"20em",height:"20em",boxShadow:"8px 8px 5px 0 rgb(".concat([0,0,0,.2],")"),borderRadius:"5px",transition:".5s ease",transform:i&&"scale(".concat(1.2,")"),opacity:i&&.3};return r.a.createElement("div",{style:{width:"100%",marginBottom:"3em",position:"relative"}},r.a.createElement("img",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},style:c,src:e.image,alt:""}),r.a.createElement("div",{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},className:"hiddenInfo",style:i?{opacity:1,width:"23em",padding:"5px"}:{opacity:0,visibility:"hidden"}},r.a.createElement("h1",{style:{fontSize:"1.5em"}}," ",e.desc," "),r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement(f.a,{onClick:function(){return o(!1)},variant:"contained",color:"primary",disabled:!e.githubLink||!i,href:e.githubLink,target:"_blank",style:{marginRight:"5px"}},"Go to repo ",r.a.createElement(Q.a,{style:{marginLeft:"6px"}})),r.a.createElement(f.a,{onClick:function(){return o(!1)},disabled:!i,variant:"contained",color:"primary",href:e.projectLink,target:"_blank"},"See project ",r.a.createElement(K.a,{style:{marginLeft:"5px"}})))))},Z=a(51),$=a.n(Z),ee=a(52),te=a.n(ee),ae=a(53),ne=a.n(ae),re=a(54),ie=a.n(re),oe=function(){var e="rgb(".concat([40,40,40,1],")"),t=Object(h.a)("(max-width:800px)"),a={position:"fixed",width:t?"100%":"84%",marginLeft:t?"0%":"16%",marginTop:t?"10%":"0",height:t?"90%":"100%",bottom:0,overflow:"scroll",zIndex:3,textAlign:"center",backgroundColor:"rgb(".concat([220,220,220,1],")"),color:e,display:"flex",flexDirection:t?"column":"row"},n={flex:t?"100%":"50%",maxWidth:t?"100%":"50%"};return r.a.createElement("div",{style:a,className:function(){var e="true"!==sessionStorage.getItem("visited");return e&&sessionStorage.setItem("visited","true"),e}()?"appear":""},r.a.createElement("div",{style:n},r.a.createElement(q,{type:"personal",isSmallScreen:t},t&&r.a.createElement("p",null," NB: These projects might not be optimized for small screens! "),r.a.createElement(Y,{image:ne.a,desc:"Visualizing pathfinding algorithms with Javascript (React)",githubLink:"https://github.com/martinstiles/pathfinding-visualizer/",projectLink:"https://martinstiles.github.io/pathfinding-visualizer/"}),r.a.createElement(Y,{image:ie.a,desc:"Visualizing sorting algorithms with Javascript (React)",githubLink:"https://github.com/martinstiles/sorting-visualizer/",projectLink:"https://martinstiles.github.io/sorting-visualizer/"}),r.a.createElement(Y,{image:te.a,desc:"React introductory project",githubLink:"https://github.com/martinstiles/monsters-rolodex",projectLink:"https://martinstiles.github.io/monsters-rolodex/"}))),r.a.createElement("div",{style:n},r.a.createElement(q,{type:"professional",isSmallScreen:t},r.a.createElement(Y,{image:$.a,desc:"Front end development at Strise",projectLink:"https://strise.ai/"}))))},le=a(55),ce=a.n(le),se=a(56),me=a.n(se);var de=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(h.a)("(max-width:800px)");return r.a.createElement("div",{style:{alignItems:"center",width:"100%",height:"100%"},className:"app"},r.a.createElement("div",null,r.a.createElement("img",{style:{width:"100%",height:"100%",opacity:"1",zIndex:-1,position:"absolute"},src:o?me.a:ce.a,alt:""})),r.a.createElement(j,{setPageInParent:i}),"about"===a&&r.a.createElement(U,null),"projects"===a&&r.a.createElement(oe,null))};o.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.dd6d81bc.chunk.js.map