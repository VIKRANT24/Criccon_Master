"use strict";(self.webpackChunktennis_cricket=self.webpackChunktennis_cricket||[]).push([[764],{379:function(e,s,n){var a=n(184),r=function(e){return(0,a.jsxs)("div",{className:"card ".concat(e.className?e.className:""),children:[" ",e.children," "]})};r.Header=function(e){return(0,a.jsxs)("div",{className:"card-header d-flex justify-content-between ".concat(e.className?e.className:""),children:[" ",e.children," "]})},r.Body=function(e){return(0,a.jsxs)("div",{className:"card-body ".concat(e.className?e.className:""),children:[" ",e.children," "]})},r.Footer=function(e){return(0,a.jsxs)("div",{className:"card-footer",children:[" ",e.children," "]})},r.Header.Title=function(e){return(0,a.jsxs)("div",{className:"header-title ".concat(e.className?e.className:""),children:[" ",e.children," "]})},r.Header.Action=function(e){return(0,a.jsxs)("div",{className:"header-action ".concat(e.className?e.className:""),children:[" ",e.children," "]})},s.Z=r},5104:function(e,s,n){var a=n(9085);s.Z=function(e,s){"00"===e?a.Am.success(s,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):a.Am.error(s,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}},4250:function(e,s,n){n.r(s),n.d(s,{default:function(){return L}});var a=n(4942),r=n(1413),c=n(9439),o=n(2791),i=n(9743),t=n(2677),l=n(2592),d=n(6516),m=n(3360),h=n(1087),u=n(379),g=n(8687),f=n(9085),p=n(3144),x=n(5671),b=n(8434),Z=n(7606),j=n(5104),N=n(3410),v=n(9092),w=new((0,p.Z)((function e(){(0,x.Z)(this,e),this.LoginApi=function(e){v.Z.dispatch((0,N._)(!0)),(0,b.e5)(Z.I,e.email,e.password).then((function(e){console.log("Response: "+JSON.stringify(e)),(0,j.Z)("00","Login successful."),v.Z.dispatch((0,N._)(!1)),sessionStorage.setItem("user_uid",e.user.uid),console.log("=================================="),window.location.href="http://localhost:3000/home/dashboard"})).catch((function(e){console.log("Response: "+JSON.stringify(e)),(0,j.Z)("01","Bad user credentials."),v.Z.dispatch((0,N._)(!1)),console.log("==================================")}))}}))),y=n(145),k=n.p+"static/media/login.c566cea9376138242e28.jpg",C=n(7445),I=n(184),L=(0,g.$j)((function(e){return{showLoading:e.auth.showLoading}}))((function(e){var s=(0,o.useState)(""),n=(0,c.Z)(s,2),g=n[0],p=n[1];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.Ix,{}),(0,I.jsx)(y.Z,{loading:e.showLoading}),(0,I.jsx)("section",{className:"login-content",children:(0,I.jsxs)(i.Z,{className:"m-0 align-items-center bg-white vh-100 bgcolor",children:[(0,I.jsx)(t.Z,{md:"6",children:(0,I.jsx)(i.Z,{className:"justify-content-center",children:(0,I.jsx)(t.Z,{md:"10",children:(0,I.jsx)(u.Z,{className:"card-transparent shadow-none d-flex justify-content-center mb-0 auth-card cardborder",children:(0,I.jsxs)(u.Z.Body,{children:[(0,I.jsxs)(h.rU,{to:"/home/dashboard",className:"navbar-brand d-flex align-items-center mb-5",children:[(0,I.jsx)(l.Z,{src:C,height:"50px",width:"50px",alt:"images"}),(0,I.jsx)("h4",{className:"logo-title ms-3",children:"TennisCricket.in"})]}),(0,I.jsxs)(d.Z,{onSubmit:function(e){e.preventDefault();var s={email:g.email[0],password:g.password[0]};console.log("Component : Login"),console.log("Request : "+JSON.stringify(s)),w.LoginApi(s)}.bind(undefined),children:[(0,I.jsxs)(i.Z,{children:[(0,I.jsx)(t.Z,{md:"12",className:"mb-3 form-group",children:(0,I.jsxs)(d.Z.Floating,{className:" mb-3",children:[(0,I.jsx)(d.Z.Control,{type:"email",className:"",id:"email",name:"email",placeholder:"name@example.com",onChange:function(e){return p((0,r.Z)((0,r.Z)({},g),{},(0,a.Z)({},e.target.name,[e.target.value])))},required:!0}),(0,I.jsx)(d.Z.Label,{htmlFor:"floatingInput",children:"Email"})]})}),(0,I.jsx)(t.Z,{md:"12",className:"mb-3 form-group",children:(0,I.jsxs)(d.Z.Floating,{className:" mb-3",children:[(0,I.jsx)(d.Z.Control,{type:"password",className:"",id:"password",name:"password",placeholder:"name@example.com",onChange:function(e){return p((0,r.Z)((0,r.Z)({},g),{},(0,a.Z)({},e.target.name,[e.target.value])))},required:!0}),(0,I.jsx)(d.Z.Label,{htmlFor:"floatingInput",children:"Password"})]})}),(0,I.jsxs)(t.Z,{lg:"12",className:"d-flex justify-content-between",children:[(0,I.jsxs)(d.Z.Check,{className:"form-check mb-3",children:[(0,I.jsx)(d.Z.Check.Input,{type:"checkbox",id:"customCheck1",required:!0}),(0,I.jsx)(d.Z.Check.Label,{htmlFor:"customCheck1",children:"Remember Me"})]}),(0,I.jsx)(h.rU,{to:"/auth/recoverpw",children:"Forgot Password?"})]})]}),(0,I.jsx)(d.Z.Group,{className:"d-flex justify-content-center",children:(0,I.jsx)(m.Z,{variant:"btn btn-primary",type:"submit",children:"Submit form"})})]})]})})})})}),(0,I.jsx)(t.Z,{md:"6",className:"d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden bgrt_img",children:(0,I.jsx)(l.Z,{src:k,className:"Image-fluid gradient-main animated-scaleX bgrt_img",alt:"images"})})]})})]})}))},7606:function(e,s,n){n.d(s,{I:function(){return c}});var a=n(5652),r=(0,n(4702).ZF)({apiKey:"AIzaSyBphAz67pZkq3dk5yOGyDhgn_g9ERSeOas",authDomain:"tc-live-score.firebaseapp.com",databaseURL:"https://tc-live-score.firebaseio.com",projectId:"tc-live-score",storageBucket:"tc-live-score.appspot.com",messagingSenderId:"102476373342"}),c=(0,a.v0)(r)},2592:function(e,s,n){var a=n(1413),r=n(5987),c=n(1694),o=n.n(c),i=n(2791),t=n(2007),l=n.n(t),d=n(162),m=n(184),h=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],u=(l().string,l().bool,l().bool,l().bool,l().bool,i.forwardRef((function(e,s){var n=e.bsPrefix,c=e.className,i=e.fluid,t=void 0!==i&&i,l=e.rounded,u=void 0!==l&&l,g=e.roundedCircle,f=void 0!==g&&g,p=e.thumbnail,x=void 0!==p&&p,b=(0,r.Z)(e,h);return n=(0,d.vE)(n,"img"),(0,m.jsx)("img",(0,a.Z)((0,a.Z)({ref:s},b),{},{className:o()(c,t&&"".concat(n,"-fluid"),u&&"rounded",f&&"rounded-circle",x&&"".concat(n,"-thumbnail"))}))})));u.displayName="Image",s.Z=u},7445:function(e,s,n){e.exports=n.p+"static/media/logo.1718b007acf55cba8098.png"}}]);
//# sourceMappingURL=764.57999bfd.chunk.js.map