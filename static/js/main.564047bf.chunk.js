(this["webpackJsonpproject5-chatapp"]=this["webpackJsonpproject5-chatapp"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(17),l=a.n(r),c=(a(24),a(5)),i=a(6),o=a(8),u=a(7),m=a(9),p=a(18),d=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"application"},s.a.createElement(p.Helmet,null,s.a.createElement("title",null,"Cohort 25 Chat"),s.a.createElement("script",{src:"https://kit.fontawesome.com/dfdc9c622d.js",crossorigin:"anonymous"})),"...")}}]),t}(s.a.Component),h=function(){return s.a.createElement("h1",null,"Cohort 25 Chat")},b=function(e){return s.a.createElement("div",{className:"asideButtonContainer"},s.a.createElement("button",{onClick:e.click,className:"instrIcon"},s.a.createElement("i",{className:"fas fa-question-circle"})),s.a.createElement("h3",null,"\u2190 Click Me!"))},f=a(14),E=a.n(f);E.a.initializeApp({apiKey:"AIzaSyCdzdADg9WBTilxo_wNHdv-IyG4IkMILwY",authDomain:"project5-database.firebaseapp.com",databaseURL:"https://project5-database.firebaseio.com",projectId:"project5-database",storageBucket:"project5-database.appspot.com",messagingSenderId:"54113912690"});var v=E.a,g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),v.database().ref().push(e.state.userInput),e.setState({userInput:""})},e.state={userInput:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"messageInput"},s.a.createElement("form",{action:"submit",onSubmit:this.handleSubmit},s.a.createElement("label",{className:"visually-hidden",htmlFor:"messageForm"},"Please type your message!"),s.a.createElement("input",{className:"inputField",type:"text",id:"messageForm",onChange:this.handleChange,value:this.state.userInput}),s.a.createElement("button",{className:"submitButton",type:"submit"}," ",s.a.createElement("i",{class:"fas fa-paper-plane"})," ")))}}]),t}(n.Component),y=function(e){var t="sideDrawer";return e.show&&(t="sideDrawer open"),s.a.createElement("aside",{className:t},s.a.createElement("div",{className:"instrContainer"},s.a.createElement("h2",null,"How To Use:"),s.a.createElement("ol",null,s.a.createElement("li",null,"[tab]-to or click into the input field and type your message."),s.a.createElement("li",null,"Press [enter] or [tab] to the send button (the paper airplane)"),s.a.createElement("li",null,"Your message will appear above!"),s.a.createElement("li",null,"To clear your last message!"),s.a.createElement("li",null,"instructions here"))))},j=(a(46),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).asideToggleClickHandler=function(){e.setState((function(e){return{asideOpen:!e.asideOpen}}))},e.handleFormSubmit=function(t){t.preventDefault(),v.database().ref().push(e.state.userInput),e.setState({userInput:""})},e.state={asideOpen:!0,messages:[],userInput:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.database().ref().on("value",(function(t){var a=t.val();console.log("dataFromDb",a);var n=[];for(var s in a){var r={key:s,name:a[s]};n.push(r)}console.log(n),e.setState({messages:n})}))}},{key:"render",value:function(){var e;return this.state.asideOpen&&(e=s.a.createElement(y,null)),s.a.createElement("div",{className:"App"},s.a.createElement(d,null),s.a.createElement(b,{click:this.asideToggleClickHandler}),s.a.createElement("header",null,s.a.createElement(h,null)),e,s.a.createElement("div",{className:"mainGrid"},s.a.createElement("div",{className:"chatDisplay"},this.state.messages.map((function(e){return s.a.createElement("div",{className:"userText",key:e.key},s.a.createElement("p",null,"User: ",e.key,", says:"),s.a.createElement("p",{className:"messageOut"},e.name))}))),s.a.createElement(g,{handleFormSubmit:this.handleFormSubmit})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.564047bf.chunk.js.map