(this["webpackJsonpportfolio-gram"]=this["webpackJsonpportfolio-gram"]||[]).push([[0],{74:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),l=a(105),s=a(40),c=a(16),m=a(11),u=a(121),p=a(126),h=a(109),d=a(110),g=a(111),b=a(35),y=a(124),f=a(59),E=a.n(f),k=a(47),w=a.n(k),v=a(45),x=a.n(v),C=a(46),H=a.n(C),S=a(60),_=a.n(S),N=Object(l.a)((function(e){return{box:{width:"60%",display:"flex",justifyContent:"space-between"},foo:{display:"flex",alignItems:"center",justifyContent:"center"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function j(){var e=N(),t=n.a.useState(null),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Boolean(r),l=n.a.createElement(u.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){o(null)}},n.a.createElement(p.a,null,n.a.createElement(h.a,{"aria-label":"show 4 new mails",color:"inherit"},n.a.createElement(x.a,null)),n.a.createElement("p",null,"Messages")),n.a.createElement(p.a,null,n.a.createElement(h.a,{"aria-label":"show 11 new notifications",color:"inherit"},n.a.createElement(H.a,null)),n.a.createElement("p",null,"Notifications")),n.a.createElement(p.a,null,n.a.createElement(h.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},n.a.createElement(w.a,null)),n.a.createElement("p",null,"Profile")));return n.a.createElement("div",{className:e.grow},n.a.createElement(d.a,{className:e.foo,position:"fixed"},n.a.createElement(g.a,{className:e.box},n.a.createElement(b.a,{className:e.title,variant:"h6",noWrap:!0},"Portfolio-gram"),n.a.createElement("div",{className:e.search},n.a.createElement("div",{className:e.searchIcon},n.a.createElement(E.a,null)),n.a.createElement(y.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),n.a.createElement("div",{className:e.sectionDesktop},n.a.createElement(h.a,{"aria-label":"show 4 new mails",color:"inherit"},n.a.createElement(x.a,null)),n.a.createElement(h.a,{"aria-label":"show 17 new notifications",color:"inherit"},n.a.createElement(H.a,null)),n.a.createElement(h.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},n.a.createElement(w.a,null))),n.a.createElement("div",{className:e.sectionMobile},n.a.createElement(h.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},n.a.createElement(_.a,null))))),l)}var I=a(42),T=a(112),A=a(113),P=a(125),R=a(114),B=a(115),L=a(123),O=a(116),G=a(117),F=a(118),z=a(119),D=a(63),M=a.n(D),W=a(62),q=a.n(W),J=a(48),U=a.n(J),Q=a(66),V=a.n(Q),X=a(64),K=a.n(X),$=a(65),Y=a.n($),Z=Object(l.a)((function(e){return{root:{maxWidth:"unset"},commentForm:{display:"inline-flex",flexDirection:"row",justifyContent:"flex-end"},commentDisplay:{paddingTop:0,paddingBottom:0},commentDiv:{paddingTop:5,paddingBottom:0,"&:last-child":{paddingBottom:0},borderTop:"1px solid #efefef"},commentInput:{flexGrow:1},media:{height:100,paddingTop:"56.25%"},button:{"&:hover":{backgroundColor:"transparent"}},postBtn:{color:"#0095F6"},postBtnTransparent:{color:"#0095F6",opacity:.5},user:{fontWeight:400,color:"#000000"},hashtag:{fontWeight:400,color:"#0000EE"},cardActions:{paddingBottom:0},cardContent:{paddingTop:0,paddingBottom:10}}}));var ee=function(e){var t=e.data,a=Object(r.useState)({isLiked:!1,comment:"",pastComments:[]}),o=Object(s.a)(a,2),i=o[0],l=o[1],m=Z(),u=""!==i.comment.replace(/\s/g,""),p={},d=function(){l(Object(I.a)({},i,{isLiked:!i.isLiked}))},g=function(e){i.pastComments.push(e.target.value),l(Object(I.a)({},i,{pastComments:i.pastComments})),f(e)},f=function(e){e.target.value="",p={},e.target.reset&&e.target.reset()};return n.a.createElement(T.a,{className:m.root},n.a.createElement(A.a,{avatar:n.a.createElement(P.a,{"aria-label":"Erik Huynh",src:"https://e-huynh.github.io/updated_portfolio/assets/About_me.JPG"}),title:n.a.createElement("span",{className:m.user},"Erik Huynh"),subheader:t.title}),n.a.createElement(R.a,{className:m.media,image:t.image,title:t.title,onDoubleClick:d}),n.a.createElement(B.a,{disableSpacing:!0,className:m.cardActions},n.a.createElement(L.a,{title:"Like"},n.a.createElement(h.a,{"aria-label":"Like",className:m.button,disableRipple:!0,onClick:d,size:"small"},i.isLiked?n.a.createElement(q.a,{color:"secondary"}):n.a.createElement(M.a,null))),"erik-huynh"!==t.id?n.a.createElement(L.a,{title:"Github"},n.a.createElement(h.a,{"aria-label":"Repository",className:m.button,disableRipple:!0,size:"small"},n.a.createElement(O.a,{href:t.repo,target:"_blank",color:"inherit"},n.a.createElement(U.a,null)))):n.a.createElement(n.a.Fragment,null,n.a.createElement(L.a,{title:"Github"},n.a.createElement(h.a,{"aria-label":"Repository",className:m.button,disableRipple:!0,size:"small"},n.a.createElement(O.a,{href:t.repo,target:"_blank",color:"inherit"},n.a.createElement(U.a,null)))),n.a.createElement(L.a,{title:"LinkedIn"},n.a.createElement(h.a,{"aria-label":"Repository",className:m.button,disableRipple:!0,size:"small"},n.a.createElement(O.a,{href:t.linkedin,target:"_blank",color:"inherit"},n.a.createElement(K.a,null)))),n.a.createElement(L.a,{title:"Resume"},n.a.createElement(h.a,{"aria-label":"Repository",className:m.button,disableRipple:!0,size:"small"},n.a.createElement(O.a,{target:"_blank",color:"inherit"},n.a.createElement(Y.a,null))))),t.link&&n.a.createElement(L.a,{title:"Visit App"},n.a.createElement(h.a,{"aria-label":"Link",className:m.button,disableRipple:!0,size:"small"},n.a.createElement(O.a,{href:t.link,target:"_blank",color:"inherit"},n.a.createElement(V.a,null))))),n.a.createElement(G.a,{className:m.cardContent},n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},n.a.createElement("span",{className:m.user},"Erik Huynh\xa0"),t.description,"\xa0",n.a.createElement("span",{className:m.hashtag},function(e){if(e)return"#"+e.join(" #")}(t.tech)))),i.pastComments.map((function(e){return n.a.createElement(G.a,{className:m.commentDisplay},n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"p"},n.a.createElement("span",{className:m.user},"Future Employer\xa0")," ",e))})),n.a.createElement("br",null),n.a.createElement(G.a,{className:m.commentDiv},n.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),e.target.value||(e.target.value=e.target.elements[0].value),g(e)}},n.a.createElement(F.a,{className:m.commentForm,fullWidth:!0},n.a.createElement(y.a,{className:m.commentInput,placeholder:"Add a comment...",inputProps:{"aria-label":"Comment Area",style:{fontSize:"0.875rem"}},multiline:!0,name:"comment",onChange:function(e){var t=e.target.name,a=e.target.value;l(Object(I.a)({},i,Object(c.a)({},t,a)))},onKeyDown:function(e){p[e.keyCode]="keydown"===e.type,!p[16]&&p[13]?(e.preventDefault(),e.stopPropagation(),g(e)):p[16]&&p[13]&&(p={})}}),n.a.createElement(z.a,{className:u?m.postBtn:m.postBtnTransparent,disabled:!u,size:"small",type:"submit"},"Post")))))},te=a(120),ae=[{id:"erik-huynh",title:"About Me",image:"https://e-huynh.github.io/updated_portfolio/assets/About_me.JPG",description:"Welcome to my Portfolio-gram!! My name is Erik and I'm a Full-Stack Web Developer that strives to learn and create web applications. I graduate from the University of Utah's 26-wk coding bootcamp, in May of 2020. Learn more about me and projects I've created by browsing my posts.",repo:"https://github.com/E-Huynh",linkedin:"https://www.linkedin.com/in/erik-huynh-228321196",link:"",tech:["FullStack","WebDeveloper","UniversityOfUtah","React.js","FutureEmployee"]},{id:"stock-watcher",title:"Stock Watcher",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/stock-watcher.png?raw=true",description:"Application allows users to search and view stock information. Users are able to organize and save stocks into watchlists.",repo:"https://github.com/E-Huynh/stock-shares-viewer",link:"https://young-everglades-16655.herokuapp.com/",tech:["Bulma","MySQL","Sequelize","Express","AJAX/Axios","IEXcloud"]},{id:"burger-wishlist",title:"Burger Wishlist",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/burger_wishlist.png?raw=true",description:"Application that stores and displays users burger wishlist. The client displays and allows the user to interact with the database.",repo:"https://github.com/E-Huynh/burger-wishlist",link:"https://young-everglades-16655.herokuapp.com/",tech:["ExpressHandlebars","MVC","MySQL","ORM"]},{id:"employee-tracker",title:"Employee Tracker",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/employee_tracker.png?raw=true",description:"CLI application that lets users store, add, delete, and update employee information from a mysql database.",repo:"https://github.com/E-Huynh/employee_tracker",link:"",tech:["Express","MySQL","Inquirer"]},{id:"note-taker",title:"Note Taker",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/note_taker.png?raw=true",description:"Application that allows users to store, view and delete notes.",repo:"https://github.com/E-Huynh/note_taker",link:"https://secure-waters-63965.herokuapp.com/",tech:["Bootstrap","FileSystem","Path","Jquery"]},{id:"team-profile-generator",title:"Team Profile Generator",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/Team_Profile_Generator.png?raw=true",description:"Application that use CLI to input employee information. HTML file automatically generated display team info.",repo:"https://github.com/E-Huynh/Team_Profile_Generator",link:"",tech:["Bulma","Node.js","FileSystem","Inquirer"]},{id:"github-pdf-generator",title:"Github PDF Generator",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/github_pdf.png?raw=true",description:"Application scrapes github API by username search to generate a PDF resume.",repo:"https://github.com/E-Huynh/github-pdf",link:"",tech:["Axios","Puppeteer","Inquirer"]},{id:"fast-hikes",title:"Fast Hikes",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/Fast_hikes.png?raw=true",description:"Application takes in driving duration and hike length from current location and returns hikes nearby that meet the search criteria.",repo:"https://github.com/E-Huynh/FastHikes",link:"https://e-huynh.github.io/FastHikes/",tech:["CssGrid","Flexbox","Jquery","HikingProjectAPI","GoogleDistanceAPI"]},{id:"weather-dashboard",title:"Weather Dashboard",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/weather_dashboard.png?raw=true",description:"Be prepared for whatever the weather throws at you. Allows the user to search for the current and 5-day forecast of any city.",repo:"https://github.com/E-Huynh/weather_dashboard",link:"https://e-huynh.github.io/weather_dashboard/index.html",tech:["CssGrid","Flexbox","LocalStorage","Moment.js","OpenWeatherAPI"]},{id:"work-day-scheduler",title:"Work Day Scheduler",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/work_day_planner.png?raw=true",description:"Track your daily schedule. Users can input their schedule by hour to plan out their day.",repo:"https://github.com/E-Huynh/work-day-scheduler",link:"https://e-huynh.github.io/work-day-scheduler/",tech:["HTML","CSS","Jquery"]},{id:"quiz-game",title:"Quiz Game",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/quiz_game.png?raw=true",description:"Test your knowledge with this programming related interactice quiz with timer and a highscore tracker.",repo:"https://github.com/E-Huynh/quiz_game",link:"https://e-huynh.github.io/quiz_game/quiz_game.html",tech:["DOM","Javascript","CSS"]},{id:"password-generator",title:"Password Generator",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/password_generator.png?raw=true",description:"Quickly generate passwords with user specified inputs of character type and length.",repo:"https://github.com/E-Huynh/Password_Generator",link:"https://e-huynh.github.io/Password_Generator/",tech:["Bootstrap","Javascript"]},{id:"rgb-game",title:"RGB Game",image:"https://github.com/E-Huynh/portfolio-gram/blob/master/src/assets/rgb_game.png?raw=true",description:"Test your knowledge of RGB color values by choosing the right tile. Easy and hard modes available.",repo:"https://github.com/E-Huynh/RGB_game",link:"https://e-huynh.github.io/RGB_game/",tech:["HTML","CSS","Jquery"]}],re=[{id:"about-me",text:"Learn More About Who I Am",avatar:"https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4",alert:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert("This will display the about me page eventually")}))},{id:"education",text:"My Education is Important",avatar:"https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4",alert:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert("This will display the education page eventually")}))},{id:"projects",text:"Check Out Some of the Things I've Created",avatar:"https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4",alert:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert("This will display the projects page eventually")}))}];var ne=function(e){var t=e.data;return n.a.createElement(T.a,null,n.a.createElement(z.a,{size:"medium",fullWidth:!0,disableElevation:!0,startIcon:n.a.createElement(P.a,{src:t.avatar}),onClick:t.alert},n.a.createElement(b.a,{variant:"body2",color:"textSecondary",component:"div"},t.text)))},oe=Object(l.a)((function(e){return{displayFlex:{display:"flex",justifyContent:"space-between"},leftColumn:{marginTop:100,marginLeft:"20%",width:"70%",paddingLeft:0},rightColumn:{marginTop:100,marginRight:"20%",width:"30%",paddingRight:0},postSpacing:{paddingBottom:50}}}));var ie=function(){var e=oe();return n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement("section",{className:e.displayFlex},n.a.createElement(te.a,{className:e.leftColumn},ae.map((function(t){return n.a.createElement("div",{key:t.id,className:e.postSpacing},n.a.createElement(ee,{data:t}))}))),n.a.createElement(te.a,{className:e.rightColumn},n.a.createElement(T.a,null,n.a.createElement(b.a,{variant:"body2",color:"textPrimary",component:"div"},"Highlights"),re.map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement(ne,{data:e}))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.415dd0a4.chunk.js.map