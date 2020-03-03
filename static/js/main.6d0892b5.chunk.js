(this["webpackJsonpproject5-chatapp"]=this["webpackJsonpproject5-chatapp"]||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},27:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),l=a.n(s),o=(a(27),a(15)),c=a.n(o),i=a(20),u=a(5),m=a(6),p=a(8),d=a(7),h=a(9),f=a(21),b=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"application"},r.a.createElement(f.Helmet,null,r.a.createElement("title",null,"Cohort 25 Chat"),r.a.createElement("script",{src:"https://kit.fontawesome.com/dfdc9c622d.js",crossorigin:"anonymous"})),"...")}}]),t}(r.a.Component),g=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Cohort 25 Chat ",r.a.createElement("i",{className:"fas fa-comment-dots"})),r.a.createElement("button",{onClick:function(){window.location.reload(!1)}},"New User ",r.a.createElement("i",{className:"fas fa-grin-stars"})))},v=function(e){return r.a.createElement("div",{className:"asideButtonContainer"},r.a.createElement("button",{onClick:e.click,className:"instrIcon"},r.a.createElement("i",{className:"fas fa-question-circle"})),r.a.createElement("h3",null,"\u2190 Click Me To Start!"))},E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.handleFormSubmit(e.state.userInput),e.state.userInput=""},e.state={userInput:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"messageInput"},r.a.createElement("form",{action:"submit",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"visually-hidden",htmlFor:"messageForm"},"Please type your message!"),r.a.createElement("input",{className:"inputField",type:"text",id:"messageForm",onChange:this.handleChange,value:this.state.userInput}),r.a.createElement("button",{className:"submitButton",type:"submit"},r.a.createElement("i",{className:"fas fa-paper-plane"}))))}}]),t}(n.Component),N=function(e){var t="sideDrawer";return e.show&&(t="sideDrawer open"),r.a.createElement("aside",{className:t},r.a.createElement("div",{className:"instrContainer"},r.a.createElement("h2",null,"How To Use:"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement("span",{className:"blueFont"},"[tab]"),"-to or click into the input field and type your message."),r.a.createElement("li",null,"Press ",r.a.createElement("span",{className:"blueFont"},"[enter]")," or ",r.a.createElement("span",{className:"blueFont"},"[tab]")," to the send button (the paper airplane)"),r.a.createElement("li",null,"Your message will appear above!"),r.a.createElement("li",null,"Click ",r.a.createElement("span",{className:"blueFont"},"[New User]")," button at the top right to give a new user name!"),r.a.createElement("li",null,'To clear your last message Click the "',r.a.createElement("i",{className:"fas fa-trash-alt"}),'"!'))))},k=void 0,w=function(e){var t=e.msgProp;return console.log(t),r.a.createElement("div",{className:"default",key:t.key},r.a.createElement("img",{src:t.message.userImg,alt:t.message.userName}),r.a.createElement("button",{className:"trash",onClick:function(){k.remove(t.message.key)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))," ",r.a.createElement("p",null,r.a.createElement("span",{className:"blueFont"},t.message.userName),": ",t.message.userInput))},C=a(16),y=a.n(C);y.a.initializeApp({apiKey:"AIzaSyCdzdADg9WBTilxo_wNHdv-IyG4IkMILwY",authDomain:"project5-database.firebaseapp.com",databaseURL:"https://project5-database.firebaseio.com",projectId:"project5-database",storageBucket:"project5-database.appspot.com",messagingSenderId:"54113912690"});var j=y.a,I=a(10),O=a.n(I),S=(a(50),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).asideToggleClickHandler=function(){e.setState((function(e){return{asideOpen:!e.asideOpen}}))},e.handleFormSubmit=function(t){j.database().ref().push({userInput:t,userName:e.state.userName,userImg:e.state.userImg,userColor:e.state.userColor})},e.remove=function(e){var t=j.database().ref();console.log("dbRef",t.child(e)),console.log("key",e),t.child(e).remove()},e.state={asideOpen:!0,messages:[],userInput:"",userName:"",userImg:"",userColor:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=j.database().ref();O.a.fire({icon:"question",title:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!1,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(e){return fetch("//api.github.com/users/".concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){O.a.showValidationMessage("Request failed: ".concat(e))}))},allowOutsideClick:!1}).then((function(a){a.value&&(O.a.fire({title:"Here is ".concat(a.value.login,"'s avatar!"),imageUrl:a.value.avatar_url}),t.setState({userImg:a.value.avatar_url}),console.log(t.state.userImg),Object(i.a)(c.a.mark((function e(){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Promise((function(e){setTimeout((function(){e({redBubble:"Red",greenBubble:"Green",blueBubble:"Blue",blackBubble:"Black",default:"Default"})}),1e3)})),e.next=3,O.a.fire({title:"Select color",input:"radio",inputOptions:a,inputValidator:function(e){if(!e)return"You need to choose something!"}});case 3:n=e.sent,(r=n.value)&&O.a.fire({html:"You selected: ".concat(r)}),t.setState({userColor:r}),console.log(t.state.userColor);case 8:case"end":return e.stop()}}),e)})))()),e=a.value.login,t.setState({userName:e})})),a.on("value",(function(a){var n=a.val();console.log("dataFromDb",n);var r=[];for(var s in n){var l={key:s,message:n[s]};r.push(l)}console.log("newState Array:",r),t.setState({messages:r,userName:e})}))}},{key:"render",value:function(){var e;return this.state.asideOpen&&(e=r.a.createElement(N,null)),r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(v,{click:this.asideToggleClickHandler}),r.a.createElement("header",null,r.a.createElement(g,null)),e,r.a.createElement("div",{className:"mainGrid"},r.a.createElement("div",{className:"chatDisplay"},this.state.messages.map((function(e){return console.log("message array",e),r.a.createElement(w,{msgProp:e})}))),r.a.createElement(E,{handleFormSubmit:this.handleFormSubmit})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.6d0892b5.chunk.js.map