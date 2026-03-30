import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Phone, MessageSquare, ShieldCheck, Star, CheckCircle2, ArrowRight } from "lucide-react";

const ratings = [{ name:"Clutch",score:"5.0" },{ name:"Google",score:"4.7" },{ name:"TopDev",score:"5.0" },{ name:"DesignRush",score:"5.0" }];
const brands = ["Nike","Red Bull","Whirlpool","WFFA","TruuBlue"];

export default function ServiceDetails() {
  const { slug } = useParams();
  const s = servicesData.find(x => x.slug === slug);

  if (!s) return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-blue-700 font-semibold hover:underline">← Back to Services</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                ✨ MershilTech — Top Rated Agency
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">{s.title}</h1>
              <p className="text-blue-100/80 text-lg leading-relaxed mb-6 max-w-lg">{s.heroDesc}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                {s.bullets.map((b,i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-100 text-sm">
                    <ShieldCheck size={14} className="text-blue-400 flex-shrink-0"/>{b}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                  <Phone size={16}/> Book a Discovery Call
                </Link>
                <Link to="/contact" className="flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:border-white hover:bg-white/10 transition backdrop-blur-sm">
                  <MessageSquare size={16}/> Talk to Our Experts
                </Link>
              </div>
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">Trusted by</p>
              <div className="flex gap-4 flex-wrap">
                {brands.map((b,i) => <span key={i} className="text-white/60 font-bold text-sm">{b}</span>)}
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-7 shadow-2xl">
                <h3 className="text-white font-bold text-lg mb-1 text-center">Request a Callback</h3>
                <p className="text-blue-200 text-sm text-center mb-5">We respond typically within <span className="text-white font-bold">30 minutes</span></p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 transition w-full" placeholder="Name *"/>
                    <input className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 transition w-full" placeholder="Email *"/>
                  </div>
                  <input className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 transition w-full" placeholder="Phone Number *"/>
                  <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-blue-200 text-sm focus:outline-none focus:border-blue-300 transition w-full">
                    <option className="text-gray-900">Budget Range</option>
                    <option className="text-gray-900">$5k – $10k</option>
                    <option className="text-gray-900">$10k – $25k</option>
                    <option className="text-gray-900">$25k – $50k</option>
                    <option className="text-gray-900">$50k+</option>
                  </select>
                  <textarea rows={3} className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 transition w-full resize-none" placeholder="Tell us about your project..."/>
                  <div className="flex items-center gap-2 text-blue-200 text-sm">
                    <input type="checkbox" className="w-4 h-4 accent-blue-400"/>
                    <label>Protect Under NDA</label>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3.5 rounded-xl font-bold transition text-sm">Submit Request →</button>
                </div>
              </div>
              {/* Ratings */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {ratings.map((r,i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                    <p className="text-white/60 text-xs">{r.name}</p>
                    <div className="flex items-center gap-1 justify-center mt-0.5">
                      <span className="text-white font-bold text-sm">{r.score}</span>
                      <Star size={10} className="text-yellow-400 fill-yellow-400"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white mb-10">
            {s.stats.map((st,i) => (
              <div key={i}><p className="text-4xl font-bold mb-1">{st.n}</p><p className="text-blue-200 text-sm">{st.l}</p></div>
            ))}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/20">
            <h3 className="text-white font-bold text-lg max-w-sm">{s.statsCTA}</h3>
            <Link to="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition whitespace-nowrap flex-shrink-0">Start My Project!</Link>
          </div>
        </div>
      </section>

      {/* SUB SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{s.expertTitle}</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">{s.expertDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.subServices.map((ss,i) => (
              <div key={i} className="group p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-blue-100 transition">{ss.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-blue-700 transition pt-1">{ss.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{ss.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Solutions for Every Business Stage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Whether you're a scrappy startup or a Fortune 500 company, we have the right solution for your stage and scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.solutions.map((sol,i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-5">{sol.icon}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-blue-700 transition">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Industries We Serve</h2>
          <p className="text-blue-300 mb-10">Deep domain expertise across the industries that matter most.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.industries.map((ind,i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 hover:border-blue-400/30 transition group cursor-pointer">
                <CheckCircle2 size={18} className="text-blue-400 mb-2"/>
                <p className="text-gray-200 text-sm font-medium group-hover:text-white transition">{ind}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A proven, transparent process that delivers working software on time and on budget — every single time.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>
            <div className="space-y-14">
              {s.process.map((step,i) => (
                <div key={i} className={`relative flex items-start gap-8 ${i%2===0?"flex-row":"flex-row-reverse"}`}>
                  <div className={`w-[45%] ${i%2===0?"pr-8":"pl-8"}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                      <div className={`flex items-center gap-3 mb-3 ${i%2===0?"":"flex-row-reverse"}`}>
                        <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i+1}</div>
                        <h3 className="font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-blue-700 bg-white z-10"></div>
                  <div className={`w-[45%] flex items-center ${i%2===0?"pl-8":"pr-8 justify-end"}`}>
                    <span className="text-2xl font-bold text-gray-100">Step {i+1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {s.tech.map((t,i) => (
              <span key={i} className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-blue-300 hover:text-blue-700 transition cursor-default shadow-sm">{t}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{s.cta}</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">Let's discuss your project and build something extraordinary together. Our experts are ready to help you succeed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
              <Phone size={18}/> Get Free Consultation
            </Link>
            <Link to="/hire" className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">
              Hire Our Team <ArrowRight size={18}/>
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">✔ No Obligation &nbsp;✔ Respond in 24H &nbsp;✔ Secure NDA</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
