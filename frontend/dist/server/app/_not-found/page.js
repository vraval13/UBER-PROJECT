(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},9727:()=>{},7990:()=>{},7967:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var n=r(260),o=r(8203),s=r(5155),i=r.n(s),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2804)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,8988)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=[],p={require:r,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7396:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},132:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},8900:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1066,23))},7460:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1902,23))},1076:(e,t,r)=>{Promise.resolve().then(r.bind(r,1674)),Promise.resolve().then(r.bind(r,7921)),Promise.resolve().then(r.bind(r,2833)),Promise.resolve().then(r.bind(r,8395)),Promise.resolve().then(r.bind(r,7659))},7876:(e,t,r)=>{Promise.resolve().then(r.bind(r,2214)),Promise.resolve().then(r.bind(r,5922)),Promise.resolve().then(r.bind(r,1661)),Promise.resolve().then(r.bind(r,1767)),Promise.resolve().then(r.bind(r,1439))},2214:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(5512),o=r(8009),s=r(9334),i=(r(5668),r(5922));let a=({children:e})=>{let t=(0,s.useRouter)(),{captain:r,setCaptain:a}=(0,o.useContext)(i.Q),[l,d]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{t.push("/CaptainLogin")},[null,t,a]),l)?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsx)(n.Fragment,{children:e})}},1439:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(5512),o=r(8009),s=r(9334),i=r(1767);let a=({children:e})=>{let t=(0,s.useRouter)(),{user:r,setUser:a}=(0,o.useContext)(i.l),[l,d]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{t.push("/UserLogin")},[null,t,a]),l)?(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,n.jsx)("div",{children:"Loading..."})}):(0,n.jsx)(n.Fragment,{children:e})}},5922:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s,default:()=>i});var n=r(5512),o=r(8009);let s=(0,o.createContext)(),i=({children:e})=>{let[t,r]=(0,o.useState)(null),[i,a]=(0,o.useState)(!1),[l,d]=(0,o.useState)(null);return(0,n.jsx)(s.Provider,{value:{captain:t,setCaptain:r,isLoading:i,setIsLoading:a,error:l,setError:d,updateCaptain:e=>{r(e)}},children:e})}},1661:(e,t,r)=>{"use strict";r.d(t,{d:()=>i,default:()=>l});var n=r(5512),o=r(8009),s=r(2226);let i=(0,o.createContext)(),a=(0,s.io)("https://uber-backend-zq0d.onrender.com"),l=({children:e})=>((0,o.useEffect)(()=>{a.on("connect",()=>{console.log("Connected to server")}),a.on("disconnect",()=>{console.log("Disconnected from server")})},[]),(0,n.jsx)(i.Provider,{value:{socket:a},children:e}))},1767:(e,t,r)=>{"use strict";r.d(t,{default:()=>i,l:()=>s});var n=r(5512),o=r(8009);let s=(0,o.createContext)(),i=({children:e})=>{let[t,r]=(0,o.useState)({email:"",fullName:{firstName:"",lastName:""}});return(0,n.jsx)("div",{children:(0,n.jsx)(s.Provider,{value:{user:t,setUser:r},children:e})})}},1674:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\CaptainProtectWrapper.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainProtectWrapper.js","default")},7659:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\UserProtectWrapper.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\UserProtectWrapper.js","default")},7921:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(6760);(0,n.registerClientReference)(function(){throw Error("Attempted to call CaptainDataContext() from the server but CaptainDataContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\contexts\\CaptainContext.js","CaptainDataContext");let o=(0,n.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\contexts\\\\CaptainContext.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\contexts\\CaptainContext.js","default")},2833:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(6760);(0,n.registerClientReference)(function(){throw Error("Attempted to call SocketContext() from the server but SocketContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\contexts\\SocketContext.js","SocketContext");let o=(0,n.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\contexts\\\\SocketContext.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\contexts\\SocketContext.js","default")},8395:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(6760);(0,n.registerClientReference)(function(){throw Error("Attempted to call UserDataContext() from the server but UserDataContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\contexts\\UserContext.js","UserDataContext");let o=(0,n.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\contexts\\\\UserContext.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\contexts\\UserContext.js","default")},2804:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>p});var n=r(2740),o=r(8896),s=r.n(o),i=r(7710),a=r.n(i);r(1135);var l=r(8395),d=r(7921),c=r(2833);r(7659),r(1674),r(7055);let p={title:"Uber",description:"Generated by create next app"};function u({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsx)("head",{children:(0,n.jsx)("link",{rel:"icon",href:"/fav.png",type:"image/png"})}),(0,n.jsx)("body",{className:`${s().variable} ${a().variable} antialiased`,children:(0,n.jsx)(c.default,{children:(0,n.jsx)(d.default,{children:(0,n.jsx)(l.default,{children:e})})})})]})}},8988:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(2740);r(6301);var o=r(5635);let s=()=>(0,n.jsxs)("div",{className:"h-screen flex flex-col items-center justify-center bg-gray-100",children:[(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)(o.default,{src:"/logo.png",alt:"Uber Logo",width:150,height:50})}),(0,n.jsx)("div",{className:"w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"}),(0,n.jsxs)("div",{className:"mt-4 text-center",children:[(0,n.jsx)("h2",{className:"text-lg font-medium text-gray-800",children:"Finding your ride..."}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Please wait while we connect you to the nearest driver."})]})]})},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,707],()=>r(7967));module.exports=n})();