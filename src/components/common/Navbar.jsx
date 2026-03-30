import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Smartphone, Globe, Code2, Brain, Link2, Building2, Lightbulb } from "lucide-react";

const serviceCategories = [
  { name:"Mobile App Development", icon:Smartphone, slug:"mobile", sub:["Mobile App Development","Android App Development","iOS App Development","React Native App Development","Flutter App Development","Mobile App Maintenance","Wearable App Development","PWA Development","AR/VR App Development","Startup App Development"] },
  { name:"Website Development", icon:Globe, slug:"website", sub:["Website Development","Laravel Development","ReactJS Development","NodeJS Development","WordPress Development","Shopify Development","eCommerce Development","Full Stack Development","CMS Development","Web Designing"] },
  { name:"Software Development", icon:Code2, slug:"software", sub:["Custom Software Development","SaaS Development","ERP Development","LMS Development","POS Development","Desktop App Development","Software Maintenance","Enterprise Software"] },
  { name:"Artificial Intelligence", icon:Brain, slug:"ai", sub:["AI Development","AI Chatbot Development","Generative AI","AI Agent Development","LLM Development","Machine Learning","Computer Vision","NLP Services","Deep Learning","IoT Development"] },
  { name:"Blockchain Development", icon:Link2, slug:"blockchain", sub:["Blockchain Development","Smart Contract Development","NFT Marketplace","DeFi Development","Ethereum Development","Metaverse Development","Crypto Exchange","ICO Development"] },
  { name:"Enterprise Solution", icon:Building2, slug:"enterprise", sub:["Microsoft Azure","AWS Development","Google Cloud","Salesforce Consulting","SAP Services","Power BI","IT Staff Augmentation","IT Consulting","ServiceNow"] },
  { name:"On-Demand Solutions", icon:Lightbulb, slug:"on-demand", sub:["Food Delivery App","Taxi Booking App","Grocery Delivery","Healthcare App","Dating App","eWallet App","Home Service App","Handyman App","Laundry App","On-Demand Doctor"] },
];

const hireRoles = [
  {icon:"👨‍💻",name:"Hire Dedicated Developers",slug:"dedicated-developers"},
  {icon:"📱",name:"Hire Mobile App Developers",slug:"mobile-app-developers"},
  {icon:"🤖",name:"Hire Android Developers",slug:"android-developers"},
  {icon:"🍎",name:"Hire iOS Developers",slug:"ios-developers"},
  {icon:"⚛️",name:"Hire React Native Developers",slug:"react-native-developers"},
  {icon:"🐦",name:"Hire Flutter Developers",slug:"flutter-developers"},
  {icon:"🖥️",name:"Hire Software Developers",slug:"software-developers"},
  {icon:"🌐",name:"Hire Web Developers",slug:"web-developers"},
  {icon:"🐘",name:"Hire PHP Developers",slug:"php-developers"},
  {icon:"🅰️",name:"Hire AngularJS Developers",slug:"angular-developers"},
  {icon:"⚛️",name:"Hire ReactJS Developers",slug:"react-developers"},
  {icon:"🟢",name:"Hire NodeJS Developers",slug:"node-developers"},
  {icon:"☕",name:"Hire Java Developers",slug:"java-developers"},
  {icon:"🔴",name:"Hire Laravel Developers",slug:"laravel-developers"},
  {icon:"🌍",name:"Hire Remote Developers",slug:"remote-developers"},
  {icon:"🚀",name:"Hire Offshore Developers",slug:"offshore-developers"},
  {icon:"⛓️",name:"Hire Blockchain Developers",slug:"blockchain-developers"},
  {icon:"📦",name:"Hire MEAN Stack Developers",slug:"mean-stack-developers"},
];

export default function Navbar() {
  const [showSvc,setShowSvc]=useState(false);
  const [showHire,setShowHire]=useState(false);
  const [activeCat,setActiveCat]=useState(0);
  const [mob,setMob]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const svcT=useRef(null),hireT=useRef(null);
  const navigate=useNavigate();
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>10);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  const onSE=()=>{clearTimeout(svcT.current);setShowSvc(true);setShowHire(false);};
  const onSL=()=>{svcT.current=setTimeout(()=>setShowSvc(false),180);};
  const onHE=()=>{clearTimeout(hireT.current);setShowHire(true);setShowSvc(false);};
  const onHL=()=>{hireT.current=setTimeout(()=>setShowHire(false),180);};
  return (
    <>
      <style>{`.nl{position:relative;color:#374151;font-weight:500;font-size:14.5px;transition:color .2s;cursor:pointer;display:flex;align-items:center;gap:3px;background:none;border:none;padding:0;}.nl:hover{color:#1d4ed8;}.nl::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:#1d4ed8;transition:width .3s;}.nl:hover::after{width:100%;}.mega{position:absolute;top:calc(100% + 14px);left:50%;transform:translateX(-50%);background:#fff;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.12);border:1px solid #e5e7eb;z-index:9999;animation:fdwn .18s ease;}@keyframes fdwn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}.cat-i{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;cursor:pointer;transition:all .18s;color:#374151;font-size:13.5px;font-weight:500;}.cat-i:hover,.cat-i.active{background:#eff6ff;color:#1d4ed8;}.sub-i{display:block;padding:7px 12px;border-radius:8px;color:#4b5563;font-size:13px;cursor:pointer;transition:all .18s;text-decoration:none;}.sub-i:hover{background:#eff6ff;color:#1d4ed8;padding-left:18px;}.hire-i{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;cursor:pointer;transition:all .18s;color:#374151;font-size:13px;text-decoration:none;}.hire-i:hover{background:#eff6ff;color:#1d4ed8;}.h-ic{width:34px;height:34px;background:#f3f4f6;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;}`}</style>
      <header className={`fixed w-full top-0 z-[999] bg-white transition-shadow duration-300 ${scrolled?"shadow-md":"border-b border-gray-100"}`}>
        <div className="bg-blue-700 text-white text-xs py-1.5 text-center hidden md:block">🚀 Innovating Today, Shaping Tomorrow — Trusted by 500+ global clients | Denver, Colorado | (303) 335-0405</div>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-800 transition">M</div>
            <div><h1 className="text-gray-900 font-bold text-lg leading-tight">MershilTech</h1><p className="text-gray-400 text-[10px] -mt-0.5">Innovating Today, Shaping Tomorrow</p></div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            <div className="relative" onMouseEnter={onSE} onMouseLeave={onSL}>
              <button className="nl" onClick={()=>navigate("/services")}>Services <ChevronDown size={13} className={`transition-transform ${showSvc?"rotate-180":""}`}/></button>
              {showSvc&&(<div className="mega" style={{width:"820px"}} onMouseEnter={onSE} onMouseLeave={onSL}><div className="flex"><div className="w-56 bg-gray-50 rounded-l-2xl p-3 border-r border-gray-100 space-y-0.5">{serviceCategories.map((c,i)=>{const Icon=c.icon;return <div key={i} className={`cat-i ${activeCat===i?"active":""}`} onMouseEnter={()=>setActiveCat(i)}><Icon size={15}/>{c.name}</div>;})}</div><div className="flex-1 p-5"><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{serviceCategories[activeCat].name}</p><div className="grid grid-cols-2 gap-0.5">{serviceCategories[activeCat].sub.map((s,i)=><Link key={i} to={`/services/${serviceCategories[activeCat].slug}`} className="sub-i">→ {s}</Link>)}</div></div></div></div>)}
            </div>
            <div className="relative" onMouseEnter={onHE} onMouseLeave={onHL}>
              <button className="nl" onClick={()=>navigate("/hire")}>Hire Developers <ChevronDown size={13} className={`transition-transform ${showHire?"rotate-180":""}`}/></button>
              {showHire&&(<div className="mega" style={{width:"760px"}} onMouseEnter={onHE} onMouseLeave={onHL}><div className="p-5"><p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Hire Top 1% Developers</p><div className="grid grid-cols-3 gap-1">{hireRoles.map((r,i)=><Link key={i} to={`/hire/${r.slug}`} className="hire-i"><div className="h-ic">{r.icon}</div><span>{r.name}</span></Link>)}</div></div></div>)}
            </div>
            <Link to="/about" className="nl">About</Link>
            <Link to="/contact" className="nl">Contact</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="px-5 py-2.5 rounded-lg border border-blue-700 text-blue-700 font-medium text-sm hover:bg-blue-50 transition">Talk to Expert</Link>
            <Link to="/hire" className="px-5 py-2.5 rounded-lg bg-blue-700 text-white font-medium text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-100">Hire Now</Link>
          </div>
          <button className="lg:hidden text-gray-700" onClick={()=>setMob(!mob)}>{mob?<X size={26}/>:<Menu size={26}/>}</button>
        </div>
        {mob&&(<div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link to="/services" onClick={()=>setMob(false)} className="block font-semibold text-gray-900">Services</Link>
          {serviceCategories.map((c,i)=><Link key={i} to={`/services/${c.slug}`} onClick={()=>setMob(false)} className="block text-sm text-gray-500 pl-4 hover:text-blue-700">{c.name}</Link>)}
          <Link to="/hire" onClick={()=>setMob(false)} className="block font-semibold text-gray-900 pt-1">Hire Developers</Link>
          {hireRoles.slice(0,6).map((r,i)=><Link key={i} to={`/hire/${r.slug}`} onClick={()=>setMob(false)} className="block text-sm text-gray-500 pl-4 hover:text-blue-700">{r.name}</Link>)}
          <Link to="/about" onClick={()=>setMob(false)} className="block font-semibold text-gray-900">About</Link>
          <Link to="/contact" onClick={()=>setMob(false)} className="block font-semibold text-gray-900">Contact</Link>
          <Link to="/hire" onClick={()=>setMob(false)} className="block text-center bg-blue-700 text-white py-3 rounded-lg font-semibold mt-2">Hire Now</Link>
        </div>)}
      </header>
    </>
  );
}
