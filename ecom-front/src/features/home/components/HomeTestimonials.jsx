// components/HomeTestimonials.jsx
import { Star, Quote } from "lucide-react";

const FEEDBACK = [
    {
        id: 1,
        user: "Alex R.",
        product: "FlexFold Duo",
        comment: "The multitasking on this foldable is insane. Best tech purchase of 2026.",
        rating: 5
    },
    {
        id: 2,
        user: "Sarah M.",
        product: "CreatorBook 16 OLED",
        comment: "As a designer, the OLED screen is a game changer. Colors are perfect.",
        rating: 5
    },
    {
        id: 3,
        user: "Jason K.",
        product: "Nova X5 5G",
        comment: "Super fast 5G speeds and the AMOLED display is buttery smooth.",
        rating: 4
    }
];

function HomeTestimonials() {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative">
            <div className="absolute top-0 right-0 text-teal-50 opacity-50 -z-10">
                <Quote size={200} fill="currentColor" />
            </div>

            <div className="mb-16">
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                    What Our <span className="text-orange-500">Community</span> Says
                </h2>
                <div className="h-1.5 w-20 bg-teal-600 mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEEDBACK.map((item) => (
                    <div key={item.id} className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 group">
                        <div className="flex gap-1 mb-6">
                            {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} size={16} className="text-orange-500" fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-slate-600 font-medium italic mb-8 leading-relaxed">
                            "{item.comment}"
                        </p>

                        <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                            <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-teal-200">
                                {item.user[0]}
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900">{item.user}</h4>
                                <p className="text-xs font-bold text-teal-600 uppercase tracking-tighter">
                                    Verified Buyer • {item.product}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HomeTestimonials;