(window["webpackJsonptop-number-game"]=window["webpackJsonptop-number-game"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=a(1),c=a(2),l=a(5),u=a(3),h=a(6),m=a(4),b=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={highest:0},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentWillUpdate",value:function(t,e){"rgb(255, 215, 18)"!=document.body.style.background&&this.state.highest>=95e4?document.body.style.background="rgb(255, 215, 18)":!this.props.game&&t.game&&(document.body.style.background="#266cee")}},{key:"componentWillReceiveProps",value:function(t){t.number>this.state.highest&&this.setState({highest:t.number})}},{key:"render",value:function(){return r.a.createElement("h1",null,"Top Number: ",this.state.highest)}}]),e}(r.a.Component),p={fontSize:110,color:"white",textShadow:"2px 2px 2px #FF0000",position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)"},d=function(t){return r.a.createElement("div",{style:p},t.number)},g=function(t,e){var a=Math.random();return Math.floor(a*(e-t)+t)},v=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.props.number!=t.number}},{key:"render",value:function(){var t=this.props.number?"visible":"hidden",e={position:"absolute",left:g(0,100)+"%",top:g(0,100)+"%",fontSize:40,cursor:"pointer",visibility:t};return r.a.createElement("span",{style:e,className:"target"},this.props.number)}}]),e}(r.a.Component),f={position:"absolute",width:250,bottom:60,left:10,height:"60%"},k=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={game:!1,targets:{},latestClick:0},a.intervals=null,a.hitTarget=a.hitTarget.bind(Object(h.a)(a)),a.startGame=a.startGame.bind(Object(h.a)(a)),a.endGame=a.endGame.bind(Object(h.a)(a)),a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"createTarget",value:function(t,e){e=e||g(500,2e3),this.intervals.push(setInterval(function(){var e=function(t){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}(this.state.targets),a=g(1,1e6);e[t]=0!=e[t]?0:a,this.setState({targets:e})}.bind(this),e))}},{key:"hitTarget",value:function(t){if("target"==t.target.className){var e=parseInt(t.target.innerText);for(var a in this.state.targets){var n=Math.random().toFixed(4);this.createTarget(n)}this.setState({latestClick:e})}}},{key:"startGame",value:function(){this.createTarget("first",1e3),this.setState({game:!0})}},{key:"componentDidUpdate",value:function(t,e){this.state.latestClick<e.latestClick&&this.endGame()}},{key:"endGame",value:function(){this.intervals.forEach((function(t){clearInterval(t)})),this.intervals=[],this.setState({game:!1,targets:{},latestClick:0})}},{key:"componentWillMount",value:function(){this.intervals=[]}},{key:"render",value:function(){var t={display:this.state.game?"none":"inline-block"},e=[];for(var a in this.state.targets)e.push(r.a.createElement(v,{number:this.state.targets[a],key:a}));return r.a.createElement("div",null,r.a.createElement(b,{number:this.state.latestClick,game:this.state.game}),r.a.createElement(d,{number:this.state.latestClick}),r.a.createElement("button",{onClick:this.startGame,style:t},"New Game"),r.a.createElement("div",{style:f,onClick:this.hitTarget},e))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.47b5cf15.chunk.js.map