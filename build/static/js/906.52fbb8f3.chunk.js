(self.webpackChunktennis_cricket=self.webpackChunktennis_cricket||[]).push([[906],{5341:function(e,a,i){"use strict";i.d(a,{FT:function(){return o}});var r=i(9439),t=i(2791),s=i(184),n=["as","disabled"];function o(e){var a=e.tagName,i=e.disabled,r=e.href,t=e.target,s=e.rel,n=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=r||null!=t||null!=s?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:i},f];var u=function(e){(i||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),i?e.stopPropagation():null==o||o(e)};return"a"===a&&(r||(r="#"),i&&(r=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:i?void 0:c,href:r,target:"a"===a?t:void 0,"aria-disabled":i||void 0,rel:"a"===a?s:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var l=t.forwardRef((function(e,a){var i=e.as,t=e.disabled,l=function(e,a){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n),c=o(Object.assign({tagName:i,disabled:t},l)),d=(0,r.Z)(c,2),f=d[0],u=d[1].tagName;return(0,s.jsx)(u,Object.assign({},l,f,{ref:a}))}));l.displayName="Button",a.ZP=l},888:function(e,a,i){"use strict";var r=i(9047);function t(){}function s(){}s.resetWarningCache=t,e.exports=function(){function e(e,a,i,t,s,n){if(n!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:t};return i.PropTypes=i,i}},2007:function(e,a,i){e.exports=i(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3360:function(e,a,i){"use strict";var r=i(1413),t=i(9439),s=i(5987),n=i(1694),o=i.n(n),l=i(2791),c=i(5341),d=i(162),f=i(184),u=["as","bsPrefix","variant","size","active","disabled","className"],v=l.forwardRef((function(e,a){var i=e.as,n=e.bsPrefix,l=e.variant,v=void 0===l?"primary":l,m=e.size,p=e.active,b=void 0!==p&&p,Z=e.disabled,x=void 0!==Z&&Z,y=e.className,N=(0,s.Z)(e,u),h=(0,d.vE)(n,"btn"),g=(0,c.FT)((0,r.Z)({tagName:i,disabled:x},N)),P=(0,t.Z)(g,2),j=P[0],k=P[1].tagName;return(0,f.jsx)(k,(0,r.Z)((0,r.Z)((0,r.Z)({},j),N),{},{ref:a,disabled:x,className:o()(y,h,b&&"active",v&&"".concat(h,"-").concat(v),m&&"".concat(h,"-").concat(m),N.href&&x&&"disabled")}))}));v.displayName="Button",a.Z=v},783:function(e,a,i){"use strict";var r=i(1413),t=i(5987),s=i(1694),n=i.n(s),o=i(2791),l=i(2007),c=i.n(l),d=i(184),f=["as","className","type","tooltip"],u={type:c().string,tooltip:c().bool,as:c().elementType},v=o.forwardRef((function(e,a){var i=e.as,s=void 0===i?"div":i,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,t.Z)(e,f);return(0,d.jsx)(s,(0,r.Z)((0,r.Z)({},m),{},{ref:a,className:n()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u,a.Z=v},6516:function(e,a,i){"use strict";i.d(a,{Z:function(){return q}});var r=i(1413),t=i(5987),s=i(1694),n=i.n(s),o=i(2007),l=i.n(o),c=i(2791),d=i(783),f=i(6882),u=i(4934),v=i(162),m=i(184),p=["bsPrefix","className","htmlFor"],b=c.forwardRef((function(e,a){var i=e.bsPrefix,s=e.className,o=e.htmlFor,l=(0,t.Z)(e,p),d=(0,c.useContext)(u.Z).controlId;return i=(0,v.vE)(i,"form-check-label"),(0,m.jsx)("label",(0,r.Z)((0,r.Z)({},l),{},{ref:a,htmlFor:o||d,className:n()(s,i)}))}));b.displayName="FormCheckLabel";var Z=b;var x=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],y=c.forwardRef((function(e,a){var i=e.id,s=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,p=void 0!==l&&l,b=e.reverse,y=void 0!==b&&b,N=e.disabled,h=void 0!==N&&N,g=e.isValid,P=void 0!==g&&g,j=e.isInvalid,k=void 0!==j&&j,I=e.feedbackTooltip,w=void 0!==I&&I,F=e.feedback,C=e.feedbackType,R=e.className,T=e.style,O=e.title,E=void 0===O?"":O,S=e.type,z=void 0===S?"checkbox":S,_=e.label,V=e.children,L=e.as,D=void 0===L?"input":L,U=(0,t.Z)(e,x);s=(0,v.vE)(s,"form-check"),o=(0,v.vE)(o,"form-switch");var B=(0,c.useContext)(u.Z).controlId,H=(0,c.useMemo)((function(){return{controlId:i||B}}),[B,i]),W=!V&&null!=_&&!1!==_||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,Z),A=(0,m.jsx)(f.Z,(0,r.Z)((0,r.Z)({},U),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:P,isInvalid:k,disabled:h,as:D}));return(0,m.jsx)(u.Z.Provider,{value:H,children:(0,m.jsx)("div",{style:T,className:n()(R,W&&s,p&&"".concat(s,"-inline"),y&&"".concat(s,"-reverse"),"switch"===z&&o),children:V||(0,m.jsxs)(m.Fragment,{children:[A,W&&(0,m.jsx)(Z,{title:E,children:_}),F&&(0,m.jsx)(d.Z,{type:C,tooltip:w,children:F})]})})})}));y.displayName="FormCheck";var N=Object.assign(y,{Input:f.Z,Label:Z}),h=i(4292),g=(0,i(6543).Z)("form-floating"),P=["controlId","as"],j=c.forwardRef((function(e,a){var i=e.controlId,s=e.as,n=void 0===s?"div":s,o=(0,t.Z)(e,P),l=(0,c.useMemo)((function(){return{controlId:i}}),[i]);return(0,m.jsx)(u.Z.Provider,{value:l,children:(0,m.jsx)(n,(0,r.Z)((0,r.Z)({},o),{},{ref:a}))})}));j.displayName="FormGroup";var k=j,I=(i(2391),i(2677)),w=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],F=c.forwardRef((function(e,a){var i=e.as,s=void 0===i?"label":i,o=e.bsPrefix,l=e.column,d=void 0!==l&&l,f=e.visuallyHidden,p=void 0!==f&&f,b=e.className,Z=e.htmlFor,x=(0,t.Z)(e,w),y=(0,c.useContext)(u.Z).controlId;o=(0,v.vE)(o,"form-label");var N="col-form-label";"string"===typeof d&&(N="".concat(N," ").concat(N,"-").concat(d));var h=n()(b,o,p&&"visually-hidden",d&&N);return Z=Z||y,d?(0,m.jsx)(I.Z,(0,r.Z)({ref:a,as:"label",className:h,htmlFor:Z},x)):(0,m.jsx)(s,(0,r.Z)({ref:a,className:h,htmlFor:Z},x))}));F.displayName="FormLabel";var C=F,R=["bsPrefix","className","id"],T=c.forwardRef((function(e,a){var i=e.bsPrefix,s=e.className,o=e.id,l=(0,t.Z)(e,R),d=(0,c.useContext)(u.Z).controlId;return i=(0,v.vE)(i,"form-range"),(0,m.jsx)("input",(0,r.Z)((0,r.Z)({},l),{},{type:"range",ref:a,className:n()(s,i),id:o||d}))}));T.displayName="FormRange";var O=T,E=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],S=c.forwardRef((function(e,a){var i=e.bsPrefix,s=e.size,o=e.htmlSize,l=e.className,d=e.isValid,f=void 0!==d&&d,p=e.isInvalid,b=void 0!==p&&p,Z=e.id,x=(0,t.Z)(e,E),y=(0,c.useContext)(u.Z).controlId;return i=(0,v.vE)(i,"form-select"),(0,m.jsx)("select",(0,r.Z)((0,r.Z)({},x),{},{size:o,ref:a,className:n()(l,i,s&&"".concat(i,"-").concat(s),f&&"is-valid",b&&"is-invalid"),id:Z||y}))}));S.displayName="FormSelect";var z=S,_=["bsPrefix","className","as","muted"],V=c.forwardRef((function(e,a){var i=e.bsPrefix,s=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,d=(0,t.Z)(e,_);return i=(0,v.vE)(i,"form-text"),(0,m.jsx)(l,(0,r.Z)((0,r.Z)({},d),{},{ref:a,className:n()(s,i,c&&"text-muted")}))}));V.displayName="FormText";var L=V,D=c.forwardRef((function(e,a){return(0,m.jsx)(N,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));D.displayName="Switch";var U=Object.assign(D,{Input:N.Input,Label:N.Label}),B=["bsPrefix","className","children","controlId","label"],H=c.forwardRef((function(e,a){var i=e.bsPrefix,s=e.className,o=e.children,l=e.controlId,c=e.label,d=(0,t.Z)(e,B);return i=(0,v.vE)(i,"form-floating"),(0,m.jsxs)(k,(0,r.Z)((0,r.Z)({ref:a,className:n()(s,i),controlId:l},d),{},{children:[o,(0,m.jsx)("label",{htmlFor:l,children:c})]}))}));H.displayName="FloatingLabel";var W=H,A=["className","validated","as"],G={_ref:l().any,validated:l().bool,as:l().elementType},M=c.forwardRef((function(e,a){var i=e.className,s=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,t.Z)(e,A);return(0,m.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:n()(i,s&&"was-validated")}))}));M.displayName="Form",M.propTypes=G;var q=Object.assign(M,{Group:k,Control:h.Z,Floating:g,Check:N,Switch:U,Label:C,Text:L,Range:O,Select:z,FloatingLabel:W})},6882:function(e,a,i){"use strict";var r=i(1413),t=i(5987),s=i(1694),n=i.n(s),o=i(2791),l=i(4934),c=i(162),d=i(184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],u=o.forwardRef((function(e,a){var i=e.id,s=e.bsPrefix,u=e.className,v=e.type,m=void 0===v?"checkbox":v,p=e.isValid,b=void 0!==p&&p,Z=e.isInvalid,x=void 0!==Z&&Z,y=e.as,N=void 0===y?"input":y,h=(0,t.Z)(e,f),g=(0,o.useContext)(l.Z).controlId;return s=(0,c.vE)(s,"form-check-input"),(0,d.jsx)(N,(0,r.Z)((0,r.Z)({},h),{},{ref:a,type:m,id:i||g,className:n()(u,s,b&&"is-valid",x&&"is-invalid")}))}));u.displayName="FormCheckInput",a.Z=u},4934:function(e,a,i){"use strict";var r=i(2791).createContext({});a.Z=r},4292:function(e,a,i){"use strict";var r=i(1413),t=i(4942),s=i(5987),n=i(1694),o=i.n(n),l=i(2791),c=(i(2391),i(783)),d=i(4934),f=i(162),u=i(184),v=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],m=l.forwardRef((function(e,a){var i,n,c=e.bsPrefix,m=e.type,p=e.size,b=e.htmlSize,Z=e.id,x=e.className,y=e.isValid,N=void 0!==y&&y,h=e.isInvalid,g=void 0!==h&&h,P=e.plaintext,j=e.readOnly,k=e.as,I=void 0===k?"input":k,w=(0,s.Z)(e,v),F=(0,l.useContext)(d.Z).controlId;(c=(0,f.vE)(c,"form-control"),P)?i=(0,t.Z)({},"".concat(c,"-plaintext"),!0):(n={},(0,t.Z)(n,c,!0),(0,t.Z)(n,"".concat(c,"-").concat(p),p),i=n);return(0,u.jsx)(I,(0,r.Z)((0,r.Z)({},w),{},{type:m,size:b,ref:a,readOnly:j,id:Z||F,className:o()(x,i,N&&"is-valid",g&&"is-invalid","color"===m&&"".concat(c,"-color"))}))}));m.displayName="FormControl",a.Z=Object.assign(m,{Feedback:c.Z})},6543:function(e,a,i){"use strict";i.d(a,{Z:function(){return v}});var r=i(1413),t=i(5987),s=i(1694),n=i.n(s),o=/-(.)/g;var l=i(2791),c=i(162),d=i(184),f=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(o,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.displayName,s=void 0===i?u(e):i,o=a.Component,v=a.defaultProps,m=l.forwardRef((function(a,i){var s=a.className,l=a.bsPrefix,u=a.as,m=void 0===u?o||"div":u,p=(0,t.Z)(a,f),b=(0,r.Z)((0,r.Z)({},v),p),Z=(0,c.vE)(l,e);return(0,d.jsx)(m,(0,r.Z)({ref:i,className:n()(s,Z)},b))}));return m.displayName=s,m}},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=906.52fbb8f3.chunk.js.map