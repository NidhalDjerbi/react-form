(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},24:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(6),s=n.n(r),c=(n(29),n(31),n(33),n(13),n(8)),i=n.n(c),l=n(10),u=n(18),m=n(19),d=n(22),g=n(20),p=n(23),f=n(7),h=n(5),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(g.a)(t).call(this,e))).state={nom:"",email:"",subject:"",message:"",modal:!1},n.callApi=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/contact");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)})),n.toggle=function(){n.setState({modal:!n.state.modal})},n.handleSubmit=function(){var e=Object(l.a)(i.a.mark(function e(t){var a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n.state),e.next=4,fetch("api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.nom,email:n.state.email,subject:n.state.subject,message:n.state.message})});case 4:return a=e.sent,e.next=7,a.text();case 7:o=e.sent,n.setState({responseToPost:o}),n.setState({modal:!n.state.modal});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callApi().then(function(t){return e.setState({response:t.express})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement(h.MDBContainer,null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("p",{className:"h5 text-center mb-4"},"N'h\xe9sitez pas \xe0 nous contacter"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(h.MDBInput,{label:"Nom",icon:"user",group:!0,type:"text",validate:!0,required:!0,error:"wrong",success:"right",ref:"nom",onChange:function(t){return e.setState({nom:t.target.value})}}),o.a.createElement(h.MDBInput,{label:"Email",icon:"envelope",group:!0,type:"email",validate:!0,required:!0,error:"wrong",success:"right",ref:"email",onChange:function(t){return e.setState({email:t.target.value})}}),o.a.createElement(h.MDBInput,{label:"Sujet",icon:"tag",group:!0,type:"text",validate:!0,required:!0,error:"wrong",success:"right",ref:"subject",onChange:function(t){return e.setState({subject:t.target.value})}}),o.a.createElement(h.MDBInput,{type:"textarea",rows:"2",label:"Message",icon:"pencil",required:!0,ref:"message",onChange:function(t){return e.setState({message:t.target.value})}})),o.a.createElement("div",{className:"text-center"},o.a.createElement(h.MDBBtn,{type:"submit",outline:!0,color:"primary"},"Contact ",o.a.createElement(h.MDBIcon,{icon:"paper-plane-o",className:"ml-1"})))),o.a.createElement(h.Modal,{isOpen:this.state.modal,toggle:this.toggle},o.a.createElement(h.ModalHeader,{className:"bg",toggle:this.toggle}),o.a.createElement(h.ModalBody,null,o.a.createElement("p",null,"Message re\xe7u!"),o.a.createElement("p",null," Nous revenons vers vous dans les plus brefs d\xe9lais ")),o.a.createElement(h.ModalFooter,null,o.a.createElement(h.Button,{color:"secondary",onClick:this.toggle},"Close")," ")))}}]),t}(a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");b?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}()}},[[24,2,1]]]);
//# sourceMappingURL=main.a337ffbc.chunk.js.map