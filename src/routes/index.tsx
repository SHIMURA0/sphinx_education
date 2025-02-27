import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// 页面导入
import Home from "../pages/Home";
import ParentPortal from "../pages/ParentPortal";
// import SchoolPortal from "../pages/SchoolPortal";
// import About from "../pages/About";

import ChineseTraining from "../pages/ParentPortal/ChineseTraining";

// 阅读复述相关页面
import ReadingRetellIndex from "../pages/ReadingRetell";
import StoryDetail from "../pages/ReadingRetell/StoryDetail";
import Training from "../pages/ReadingRetell/Training";
import Reports from "../pages/ReadingRetell/Reports";

// 模拟其他功能页面
const SpeakingPractice = () => <div className="p-8"><h1 className="text-2xl font-bold">口语练习（开发中）</h1></div>;
const VocabularyBuilder = () => <div className="p-8"><h1 className="text-2xl font-bold">词汇构建（开发中）</h1></div>;
const ListeningComprehension = () => <div className="p-8"><h1 className="text-2xl font-bold">听力理解（开发中）</h1></div>;
const PronunciationCorrection = () => <div className="p-8"><h1 className="text-2xl font-bold">发音纠正（开发中）</h1></div>;
const Profile = () => <div className="p-8"><h1 className="text-2xl font-bold">个人资料（开发中）</h1></div>;
const Progress = () => <div className="p-8"><h1 className="text-2xl font-bold">学习进度（开发中）</h1></div>;
const Settings = () => <div className="p-8"><h1 className="text-2xl font-bold">设置（开发中）</h1></div>;
const NotFound = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
                <h1 className="text-9xl font-bold text-blue-600">404</h1>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">页面未找到</h2>
                <p className="mt-2 text-sm text-gray-600">
                    抱歉，您访问的页面不存在或已被移除。
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                        返回首页
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const AppRoutes: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* 家庭端入口 */}
                <Route path="/family" element={<ParentPortal />} />
                <Route path="/family/chinese-training" element={<ChineseTraining />} />

                {/* 阅读复述训练路由 */}
                <Route path="/reading-retell" element={<ReadingRetellIndex />} />
                <Route path="/reading-retell/story/:id" element={<StoryDetail />} />
                <Route path="/reading-retell/training/:id" element={<Training />} />
                <Route path="/reading-retell/reports" element={<Reports />} />

                {/* 其他功能路由 */}
                <Route path="/speaking-practice" element={<SpeakingPractice />} />
                <Route path="/vocabulary-builder" element={<VocabularyBuilder />} />
                <Route path="/listening-comprehension" element={<ListeningComprehension />} />
                <Route path="/pronunciation-correction" element={<PronunciationCorrection />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/settings" element={<Settings />} />

                {/* 如果需要，可以取消注释这些路由 */}
                {/*<Route path="/school-portal" element={<SchoolPortal />} />*/}
                {/*<Route path="/about" element={<About />} />*/}

                {/* 404页面 - 必须放在最后 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default AppRoutes;
