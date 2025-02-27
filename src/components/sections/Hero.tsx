import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-60 z-0"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="inline-block px-3 py-1 mb-5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                    AI 教育创新平台
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                    AI驱动的家校协作教育平台
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                    SphinxScholar通过智能技术连接家庭与学校，共同创造个性化学习体验，提升学习效率与教育质量。
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                    <Link
                        to="/family"
                        className="group px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 font-medium flex items-center justify-center"
                    >
                        家长端入口 <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/school"
                        className="group px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-cyan-200 transition-all duration-300 font-medium flex items-center justify-center"
                    >
                        学校端入口 <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;