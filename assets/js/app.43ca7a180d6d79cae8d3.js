!function(e){function t(t){for(var r,i,l=t[0],u=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([151,2]),n()}({145:function(e,t,n){var r=n(94),o=n(146);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},146:function(e,t,n){},147:function(e,t,n){var r=n(94),o=n(148);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},148:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);n(56),n(61);var r=document.querySelector(".banner__button"),o=document.querySelector(".video__group"),a=document.querySelector(".video__cross-icon"),i=document.querySelector(".overlay");function l(){o.classList.toggle("video__group_active"),i.classList.toggle("active")}r&&a&&(r.addEventListener("click",l),a.addEventListener("click",l));for(var u=document.querySelectorAll(".partners__item"),c=document.querySelectorAll(".partners__text"),s=function(e){u[e].addEventListener("click",(function(){u[e]&&p(e)})),u[e].addEventListener("touchend",(function(t){t.preventDefault(),p(e)}))},d=0;d<u.length;d++)s(d);function p(e){u[e]&&c[e].classList.toggle("partners__text_active")}var h=!0;function f(e){var t=document.querySelector(".video__fixed"),n=document.querySelector(".video__fixed--close");e?(t.style.position="fixed",t.style.zIndex="100",t.style.top="auto",t.style.transform="translateY(0)",t.style.bottom="2rem",t.style.display="block",n.style.display="block"):(t.style.position=null,t.style.zIndex=null,t.style.top=null,t.style.transform=null,t.style.bottom=null,n.style.display=null)}document.addEventListener("scroll",(function(){return f(window.scrollY>=500&h&window.innerWidth>=900)})),document.querySelector(".video__fixed--close").addEventListener("click",(function(){h=!1,f(!1),document.removeEventListener("scroll",f)})),setTimeout((function(e){document.querySelectorAll(".video__iframe").forEach((function(e){var t=e.getAttribute("src")+"?autoplay=1&mute=1&loop=1";e.setAttribute("src",t)}))}),3e3);n(101),n(103),n(104),n(105),n(71),n(106),n(108),n(110),n(111),n(75),n(117),n(76),n(52),n(128),n(85),n(132),n(86),n(87);function m(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){m(a,r,o,i,l,"next",e)}function l(e){m(a,r,o,i,l,"throw",e)}i(void 0)}))}}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function _(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==y(t)?t:t+""}var L=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;w(this,e),this.element=t,this.option={dataList:[],dataListShow:["flag","name"],phoneCountry:null!==n.phoneCountry?n.phoneCountry:"RU"},n.dataList&&(this.option.dataList=n.dataList),this.createInput()}var t,n,r;return t=e,(n=[{key:"createInput",value:function(){var e=this;this.phoneContainer=document.createElement("div"),this.phoneContainer.classList.add("phone_input"),this.inputElement=document.createElement("input"),this.inputElement.setAttribute("type","phone"),this.inputElement.setAttribute("required","required"),this.inputSetting(this.inputElement);var t=this.element.getAttribute("name");this.inputElement.setAttribute("name",t);var n=g(this.createSelectBox(),6),r=n[0],o=n[1],a=n[2],i=n[3],l=n[4],u=n[5];this.phoneContainer.appendChild(r),this.phoneContainer.appendChild(this.inputElement),this.element.replaceWith(this.phoneContainer),this.addListItems(o),this.searchInput(o);var c=!1;o.querySelectorAll("li").forEach((function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-value");a.textContent=n,e.inputSetting(e.inputElement,n)}))})),window.addEventListener("click",(function(e){r.contains(e.target)||l.contains(e.target)?i.contains(e.target)&&((c=!c)?(l.style.display="block",u.style.scale="-1"):(l.style.display="none",u.style.scale=null)):c&&(l.style.display="none",u.style.scale=null,c=!c)}))}},{key:"inputSetting",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.option.dataList.find((function(e){return e.code===(null===n?t.option.phoneCountry:n)})),o=r?r.phoneCode:"";e.value="".concat(o," (___) ___-____"),e.addEventListener("input",(function(t){var n=t.target.value;console.log();var r=o.replace(/\D/g,""),a=n.replace(/\D/g,""),i=o+" ("+a.slice(r.length,3+r.length)+"_".repeat(Math.max(0,4-a.length))+") "+a.slice(4,7)+"_".repeat(a.length>2+r.length?Math.max(0,6+r.length-a.length):3)+"-"+a.slice(7)+"_".repeat(a.length>6+r.length?Math.max(0,10+r.length-a.length):4),l=2+r.length;if(a.length<=3+r.length||(a.length<=6+r.length?l+=1+r.length:a.length<10+r.length?l+=2+r.length:i=o+" ("+a.slice(r.length,3+r.length)+") "+a.slice(3+r.length,6+r.length)+"-"+a.slice(6+r.length,10+r.length)),t.target.value=i,a.length<10+r.length){if(e.createTextRange){var u=e.createTextRange();u.move("character",0),u.select()}else e.setSelectionRange&&e.setSelectionRange(a.length+l,a.length+l);e.focus()}}))}},{key:"createSelectBox",value:function(){var e=document.createElement("div");e.classList.add("select_box");var t=document.createElement("div");t.classList.add("select_box-value");var n=document.createElement("span");n.classList.add("select_box-value-span"),n.textContent=this.option.phoneCountry;var r=document.createElement("div");r.classList.add("select_box-value-arrow");var o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","1em"),o.setAttribute("height","1em"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none");var a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("fill-rule","evenodd"),a.setAttribute("clip-rule","evenodd"),a.setAttribute("d","M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z"),a.setAttribute("fill","#FFF"),o.appendChild(a),r.appendChild(o),t.append(n),t.append(r);var i=document.createElement("div");i.classList.add("select_box-options");var l=document.createElement("input");l.setAttribute("type","text"),l.classList.add("search-box","search-box-search-list"),l.setAttribute("placeholder","Search");var u=document.createElement("ul");return u.classList.add("select_box-options-values"),i.appendChild(l),i.appendChild(u),e.appendChild(t),e.appendChild(i),[e,u,n,t,i,o]}},{key:"searchInput",value:function(e){var t=this.phoneContainer.querySelector(".search-box-search-list"),n=e.getElementsByTagName("li");t.addEventListener("input",(function(){for(var e=t.value.toLowerCase(),r=0;r<n.length;r++)n[r].textContent.toLowerCase().includes(e)?n[r].style.display="":n[r].style.display="none",n[r].getAttribute("data-value").toLowerCase().includes(e)&&(n[r].style.display="")}))}},{key:"addListItems",value:function(e){var t=this.option.dataList;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n],o=document.createElement("li");o.setAttribute("data-value",r.code),o.textContent=r.name,e.append(o);var a=document.createElement("img");a.setAttribute("src",r.flag),a.setAttribute("width","25px"),a.setAttribute("height","25px"),o.prepend(a)}}}])&&x(t.prototype,n),r&&x(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(){return S.apply(this,arguments)}function S(){return(S=v(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=v(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,n=t.reduce((function(e,t){return e[t.cca2]={name:t.name?t.name.common:null,code:t.cca2,flag:t.flags?t.flags.png:null,phoneCode:t.idd.root},e}),{}),e.abrupt("return",Object.values(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=v(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.ipbase.com/v2/info?apikey=JyBnvcgMNfv0eCw7ze2pmsY5Ns8p2R5Ed2ihzsa4");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.data.location.country.alpha2,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(0),console.error("There was a problem with the fetch operation:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}(function(){return A.apply(this,arguments)})().then((function(e){null!==e?function(){return C.apply(this,arguments)}().then((function(t){document.querySelectorAll("#phone").forEach((function(n){new L(n,{dataList:t,phoneCountry:e})}))})).catch((function(e){return console.error("Произошла ошибка:",e)})):document.querySelectorAll("#phone").forEach((function(e){new L(e,{dataList:countriesArray,phoneCountry:"RU"})}))})).catch((function(){document.querySelectorAll("#phone").forEach((function(e){new L(e,{dataList:countriesArray,phoneCountry:"RU"})}))}));n(55),n(92),n(138),n(139);function k(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}document.body.addEventListener("input",(function(e){e.target.classList.contains("input-words")&&(e.target.value=e.target.value.replace(/[^a-zа-яё\s]/gi,""))})),document.getElementById("form-reg").addEventListener("submit",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,o,a,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=new FormData(t.target),r=n.get("name"),o=n.get("email"),a=n.get("phone"),fetch("/assets/img/Unix Trading ebook.pdf").then((function(e){return e.blob()})).then((function(e){var t=document.createElement("a");t.href=window.URL.createObjectURL(e),t.download="Unix Trading ebook.pdf",t.click(),window.URL.revokeObjectURL(t.href)})),setTimeout((function(){window.location.replace("https://calendly.com/unixtradinghub/30min")}),5e3),o.includes(".")&&17===a.length?(i="https://maschbot.site/cgi-bin3/binorix.php?fullname="+encodeURIComponent(r)+"&email="+encodeURIComponent(o)+"&phone="+encodeURIComponent(a)+"&campaign=test",(l=new XMLHttpRequest).open("GET",i,!0),l.send(),Toastify({title:"Success",text:"Successfully registered. Soon we will call you!",theme:"dark",duration:5e3,destination:"https://calendly.com/unixtradinghub/30min",newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()):(o.includes(".")||Toastify({title:"Invalid Email",text:"Please enter a valid email address.",theme:"dark",duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #c36868, #c36868)"}}).showToast(),17!==a.length&&new Toast({title:"Invalid Phone Number",text:"Please enter a valid phone number.",theme:"dark",autoClose:5e3,className:"custom-toast",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){k(a,r,o,i,l,"next",e)}function l(e){k(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}());n(145),n(147)}});