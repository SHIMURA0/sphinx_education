import React from "react";
import { Cpu, Users, Layers } from "lucide-react";
import { features } from "../../data/contentData";
import { Feature } from "../../types";

const Features: React.FC = () => {
    // 图标映射
    return (
        <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-50 z-10">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">AI教育赋能，家校共育未来</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        我们的平台通过先进的AI技术，帮助教师和家长更好地了解、支持学生的学习进程
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature: Feature, index: number) => {
                        // 动态获取图标组件
                        const IconComponent = feature.iconName === "Cpu" ? Cpu :
                            feature.iconName === "Users" ? Users : Layers;

                        return (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-px bg-gradient-to-r from-purple-300/50 to-blue-300/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                                <div className="relative bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-100">
                                    <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4 border border-blue-100">
                                        <IconComponent className={`h-10 w-10 ${feature.iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;