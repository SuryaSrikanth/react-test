(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),i=a.n(c),r=(a(16),a(2)),l=a(3),m=a(6),s=a(4),h=a(5),u=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("h1",{className:"title"},"Meme-Generator"))}}]),t}(n.Component)),b=a(9),p=a(1),d=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={topText:"",bottomText:"",image:"http://i.imgflip.com/1bij.jpg",memeImages:[]},e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var a=t.data.memes;e.setState({memeImages:a})})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.memeImages.length);console.log(t);var a=this.state.memeImages[t].url;this.setState({image:a})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"meme-form"},o.a.createElement("input",{type:"text",name:"topText",value:this.state.topText,placeholder:"Top Text",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bottomText",value:this.state.bottomText,placeholder:"Botttom Text",onChange:this.handleChange}),o.a.createElement("button",{onClick:this.handleSubmit},"Generate")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.image,alt:""}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(o.a.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null),o.a.createElement(d,null),o.a.createElement("p",null," Made with  using Scrimba Teaching Resourses."))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.02c72a78.chunk.js.map