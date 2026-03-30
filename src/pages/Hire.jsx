import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const roles = [
  { icon:"👨‍💻", name:"Hire Dedicated Developers", slug:"dedicated-developers", desc:"Full-stack engineers dedicated exclusively to your project." },
  { icon:"📱", name:"Hire Mobile App Developers", slug:"mobile-app-developers", desc:"iOS and Android experts with 200+ published apps." },
  { icon:"🤖", name:"Hire Android Developers", slug:"android-developers", desc:"Kotlin-first Android development for all screen sizes." },
  { icon:"🍎", name:"Hire iOS Developers", slug:"ios-developers", desc:"Swift experts building App Store-approved iOS apps." },
  { icon:"⚛️", name:"Hire React Native Developers", slug:"react-native-developers", desc:"Cross-platform mobile apps with native performance." },
  { icon:"🐦", name:"Hire Flutter Developers", slug:"flutter-developers", desc:"Beautiful cross-platform apps from a single codebase." },
  { icon:"🖥️", name:"Hire Software Developers", slug:"software-developers", desc:"Full-stack engineers for complex software products." },
  { icon:"🌐", name:"Hire Web Developers", slug:"web-developers", desc:"React, Next.js and Node.js experts for any web project." },
  { icon:"🐘", name:"Hire PHP Developers", slug:"php-developers", desc:"Laravel and PHP experts for robust web applications." },
  { icon:"🅰️", name:"Hire AngularJS Developers", slug:"angular-developers", desc:"Enterprise-grade SPA development with Angular." },
  { icon:"⚛️", name:"Hire ReactJS Developers", slug:"react-developers", desc:"High-performance React frontends your users will love." },
  { icon:"🟢", name:"Hire NodeJS Developers", slug:"node-developers", desc:"Scalable backend APIs and real-time systems." },
  { icon:"☕", name:"Hire Java Developers", slug:"java-developers", desc:"Robust enterprise applications with Spring Boot." },
  { icon:"🔴", name:"Hire Laravel Developers", slug:"laravel-developers", desc:"Elegant PHP applications with the Laravel framework." },
  { icon:"🌍", name:"Hire Remote Developers", slug:"remote-developers", desc:"World-class remote engineers in your timezone." },
  { icon:"🚀", name:"Hire Offshore Developers", slug:"offshore-developers", desc:"Cost-effective offshore teams without quality compromise." },
  { icon:"⛓️", name:"Hire Blockchain Developers", slug:"blockchain-developers", desc:"Smart contracts, DeFi, NFT, and Web3 specialists." },
  { icon:"📦", name:"Hire MEAN Stack Developers", slug:"mean-stack-developers", desc:"Full MEAN stack for modern web applications." },
];

const models = [
  { title:"Full-Time", icon:"⏰", desc:"8 hrs/day, 5 days/week. Monthly billing. Ideal for ongoing projects needing continuous output.", points:["160 hrs/month","Daily standups","Monthly billing"] },
  { title:"Part-Time", icon:"🕐", desc:"4 hrs/day, flexible schedule. Weekly billing. Perfect for maintenance, updates, and smaller builds.", points:["80 hrs/month","Flexible slots","Weekly billing"], highlight:true },
  { title:"Hourly", icon:"⚡", desc:"Pay only for hours worked. For urgent tasks, quick fixes, or short-term development support.", points:["As needed","Pay-per-hour","Fast delivery"] },
];

export default function Hire() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            ✨ Top 1% Developers — Available in 48 Hours
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Hire Top Developers<br/>
            <span className="text-blue-300">Who Deliver Results</span>
          </h1>
          <p className="text-blue-100/80 text-lg max-w-2xl mx-auto mb-10">
            Access pre-vetted senior engineers across every technology stack. Only the top 3% pass our rigorous screening. Onboard in 48 hours, risk-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-900 px-7 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl text-base">
              <Phone size={18}/> Book Free Consultation
            </Link>
            <Link to="#roles" className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition text-base">
              Browse All Roles <ArrowRight size={18}/>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[["500+","Engineers Available"],["48hrs","Onboarding Time"],["98%","Retention Rate"],["3%","Acceptance Rate"]].map(([n,l],i)=>(
              <div key={i}><p className="text-2xl font-bold text-white">{n}</p><p className="text-blue-300 text-xs">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL ROLES */}
      <section id="roles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Developer Roles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Find Your Perfect Developer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Choose from 18 specialized developer roles, each with dedicated expertise, vetting standards, and engagement options.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roles.map((r,i) => (
              <Link key={i} to={`/hire/${r.slug}`} className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-blue-100 transition">{r.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition">{r.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{r.desc}</p>
                  <span className="text-blue-700 font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">View Details <ArrowRight size={12}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING MODELS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Our Flexible Hiring Models</h2>
            <p className="text-gray-400 max-w-xl mx-auto">MershilTech provides flexible options tailored to your project goals. Full-time, part-time, or hourly — you choose.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((m,i) => (
              <div key={i} className={`rounded-2xl p-8 border transition hover:-translate-y-1 ${m.highlight?"border-blue-500 bg-gray-800 shadow-xl":"border-gray-700 bg-gray-800"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{m.icon}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                  {m.highlight && <span className="ml-auto text-xs bg-blue-600 text-white px-2.5 py-1 rounded-full">Popular</span>}
                </div>
                <div className="h-px bg-gray-700 mb-4"></div>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{m.desc}</p>
                <ul className="space-y-2 mb-6">
                  {m.points.map((p,j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm"><CheckCircle2 size={14} className="text-blue-400"/>{p}</li>
                  ))}
                </ul>
                <Link to="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition text-sm">Hire Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">How It Works</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Hire in 5 Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[["📋","Share Requirements","Tell us your tech stack, team size, and timeline."],["🔍","Review Profiles","We send matched developer profiles within 24 hours."],["🤝","Interview","Conduct interviews and technical assessments."],["✅","Choose & Onboard","Select your developer. Onboard in 48 hours."],["🚀","Start Building","Your developer joins Slack, pushes code on day 1."]].map(([icon,title,desc],i)=>(
              <div key={i} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition">{icon}</div>
                <div className="w-7 h-7 mx-auto bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3">{i+1}</div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Build Your Dream Team?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">Get matched with top 1% developers within 24 hours. Zero risk, flexible contracts, instant scaling.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
              <Phone size={18}/> Get Free Consultation
            </Link>
            <Link to="/contact" className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">
              Start Hiring <ArrowRight size={18}/>
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">✔ 500+ Engineers &nbsp;✔ 48hr Onboarding &nbsp;✔ Zero Risk Trial &nbsp;✔ Flexible Contracts</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
