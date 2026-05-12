import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Tag } from "lucide-react";

function HomeCategoriesSection({ isLoading, error, categories }) {
  return (
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* --- HEADER DESIGN --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-orange-500" size={20} />
              <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">
              Curated Collections
            </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Browse <span className="text-teal-600">Categories</span>
            </h2>
            {/* Creative double underline */}
            <div className="mt-4 flex gap-1">
              <div className="h-2 w-24 bg-teal-600 rounded-full" />
              <div className="h-2 w-4 bg-orange-500 rounded-full" />
            </div>
          </div>

          <Link
              to="/products"
              className="group flex items-center gap-3 bg-teal-50 px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-widest text-teal-700 hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-sm"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* --- CONTENT GRID --- */}
        {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="h-48 bg-slate-100 rounded-[2rem] animate-pulse" />
              ))}
            </div>
        ) : error ? (
            <div className="text-center p-12 bg-red-50 rounded-[2rem] border-2 border-red-100">
              <p className="text-red-600 font-bold uppercase tracking-wider">{error}</p>
            </div>
        ) : categories.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                  <Link
                      key={category.categoryId}
                      to={`/products?category=${encodeURIComponent(category.categoryName)}`}
                      className="group relative h-48 overflow-hidden rounded-[2.5rem] bg-white border-2 border-teal-50 p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-orange-200 hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] hover:-translate-y-3"
                  >
                    {/* Background Accent Circle */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-50 rounded-full group-hover:bg-orange-100 transition-colors duration-500" />

                    {/* Icon Container */}
                    <div className="mb-4 relative">
                      <div className="p-4 rounded-3xl bg-teal-600 text-white shadow-lg shadow-teal-200 group-hover:bg-orange-500 group-hover:shadow-orange-200 group-hover:rotate-12 transition-all duration-500">
                        <Tag size={28} />
                      </div>
                    </div>

                    <h3 className="font-black text-slate-800 text-lg md:text-xl tracking-tight group-hover:text-teal-700 transition-colors">
                      {category.categoryName}
                    </h3>

                    {/* Subtle Count or Subtext Placeholder */}
                    <p className="text-slate-400 text-xs font-bold uppercase mt-1 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop Now
                    </p>

                    {/* Bottom Glow Effect */}
                    <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </Link>
              ))}
            </div>
        ) : (
            <div className="py-20 text-center rounded-[3rem] border-4 border-dotted border-slate-100">
              <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">Nothing found.</p>
            </div>
        )}
      </section>
  );
}

export default HomeCategoriesSection;