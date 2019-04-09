(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports={gameFieldSize:1e3,lvlRange:[{size:8,x:4,y:2},{size:18,x:6,y:3},{size:32,x:8,y:4},{size:18,x:6,y:3}],reverseTime:[400,700,1200,3200],cardColors:["#f03e3e","#12b886","#228be6","#495057"],reverseIcon:"flag",icons:["truck-monster","space-shuttle","dove","user-astronaut","quidditch","coffee","beer","skull","bomb","bell","bullhorn","comments","copy","cut","dice-five","eye","gamepad","globe-americas","grin-tears","grin-beam","hourglass-half","map-marked-alt","dice-two","pizza-slice","robot","shopping-basket","thumbs-up","users","kiss-wink-heart"]}},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(11),c=a.n(n),s=(a(18),a(2)),i=a(3),o=a(4),m=a(6),d=a(5),u=a(7),v=(a(19),a(20),a(10),function(e){return r.a.createElement("div",{className:"Button"},r.a.createElement("a",{href:e.address},r.a.createElement("div",{className:"header-btn"},e.children)))}),h=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Memory game"),r.a.createElement("h2",null,"with Font Awesome"),r.a.createElement(v,{address:"#Menu"},r.a.createElement("i",{className:"far fa-play-circle"})," Start fun!"),r.a.createElement("div",{className:"scale"},r.a.createElement("a",{className:"link",href:"https://fontawesome.com"},"Learn more")))},g=(a(21),a(22),function(e){var t="ButtonGroup";return e.scoreList&&(t+=" scoreList"),r.a.createElement("div",{className:t},r.a.createElement("h3",null,e.header),r.a.createElement("div",{className:"Buttons-row"},e.children))}),p=(a(23),function(e){var t=e.gameScore;return r.a.createElement("div",{className:"LvlScore"},r.a.createElement("p",null,"Last: "),r.a.createElement("p",null,r.a.createElement("b",null,t.last)),r.a.createElement("p",null,"Top: "),r.a.createElement("p",null,r.a.createElement("b",null,t.top)))}),f=function(e){var t="";return e.gameStarted&&e.gameLvl===e.level&&(t="buttonPressed"),r.a.createElement("button",{className:"ActionButton "+t,disabled:e.locked,onClick:function(t){e.click(e.level,t)},title:e.title},r.a.createElement("a",{href:"#Game"},e.locked?r.a.createElement("div",{className:"Locked"},r.a.createElement("i",{className:"fas fa-lock"})):r.a.createElement("div",{className:"ScrollableContent"},r.a.createElement("span",null,e.children),r.a.createElement("span",{style:{fontSize:"16px"}},e.description))))},k=function(e){var t=e.lvlButtonClick,a=e.gameScore,l=e.gameProgress,n=e.gameLvl,c=e.gameStarted,s=[{des:"Easy",lvl:0,text:"1"},{des:"Medium",lvl:1,text:"2"},{des:"Hard",lvl:2,text:"3"},{des:"Nightmare",lvl:3,text:r.a.createElement("i",{className:"far fa-dizzy"})}].map(function(e,a){return r.a.createElement(f,{key:a,description:e.des,click:t,gameLvl:n,gameStarted:c,level:e.lvl,locked:!(e.lvl<=l)},e.text)}),i=r.a.createElement(r.a.Fragment,null,"Your score (clicks)");return 3===n&&(i=r.a.createElement(r.a.Fragment,null,"Your score (matches)")),r.a.createElement("div",{id:"Menu",className:"Menu"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(g,{header:"Choose level"},s),r.a.createElement(g,{header:i,scoreList:!0},r.a.createElement(p,{gameLvl:n,gameScore:a}))))},E=(a(8),a(24),a(1)),C=function(e){var t=e.size,a=e.isReversed,l=e.cardIcon,n=e.cardColor,c=e.id,s=e.cardClick,i={width:t,height:t},o={backgroundColor:n},m={fontSize:.55*t},d="Card";return a&&(d+=" flipped"),r.a.createElement("div",{className:"cardContainer",style:i,onClick:function(e){return s(c,e)}},r.a.createElement("div",{className:d},r.a.createElement("div",{className:"front",style:o},r.a.createElement("i",{className:"fas fa-"+l,style:m})),r.a.createElement("div",{className:"back",style:o},r.a.createElement("i",{className:"fas fa-"+E.reverseIcon,style:m}))))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cardsObj.map(function(t,a){return r.a.createElement(C,{size:e.state.cardSize,isReversed:t.isReversed,isMatched:t.isMatched,cardIcon:t.icon,cardColor:e.state.cardColor,key:"".concat(e.props.lvl,"-").concat(a),id:a,cardClick:e.props.cardClick})});return r.a.createElement("div",{id:"Game",className:"Game"},r.a.createElement("div",{className:"wrapper",style:this.state.gridStyle},t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.newGame?{gridStyle:{height:"100%",width:"100%",display:"grid",gridTemplateColumns:"auto ".repeat(e.lvlSize.x),gridGap:"10px"},cardSize:(e.gameWidth-10*(e.lvlSize.x-1))/e.lvlSize.x,cardColor:E.cardColors[Math.floor(Math.random()*E.cardColors.length)]}:null}}]),t}(l.Component),S=function(e){return r.a.createElement("div",{className:"WinPopup"},r.a.createElement("div",null,r.a.createElement("p",null,"Winner!"),r.a.createElement("p",null,"Score: ".concat(e.clickCounter," clicks")),e.isNewRecord?r.a.createElement("p",null,r.a.createElement("strong",null,"New Record!")):null),r.a.createElement("div",{className:"winButtons"},r.a.createElement(f,{description:"Reply",click:e.replayClick,level:"0"},r.a.createElement("i",{className:"fas fa-undo-alt"})),e.lvl<3?r.a.createElement(f,{description:"Next level",click:e.nextLvlClick,level:e.lvl+1},r.a.createElement("i",{className:"fas fa-arrow-right"})):null,r.a.createElement(f,{description:"Cancel",click:e.cancelClick,level:"0"},r.a.createElement("i",{className:"fas fa-times"}))))},N=function(e){var t;return t=e.isWin?r.a.createElement(S,{clickCounter:e.clickCounter,replayClick:e.replayClick,cancelClick:e.cancelClick,lvl:e.lvl,isNewRecord:e.isNewRecord,nextLvlClick:e.nextLvlClick}):r.a.createElement("div",null,r.a.createElement("p",{className:"main"},"Choose level to start a game!"),r.a.createElement("p",null,"Win a given level to unlock the next one."),r.a.createElement("p",null,"Pass three levels to unlock ",r.a.createElement("b",null,"Nigthmare")," mode, ",r.a.createElement("br",null)," where mistakes are not allowed."),r.a.createElement("p",null,"Good luck, have fun! ",r.a.createElement("i",{className:"far fa-smile-wink"}))),r.a.createElement("div",{id:"Game",className:"GamePlaceholder"},t)},w=(a(25),function(e){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"React practice game project, by JZ."))}),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={gameStarted:!1,cardsObj:[],lvl:0,isNewGame:!1,reversedCards:[],matchedCouples:0,isWin:!1,isNewRecord:!1,clickCounter:0,gameAreaWidth:0,gameAreaStyle:{},gameScore:[{last:0,top:0},{last:0,top:0},{last:0,top:0},{last:0,top:0}],gameProgress:0},a.buttonLocker=!1,a.randomIcons=function(e){for(var t=[],a=[],l=Object(s.a)(E.icons),r=0;r<e;r++)a.push(r),t.push(r);for(;a.length>0;){var n=Math.floor(Math.random()*l.length),c=l.splice(n,1)[0];t[a.splice(Math.floor(Math.random()*a.length),1)[0]]={icon:c,isReversed:!1},t[a.splice(Math.floor(Math.random()*a.length),1)]={icon:c,isReversed:!1}}return t},a.endGameHandler=function(e){console.log("engGame");var t=Object(s.a)(a.state.gameScore),l=a.state.gameProgress,r=!1;t[a.state.lvl].last=e,a.state.lvl<3&&t[a.state.lvl].top>0&&e<t[a.state.lvl].top?(t[a.state.lvl].top=e,r=!0):0===t[a.state.lvl].top?(t[a.state.lvl].top=e,r=!0):3===a.state.lvl&&t[a.state.lvl].top>0&&e>t[a.state.lvl].top&&(t[a.state.lvl].top=e,r=!0),l<4&&a.state.lvl===l&&l++,a.setState({gameScore:t,gameProgress:l,isNewRecord:r}),"undefined"!==typeof Storage&&(localStorage.setItem("gameScore",JSON.stringify(a.state.gameScore)),localStorage.setItem("gameProgress",l))},a.cardClickHandler=function(e){if(!a.buttonLocker&&a.state.cardsObj[e].isReversed){a.buttonLocker=!0;var t=Object(s.a)(a.state.reversedCards),l=Object(s.a)(a.state.cardsObj),r=a.state.matchedCouples,n=a.state.isWin,c=a.state.clickCounter,i=!1;l[e].isReversed=!1,c++,0===t.length?t[0]=e:(t[1]=e,l[e].icon===l[t[0]].icon?(t=[],++r===E.lvlRange[a.state.lvl].size/2&&(n=!0,a.endGameHandler(c))):3!==a.state.lvl?setTimeout(function(){l[t[0]].isReversed=!0,l[t[1]].isReversed=!0,t=[],a.setState({cardsObj:l,reversedCards:t}),a.buttonLocker=!1},600):(a.endGameHandler(r),i=!0)),a.setState({cardsObj:l,reversedCards:t,isNewGame:!1,matchedCouples:r,isWin:n,clickCounter:c},function(){i?setTimeout(function(){a.reverseAllCards(),setTimeout(function(){a.startNewGame(a.state.lvl),a.buttonLocker=!1},600)},600):t.length<2&&(a.buttonLocker=!1)})}},a.replyClickHandler=function(){a.startNewGame(a.state.lvl)},a.cancelClickHandler=function(){a.setState({gameStarted:!1,isWin:!1})},a.startNewGame=function(e){var t=E.lvlRange[e].size,l=a.randomIcons(t);a.setState({gameStarted:!0,cardsObj:l,lvl:e,isNewGame:!0,isWin:!1,clickCounter:0,matchedCouples:0,reversedCards:[]},function(){setTimeout(function(){a.reverseAllCards()},E.reverseTime[e])})},a.reverseAllCards=function(){var e=Object(s.a)(a.state.cardsObj),t=!0,l=!1,r=void 0;try{for(var n,c=e[Symbol.iterator]();!(t=(n=c.next()).done);t=!0){n.value.isReversed=!0}}catch(i){l=!0,r=i}finally{try{t||null==c.return||c.return()}finally{if(l)throw r}}a.setState({cardsObj:e,isNewGame:!1})},a.lvlButtonClickHanlder=function(e){a.state.gameStarted&&e===a.state.lvl||a.startNewGame(e)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=window.innerHeight-150-32,t=1.66*e;window.innerWidth<768&&(e=(t=.96*window.innerWidth)/1.66),this.setState({gameAreaWidth:t,gameAreaStyle:{height:e+"px"}});var a=localStorage.getItem("gameProgress"),l=JSON.parse(localStorage.getItem("gameScore"));a&&l&&this.setState({gameScore:l,gameProgress:a})}},{key:"render",value:function(){var e=this,t=null,a=null;return this.state.gameStarted&&(t=r.a.createElement(b,{lvlSize:E.lvlRange[this.state.lvl],lvl:this.state.lvl,cardsObj:this.state.cardsObj,cardClick:function(t,a){return e.cardClickHandler(t,a)},newGame:this.state.isNewGame,gameWidth:this.state.gameAreaWidth})),this.state.gameStarted&&!this.state.isWin||(a=r.a.createElement(N,{isWin:this.state.isWin,isNewRecord:this.state.isNewRecord,clickCounter:this.state.clickCounter,replayClick:this.replyClickHandler,cancelClick:this.cancelClickHandler,lvl:this.state.lvl,nextLvlClick:function(t,a){return e.lvlButtonClickHanlder(t,a)}})),r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(k,{gameLvl:this.state.lvl,gameStarted:this.state.gameStarted,gameProgress:this.state.gameProgress,lvlButtonClick:function(t,a){return e.lvlButtonClickHanlder(t,a)},gameScore:this.state.gameScore[this.state.lvl]}),r.a.createElement("div",{id:"Game",className:"gameArea",style:this.state.gameAreaStyle},t,a),r.a.createElement(w,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.efd52343.chunk.js.map