!function(e,t){e.getElementById("livereloadscript")||((t=e.createElement("script")).async=1,t.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(window.document),function(e){"function"==typeof define&&define.amd?define(["fs","path"],e):e()}((function(){"use strict";const e="cv-denhnatiuk";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,n){return(i=o()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;var o;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,c)}function c(){return i(e,arguments,n(this).constructor)}return c.prototype=Object.create(e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),r(c,e)})(e)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(i){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(d,i);var c,a,l,s,f,p=(c=d,a=o(),function(){var e,t=n(c);if(a){var r=n(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function d(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),p.call(this,e)}return l=d,(s=[{key:"render",value:function(){document.documentElement.innerHTML;var t=document.createElement("div",{is:e});t.setAttribute("is",e),t.setAttribute("version","2020.03.16");var n=document.createElement("style");t.appendChild(n),t.innerHTML+="\n        Hello World! \n\n        This is ".concat(e," application\n        "),t.setAttribute("contenteditable","true"),new MutationObserver((function(e){})).observe(t,{characterData:!0,subtree:!0}),t.oninput=function(e){console.log("changed")},document.body.appendChild(t)}},{key:"onchangeCallback",value:function(e){console.log("calback fired")}},{key:"init",set:function(e){this.value=e},get:function(){return this.render()}}])&&t(l.prototype,s),f&&t(l,f),d}(c(HTMLDivElement)),f={env:{FIREBASE_API_KEY:"AIzaSyCyXdKbHVXrG7gwAqC3Juqtkacdc9REjTY",FIREBASE_PROJECT_ID:"cv-den-hnatiuk",FIREBASE_MESSAGING_SENDER_ID:"444371413430",FIREBASE_APP_ID:"1:444371413430:web:1c58a6ebf24358bc75f917",FIREBASE_MEASUREMENT_ID:"G-8GC7QLRKZH"}};f.env.FIREBASE_API_KEY,f.env.FIREBASE_PROJECT_ID,f.env.FIREBASE_PROJECT_ID,f.env.FIREBASE_PROJECT_ID,f.env.FIREBASE_PROJECT_ID,f.env.FIREBASE_MESSAGING_SENDER_ID,f.env.FIREBASE_APP_ID,f.env.FIREBASE_MEASUREMENT_ID;!function(e){if(e.hasOwnProperty("app"))for(var t=0,n=Object.entries(e);t<n.length;t++){var r;o=void 0,o=n[t],(r=a(o,2))[0],r[1]}var o}({app:"https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js",analytics:"https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js"});var p=e;if(window.hasOwnProperty("customElements"))window.customElements.define(p,s,{extends:"div"}),window.customElements.whenDefined(p).then((function(){return window[p]=new s,window[p].init}));else{var d=function(e){return new Promise((function(t,n){var r=document.createElement("script");r.src=e,r.onload=t,r.onerror=n,document.head.appendChild(r)}))};d("./node_modules/@webcomponents/custom-elements/custom-elements.min.js"),WebComponents.waitFor((function(){return d("index.js")}))}}));