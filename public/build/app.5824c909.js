(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"UmG/":function(e,t,a){"use strict";a.r(t);a("pNMO"),a("4Brf"),a("0oug"),a("4mDm"),a("wLYn"),a("uL8W"),a("eoL8"),a("NBAS"),a("ExoC"),a("07d7"),a("PKPk"),a("3bBZ");var n=a("q1tI"),r=a.n(n),o=a("i8i4"),l=a.n(o),i=a("vDqi"),c=a.n(i),s=a("17x9"),u=a.n(s),p=(a("TWNs"),a("rB9j"),a("JfAA"),a("xkgm"));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=h(t).call(this,e))||"object"!==f(o)&&"function"!=typeof o?d(n):o).urlRef=r.a.createRef(),a.toggle=a.toggle.bind(d(a)),a.toggleDepth=a.toggleDepth.bind(d(a)),a.onSubmit=a.onSubmit.bind(d(a)),a.state={url:"",depth:5,profile:"All urls",dropdownOpen:!1,dropdownDepthOpen:!1,formError:""},a}var a,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n["Component"]),a=t,(o=[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"toggleDepth",value:function(){this.setState({dropdownDepthOpen:!this.state.dropdownDepthOpen})}},{key:"onSubmit",value:function(e){var t;if(e.preventDefault(),t=this.state.url,new RegExp("https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,}").test(t)){var a={url:this.state.url,profile:this.state.profile,depth:this.state.depth};this.props.onSubmit(a)}else this.setState({formError:"Please enter valid url (https://example.com/)"})}},{key:"handleUrlChange",value:function(e){this.setState({formError:""});var t=e.target;this.setState({url:t.value})}},{key:"handleDepthChange",value:function(e){this.setState({depth:e})}},{key:"handleProfileChange",value:function(e){var t=this.getProfile(e);this.setState({profile:t})}},{key:"getProfile",value:function(e){switch(e){case 1:return"All urls";case 2:return"Internal urls";case 3:return"Subdomains"}}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{ref:this.urlRef,noValidate:!0,onSubmit:function(t){return e.onSubmit(t)},className:"form"},r.a.createElement("div",{className:"row pt-5 pb-5 border-bottom top-menu"},r.a.createElement("div",{className:"col-md-6 pt-5"},r.a.createElement("p",{className:"offset-sm-6 col-sm-6 text-justify intro"},"Type any url and start crawling. You can set crawl profile to look at only specific routes, or choose crawl depth to set how deep to go through web page hierarchically."),r.a.createElement("p",{className:"offset-sm-6 col-sm-6 text-justify"},"Api: ",r.a.createElement("span",{className:" email"},'api/crawl - depth | profile | url"'))),r.a.createElement("div",{className:"col-md-6 pt-5"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"url",className:"col-sm-10 col-form-label url-label"},"Website Url:"),r.a.createElement("input",{onChange:function(t){return e.handleUrlChange(t)},type:"text",className:"form-control col-sm-5 url-input",name:"url",id:"url",required:!0,autoFocus:!0,placeholder:"Please enter website url"}),r.a.createElement("div",{className:"form-error col-sm-12"},this.state.formError),r.a.createElement("label",{htmlFor:"url",className:"col-sm-10 col-form-label url-label"},"Crawling profile:"),r.a.createElement(p.a,{className:"profile-select",isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(p.d,{caret:!0},this.state.profile),r.a.createElement(p.c,null,r.a.createElement(p.b,{onClick:function(t){return e.handleProfileChange(1)}},"All urls"),r.a.createElement(p.b,{onClick:function(t){return e.handleProfileChange(2)}},"Internal urls"),r.a.createElement(p.b,{onClick:function(t){return e.handleProfileChange(3)}},"Subdomains"))),r.a.createElement("label",{htmlFor:"url",className:"col-sm-10 col-form-label url-label"},"Crawling depth:"),r.a.createElement(p.a,{className:"profile-select",isOpen:this.state.dropdownDepthOpen,toggle:this.toggleDepth},r.a.createElement(p.d,{caret:!0},this.state.depth),r.a.createElement(p.c,null,r.a.createElement(p.b,{header:!0},"Maximum five for performance purposes"),r.a.createElement(p.b,{onClick:function(t){return e.handleDepthChange(1)}},"1"),r.a.createElement(p.b,{onClick:function(t){return e.handleDepthChange(2)}},"2"),r.a.createElement(p.b,{onClick:function(t){return e.handleDepthChange(3)}},"3"),r.a.createElement(p.b,{onClick:function(t){return e.handleDepthChange(4)}},"4"),r.a.createElement(p.b,{onClick:function(t){return e.handleDepthChange(5)}},"5"))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"submit-url"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Start Crawling >")))))))}}])&&m(a.prototype,o),l&&m(a,l),t}();y.propTypes={onSubmit:u.a.func};var v=y,w=(a("ma9I"),a("pjDv"),a("yq1k"),a("J30X"),a("2B1R"),a("DQNa"),a("JTJg"),a("Y+p1")),g=a.n(w),E=a("Pndf"),D=a.n(E);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=r.a.createElement(D.a,{type:"ball-pulse"}),_=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=N(t).call(this,e))||"object"!==S(r)&&"function"!=typeof r?C(n):r).state={isLoading:!1,saved:[],crawledData:[]},a.saveData=a.saveData.bind(C(a)),a}var a,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,n["Component"]),a=t,(o=[{key:"componentDidUpdate",value:function(e){g()(e.isLoading,this.props.isLoading)||this.setState({isLoading:this.props.isLoading}),g()(e.saved,this.props.saved)||this.setState({saved:[].concat(O(this.state.saved),[this.props.saved])}),g()(e.crawledData,this.props.crawledData)||this.setState({crawledData:[].concat(O(this.state.crawledData),[this.props.crawledData])})}},{key:"saveData",value:function(e){this.props.saveData(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.crawledData.map(function(t,a){return r.a.createElement("div",{key:a,className:"row pt-3"},r.a.createElement("div",{className:"col-md-6 offset-md-3 crawl-pane"},r.a.createElement("p",{className:"block-title"},t[0].path," ",e.state.saved.includes(t[0].path)&&r.a.createElement("span",{className:"saved"},"Saved")),r.a.createElement(p.e,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Url"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,t.map(function(e,t){return e.title.length>0?e.title.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("span",{className:"path"},e.path)),r.a.createElement("td",null,r.a.createElement("span",{className:"email"},t)))}):r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("span",{className:"path"},e.path)),r.a.createElement("td",null,r.a.createElement("span",{className:"path"},"No Data")))}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"submit-url"},r.a.createElement("button",{onClick:function(){return e.saveData(t)},type:"submit",className:"btn btn-primary save-btn"},"Save")))))}),this.state.isLoading&&r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-md-6 offset-md-3 crawl-pane"},P,r.a.createElement("div",null,this.props.formData&&r.a.createElement("p",{className:"loading-text"},"Crawling data for ",r.a.createElement("strong",null,this.props.formData.url))))))}}])&&k(a.prototype,o),l&&k(a,l),t}();_.propTypes={isLoading:u.a.bool,formData:u.a.any,crawledData:u.a.any,saveData:u.a.func,saved:u.a.any};var A=_;function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(e=!(n=T(t).call(this))||"object"!==L(n)&&"function"!=typeof n?Z(a):n).state={isLoading:!1,formData:{},crawledData:[],saved:""},e.formHandler=e.formHandler.bind(Z(e)),e.saveData=e.saveData.bind(Z(e)),e}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r.a.Component),a=t,(n=[{key:"formHandler",value:function(e){var t=this;this.setState({isLoading:!0,formData:e});var a=this;c.a.post("api/crawl",e).then(function(e){a.setState({crawledData:e.data})}).catch(function(e){console.log(e)}).then(function(){t.setState({isLoading:!1})})}},{key:"fetchData",value:function(){var e=this;c.a.get("api/fetch").then(function(t){e.setState({crawledData:t.data})}).catch(function(e){console.log(e)})}},{key:"saveData",value:function(e){var t=this;c.a.post("api/save",e).then(function(a){console.log(a),t.setState({saved:e[0].path})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{onSubmit:this.formHandler}),r.a.createElement(A,{saveData:this.saveData,isLoading:this.state.isLoading,formData:this.state.formData,crawledData:this.state.crawledData,saved:this.state.saved}))}}])&&x(a.prototype,n),o&&x(a,o),t}();l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[["UmG/","runtime",0]]]);