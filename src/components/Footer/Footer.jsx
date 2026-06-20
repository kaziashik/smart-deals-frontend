import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white">
            <div className="max-w-[1600px] mx-auto px-20 pt-20 pb-8">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold">
                            Smart<span className="text-primary">Deals</span>
                        </h2>

                        <p className="mt-4 text-sm text-gray-400 leading-7 max-w-xs">
                            Your trusted marketplace for authentic local
                            products. Discover the best deals from across
                            Bangladesh.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link to="/products" className="hover:text-primary duration-200">
                                    All Products
                                </Link>
                            </li>

                            <li>
                                <Link to="/dashboard" className="hover:text-primary duration-200">
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/login" className="hover:text-primary duration-200">
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link to="/register" className="hover:text-primary duration-200">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Categories
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>Electronics</li>
                            <li>Fashion</li>
                            <li>Home & Living</li>
                            <li>Groceries</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Contact & Support
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <FiMail />
                                support@smartdeals.com
                            </li>

                            <li className="flex items-center gap-3">
                                <FiPhone />
                                +880 123 456 789
                            </li>

                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1" />
                                <span>
                                    123 Commerce Street,
                                    <br />
                                    Dhaka, Bangladesh
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Social Links
                        </h3>

                        <div className="flex items-center gap-5">
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary duration-200"
                            >
                                <FaXTwitter size={18} />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary duration-200"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary duration-200"
                            >
                                <FaFacebookF size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-12 pt-6">
                    <p className="text-center text-sm text-gray-400">
                        © 2025 SmartDeals. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;