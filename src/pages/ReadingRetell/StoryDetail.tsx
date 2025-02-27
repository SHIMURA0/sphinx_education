import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Volume2, Play, BookOpen } from "lucide-react";

// 模拟故事数据
const storyData = {
    1: {
        id: 1,
        title: "小熊的冒险",
        level: "初级",
        image: "/api/placeholder/800/400",
        content: `小熊布朗住在一片美丽的森林里。他有一个温暖的家和爱他的爸爸妈妈。一天早晨，阳光明媚，小鸟在歌唱。小熊布朗决定去探险。  

    "妈妈，我想去森林里玩一玩，"小熊布朗说。  
    "好的，但是要小心，不要走得太远，"妈妈熊叮嘱道。  
    
    小熊布朗开心地出发了。他带着一小篮蜂蜜三明治和一瓶新鲜的水。森林里的树木高大而绿意盎然，阳光透过树叶洒下金色的光点。  
    
    走着走着，小熊布朗看到一条小溪。溪水清澈见底，里面有许多小鱼在游动。小熊坐在溪边，吃了一个蜂蜜三明治，看着小鱼游来游去。  
    
    突然，他听到了一阵哭声。小熊布朗顺着声音走去，发现一只小兔子被一根树枝绊倒了。  
    
    "别哭，小兔子，"小熊布朗说，"我来帮你。"他轻轻地把小兔子扶起来，检查它的伤口。  
    
    "谢谢你，熊先生，"小兔子抽泣着说，"我叫莉莉，我迷路了。"  
    
    "别担心，莉莉，"小熊布朗说，"我会帮你找到回家的路。"  
    
    小熊布朗和莉莉一起走，边走边聊。莉莉告诉小熊，她的家在森林的另一边，靠近大橡树。小熊布朗分享了他的三明治，让莉莉不再饿肚子。  
    
    途中，他们遇到了一只迷路的小松鼠。小松鼠叫蒂姆，它也加入了他们的队伍。三个小伙伴一起走，一起笑，一起解决路上遇到的问题。  
    
    终于，他们看到了那棵大橡树。莉莉的爸爸妈妈正焦急地等待着。  
    
    "莉莉！"兔妈妈大喊，抱住了她的小兔子。  
    
    "妈妈！爸爸！"莉莉开心地喊道，"这是我的新朋友小熊布朗和蒂姆，他们帮助我找到了回家的路。"  
    
    兔爸爸感谢小熊布朗和蒂姆的帮助，邀请他们一起吃晚餐。他们一起分享了美味的胡萝卜蛋糕和蜂蜜面包。  
    
    吃完晚餐，天色已晚。小熊布朗想起了妈妈的叮嘱，他该回家了。  
    
    "谢谢你们的晚餐，"小熊布朗说，"但我得回家了，妈妈会担心的。"  
    
    "我们会送你回家，"兔爸爸说，"朋友之间应该互相帮助。"  
    
    在兔一家和蒂姆的陪伴下，小熊布朗安全地回到了家。妈妈熊看到小熊布朗交了新朋友，非常高兴。  
    
    "今天真是一次精彩的冒险，"小熊布朗躺在床上对妈妈说，"我帮助了朋友，也交到了新朋友。"  
    
    "这就是冒险的意义，"妈妈熊亲吻他的额头，"帮助他人，建立友谊。晚安，我的小冒险家。"  
    
    "晚安，妈妈，"小熊布朗打着哈欠说，"明天，我们可以邀请我的新朋友来做客吗？"  
    
    "当然可以，"妈妈熊微笑着说。  
    
    小熊布朗带着对新朋友的期待和今天冒险的美好回忆，进入了甜甜的梦乡。`,
        age: "6-8岁",
        estimatedTime: "5分钟",
        keywords: ["友谊", "帮助", "冒险", "森林", "动物"]
    },
    // 其他故事数据...
};

const StoryDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isReading, setIsReading] = useState(false);

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

    // 处理开始朗读
    const handleStartReading = () => {
        setIsReading(true);
        // 这里可以添加文本朗读功能的逻辑
        setTimeout(() => {
            setIsReading(false);
        }, 3000);
    };

    // 处理开始训练
    const handleStartTraining = () => {
        navigate(`/reading-retell/training/${id}`);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        to="/reading-retell"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> 返回故事列表
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl font-bold text-gray-900">{story.title}</h1>
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                                story.level === "初级" ? "bg-green-100 text-green-800" :
                                    story.level === "中级" ? "bg-yellow-100 text-yellow-800" :
                                        "bg-red-100 text-red-800"
                            }`}>
                {story.level}
              </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {story.keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                >
                  {keyword}
                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <button
                                    onClick={handleStartReading}
                                    disabled={isReading}
                                    className={`inline-flex items-center mr-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                                        isReading
                                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            : "text-blue-700 bg-blue-100 hover:bg-blue-200"
                                    }`}
                                >
                                    {isReading ? (
                                        <>
                                            <Volume2 className="mr-2 h-4 w-4 animate-pulse" /> 正在朗读...
                                        </>
                                    ) : (
                                        <>
                                            <Volume2 className="mr-2 h-4 w-4" /> 朗读故事
                                        </>
                                    )}
                                </button>

                                <div className="text-sm text-gray-500">
                                    <span className="mr-4">适合年龄: {story.age}</span>
                                    <span>预计阅读时间: {story.estimatedTime}</span>
                                </div>
                            </div>
                        </div>

                        <div className="prose max-w-none mb-8">
                            {story.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4 leading-relaxed text-gray-700">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">准备好了吗？</h3>
                                <p className="text-gray-600">读完故事后，开始复述训练，提升你的理解力和表达能力</p>
                            </div>

                            <button
                                onClick={handleStartTraining}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <Play className="mr-2 h-5 w-5" /> 开始训练
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <div className="flex items-start">
                        <BookOpen className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">如何进行阅读复述训练?</h3>
                            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                                <li>仔细阅读上面的故事，尝试理解故事情节和主要内容</li>
                                <li>可以多读几遍，也可以使用"朗读故事"功能听故事</li>
                                <li>当你感觉已经理解并记住故事内容后，点击"开始训练"</li>
                                <li>训练中，你将看到提示问题，尝试用自己的话复述故事</li>
                                <li>系统会评估你的复述内容，并给出相应的反馈和建议</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetail;