import LegalLayout from "../components/LegalLayout";
import { Cookie, Info } from "lucide-react";
import { COOKIE_CONTENT } from "../constants/legalData";

const CookiesPolicy = () => (
    <LegalLayout title="Cookies Policy" icon={Cookie} lastUpdated="May 12, 2026">
        <div className="space-y-10">
            {/* Introduction */}
            <div className="p-6 bg-teal-50 rounded-[2rem] border border-teal-100 flex gap-4 items-start">
                <Info className="text-teal-600 shrink-0" size={24} />
                <p className="text-sm text-teal-900 font-medium leading-relaxed">
                    Our store uses cookies to ensure you get the best experience. By continuing to browse the site, you are agreeing to our use of cookies as outlined below.
                </p>
            </div>

            {/* Cookie Sections */}
            {COOKIE_CONTENT.map((section) => (
                <div key={section.id} className="relative pl-8 border-l-2 border-slate-100 hover:border-orange-500 transition-colors duration-500">
                    {/* Decorative Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-orange-500" />

                    <h2 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-3">
                        {section.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {section.text}
                    </p>

                    {/* Example Table-like Grid for Cookie Types */}
                    {section.id === "why-cookies" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <span className="text-[10px] font-black text-teal-600 uppercase tracking-widest block mb-1">Essential</span>
                                <p className="text-xs text-slate-500">Needed for cart and login sessions.</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-1">Analytics</span>
                                <p className="text-xs text-slate-500">To help us improve our product stock.</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </LegalLayout>
);

export default CookiesPolicy;