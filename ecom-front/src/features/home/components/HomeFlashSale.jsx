// components/HomeFlashSale.jsx
import { Link } from "react-router-dom";
import { Timer, Zap } from "lucide-react";

function HomeFlashSale() {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-12 shadow-2xl shadow-orange-200">
                {/* Decorative Background Circles */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6">
                            <Timer size={16} /> Limited Time Offer
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                            Flash Sale <span className="text-teal-950/30 text-3xl md:text-5xl">UP TO 25%</span>
                        </h2>
                        <p className="text-orange-100 font-medium max-w-md text-lg">
                            Grab our most popular items at half the price. Ends in less than 24 hours!
                        </p>
                    </div>

                    <Link
                        to="/products?sale=true"
                        className="group bg-teal-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-xl flex items-center gap-3"
                    >
                        Shop the Sale <Zap size={18} fill="currentColor" className="group-hover:animate-bounce" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default HomeFlashSale;