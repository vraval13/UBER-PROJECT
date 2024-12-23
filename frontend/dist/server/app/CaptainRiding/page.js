(()=>{var e={};e.id=320,e.ids=[320],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},3467:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(260),i=r(8203),n=r(5155),a=r.n(n),l=r(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["CaptainRiding",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4183)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainRiding\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2804)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,8988)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainRiding\\page.js"],p={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/CaptainRiding/page",pathname:"/CaptainRiding",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5548:(e,t,r)=>{Promise.resolve().then(r.bind(r,4183))},3692:(e,t,r)=>{Promise.resolve().then(r.bind(r,5468))},5468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5512),i=r(5103),n=r(8531),a=r.n(n),l=r(8009);r(5303);var o=r(9334);let d=({ride:e,setFinishRidePanel:t})=>{let r=(0,o.useRouter)();async function n(){if(!e||!e._id){console.error("Ride data is not available");return}try{(await fetch("https://uber-backend-zq0d.onrender.com/rides/end-ride",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({rideId:e._id})})).ok?r.replace("/CaptainHome"):console.error("Failed to end ride")}catch(e){console.error("Error ending ride:",e)}}return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("h5",{className:"p-1 text-center w-[93%] absolute top-0",onClick:()=>t(!1),children:(0,s.jsx)("i",{className:"text-3xl text-gray-800 ri-arrow-down-wide-line"})}),(0,s.jsx)("h3",{className:"text-2xl font-semibold mb-5 pt-10",children:"Finish this Ride"}),(0,s.jsxs)("div",{className:"flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(i.default,{src:"/random1.jpeg",alt:"User Image",width:50,height:50,className:"rounded-full"}),(0,s.jsx)("h2",{className:"text-lg font-medium",children:e?.user?.fullname?.firstname||"Unknown User"})]}),(0,s.jsx)("h5",{className:"text-lg font-semibold",children:"2.2KM"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 mt-5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-5 p-3 border-b-2",children:[(0,s.jsx)("i",{className:"text-lg ri-map-pin-user-fill"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-medium",children:e?.pickup||"N/A"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Pickup Location"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-5 p-3 border-b-2",children:[(0,s.jsx)("i",{className:"text-lg ri-map-pin-2-fill"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-medium",children:e?.destination||"N/A"}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Dropoff Location"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-5 p-3",children:[(0,s.jsx)("i",{className:"text-lg ri-currency-line"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{className:"text-lg font-medium",children:["₹",e?.fare||"N/A"]}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:"Cash"})]})]})]}),(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsx)("button",{onClick:n,className:"w-full text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg",children:"Finish Ride"})})]})};var c=r(2138),p=r(1930);let u=()=>{(0,o.useRouter)();let e=(0,o.useSearchParams)(),[t,r]=(0,l.useState)(!1),[n,u]=(0,l.useState)(!1),[x,m]=(0,l.useState)(null),h=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=e.get("rideId"),r=e.get("pickup"),s=e.get("destination"),i=e.get("fare"),n=e.get("username");t&&r&&s&&i&&n&&m({_id:t,pickup:r,destination:s,fare:i,user:{fullname:{firstname:n}}})},[e]),console.log("Ride Data:",x),(0,l.useEffect)(()=>{h.current&&c.Ay.to(h.current,{transform:t?"translateY(0)":"translateY(100%)",duration:.5})},[t]),(0,s.jsxs)("div",{className:"h-screen relative flex flex-col justify-end",children:[(0,s.jsxs)("div",{className:"fixed p-6 top-0 flex items-center justify-between w-screen",children:[(0,s.jsx)(i.default,{className:"w-16",src:"/uber-driver.svg",alt:"Uber Logo",width:64,height:64}),(0,s.jsx)(a(),{href:"/CaptainHome",className:"h-10 w-10 bg-white flex items-center justify-center rounded-full",children:(0,s.jsx)("i",{className:"text-lg font-medium ri-logout-box-r-line"})})]}),(0,s.jsx)("div",{className:"h-4/5",children:(0,s.jsx)(p.A,{})}),(0,s.jsxs)("div",{className:"h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10",onClick:()=>r(!0),children:[(0,s.jsx)("h5",{className:"p-1 text-center w-[90%] absolute top-0",children:(0,s.jsx)("i",{className:"text-3xl text-black-200 ri-arrow-up-wide-line"})}),(0,s.jsx)("h4",{className:"text-xl font-semibold",children:"4 KM away"}),(0,s.jsx)("button",{className:"bg-green-600 text-white font-semibold p-3 px-10 rounded-lg",children:"Complete Ride"})]}),(0,s.jsx)("div",{ref:h,className:"fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12",children:(0,s.jsx)(d,{ride:x,setRidePopUpPanel:u,setFinishRidePanel:r})})]})}},4183:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\CaptainRiding\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainRiding\\page.js","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,707,77,531,713,138,58],()=>r(3467));module.exports=s})();