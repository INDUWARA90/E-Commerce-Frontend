import { ShieldCheck, Globe2 } from "lucide-react";

const BRANDS = [
    { name: "NOVATECH", industry: "Mobile" },
    { name: "CORESYS", industry: "Computing" },
    { name: "ECHOWAVE", industry: "Audio" },
    { name: "SECURECAM", industry: "Security" },
    { name: "AEROTAB", industry: "Tablets" },
    { name: "NEXUS", industry: "Networking" },
];

function HomeBrandPartners() {
    return (
        <section className="bg-white border-y border-slate-100 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Label - High Impact Typography */}
                    <div className="hidden lg:flex items-center gap-5 shrink-0 border-r border-slate-100 pr-12">
                        <div className="p-4 bg-orange-100 text-orange-600 rounded-[1.25rem] shadow-sm">
                            <Globe2 size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-black text-teal-600 uppercase tracking-[0.25em] leading-none mb-1.5">
                                Authorized
                            </p>
                            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter">
                                Global <br /> Partners
                            </h3>
                        </div>
                    </div>

                    {/* Logo Grid - Responsive & Interactive */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center w-full">
                        {BRANDS.map((brand) => (
                            <div
                                key={brand.name}
                                className="group relative flex flex-col items-center justify-center py-8 px-4 rounded-[2rem] transition-all duration-300 hover:bg-slate-50 cursor-default"
                            >
                                {/* Brand Name */}
                                <span className="text-xl font-black text-slate-300 group-hover:text-teal-600 tracking-tighter transition-all duration-500 transform group-hover:scale-105">
                  {brand.name}
                </span>

                                {/* Animated Accent Line */}
                                <div className="h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-8 mt-2 rounded-full" />

                                {/* Industry Label - Floating Tooltip */}
                                <span className="absolute -top-2 opacity-0 group-hover:opacity-100 group-hover:-top-5 transition-all duration-300 text-[9px] font-black text-orange-600 uppercase tracking-widest pointer-events-none whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-md border border-orange-100 z-10">
                  {brand.industry}
                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Badge - Trust Certificate */}
                    <div className="shrink-0 flex items-center gap-3 bg-teal-50 px-6 py-5 rounded-[1.5rem] border-2 border-teal-100 shadow-sm">
                        <ShieldCheck size={22} className="text-teal-600" />
                        <div className="flex flex-col">
              <span className="text-[10px] font-black text-teal-900 uppercase tracking-tight leading-none mb-0.5">
                Verified Stockist
              </span>
                            <span className="text-[10px] font-bold text-teal-600/70">
                Official Hub 2026
              </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomeBrandPartners;