import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ChevronDown, ChevronUp, Book, BarChart2, TrendingUp, Award } from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line
} from "recharts";

// 模拟训练历史数据
const trainingHistory = [
    {
        id: 1,
        date: "2025-02-25",
        storyTitle: "小熊的冒险",
        storyLevel: "初级",
        score: 85,
        coverage: 80,
        accuracy: 90,
        expression: 85
    },
    {
        id: 2,
        date: "2025-02-20",
        storyTitle: "海底奇遇",
        storyLevel: "初级",
        score: 78,
        coverage: 75,
        accuracy: 82,
        expression: 77
    },
    {
        id: 3,
        date: "2025-02-15",
        storyTitle: "魔法学校",
        storyLevel: "中级",
        score: 70,
        coverage: 65,
        accuracy: 75,
        expression: 70
    }
];

// 模拟能力数据
const skillsData = [
    { skill: "内容覆盖率", value: 75 },
    { skill: "表达准确性", value: 82 },
    { skill: "语言流畅性", value: 77 },
    { skill: "结构组织", value: 70 },
    { skill: "细节记忆", value: 68 }
];

// 模拟进度数据
const progressData = [
    { name: "1月", score: 60 },
    { name: "2月", score: 76 },
    { name: "3月", score: 0 }
];

// 模拟推荐故事
const recommendedStories = [
    { id: 3, title: "魔法学校", level: "中级", suitability: "高" },
    { id: 4, title: "宇宙探险队", level: "中级", suitability: "高" },
    { id: 5, title: "古城传说", level: "高级", suitability: "中" }
];

const Reports: React.FC = () => {
    const [expandedRecords, setExpandedRecords] = useState<number[]>([]);

    // 计算平均分数
    const averageScore = Math.round(
        trainingHistory.reduce((sum, record) => sum + record.score, 0) / trainingHistory.length
    );

    // 计算最高分数
    const highestScore = Math.max(...trainingHistory.map(record => record.score));

    // 切换展开/折叠记录
    const toggleRecord = (id: number) => {
        if (expandedRecords.includes(id)) {
            setExpandedRecords(expandedRecords.filter(recordId => recordId !== id));
        } else {
            setExpandedRecords([...expandedRecords, id]);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        to="/reading-retell"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> 返回阅读复述训练
                    </Link>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-8">阅读复述训练报告</h1>

                {/* 训练进度概览 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <Book className="mr-2 h-5 w-5 text-blue-500" /> 训练统计
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-gray-500 text-sm">已完成训练</p>
                                <p className="text-3xl font-bold text-gray-900">{trainingHistory.length}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-500 text-sm">平均分数</p>
                                <p className="text-3xl font-bold text-blue-600">{averageScore}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-500 text-sm">最高分数</p>
                                <p className="text-3xl font-bold text-green-600">{highestScore}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-500 text-sm">完成进度</p>
                                <p className="text-3xl font-bold text-purple-600">15%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <BarChart2 className="mr-2 h-5 w-5 text-blue-500" /> 能力分析
                        </h2>
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart outerRadius={90} data={skillsData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="skill" />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                    <Radar
                                        name="能力值"
                                        dataKey="value"
                                        stroke="#2563eb"
                                        fill="#3b82f6"
                                        fillOpacity={0.6}
                                    />
                                    <Tooltip />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <TrendingUp className="mr-2 h-5 w-5 text-blue-500" /> 分数趋势
                        </h2>
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={progressData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis domain={[0, 100]} />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#2563eb"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* 训练历史记录 */}
                <div className="bg-white rounded-lg shadow-md mb-8">
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">训练历史记录</h2>
                    </div>
                    <div className="overflow-hidden">
                        <ul className="divide-y divide-gray-200">
                            {trainingHistory.map(record => (
                                <li key={record.id}>
                                    <div
                                        className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                                        onClick={() => toggleRecord(record.id)}
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-4 flex-shrink-0">
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <Book className="h-5 w-5 text-blue-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{record.storyTitle}</p>
                                                <div className="flex items-center mt-1">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                              record.storyLevel === "初级" ? "bg-green-100 text-green-800" :
                                  record.storyLevel === "中级" ? "bg-yellow-100 text-yellow-800" :
                                      "bg-red-100 text-red-800"
                          }`}>
                            {record.storyLevel}
                          </span>
                                                    <span className="ml-2 text-xs text-gray-500 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" /> {record.date}
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="text-center mr-8">
                                                <p className="text-xs text-gray-500">得分</p>
                                                <p className="text-lg font-bold text-blue-600">{record.score}</p>
                                            </div>
                                            {expandedRecords.includes(record.id) ? (
                                                <ChevronUp className="h-5 w-5 text-gray-400" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5 text-gray-400" />
                                            )}
                                        </div>
                                    </div>

                                    {expandedRecords.includes(record.id) && (
                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                            <div className="mb-4">
                                                <h3 className="text-sm font-medium text-gray-900 mb-2">详细评分</h3>
                                                <div className="h-40">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <BarChart
                                                            data={[
                                                                { name: "内容覆盖", value: record.coverage },
                                                                { name: "表达准确", value: record.accuracy },
                                                                { name: "语言流畅", value: record.expression }
                                                            ]}
                                                            margin={{
                                                                top: 5,
                                                                right: 30,
                                                                left: 20,
                                                                bottom: 5,
                                                            }}
                                                        >
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="name" />
                                                            <YAxis domain={[0, 100]} />
                                                            <Tooltip />
                                                            <Bar dataKey="value" fill="#3b82f6" />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>

                                            <div className="flex justify-end">
                                                <Link
                                                    to={`/reading-retell/story/${record.id}`}
                                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                                                >
                                                    重新训练
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 学习建议与推荐 */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                            <Award className="mr-2 h-5 w-5 text-blue-500" /> 学习建议与推荐
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="mb-6">
                            <h3 className="text-md font-medium text-gray-900 mb-2">根据你的表现，我们提供以下学习建议：</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>在复述时尝试更加注意故事中的细节描述</li>
                                <li>可以通过总结故事主题来提高内容覆盖率</li>
                                <li>尝试使用更丰富的词汇来描述故事情节和人物</li>
                                <li>在复述中注意故事的逻辑顺序和因果关系</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-md font-medium text-gray-900 mb-3">为你推荐的下一步训练：</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {recommendedStories.map(story => (
                                    <div key={story.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-base font-medium text-gray-900">{story.title}</h4>
                                            <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                                                story.level === "初级" ? "bg-green-100 text-green-800" :
                                                    story.level === "中级" ? "bg-yellow-100 text-yellow-800" :
                                                        "bg-red-100 text-red-800"
                                            }`}>
                        {story.level}
                      </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-3">
                                            匹配度:
                                            <span className={`ml-1 font-medium ${
                                                story.suitability === "高" ? "text-green-600" :
                                                    story.suitability === "中" ? "text-yellow-600" :
                                                        "text-red-600"
                                            }`}>
                        {story.suitability}
                      </span>
                                        </p>
                                        <Link
                                            to={`/reading-retell/story/${story.id}`}
                                            className="block w-full text-center px-3 py-1.5 border border-blue-600 text-xs font-medium rounded-md text-blue-600 hover:bg-blue-50"
                                        >
                                            开始训练
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;