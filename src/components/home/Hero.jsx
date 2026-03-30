import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
const badges=["AI-Powered Solutions","15+ Years Experience","500+ Happy Clients","70+ Countries Served"];
const stats=[{n:"1100+",l:"Projects"},{n:"130+",l:"Engineers"},{n:"70+",l:"Countries"},{n:"98%",l:"Satisfaction"}];
export default function Hero(){
  return(
    <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white flex items-center pt-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">{badges.map((b,i)=><span key={i} className="flex items-center gap-1.5 text-xs font-medium bg-blue-800/60 border border-blue-700/50 text-blue-200 px-3 py-1.5 rounded-full"><CheckCircle size={11} className="text-blue-400"/>{b}</span>)}</div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Build The Next<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Big Digital Product</span><br/>With Elite Engineers</h1>
            <p className="text-blue-100/80 text-lg leading-relaxed mb-8 max-w-lg">MershilTech is an AI-powered software agency delivering world-class mobile apps, web platforms, and enterprise software. We've helped 500+ companies in 70+ countries scale faster.</p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="flex items-center gap-2 bg-white text-blue-900 px-7 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl text-base"><Phone size={18}/> Book Free Consultation</Link>
              <Link to="/services" className="flex items-center gap-2 border-2 border-white/30 text-white px-7 py-4 rounded-xl font-bold hover:border-white hover:bg-white/10 transition text-base">Explore Services <ArrowRight size={18}/></Link>
            </div>
            <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8">{stats.map((s,i)=><div key={i}><p className="text-2xl font-bold text-white">{s.n}</p><p className="text-blue-300 text-xs mt-0.5">{s.l}</p></div>)}</div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6"><h3 className="text-white font-bold text-lg">Get A Free Quote</h3><span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-semibold">● Live</span></div>
              <div className="space-y-3 mb-6">
                {[{p:"Your Name",t:"text"},{p:"Email Address",t:"email"},{p:"Phone Number",t:"tel"}].map((f,i)=><input key={i} type={f.t} placeholder={f.p} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none focus:border-blue-300 transition"/>)}
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-blue-200 text-sm focus:outline-none"><option className="text-gray-900">Select Service</option><option className="text-gray-900">Mobile App Development</option><option className="text-gray-900">Website Development</option><option className="text-gray-900">AI Development</option><option className="text-gray-900">Hire Developers</option></select>
                <textarea rows={3} placeholder="Describe your project..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200/60 text-sm focus:outline-none resize-none"/>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-3.5 rounded-xl font-bold transition text-sm">Get Free Consultation →</button>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3"><div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">⭐</div><div><div className="flex text-yellow-400 text-xs mb-0.5">{"★★★★★"}</div><p className="text-gray-800 font-semibold text-xs">4.9/5 Average Rating</p><p className="text-gray-400 text-xs">500+ Client Reviews</p></div></div>
              <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-center"><p className="text-[10px] text-gray-400 font-semibold uppercase">Official Partner</p><div className="flex gap-2 mt-1"><span className="text-xs font-bold text-gray-600">AWS</span><span className="text-gray-300">|</span><span className="text-xs font-bold text-blue-600">Azure</span><span className="text-gray-300">|</span><span className="text-xs font-bold text-green-600">GCP</span></div></div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-blue-300 text-sm text-center mb-5 font-medium">Trusted by world-class companies</p>
          <div className="flex items-center justify-center gap-10 flex-wrap opacity-70">{["NIKE","Red Bull","Whirlpool","WFFA","TruuBlue","Microsoft"].map((b,i)=><span key={i} className="text-white font-bold text-sm tracking-wide">{b}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
