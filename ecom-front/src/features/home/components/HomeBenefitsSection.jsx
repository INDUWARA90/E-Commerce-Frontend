import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const BENEFITS = [
    {
        id: 1,
        title: "Fast Delivery",
        desc: "Island-wide shipping in 1-3 days.",
        icon: Truck,
        accent: "bg-orange-500"
    },
    {
        id: 2,
        title: "Secure Payment",
        desc: "Protected checkout on every order.",
        icon: ShieldCheck,
        accent: "bg-teal-500"
    },
    {
        id: 3,
        title: "Easy Returns",
        desc: "Simple returns with quick processing.",
        icon: RotateCcw,
        accent: "bg-orange-500"
    },
    {
        id: 4,
        title: "24/7 Support",
        desc: "Support team is always available.",
        icon: Headset,
        accent: "bg-teal-500"
    },
];

function HomeBenefitsSection() {
    return (
        <section className="relative overflow-hidden bg-white border-y border-slate-100 py-20">
            {/* Subtle Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {BENEFITS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group flex items-start gap-5 p-2 transition-all duration-300"
                            >
                                {/* Icon Container with Theme Colors */}
                                <div className="relative shrink-0">
                                    <div className={`w-16 h-16 rounded-[1.5rem] bg-teal-950 flex items-center justify-center text-teal-50 shadow-2xl shadow-teal-900/20 group-hover:-rotate-12 transition-transform duration-500`}>
                                        <Icon size={28} strokeWidth={2.5} />
                                    </div>
                                    {/* Floating Orange Dot accent */}
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-4 border-white group-hover:scale-150 transition-transform duration-500" />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium leading-snug">
                                        {item.desc}
                                    </p>
                                    {/* Small animated underline */}
                                    <div className="h-1 w-0 bg-orange-400 rounded-full group-hover:w-8 transition-all duration-500 mt-1" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HomeBenefitsSection;