(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(208),r=(a(45),a(212)),s=a.n(r);function l(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("ul",{className:"icons"},s.a.socialLinks.map((function(e){var t=e.icon,a=e.name,n=e.url;return i.a.createElement("li",null,i.a.createElement("a",{href:n,class:"icon "+t},i.a.createElement("span",{class:"label"},a)))}))),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Suitability")))}function c(){return i.a.createElement("header",{id:"header"},i.a.createElement("h1",null,s.a.heading),i.a.createElement("p",null,s.a.subHeading),i.a.createElement("p",null,s.a.consolation),i.a.createElement("p",null,s.a.callToAction))}var u=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={message:""},t.onSubmit=t.onSubmit.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.onSubmit=function(e){var t=this;e.preventDefault(),e.stopPropagation(),this.setState({message:"Thank you!"}),setTimeout((function(){t.setState({message:""})}),3e3)},o.render=function(){var e=this.state.message;return i.a.createElement("form",{id:"signup-form",method:"post",action:"https://formspree.io/suitabilityCIC@gmail.com"},i.a.createElement("input",{type:"email",name:"_replyto",id:"email",placeholder:"Email Address",required:!0}),i.a.createElement("input",{type:"submit",value:"Keep me updated!"}),i.a.createElement("span",{className:(e?"visible success":"")+" message"},e))},n}(n.Component);var p=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={pos:0,lastPos:0},t.rotateSlide=t.rotateSlide.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.rotateSlide=function(){var e=this,t=this.props.settings;setInterval((function(){var a=e.state,n=a.pos,i=a.lastPos;i=n,++n>=t.images.length&&(n=0),setTimeout((function(){i=n,e.setState({lastPos:i})}),t.delay/2),e.setState({lastPos:i,pos:n})}),t.delay)},o.componentDidMount=function(){this.rotateSlide()},o.render=function(){var e=this.state,t=e.pos,a=e.lastPos,n=this.props.settings;return i.a.createElement("div",{id:"bg"},n.images.map((function(e,n){return i.a.createElement("div",{key:e.url,style:{backgroundPosition:e.position,backgroundImage:'url("'+e.url+'")'},className:n===t?"visible top":n===a?"visible":""})})),";")},n}(n.PureComponent),m={images:[{url:a(213),position:"center"},{url:a(214),position:"center"}],delay:6e3};t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(c,null),i.a.createElement(u,null),i.a.createElement(l,null),i.a.createElement(p,{settings:m}))}},212:function(e,t){e.exports={siteTitle:"Suitability",manifestName:"Suitability",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#FFFFFF",manifestThemeColor:"#FFFFFF",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",heading:"Suitability",subHeading:"Are you looking for employment in the North East? Are you worried you don't have appropriate workwear for your interview?",consolation:"We're here to help. Soon...",callToAction:"Let’s stay in touch.",socialLinks:[{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/suit_ability"},{icon:"fa-envelope-o",name:"Email",url:"mailto:suitabilityCIC@gmail.com"}]}},213:function(e,t,a){e.exports=a.p+"static/option1-e38ab60f7238087d5ad6056d363a45e7.jpg"},214:function(e,t,a){e.exports=a.p+"static/positve-9676bd7f26a41be25f299778ffbf1366.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-b968a475e4c5b3d602ef.js.map