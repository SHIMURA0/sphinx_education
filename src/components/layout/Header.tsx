import React, { useState } from "react";
import { BookOpen } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <BookOpen className="h-8 w-8 text-blue-500" />
                            <span className="ml-2 text-xl font-bold text-gray-800">Sphinx Education</span>
                        </Link>
                    </div>

                    {/* 桌面端导航 */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/#features"
                            className={`text-gray-600 hover:text-blue-500 font-medium transition-colors ${
                                location.pathname === "/" && location.hash === "#features"
                                    ? "text-blue-500"
                                    : ""
                            }`}
                        >
                            功能
                        </Link>
                        <Link
                            to="/#courses"
                            className={`text-gray-600 hover:text-blue-500 font-medium transition-colors ${
                                location.pathname === "/" && location.hash === "#courses"
                                    ? "text-blue-500"
                                    : ""
                            }`}
                        >
                            课程
                        </Link>
                        <Link
                            to="/about"
                            className={`text-gray-600 hover:text-blue-500 font-medium transition-colors ${
                                location.pathname === "/about" ? "text-blue-500" : ""
                            }`}
                        >
                            关于我们
                        </Link>
                        <Link
                            to="/parent-portal"
                            className={`text-gray-600 hover:text-blue-500 font-medium transition-colors ${
                                location.pathname === "/parent-portal" ? "text-blue-500" : ""
                            }`}
                        >
                            家长端
                        </Link>
                        <Link
                            to="/school-portal"
                            className={`text-gray-600 hover:text-blue-500 font-medium transition-colors ${
                                location.pathname === "/school-portal" ? "text-blue-500" : ""
                            }`}
                        >
                            学校端
                        </Link>
                    </div>

                    {/* 登录/注册按钮 */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                        >
                            登录
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            注册
                        </Link>
                    </div>

                    {/* 移动端菜单按钮 */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                            aria-expanded={mobileMenuOpen}
                        >
                            <span className="sr-only">打开菜单</span>
                            {mobileMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端菜单 */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                        <Link
                            to="/#features"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                location.pathname === "/" && location.hash === "#features"
                                    ? "bg-blue-50 text-blue-500"
                                    : "text-gray-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            功能
                        </Link>
                        <Link
                            to="/#courses"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                location.pathname === "/" && location.hash === "#courses"
                                    ? "bg-blue-50 text-blue-500"
                                    : "text-gray-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            课程
                        </Link>
                        <Link
                            to="/about"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                location.pathname === "/about"
                                    ? "bg-blue-50 text-blue-500"
                                    : "text-gray-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            关于我们
                        </Link>
                        <Link
                            to="/parent-portal"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                location.pathname === "/parent-portal"
                                    ? "bg-blue-50 text-blue-500"
                                    : "text-gray-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            家长端
                        </Link>
                        <Link
                            to="/school-portal"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                location.pathname === "/school-portal"
                                    ? "bg-blue-50 text-blue-500"
                                    : "text-gray-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            学校端
                        </Link>

                        {/* 移动端登录/注册按钮 */}
                        <div className="pt-4 pb-3 border-t border-gray-100">
                            <div className="flex items-center px-5">
                                <Link
                                    to="/login"
                                    className="w-full text-center px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    登录
                                </Link>
                            </div>
                            <div className="mt-3 px-5">
                                <Link
                                    to="/register"
                                    className="w-full block text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    注册
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;