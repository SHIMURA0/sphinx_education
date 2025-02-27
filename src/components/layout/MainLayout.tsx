import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
    Menu, X, Book, BarChart2, UserCircle, Settings, LogOut,
    ChevronDown, Home, BookOpen, MessageSquare, Brain, Volume2
} from "lucide-react";

const MainLayout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    // 检查当前路径是否匹配指定路径
    const isActive = (path: string) => {
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 移动端侧边栏 */}
            <div
                className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
                    sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setSidebarOpen(false)}
            />

            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:static lg:h-screen lg:sticky lg:top-0`}>
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                    <Link to="/" className="flex items-center">
                        <Volume2 className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">语言学习助手</span>
                    </Link>
                    <button
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                <div className="px-2 py-4">
                    <div className="space-y-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                    isActive
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <Home className="mr-3 h-5 w-5" />
                            首页
                        </NavLink>

                        <NavLink
                            to="/reading-retell"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                    isActive || location.pathname.startsWith("/reading-retell")
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <BookOpen className="mr-3 h-5 w-5" />
                            阅读复述训练
                        </NavLink>

                        <NavLink
                            to="/speaking-practice"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                    isActive
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <MessageSquare className="mr-3 h-5 w-5" />
                            口语练习
                        </NavLink>

                        <NavLink
                            to="/vocabulary-builder"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                    isActive
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <Book className="mr-3 h-5 w-5" />
                            词汇构建
                        </NavLink>

                        <NavLink
                            to="/listening-comprehension"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                    isActive
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <Volume2 className="mr-3 h-5 w-5" />
                            听力理解
                        </NavLink>

                        <NavLink
                            to="/pronunciation-correction"
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                    isActive
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <Brain className="mr-3 h-5 w-5" />
                            发音纠正
                        </NavLink>
                    </div>

                    <div className="mt-8">
                        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            个人中心
                        </h3>
                        <div className="mt-2 space-y-1">
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                        isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <UserCircle className="mr-3 h-5 w-5" />
                                个人资料
                            </NavLink>

                            <NavLink
                                to="/progress"
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                        isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <BarChart2 className="mr-3 h-5 w-5" />
                                学习进度
                            </NavLink>

                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    `flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                                        isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <Settings className="mr-3 h-5 w-5" />
                                设置
                            </NavLink>

                            <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
                                <LogOut className="mr-3 h-5 w-5" />
                                退出登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1 min-h-screen">
                {/* 顶部导航栏 */}
                <header className="bg-white shadow-sm lg:shadow-none">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center lg:hidden">
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>

                            {/* 移动端显示当前页面标题 */}
                            <div className="flex items-center lg:hidden">
                                {isActive("/reading-retell") && (
                                    <span className="text-lg font-medium text-gray-900">阅读复述训练</span>
                                )}
                                {isActive("/speaking-practice") && (
                                    <span className="text-lg font-medium text-gray-900">口语练习</span>
                                )}
                                {isActive("/vocabulary-builder") && (
                                    <span className="text-lg font-medium text-gray-900">词汇构建</span>
                                )}
                                {isActive("/listening-comprehension") && (
                                    <span className="text-lg font-medium text-gray-900">听力理解</span>
                                )}
                                {isActive("/pronunciation-correction") && (
                                    <span className="text-lg font-medium text-gray-900">发音纠正</span>
                                )}
                                {isActive("/profile") && (
                                    <span className="text-lg font-medium text-gray-900">个人资料</span>
                                )}
                                {isActive("/progress") && (
                                    <span className="text-lg font-medium text-gray-900">学习进度</span>
                                )}
                                {isActive("/settings") && (
                                    <span className="text-lg font-medium text-gray-900">设置</span>
                                )}
                            </div>

                            {/* 用户信息 */}
                            <div className="flex items-center">
                                <div className="hidden md:flex md:items-center md:ml-6">
                                    <div className="relative ml-3">
                                        <div>
                                            <button className="flex items-center max-w-xs text-sm rounded-full focus:outline-none">
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="/api/placeholder/32/32"
                                                    alt="用户头像"
                                                />
                                                <span className="ml-2 text-gray-700">王小明</span>
                                                <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* 主要内容区域 */}
                <main className="flex-1">
                    <Outlet />
                </main>

                {/* 页脚 */}
                <footer className="bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-sm text-gray-500">
                            <p>© {new Date().getFullYear()} 语言学习助手. 保留所有权利.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;