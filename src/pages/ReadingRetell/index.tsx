import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart, Clock } from "lucide-react";

// 模拟故事数据
const stories = [
    {
        id: 1,
        title: "小熊的冒险",
        level: "初级",
        image: "/api/placeholder/200/130",
        summary: "小熊布朗离开家，踏上了一段奇妙的森林探险，结交了许多新朋友。",
        age: "6-8岁",
        estimatedTime: "5分钟"
    },
    {
        id: 2,
        title: "海底奇遇",
        level: "初级",
        image: "/api/placeholder/200/130",
        summary: "小鱼露比在海底探险，发现了一座神秘的古老城堡，里面藏着许多秘密。",
        age: "6-8岁",
        estimatedTime: "5分钟"
    },
    {
        id: 3,
        title: "魔法学校",
        level: "中级",
        image: "/api/placeholder/200/130",
        summary: "小女孩莉莉进入了一所神奇的魔法学校，开始学习魔法并结交新朋友。",
        age: "8-10岁",
        estimatedTime: "7分钟"
    },
    {
        id: 4,
        title: "宇宙探险队",
        level: "中级",
        image: "/api/placeholder/200/130",
        summary: "一群勇敢的孩子组成探险队，乘坐宇宙飞船探索未知的星球。",
        age: "8-10岁",
        estimatedTime: "7分钟"
    },
    {
        id: 5,
        title: "古城传说",
        level: "高级",
        image: "/api/placeholder/200/130",
        summary: "一个古老城市里流传着神秘的传说，勇敢的少年决定揭开这个谜团。",
        age: "10-12岁",
        estimatedTime: "10分钟"
    },
    {
        id: 6,
        title: "森林守护者",
        level: "高级",
        image: "/api/placeholder/200/130",
        summary: "一群孩子成为森林的守护者，保护森林免受破坏，学习与自然和谐相处。",
        age: "10-12岁",
        estimatedTime: "10分钟"
    }
];

const ReadingRetellIndex: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        to="/family/chinese-training"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> 返回语文训练中心
                    </Link>
                </div>

                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900">阅读复述训练</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        通过阅读和复述有趣的故事，提升理解力、记忆力和表达能力
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow mb-10 overflow-hidden">
                    <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">训练进度</h2>
                            <p className="text-gray-600">
                                完成更多的故事复述训练，提升你的阅读理解和表达能力
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                to="/reading-retell/reports"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                            >
                                <BarChart className="mr-2 h-4 w-4" /> 查看进度报告
                            </Link>
                        </div>
                    </div>
                    <div className="bg-blue-50 px-6 py-4 border-t border-blue-100">
                        <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                            <span className="ml-4 text-sm font-medium text-gray-700">15%</span>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">已完成1个故事训练，继续努力！</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">选择故事开始训练</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stories.map(story => (
                            <div
                                key={story.id}
                                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
                            >
                                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                            story.level === "初级" ? "bg-green-100 text-green-800" :
                                                story.level === "中级" ? "bg-yellow-100 text-yellow-800" :
                                                    "bg-red-100 text-red-800"
                                        }`}>
                      {story.level}
                    </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{story.summary}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <span>适合年龄: {story.age}</span>
                                        <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {story.estimatedTime}
                    </span>
                                    </div>
                                    <Link
                                        to={`/reading-retell/story/${story.id}`}
                                        className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        开始阅读
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingRetellIndex;