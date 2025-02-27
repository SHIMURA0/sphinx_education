import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
                    <h1 className="text-9xl font-bold text-blue-600">404</h1>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">页面未找到</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        抱歉，您访问的页面不存在或已被移除。
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            返回首页
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;