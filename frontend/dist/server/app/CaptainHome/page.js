(()=>{var e={};e.id=374,e.ids=[374],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},4827:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=s(260),i=s(8203),n=s(5155),a=s.n(n),l=s(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["CaptainHome",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5817)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainHome\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2804)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,8988)),"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainHome\\page.js"],m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/CaptainHome/page",pathname:"/CaptainHome",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1058:(e,t,s)=>{Promise.resolve().then(s.bind(s,5817))},5562:(e,t,s)=>{Promise.resolve().then(s.bind(s,721))},2929:(e,t,s)=>{"use strict";s.d(t,{L:()=>c});var r=s(8009),i=s(2138);let n="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,a=e=>e&&!Array.isArray(e)&&"object"==typeof e,l=[],o={},d=i.Ay,c=(e,t=l)=>{let s=o;a(e)?(s=e,e=null,t="dependencies"in s?s.dependencies:l):a(t)&&(t="dependencies"in(s=t)?s.dependencies:l),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:i,revertOnUpdate:c}=s,m=(0,r.useRef)(!1),u=(0,r.useRef)(d.context(()=>{},i)),p=(0,r.useRef)(e=>u.current.add(null,e)),x=t&&t.length&&!c;return n(()=>{if(e&&u.current.add(e,i),!x||!m.current)return()=>u.current.revert()},t),x&&n(()=>(m.current=!0,()=>u.current.revert()),l),{context:u.current,contextSafe:p.current}};c.register=e=>{d=e},c.headless=!0},721:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var r=s(5512),i=s(8009),n=s(2214),a=s(8531),l=s.n(a),o=s(5103);s(5303);var d=s(5922);let c=()=>{let{captain:e}=(0,i.useContext)(d.Q);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center justify-start gap-3 ",children:[(0,r.jsx)(o.default,{className:"h-10 w-10 rounded-full object-cover",src:"/random.jpeg",width:200,height:200}),(0,r.jsx)("h4",{className:"text-lg font-medium capitalize",children:e.fullname.firstname+" "+e.fullname.lastname})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-xl font-semibold",children:"₹295.20"}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Earned"})]})]}),(0,r.jsxs)("div",{className:"flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start",children:[(0,r.jsxs)("div",{className:"text-center ",children:[(0,r.jsx)("i",{className:"text-3xl mb-2 font-thin ri-timer-2-line"}),(0,r.jsx)("h5",{className:"text-lg font-medium",children:"15.4"}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Hours Online"})]}),(0,r.jsxs)("div",{className:"text-center ",children:[(0,r.jsx)("i",{className:"text-3xl mb-2 font-thin ri-star-line"}),(0,r.jsx)("h5",{className:"text-lg font-medium",children:"4.6/5.0"}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Ratings achieved"})]}),(0,r.jsxs)("div",{className:"text-center ",children:[(0,r.jsx)("i",{className:"text-3xl mb-2 font-thin ri-road-map-line"}),(0,r.jsx)("h5",{className:"text-lg font-medium",children:"500+"}),(0,r.jsx)("p",{className:"text-sm text-gray-600",children:"Rides done"})]})]})]})},m=e=>{let t=e.ride?.user?.fullname?.firstname&&e.ride?.user?.fullname?.lastname?`${e.ride.user.fullname.firstname} ${e.ride.user.fullname.lastname}`:e.ride?.user?.fullname;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:"p-1 text-center w-[93%] absolute top-0",onClick:()=>{e.setRidePopUpPanel(!1)},children:(0,r.jsx)("i",{className:"text-3xl text-gray-200 ri-arrow-down-wide-line"})}),(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-5",children:"New Ride Available!"}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(o.default,{className:"h-12 rounded-full object-cover w-12",src:"/random1.jpeg",alt:"",width:100,height:100}),(0,r.jsx)("h2",{className:"text-lg font-medium",children:t})]}),(0,r.jsx)("h5",{className:"text-lg font-semibold",children:"2.2 KM"})]}),(0,r.jsxs)("div",{className:"flex gap-2 justify-between flex-col items-center",children:[(0,r.jsxs)("div",{className:"w-full mt-5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-5 p-3 border-b-2",children:[(0,r.jsx)("i",{className:"ri-map-pin-user-fill"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:e.ride?.pickup}),(0,r.jsx)("p",{className:"text-sm -mt-1 text-gray-600",children:"Pickup Location"})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-5 p-3 border-b-2",children:[(0,r.jsx)("i",{className:"text-lg ri-map-pin-2-fill"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:e.ride?.destination}),(0,r.jsx)("p",{className:"text-sm -mt-1 text-gray-600",children:"Dropoff Location"})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-5 p-3",children:[(0,r.jsx)("i",{className:"ri-currency-line"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-lg font-medium",children:["₹",e.ride?.fare," "]}),(0,r.jsx)("p",{className:"text-sm -mt-1 text-gray-600",children:"Cash Cash"})]})]})]}),(0,r.jsxs)("div",{className:"mt-5 w-full",children:[(0,r.jsx)("button",{onClick:()=>{e.setConfirmRidePopUpPanel(!0),e.setRidePopUpPanel(!1),e.confirmRide()},className:"bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg",children:"Accept"}),(0,r.jsx)("button",{onClick:()=>{e.setRidePopUpPanel(!1)},className:"mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg",children:"Ignore"})]})]})]})};var u=s(9334);let p=({ride:e,setConfirmRidePopUpPanel:t,setRidePopUpPanel:s})=>{let n=(0,u.useRouter)(),[a,l]=(0,i.useState)(""),d=async r=>{if(r.preventDefault(),!a){alert("Please enter the OTP.");return}console.log("OTP Submitted:",a);try{let r=`https://uber-backend-zq0d.onrender.com/rides/start-ride?rideId=${e._id}&otp=${a}`,i=await fetch(r,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});if(i.ok)t(!1),s(!1),n.push(`/CaptainRiding?rideId=${e._id}&pickup=${e.pickup}&destination=${e.destination}&fare=${e.fare}&username=${e.user.fullname.firstname}`),console.log("at ConfirmRidePopUp Ride Id:",e._id),console.log("at ConfirmRidePopUp Pickup:",e.pickup),console.log("at ConfirmRidePopUp Pickup:",e.destination);else{let e=await i.json();alert(e.message||"Failed to confirm the ride. Please try again.")}}catch(e){console.error("Error confirming ride:",e),alert("An unexpected error occurred. Please try again.")}};return(0,r.jsxs)("div",{className:"relative p-4 bg-white rounded-lg shadow-md",children:[(0,r.jsx)("h5",{className:"p-1 text-center w-[93%] absolute top-0 cursor-pointer",onClick:()=>{s(!1)},children:(0,r.jsx)("i",{className:"text-3xl text-gray-200 ri-arrow-down-wide-line"})}),(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-5",children:"Confirm this ride to Start"}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)(o.default,{className:"h-12 rounded-full object-cover w-12",src:"/random1.jpeg",width:100,height:100,alt:"User"}),(0,r.jsx)("h2",{className:"text-lg font-medium capitalize",children:e?.user?.fullname?.firstname+" "+e?.user?.fullname?.lastname||"User Name"})]}),(0,r.jsx)("h5",{className:"text-lg font-semibold",children:"2.2 KM"})]}),(0,r.jsxs)("div",{className:"flex gap-2 justify-between flex-col items-center",children:[(0,r.jsxs)("div",{className:"w-full mt-5",children:[(0,r.jsxs)("div",{className:"flex items-center gap-5 p-3 border-b-2",children:[(0,r.jsx)("i",{className:"ri-map-pin-user-fill"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:e?.pickup}),(0,r.jsx)("p",{className:"text-sm -mt-1 text-gray-600",children:"Pickup Location"})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-5 p-3 border-b-2",children:[(0,r.jsx)("i",{className:"text-lg ri-map-pin-2-fill"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-lg font-medium",children:e?.destination||"Destination"}),(0,r.jsx)("p",{className:"text-sm -mt-1 text-gray-600",children:"Dropoff Location"})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-5 p-3",children:[(0,r.jsx)("i",{className:"ri-currency-line"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-lg font-medium",children:["₹",e?.fare||"0.00"]}),(0,r.jsx)("p",{className:"text-sm -mt-1 text-gray-600",children:"Cash"})]})]})]}),(0,r.jsx)("div",{className:"mt-6 w-full",children:(0,r.jsxs)("form",{onSubmit:d,children:[(0,r.jsx)("input",{value:a,onChange:e=>l(e.target.value),type:"text",className:"bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3",placeholder:"Enter OTP"}),(0,r.jsx)("button",{type:"submit",className:"w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg",children:"Confirm"}),(0,r.jsx)("button",{type:"button",onClick:()=>{t(!1),s(!1)},className:"w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg",children:"Cancel"})]})})]})]})};var x=s(2929),f=s(2138),h=s(1661),g=s(1930);let j=()=>{let[e,t]=(0,i.useState)(!1),[s,a]=(0,i.useState)(!1),[u,j]=(0,i.useState)(null),N=(0,i.useRef)(null),b=(0,i.useRef)(null),{socket:v}=(0,i.useContext)(h.d),{captain:y}=(0,i.useContext)(d.Q);async function w(){try{let e=await fetch("https://uber-backend-zq0d.onrender.com/rides/confirm",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({rideId:u._id,captainId:y._id})});if(console.log("Response:",e),console.log("Ride ID:",u._id),console.log("Captain ID:",y._id),!e.ok){let t=await e.json();throw Error(t.message||"Failed to confirm the ride")}t(!1),a(!0)}catch(e){console.error("Error confirming ride:",e.message)}}return(0,i.useEffect)(()=>{if(y&&y._id){v.emit("join",{userId:y._id,userType:"captain"});let e=()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{console.log({userId:y._id,location:{ltd:e.coords.latitude,lng:e.coords.longitude}}),v.emit("update-location-captain",{userId:y._id,location:{ltd:e.coords.latitude,lng:e.coords.longitude}})})};setInterval(e,1e4),e()}},[v,y]),v.on("new-ride",e=>{console.log(e),j(e),t(!0)}),(0,i.useEffect)(()=>{setTimeout(()=>{j({captainName:"",distance:"",pickup:"",dropoff:"",fare:""}),t(!0)},2e3)},[]),(0,x.L)(()=>{f.Ay.to(N.current,{transform:e?"translateY(0)":"translateY(100%)",duration:.5})},[e]),(0,x.L)(()=>{f.Ay.to(b.current,{transform:s?"translateY(0)":"translateY(100%)",duration:.5})},[s]),(0,r.jsx)(n.default,{children:(0,r.jsxs)("div",{className:"h-screen",children:[(0,r.jsxs)("div",{className:"fixed p-4 top-0 flex items-center justify-between w-screen",children:[(0,r.jsx)(o.default,{className:"w-16",src:"/uber-driver.svg",alt:"Uber Logo",width:64,height:64}),(0,r.jsx)(l(),{href:"/CaptainLogin",className:"h-10 w-10 bg-white flex items-center justify-center rounded-full",children:(0,r.jsx)("i",{className:"text-lg font-medium ri-logout-box-r-line"})})]}),(0,r.jsx)("div",{className:"h-3/5",children:(0,r.jsx)(g.A,{})}),(0,r.jsx)("div",{className:"h-2/5 p-6",children:(0,r.jsx)(c,{})}),(0,r.jsx)("div",{ref:N,className:"fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12",children:u&&(0,r.jsx)(m,{setRidePopUpPanel:t,setConfirmRidePopUpPanel:a,ride:u,confirmRide:w})}),(0,r.jsx)("div",{ref:b,className:"fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12",children:(0,r.jsx)(p,{ride:u,setConfirmRidePopUpPanel:a,setRidePopUpPanel:t})})]})})}},5817:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\UBER-CLONE-PROJECT\\\\frontend\\\\src\\\\app\\\\CaptainHome\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\UBER-CLONE-PROJECT\\frontend\\src\\app\\CaptainHome\\page.js","default")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,707,77,531,713,138,58],()=>s(4827));module.exports=r})();