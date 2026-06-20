import React from 'react';
import { Link } from 'react-router';
import { FiSearch } from 'react-icons/fi';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#FCEBFF] via-[#F4F7FF] to-[#E8FFF8]">
            {/* left pattern */}
            <div className="absolute left-0 top-16 h-72 w-72 rounded-full border border-primary/10 opacity-40"></div>
            <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full border border-primary/10 opacity-40"></div>

            {/* right pattern */}
            <div className="absolute right-0 top-16 h-72 w-72 rounded-full border border-primary/10 opacity-40"></div>
            <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full border border-primary/10 opacity-40"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0F1F35]">
                    Deal Your <span className="text-primary">Products</span>
                    <br />
                    In A <span className="text-primary">Smart</span> Way !
                </h1>

                <p className="mt-5 text-sm md:text-base text-gray-500">
                    SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
                </p>

                <div className="mt-8 flex justify-center">
                    <div className="flex w-full max-w-xl shadow-lg rounded-full overflow-hidden bg-white">
                        <input
                            type="text"
                            placeholder="search For Products, Categories..."
                            className="input w-full rounded-none border-0 focus:outline-none text-sm"
                        />
                        <button className="btn btn-primary rounded-none px-5">
                            <FiSearch size={18} />
                        </button>
                    </div>
                </div>

                <div className="mt-7 flex justify-center gap-4">
                    <Link to="/products" className="btn btn-gradient">
                        Watch All Products
                    </Link>

                    <Link to="/createProduct" className="btn btn-outline btn-primary">
                        Post an Product
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;