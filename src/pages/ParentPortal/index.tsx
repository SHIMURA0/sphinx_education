import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calculator, Languages } from "lucide-react";

const ParentPortal: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        家庭学习中心
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        为孩子提供全面的学习支持，助力成长每一步
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 语文学习入口 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                            <BookOpen className="h-24 w-24 text-blue-500" />
                        </div>
                        <div className="px-6 py-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">语文训练</h3>
                            <p className="text-gray-600 mb-6">
                                包含阅读复述、词汇积累、朗读训练、阅读理解等多种语文能力训练模块
                            </p>
                            <Link
                                to="/family/chinese-training"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                            >
                                进入训练 <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* 数学学习入口 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-center">
                            <Calculator className="h-24 w-24 text-green-500" />
                        </div>
                        <div className="px-6 py-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">数学训练</h3>
                            <p className="text-gray-600 mb-6">
                                包含计算能力、数学思维、几何学习、应用题解析等多种数学能力训练模块
                            </p>
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                                进入训练 <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* 英语学习入口 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-purple-50 to-pink-50 flex items-center justify-center">
                            <Languages className="h-24 w-24 text-purple-500" />
                        </div>
                        <div className="px-6 py-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">英语训练</h3>
                            <p className="text-gray-600 mb-6">
                                包含单词记忆、口语练习、听力理解、阅读理解等多种英语能力训练模块
                            </p>
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                                进入训练 <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 最近学习记录 */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">最近学习</h2>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-gray-500 text-center py-10">还没有学习记录，开始你的学习之旅吧！</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentPortal;