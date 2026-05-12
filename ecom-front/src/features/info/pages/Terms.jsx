import LegalLayout from "../components/LegalLayout";
import { Scale, CheckCircle2 } from "lucide-react";
import { TERMS_CONTENT } from "../constants/legalData";

const TermsOfService = () => (
    <LegalLayout title="Terms of Service" icon={Scale} lastUpdated="May 12, 2026">
        <div className="space-y-12">
            {TERMS_CONTENT.map((section) => (
                <section key={section.id} className="group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 size={18} />
                        </div>
                        <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                            {section.title}
                        </h2>
                    </div>

                    <div className="pl-11">
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {section.text}
                        </p>
                        {/* If you add specific clauses to your dummy data later, they render here */}
                        {section.subPoints && (
                            <div className="mt-4 grid gap-3">
                                {section.subPoints.map((point, i) => (
                                    <div key={i} className="p-4 bg-slate-50 rounded-xl border-l-4 border-teal-500 text-xs font-bold text-slate-700 uppercase tracking-wide">
                                        {point}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </div>
    </LegalLayout>
);

export default TermsOfService;