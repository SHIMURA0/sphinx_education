import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mic, StopCircle, RotateCw, Check, AlertCircle } from "lucide-react";

// 模拟故事数据
const storyData = {
    1: {
        id: 1,
        title: "小熊的冒险",
        summary: "小熊布朗离开家，踏上了一段奇妙的森林探险，结交了许多新朋友。",
        prompts: [
            "小熊布朗是怎样出发去冒险的？",
            "小熊布朗在森林里遇到了谁？他们发生了什么事？",
            "故事的结尾是怎样的？小熊布朗学到了什么？"
        ]
    },
    // 其他故事数据...
};

// 模拟AI评估结果
const mockEvaluation = {
    score: 85,
    coverage: 80,
    accuracy: 90,
    expression: 85,
    feedback: "你的复述包含了故事的主要情节，提到了小熊布朗、小兔子莉莉和小松鼠蒂姆。描述了他们如何相遇并一起解决问题。表达比较流畅，但可以加入更多细节，比如小熊带了什么食物，他们在路上聊了什么等。",
    strengths: [
        "成功捕捉到了故事的主要情节和人物",
        "复述的逻辑顺序清晰",
        "正确描述了故事的结局"
    ],
    improvements: [
        "可以加入更多故事细节，如环境描述",
        "尝试使用更丰富的词汇来描述人物的情感",
        "可以提及故事中蕴含的友谊和互助主题"
    ],
    transcript: "小熊布朗想去森林探险，他妈妈让他小心不要走太远。他带了蜂蜜三明治和水出发了。在森林里，他遇到了受伤的小兔子莉莉，帮助她并决定送她回家。路上他们又遇到了迷路的小松鼠蒂姆。三个小伙伴一起走，最后找到了莉莉的家。兔子一家请他们吃晚餐，然后送小熊布朗回家。小熊布朗和妈妈说他交到了新朋友，妈妈说冒险的意义就是帮助他人和建立友谊。"
};

const Training: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [step, setStep] = useState<'intro' | 'recording' | 'processing' | 'results'>('intro');
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [evaluation, setEvaluation] = useState<typeof mockEvaluation | null>(null);

    // 获取故事数据
    const story = storyData[Number(id)];

    // 如果故事不存在
    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">未找到故事</h2>
                    <Link
                        to="/reading-retell"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        返回故事列表
                    </Link>
                </div>
            </div>
        );
    }

    // 处理开始录制
    const handleStartRecording = () => {
        setIsRecording(true);
        setRecordingTime(0);
    };

    // 处理停止录制
    const handleStopRecording = () => {
        setIsRecording(false);
        setStep('processing');

        // 模拟处理时间
        setTimeout(() => {
            setEvaluation(mockEvaluation);
            setStep('results');
        }, 3000);
    };

    // 处理重新开始
    const handleRestart = () => {
        setStep('intro');
        setCurrentPromptIndex(0);
        setIsRecording(false);
        setRecordingTime(0);
        setEvaluation(null);
    };

    // 处理完成训练
    const handleFinishTraining = () => {
        navigate('/reading-retell');
    };

    // 计时器
    useEffect(() => {
        let timer: number;
        if (isRecording) {
            timer = window.setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRecording]);

    // 格式化时间
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        to={`/reading-retell/story/${id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> 返回故事
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            "{story.title}" 复述训练
                        </h1>

                        {step === 'intro' && (
                            <div>
                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                        训练说明
                                    </h2>
                                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                        <li>请根据下面的提示，用自己的话复述刚才阅读的故事</li>
                                        <li>尽量完整地描述故事的情节、人物和主要事件</li>
                                        <li>使用清晰的语言，注意语速和表达的流畅性</li>
                                        <li>完成后，AI将评估你的复述并给出反馈</li>
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        复述提示:
                                    </h3>
                                    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                                        <p className="text-lg text-gray-800">
                                            {story.prompts[currentPromptIndex]}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => setStep('recording')}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <Mic className="mr-2 h-5 w-5" /> 开始录制
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'recording' && (
                            <div className="text-center">
                                <div className="mb-8">
                                    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6">
                                        <p className="text-lg text-gray-800">
                                            {story.prompts[currentPromptIndex]}
                                        </p>
                                    </div>

                                    <div className={`w-40 h-40 mx-auto rounded-full flex items-center justify-center ${
                                        isRecording ? 'bg-red-100 animate-pulse' : 'bg-gray-100'
                                    }`}>
                                        {isRecording ? (
                                            <div className="text-center">
                                                <Mic className="h-16 w-16 text-red-500 mx-auto mb-2" />
                                                <p className="text-red-500 font-medium">正在录制...</p>
                                                <p className="text-xl font-bold mt-1">{formatTime(recordingTime)}</p>
                                            </div>
                                        ) : (
                                            <Mic className="h-16 w-16 text-gray-400" />
                                        )}
                                    </div>
                                </div>

                                <div className="space-x-4">
                                    {isRecording ? (
                                        <button
                                            onClick={handleStopRecording}
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            <StopCircle className="mr-2 h-5 w-5" /> 停止录制
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleStartRecording}
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                                            <Mic className="mr-2 h-5 w-5" /> 开始录制
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {step === 'processing' && (
                            <div className="text-center py-12">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-6"></div>
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                    正在分析你的复述...
                                </h2>
                                <p className="text-gray-600">
                                    请稍候，AI正在评估你的表现并生成反馈
                                </p>
                            </div>
                        )}

                        {step === 'results' && evaluation && (
                            <div>
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        复述评估结果
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                                            <p className="text-sm text-gray-600 mb-1">总体得分</p>
                                            <p className="text-3xl font-bold text-blue-600">{evaluation.score}<span className="text-lg">/100</span></p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                                            <p className="text-sm text-gray-600 mb-1">内容覆盖率</p>
                                            <p className="text-3xl font-bold text-green-600">{evaluation.coverage}<span className="text-lg">%</span></p>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
                                            <p className="text-sm text-gray-600 mb-1">表达流畅度</p>
                                            <p className="text-3xl font-bold text-purple-600">{evaluation.expression}<span className="text-lg">%</span></p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                                        <h3 className="text-md font-semibold text-gray-900 mb-2">
                                            你的复述内容:
                                        </h3>
                                        <p className="text-gray-700 italic">
                                            "{evaluation.transcript}"
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-md font-semibold text-gray-900 mb-2">
                                            综合反馈:
                                        </h3>
                                        <p className="text-gray-700">
                                            {evaluation.feedback}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-md font-semibold text-gray-900 mb-2 flex items-center">
                                                <Check className="h-5 w-5 text-green-500 mr-2" /> 做得好的方面:
                                            </h3>
                                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                {evaluation.strengths.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-md font-semibold text-gray-900 mb-2 flex items-center">
                                                <AlertCircle className="h-5 w-5 text-amber-500 mr-2" /> 可以改进的方面:
                                            </h3>
                                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                                {evaluation.improvements.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border-t border-gray-200 pt-6">
                                    <button
                                        onClick={handleRestart}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <RotateCw className="mr-2 h-4 w-4" /> 再次尝试
                                    </button>

                                    <button
                                        onClick={handleFinishTraining}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        完成训练
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;