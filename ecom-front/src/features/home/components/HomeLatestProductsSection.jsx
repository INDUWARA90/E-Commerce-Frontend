import { Link } from "react-router-dom";
import { ArrowRight, Zap, Flame } from "lucide-react";
import ProductCard from "../../../shared/components/ProductCard";

function HomeLatestProductsSection({ isLoading, error, products }) {
  return (
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* --- TRENDING HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              <Flame size={12} fill="currentColor" /> Just Landed
            </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Latest <span className="text-teal-600">Arrivals</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-md">
              Don't miss out on the freshest drops. Quality meets style in our newest collection.
            </p>
          </div>

          <Link
              to="/products"
              className="group relative inline-flex items-center gap-3 bg-slate-900 text-white py-4 px-8 rounded-2xl font-black text-xs uppercase tracking-[0.15em] overflow-hidden transition-all hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-100 active:scale-95"
          >
            <span className="relative z-10">Explore Catalog</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            {/* Animated Orange Flare */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-orange-500/20 opacity-40 group-hover:animate-shine" />
          </Link>
        </div>

        {/* --- GRID LOGIC --- */}
        {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                      key={idx}
                      className="h-[450px] bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 animate-pulse relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/50" />
                  </div>
              ))}
            </div>
        ) : error ? (
            <div className="py-20 text-center bg-red-50 rounded-[3rem] border-2 border-red-100">
              <div className="inline-flex p-4 rounded-full bg-red-100 text-red-600 mb-4">
                <Zap size={32} />
              </div>
              <p className="text-red-900 font-black text-xl italic uppercase tracking-tighter">{error}</p>
            </div>
        ) : products.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {products.slice(0, 4).map((item) => (
                  <div key={item.productId ?? item.id} className="group">
                    <ProductCard {...item} />
                    {/* Adding a custom 'New' tag that shows only in this section */}
                    <div className="mt-4 flex items-center gap-2 px-2">
                      <div className="h-1 w-1 rounded-full bg-teal-500" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">In Stock Now</span>
                    </div>
                  </div>
              ))}
            </div>
        ) : (
            <div className="py-24 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-black text-2xl uppercase tracking-tighter">
                Inventory is being updated...
              </p>
            </div>
        )}
      </section>
  );
}

export default HomeLatestProductsSection;