import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Book, MessageCircle, Mic, FileText } from "lucide-react";

const ChineseTraining: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        to="/family"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> 返回家庭学习中心
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        语文训练中心
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        全面提升孩子的语文能力，打造扎实的语文基础
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 阅读复述训练模块 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                            <Book className="h-24 w-24 text-blue-500" />
                        </div>
                        <div className="px-6 py-5">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold text-gray-900">阅读复述</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  新上线
                </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                通过有趣的故事阅读和复述练习，提升记忆力、理解力和表达能力
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    适合年龄: 6-12岁
                                </div>
                                <Link
                                    to="/reading-retell"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                                >
                                    开始训练
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 词汇积累训练模块 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-green-50 to-teal-50 flex items-center justify-center">
                            <MessageCircle className="h-24 w-24 text-green-500" />
                        </div>
                        <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">词汇积累</h3>
                            <p className="text-gray-600 mb-4">
                                丰富词汇量，掌握词语用法，提高语言表达的准确性和丰富性
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    适合年龄: 7-14岁
                                </div>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                                    开始训练
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 朗读训练模块 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-purple-50 to-violet-50 flex items-center justify-center">
                            <Mic className="h-24 w-24 text-purple-500" />
                        </div>
                        <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">朗读训练</h3>
                            <p className="text-gray-600 mb-4">
                                培养语感，提高朗读技巧，增强朗读的流畅性和表现力
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    适合年龄: 6-15岁
                                </div>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600">
                                    开始训练
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 阅读理解训练模块 */}
                    <div className="bg-white overflow-hidden shadow rounded-lg transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300">
                        <div className="h-48 bg-gradient-to-r from-yellow-50 to-amber-50 flex items-center justify-center">
                            <FileText className="h-24 w-24 text-yellow-500" />
                        </div>
                        <div className="px-6 py-5">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">阅读理解</h3>
                            <p className="text-gray-600 mb-4">
                                提高文本理解能力，学会分析文章结构，把握文章主旨
                            </p>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    适合年龄: 8-15岁
                                </div>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600">
                                    开始训练
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChineseTraining;