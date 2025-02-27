import React from "react";
import { Home, School, Zap } from "lucide-react";
import { homeFeatures, schoolFeatures } from "../../data/contentData";

const Comparison: React.FC = () => {
    return (
        <section id="comparison" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white z-10">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">家庭端与学校端无缝协作</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们的双端平台设计，确保家长和教师能够从各自视角协同合作，为孩子提供全方位支持
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                        <div className="absolute -inset-px bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl blur-md"></div>
                        <div className="relative bg-white p-8 rounded-xl border-t-2 border-purple-500 shadow-xl">
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-purple-50 rounded-lg mr-3 border border-purple-200">
                                    <Home className="h-7 w-7 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-purple-600">家庭端</h3>
                            </div>
                            <ul className="space-y-3">
                                {homeFeatures.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start">
                    <span className="inline-block p-1 bg-purple-100 rounded-full mr-2 border border-purple-200">
                      <Zap className="h-3 w-3 text-purple-500" />
                    </span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-px bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl blur-md"></div>
                        <div className="relative bg-white p-8 rounded-xl border-t-2 border-blue-500 shadow-xl">
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-blue-50 rounded-lg mr-3 border border-blue-200">
                                    <School className="h-7 w-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-600">学校端</h3>
                            </div>
                            <ul className="space-y-3">
                                {schoolFeatures.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start">
                    <span className="inline-block p-1 bg-blue-100 rounded-full mr-2 border border-blue-200">
                      <Zap className="h-3 w-3 text-blue-500" />
                    </span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;