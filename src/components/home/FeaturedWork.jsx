import { ArrowUpRight } from "lucide-react";
const projects = [
  { title:"TruuBlue", cat:"Dating App • AI-Powered", desc:"Progressive dating app using AI matching. Built with React Native, achieving 4.9★ App Store rating and 50K+ downloads in 3 months.", bg:"from-blue-600 to-indigo-700", img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500", tags:["React Native","AI/ML","Firebase"] },
  { title:"HomesBasket", cat:"On-Demand • Multi-Service", desc:"Feature-rich on-demand delivery platform serving food, groceries, medicines and beauty items across Miami, Florida.", bg:"from-cyan-500 to-blue-600", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500", tags:["Node.js","React","AWS"] },
  { title:"Whirlpool Digital Catalog", cat:"Enterprise • B2B Platform", desc:"Custom enterprise catalog management system with real-time inventory and multi-region dealer portal.", bg:"from-gray-800 to-gray-900", img:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500", tags:["React","Microservices","Azure"] },
  { title:"WFFA Sports Platform", cat:"Sports Tech • Real-Time", desc:"Live fantasy football platform with real-time scoring, AI recommendations, and 100K+ active users.", bg:"from-indigo-600 to-purple-700", img:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500", tags:["WebSockets","Python","Redis"] },
];
export default function FeaturedWork() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="inline-block text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3 bg-blue-50 px-4 py-1.5 rounded-full">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Work We're<br/>Proud Of</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition text-sm">
            View All Projects <ArrowUpRight size={16}/>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p,i) => (
            <div key={i} className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${p.bg} p-8 cursor-pointer hover:scale-[1.02] transition duration-500 min-h-[280px]`}>
              <img src={p.img} className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition duration-700" alt={p.title}/>
              <div className="relative z-10">
                <span className="text-xs text-white/60 font-medium mb-3 block">{p.cat}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t,j) => <span key={j} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
              <ArrowUpRight className="absolute bottom-6 right-6 text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition" size={22}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
