(this["webpackJsonpportfolio-gram"]=this["webpackJsonpportfolio-gram"]||[]).push([[0],{65:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=a(36),l=a(14),c=a(94),u=a(11),h=a(109),m=a(112),p=a(97),d=a(98),g=a(99),b=a(30),E=a(110),y=a(54),f=a.n(y),k=a(42),w=a.n(k),v=a(40),H=a.n(v),P=a(41),x=a.n(P),N=a(35),O=a.n(N),C=Object(c.a)((function(e){return{box:{maxWidth:"50%"},foo:{display:"flex",alignItems:"center",justifyContent:"center"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function S(){var e=C(),t=n.a.useState(null),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Boolean(r),l=n.a.createElement(h.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){o(null)}},n.a.createElement(m.a,null,n.a.createElement(p.a,{"aria-label":"show 4 new mails",color:"inherit"},n.a.createElement(H.a,null)),n.a.createElement("p",null,"Messages")),n.a.createElement(m.a,null,n.a.createElement(p.a,{"aria-label":"show 11 new notifications",color:"inherit"},n.a.createElement(x.a,null)),n.a.createElement("p",null,"Notifications")),n.a.createElement(m.a,null,n.a.createElement(p.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},n.a.createElement(w.a,null)),n.a.createElement("p",null,"Profile")));return n.a.createElement("div",{className:e.grow},n.a.createElement(d.a,{className:e.foo,position:"fixed"},n.a.createElement(g.a,{className:e.box},n.a.createElement(b.a,{className:e.title,variant:"h6",noWrap:!0},"Portfolio-gram"),n.a.createElement("div",{className:e.search},n.a.createElement("div",{className:e.searchIcon},n.a.createElement(f.a,null)),n.a.createElement(E.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),n.a.createElement("div",{className:e.grow}),n.a.createElement("div",{className:e.sectionDesktop},n.a.createElement(p.a,{"aria-label":"show 4 new mails",color:"inherit"},n.a.createElement(H.a,null)),n.a.createElement(p.a,{"aria-label":"show 17 new notifications",color:"inherit"},n.a.createElement(x.a,null)),n.a.createElement(p.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},n.a.createElement(w.a,null))),n.a.createElement("div",{className:e.sectionMobile},n.a.createElement(p.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},n.a.createElement(O.a,null))))),l)}var _=a(37),j=a(100),R=a(101),B=a(111),G=a(102),A=a(103),I=a(104),L=a(105),T=a(106),D=a(107),q=a(56),M=a.n(q),W=a(55),F=a.n(W),z=a(43),J=a.n(z),Q=a(58),U=a.n(Q),V=a(57),X=a.n(V),K=Object(c.a)((function(e){return{root:{maxWidth:345},commentDiv:{display:"inline-flex",flexDirection:"row",justifyContent:"flex-end"},comment:{flexGrow:1},media:{height:100,paddingTop:"56.25%"},button:{"&:hover":{backgroundColor:"transparent"}},postBtn:{color:"#0095F6"},postBtnTransparent:{color:"#0095F6",opacity:.2},user:{fontWeight:400,color:"#000000"},hashtag:{fontWeight:400,color:"#0000EE"}}}));var $=function(e){var t=e.data,a=Object(r.useState)({isLiked:!1,comment:"",pastComments:[]}),o=Object(s.a)(a,2),i=o[0],c=o[1],u=K(),h=""!==i.comment.replace(/\s/g,""),m={},d=function(){c(Object(_.a)({},i,{isLiked:!i.isLiked}))},g=function(e){i.pastComments.push(e.target.value),c(Object(_.a)({},i,{pastComments:i.pastComments})),y(e)},y=function(e){e.target.value="",m={},e.target.reset&&e.target.reset()};return n.a.createElement(j.a,{className:u.root},n.a.createElement(R.a,{avatar:n.a.createElement(B.a,{"aria-label":"Erik Huynh",src:"https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4"}),action:n.a.createElement(p.a,{"aria-label":"Options",className:u.button,disableRipple:!0},n.a.createElement(O.a,null)),title:n.a.createElement("span",{className:u.user},"Erik Huynh"),subheader:t.title}),n.a.createElement(G.a,{className:u.media,image:t.image,title:t.title,onDoubleClick:d}),n.a.createElement(A.a,{disableSpacing:!0},n.a.createElement(p.a,{"aria-label":"Like",className:u.button,disableRipple:!0,onClick:d},i.isLiked?n.a.createElement(F.a,{color:"secondary"}):n.a.createElement(M.a,null)),"erik-huynh"!==t.id?n.a.createElement(p.a,{"aria-label":"Repository",className:u.button,disableRipple:!0},n.a.createElement(I.a,{href:t.repo,target:"_blank",color:"inherit"},n.a.createElement(J.a,null))):n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{"aria-label":"Repository",className:u.button,disableRipple:!0},n.a.createElement(I.a,{href:t.repo,target:"_blank",color:"inherit"},n.a.createElement(J.a,null))),n.a.createElement(p.a,{"aria-label":"Repository",className:u.button,disableRipple:!0},n.a.createElement(I.a,{href:t.linkedin,target:"_blank",color:"inherit"},n.a.createElement(X.a,null)))),t.link?n.a.createElement(p.a,{"aria-label":"Link",className:u.button,disableRipple:!0},n.a.createElement(I.a,{href:t.link,target:"_blank",color:"inherit"},n.a.createElement(U.a,null))):null),n.a.createElement(L.a,null,n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},n.a.createElement("span",{className:u.user},"Erik Huynh\xa0"),t.description,"\xa0",n.a.createElement("span",{className:u.hashtag},function(e){if(e)return"#"+e.join(" #")}(t.tech)))),n.a.createElement(L.a,null,n.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),e.target.value||(e.target.value=e.target.elements[0].value),g(e)}},n.a.createElement(T.a,{className:u.commentDiv,fullWidth:!0},n.a.createElement(E.a,{className:u.comment,placeholder:"Add a comment...",inputProps:{"aria-label":"Comment Area"},multiline:!0,name:"comment",onChange:function(e){var t=e.target.name,a=e.target.value;c(Object(_.a)({},i,Object(l.a)({},t,a)))},onKeyDown:function(e){m[e.keyCode]="keydown"===e.type,!m[16]&&m[13]?(e.preventDefault(),e.stopPropagation(),g(e)):m[16]&&m[13]&&(m={})}}),n.a.createElement(D.a,{className:h?u.postBtn:u.postBtnTransparent,disabled:!h,size:"small",type:"submit"},"Post")))))},Y=a(108),Z=[{id:"erik-huynh",title:"About Me",image:"https://e-huynh.github.io/updated_portfolio/assets/About_me.JPG",description:"SHORT BIO NEEDS TO GO HERE",repo:"https://github.com/E-Huynh",linkedin:"https://www.linkedin.com/in/erik-huynh-228321196",link:"",tech:["FullStack","WebDeveloper","BachelorOfScience","UVU","FutureEmployee"]},{id:"stock-watcher",title:"Stock Watcher",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/stock-watcher.png?raw=true",description:"Application allows users to search and view stock information. Users are able to organize and save stocks into watchlists.",repo:"https://github.com/E-Huynh/stock-shares-viewer",link:"https://young-everglades-16655.herokuapp.com/",tech:["Bulma","MySQL","Sequelize","Express","AJAX/Axios","IEXcloud"]},{id:"burger-wishlist",title:"Burger Wishlist",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/burger-wishlist.png?raw=true",description:"Application that stores and displays users burger wishlist. The client displays and allows the user to interact with the database.",repo:"https://github.com/E-Huynh/burger-wishlist",link:"https://young-everglades-16655.herokuapp.com/",tech:["ExpressHandlebars","MVC","MySQL","ORM"]},{id:"employee-tracker",title:"Employee Tracker",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/Employee%20tracker.png?raw=true",description:"CLI application that lets users store, add, delete, and update employee information from a mysql database.",repo:"https://github.com/E-Huynh/employee_tracker",link:"",tech:["Express","MySQL","Inquirer"]},{id:"note-taker",title:"Note Taker",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/Note_taker.png?raw=true",description:"Application that allows users to store, view and delete notes.",repo:"https://github.com/E-Huynh/note_taker",link:"https://secure-waters-63965.herokuapp.com/",tech:["Bootstrap","FileSystem","Path","Jquery"]},{id:"team-profile-generator",title:"Team Profile Generator",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/teamProfile%20-%207%20members.png?raw=true",description:"Application that use CLI to input employee information. HTML file automatically generated display team info.",repo:"https://github.com/E-Huynh/Team_Profile_Generator",link:"",tech:["Bulma","Node.js","FileSystem","Inquirer"]},{id:"github-pdf-generator",title:"Github PDF Generator",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/github-pdf.png?raw=true",description:"Application scrapes github API by username search to generate a PDF resume.",repo:"https://github.com/E-Huynh/github-pdf",link:"",tech:["Axios","Puppeteer","Inquirer"]},{id:"fast-hikes",title:"Fast Hikes",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/fast_hikes.png?raw=true",description:"Application takes in driving duration and hike length from current location and returns hikes nearby that meet the search criteria.",repo:"https://github.com/E-Huynh/FastHikes",link:"https://e-huynh.github.io/FastHikes/",tech:["CssGrid","Flexbox","Jquery","HikingProjectAPI","GoogleDistanceAPI"]},{id:"weather-dashboard",title:"Weather Dashboard",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/weather-dashboard.png?raw=true",description:"Be prepared for whatever the weather throws at you. Allows the user to search for the current and 5-day forecast of any city.",repo:"https://github.com/E-Huynh/weather_dashboard",link:"https://e-huynh.github.io/weather_dashboard/index.html",tech:["CssGrid","Flexbox","LocalStorage","Moment.js","OpenWeatherAPI"]},{id:"work-day-scheduler",title:"Work Day Scheduler",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/work_day_scheduler.png?raw=true",description:"Track your daily schedule. Users can input their schedule by hour to plan out their day.",repo:"https://github.com/E-Huynh/work-day-scheduler",link:"https://e-huynh.github.io/work-day-scheduler/",tech:["HTML","CSS","Jquery"]},{id:"quiz-game",title:"Quiz Game",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/quiz-game.png?raw=true",description:"Test your knowledge with this programming related interactice quiz with timer and a highscore tracker.",repo:"https://github.com/E-Huynh/quiz_game",link:"https://e-huynh.github.io/quiz_game/quiz_game.html",tech:["DOM","Javascript","CSS"]},{id:"password-generator",title:"Password Generator",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/password-generator.png?raw=true",description:"Quickly generate passwords with user specified inputs of character type and length.",repo:"https://github.com/E-Huynh/Password_Generator",link:"https://e-huynh.github.io/Password_Generator/",tech:["Bootstrap","Javascript"]},{id:"rgb-game",title:"RGB Game",image:"https://github.com/E-Huynh/Portfolio/blob/master/src/assets/rgb_game.png?raw=true",description:"Test your knowledge of RGB color values by choosing the right tile. Easy and hard modes available.",repo:"https://github.com/E-Huynh/RGB_game",link:"https://e-huynh.github.io/RGB_game/",tech:["HTML","CSS","Jquery"]}];var ee=function(){return console.log(Z[1]),n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement("section",null,n.a.createElement(Y.a,{style:{marginTop:100,maxWidth:"60%"}},Z.map((function(e){return n.a.createElement("div",{key:e.id,style:{paddingBottom:50}},n.a.createElement($,{data:e}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.746e26bc.chunk.js.map