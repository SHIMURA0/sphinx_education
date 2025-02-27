import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 z-0"></div>

            {/* 动态背景效果 - 减少元素 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">开启AI驱动的教育新时代</h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    立即加入SphinxScholar，体验家校协作的力量，为孩子创造更好的学习环境和成长空间
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button className="group px-8 py-3 rounded-lg bg-white text-blue-600 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-700/20 transition-all font-medium flex items-center justify-center mx-auto sm:mx-0">
                        免费试用14天 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group px-8 py-3 rounded-lg bg-transparent border-2 border-white/70 text-white hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all font-medium flex items-center justify-center mx-auto sm:mx-0">
                        安排演示 <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;