import LegalLayout from "../components/LegalLayout";
import { Shield } from "lucide-react";
import { PRIVACY_CONTENT } from "../constants/legalData";

const PrivacyPolicy = () => (
    <LegalLayout title="Privacy Policy" icon={Shield} lastUpdated="May 12, 2026">
        {PRIVACY_CONTENT.map((section) => (
            <div key={section.id} className="mb-10">
                <h2 className="text-xl font-black text-slate-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4">{section.text}</p>
                {section.list && (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {section.list.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-slate-500 text-sm">
                                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        ))}
    </LegalLayout>
);

export default PrivacyPolicy;