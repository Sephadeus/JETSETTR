(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/Jetsettr.516b49cb.png"},47:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){e.exports=n(76)},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r,a,o=n(0),i=n.n(o),c=n(60),l=n.n(c),s=(n(72),n(24)),u=n(14),m=n(7),f=(n(47),function(){var e=Object(o.useState)([{id:1,username:"Cristiano",imageUrl:"https://images.unsplash.com/photo-1584907600887-9732fa3647ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",caption:"Exploring the mountains",likes:56,comments:[{id:1,username:"KylieJenner",text:"Awesome picture!"},{id:2,username:"Cristiano",text:"Thanks!"}]},{id:2,username:"Beyonce",imageUrl:"https://images.unsplash.com/photo-1517035811173-b7659b8d0ddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",caption:"Sunset at the beach",likes:112,comments:[]},{id:3,username:"SelenaGomez",imageUrl:"https://images.unsplash.com/photo-1521747116042-5a810fda9664",caption:"The Golden Gate Bridge!!",likes:654,comments:[]},{id:4,username:"MikeTyson",imageUrl:"https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",caption:"Day 1 in Greece",likes:32,comments:[{id:1,username:"JakePaul",text:"I live there"},{id:2,username:"MikeTyson",text:"Wow, really?!"}]},{id:5,username:"LionelMessi",imageUrl:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",caption:"time to Relax!",likes:765,comments:[]},{id:6,username:"KimKardashian",imageUrl:"https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",caption:"What a sight!",likes:543,comments:[]},{id:7,username:"ArianaGrande",imageUrl:"https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",caption:"Should I take a dive?",likes:23,comments:[]},{id:8,username:"JustinBieber",imageUrl:"https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",caption:"Ever seen a brighter night sky?",likes:124,comments:[]}]),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(o.useState)(""),c=Object(m.a)(a,2),l=c[0],f=c[1],h=function(e){f(e.target.value)};return i.a.createElement("div",{className:"feed"},n.map(function(e){return i.a.createElement("div",{key:e.id,className:"post"},i.a.createElement("div",{className:"post-header"},i.a.createElement("div",{className:"username"},e.username)),i.a.createElement("div",{onClick:function(){return function(e){var t=n.map(function(t){return t.id===e?Object(s.a)({},t,{likes:t.likes+1}):t});r(t)}(e.id)}},i.a.createElement("img",{src:e.imageUrl,alt:"post"})),i.a.createElement("div",{className:"post-footer"},i.a.createElement("div",{className:"likes"},e.likes," likes"),i.a.createElement("div",{className:"caption"},e.caption),i.a.createElement("div",{className:"comments"},e.comments.map(function(e){return i.a.createElement("div",{key:e.id,className:"comment"},i.a.createElement("span",{className:"username"},e.username),i.a.createElement("span",{className:"text"},e.text))})),i.a.createElement("div",{className:"comment-form"},i.a.createElement("input",{type:"text",placeholder:"Add a comment...",value:l,onChange:h}),i.a.createElement("button",{onClick:function(){return function(e){var t=n.map(function(t){return t.id===e?Object(s.a)({},t,{comments:[].concat(Object(u.a)(t.comments),[{id:t.comments.length+1,username:"Raied",text:l}])}):t});r(t),f("")}(e.id)}},"Submit"))))}),i.a.createElement(function(){var e=Object(o.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)(""),s=Object(m.a)(l,2),f=s[0],h=s[1];return i.a.createElement("div",{className:"upload-container"},i.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),a&&f){var t={id:n.length+1,username:"Raied",imageUrl:URL.createObjectURL(a),caption:f,likes:0,comments:[]};r([t].concat(Object(u.a)(n))),c(null),h("")}}},i.a.createElement("label",{htmlFor:"image-upload",className:"upload-label"},i.a.createElement("i",{className:"fas fa-cloud-upload-alt"})," +"),i.a.createElement("input",{type:"file",id:"image-upload",className:"file-input",onChange:function(e){var t=e.target.files[0];c(t)}}),i.a.createElement("input",{type:"text",placeholder:"Caption",value:f,onChange:function(e){h(e.target.value)}}),i.a.createElement("button",{type:"submit"},"Post")),a&&i.a.createElement("img",{src:URL.createObjectURL(a),alt:"Uploaded Image",className:"uploaded-image"}))},null))}),h=n(10),p=n(12),d=(n(59),n(32)),v=n.n(d),g=n(90),y=n(49),w=n(88),b=Object(w.a)(r||(r=Object(y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),E=Object(w.a)(a||(a=Object(y.a)(["\n  mutation addUser(\n    $username: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      username: $username\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),x=n(25),k=n(29),j=n(50),L=new(function(){function e(){Object(x.a)(this,e)}return Object(k.a)(e,[{key:"getProfile",value:function(){return Object(j.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(j.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/Home")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new L(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(O([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function O(e){var t=Object(o.useState)({email:"",password:""}),n=Object(m.a)(t,2),r=n[0],a=n[1],c=Object(g.a)(b),l=Object(m.a)(c,2),u=l[0],f=l[1].error,d=function(){var e=Object(p.a)(N().mark(function e(t){var n,a;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u({variables:{email:r.email,password:r.password}});case 4:n=e.sent,a=n.data.login.token,L.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.target,n=t.name,o=t.value;a(Object(s.a)({},r,Object(h.a)({},n,o)))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login"},i.a.createElement("form",{className:"loginForm",onSubmit:d},i.a.createElement("h1",null,"Log In"),i.a.createElement("input",{type:"email",placeholder:"Email",className:"infoInput",name:"email",onChange:v}),i.a.createElement("input",{type:"password",className:"infoInput",placeholder:"Password",name:"password",onChange:v}),f?i.a.createElement("div",null,i.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,i.a.createElement("span",{style:{fontSize:"14px"}},"Don't forget to login"),i.a.createElement("button",{className:"login__button",type:"submit"},"Login")),i.a.createElement("div",{className:"signUpBox"},i.a.createElement("p",null,"Don't have an account?"),i.a.createElement("a",{href:"/SignUp"},"Sign Up"))))}var S=function(){return i.a.createElement("div",{className:"auth"},i.a.createElement("div",{className:"logo__container"},i.a.createElement("div",{className:"welcome"}),i.a.createElement("img",{className:"mainlogo",src:v.a,alt:"jetsettr-logo"})),i.a.createElement(O,null))};n(74),n(75);function _(){_=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new L(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var G=function(e){var t=Object(o.useState)({email:"",password:""}),n=Object(m.a)(t,2),r=n[0],a=n[1],c=Object(g.a)(E),l=Object(m.a)(c,2),u=l[0],f=l[1].error,d=function(){var e=Object(p.a)(_().mark(function e(t){var n,a,o,i;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=r.password,a=r.confirmPassword,n===a){e.next=7;break}alert("Passwords must match."),e.next=19;break;case 7:return e.prev=7,e.next=10,u({variables:{username:r.username,email:r.email,password:r.password}});case 10:o=e.sent,i=o.data.addUser.token,L.login(i),window.location.assign("/Home"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0);case 19:case"end":return e.stop()}},e,null,[[7,16]])}));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.target,n=t.name,o=t.value;a(Object(s.a)({},r,Object(h.a)({},n,o)))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"backBtn"},i.a.createElement("a",{className:"backLink",href:"/"},"Go Back")),i.a.createElement("form",{className:"signup__container",onSubmit:d},i.a.createElement("div",{className:"signupTitle"},i.a.createElement("p",null,"Want to connect with travelers like yourself?"),i.a.createElement("h1",null,"Sign Up to JetSettr")),i.a.createElement("input",{type:"text",className:"infoInput",placeholder:"Username",name:"username",onChange:v}),i.a.createElement("input",{type:"text",className:"infoInput",placeholder:"Email Address",name:"email",onChange:v}),i.a.createElement("input",{type:"text",className:"infoInput",placeholder:"Password",name:"password",onChange:v}),i.a.createElement("input",{type:"text",className:"infoInput",placeholder:"Confirm Password",name:"confirmPassword",onChange:v}),f?i.a.createElement("div",null,i.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,i.a.createElement("button",{id:"signUpBtn",className:"signUpBtn",type:"submit"},"Sign Me Up")))};var U=function(){return i.a.createElement("header",{className:"banner"},i.a.createElement("img",{className:"bannerLogo",src:v.a,alt:"jetsettr-logo"}),i.a.createElement("div",null,L.loggedIn()?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"navLinks"},i.a.createElement("a",{className:"navlink",href:"/home"},"Home"),i.a.createElement("a",{className:"navlink",href:"/about"},"About"),i.a.createElement("button",{className:"navlink",onClick:function(e){e.preventDefault(),L.logout()}},"Log Out"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"navLinks"},i.a.createElement("h2",{className:"welcomeMessage"},"welcome to jetsettr")))))};var M=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,i.a.createElement("h2",null,"jetsettr"),i.a.createElement("p",null,"Powered by Ama Frema, Raied Abdelgani, David Parker, Joe Labadia, and Rashad Spell.")))},H=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"NotFound"},i.a.createElement("div",{className:"Whoops"},i.a.createElement("h2",null,"404 Not Found"),i.a.createElement("p",null,"Whoops! Looks like that page doesn't exist, sorry!")),i.a.createElement("div",null,i.a.createElement("img",{className:"mainlogo",src:v.a,alt:"jetsettr-logo"}))))},I=function(){return i.a.createElement("div",{className:"about_page"},i.a.createElement("h2",null,"About"),i.a.createElement("p",null,"Do you like to travel? Have you always wanted to travel but don't know which destinations are worth visiting first? With limited time and money the last thing you want to do is waste it on a bad vacation. Enter Jetsettr: a social blog for travellers, by travellers. It's like Tripadvisor, Facebook, and Instagram had a baby. Read posts from other people on their experience with specific locations, giving YOU an opportunity to make an informed decision about where to set your jet to next. What was our motivation? Travelling shouldn't be stressful, and the last thing you want is to spend all your time planning a trip only for it to be a flop! Jetsettr allows travellers to make an informed decision about where to travel based on the experiences of others. What problem does it solve? Never waste your time on a bad trip ever again. What did we learn? This project overall was a learning experience with Git, React, and connecting databases. Also, making a user friendly interface that is easy on the eyes. What makes our app different from others? Jetsettr is travel focused, unlike Facebook and Instagram which are general in their content. Don't be distracted by the fluff! Use Jetsettr and find out what you want to know about where you want to go from people like you."))},D=n(64),P=n(4),T=n(65),B=n(87),F=n(89),A=n(86),W=n(62),C=Object(T.a)({uri:"/graphql"}),J=Object(W.a)(function(e,t){var n=t.headers,r=localStorage.getItem("id_token");return{headers:Object(s.a)({},n,{authorization:r?"Bearer ".concat(r):""})}}),Y=new B.a({link:J.concat(C),cache:new F.a});var R=function(){return i.a.createElement(A.a,{client:Y},i.a.createElement(D.a,null,i.a.createElement(U,null),i.a.createElement("div",{className:"App"},i.a.createElement(P.c,null,i.a.createElement(P.a,{path:"/Home",element:i.a.createElement(f,null)}),i.a.createElement(P.a,{path:"/About",element:i.a.createElement(I,null)}),i.a.createElement(P.a,{path:"/",element:i.a.createElement(S,null)}),i.a.createElement(P.a,{path:"/SignUp",element:i.a.createElement(G,null)}),i.a.createElement(P.a,{path:"*",element:i.a.createElement(H,null)}))),i.a.createElement(M,null)))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.af1d646b.chunk.js.map