(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{27:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var n=s(2),o=s.n(n),a=s(19),i=s.n(a),c=(s(27),s(3)),r=s(4),l=s(6),u=s(5),j=s(10),h=s(9),d=s.n(h),p=s(22),f=s(20),k=s(7),m=(s(29),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getColor",value:function(){return this.props.votes>15?"#4caf50":this.props.votes>=12?"#8bc34a":this.props.votes>=9?"#cddc39":this.props.votes>=6?"#ffeb3b":this.props.votes>=3?"#ffc107":this.props.votes>=0?"#ff9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-expressionless":"em em-face_vomiting"}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Joke",children:[Object(m.jsxs)("div",{className:"Joke-buttons",children:[Object(m.jsx)("i",{className:"fa fa-arrow-up",onClick:this.props.upvote}),Object(m.jsx)("span",{style:{borderColor:this.getColor()},className:"Joke-vote",children:this.props.votes}),Object(m.jsx)("i",{className:"fa fa-arrow-down",onClick:this.props.downvote})]}),Object(m.jsx)("div",{className:"Joke-text",children:this.props.text}),Object(m.jsx)("div",{className:"Joke-emoji",children:Object(m.jsx)("i",{className:this.getEmoji()})})]})}}]),s}(n.Component),v=(s(31),s(53)),O=s(21),g=s.n(O),x=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(c.a)(this,s),(n=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},n.seenJokes=new Set(n.state.jokes.map((function(e){return e.text}))),n.handelClick=n.handelClick.bind(Object(k.a)(n)),n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t,s,n,o=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokes)){e.next=10;break}return e.next=5,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/JSON"}});case 5:s=e.sent,n=s.data.joke,this.seenJokes.has(n)?(console.log("Duplicate joke"),console.log(n)):t.push({id:Object(v.a)(),text:n,votes:0}),e.next=2;break;case 10:this.setState((function(e){return{jokes:[].concat(Object(p.a)(e.jokes),t),loading:!1}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))})),window.localStorage.setItem("jokes",JSON.stringify(t)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 18:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"handelClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"handelVote",value:function(e,t){var s=this;this.setState((function(s){return{jokes:s.jokes.map((function(s){return s.id===e?Object(j.a)(Object(j.a)({},s),{},{votes:s.votes+t}):s}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))}))}},{key:"render",value:function(){var e=this;return this.state.loading?Object(m.jsxs)("div",{className:"JokeList-loader",children:[Object(m.jsx)("i",{className:"fa fa-smile-o fa-5x fa-spin"}),Object(m.jsx)("h1",{className:"JokeList-title",children:"LOADING..."})]}):Object(m.jsxs)("div",{className:"JokeList",children:[Object(m.jsxs)("div",{className:"JokeList-sidebar",children:[Object(m.jsxs)("h1",{className:"JokeList-title",children:[Object(m.jsx)("span",{children:"Dad"})," Jokes"]}),Object(m.jsx)("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"smiley"}),Object(m.jsx)("button",{className:"JokeList-getmore",onClick:this.handelClick,children:"FETCH JOKES"})]}),Object(m.jsx)("div",{className:"JokeList-jokes",children:this.state.jokes.map((function(t){return Object(m.jsx)(b,{text:t.text,votes:t.votes,downvote:function(){return e.handelVote(t.id,-1)},upvote:function(){return e.handelVote(t.id,1)}},t.id)}))})]})}}]),s}(n.Component);x.defaultProps={numJokes:10};var J=x,N=(s(50),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(J,{})})}}]),s}(n.Component)),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,54)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),y()}},[[51,1,2]]]);
//# sourceMappingURL=main.ec189d87.chunk.js.map