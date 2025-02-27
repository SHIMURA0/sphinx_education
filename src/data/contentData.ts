import { Feature, Testimonial, FooterLinks } from "../types";

// 功能特性数据
export const features: Feature[] = [
    {
        iconName: "Cpu",
        iconColor: "text-blue-500",
        title: "智能学习分析",
        description: "利用AI技术分析学习模式，生成个性化学习报告，帮助发现优势与不足"
    },
    {
        iconName: "Users",
        iconColor: "text-purple-500",
        title: "家校无缝沟通",
        description: "实时反馈学习进度，家长与教师便捷交流，共同制定学习策略"
    },
    {
        iconName: "Layers",
        iconColor: "text-cyan-500",
        title: "个性化学习路径",
        description: "根据每个学生的能力和兴趣，AI自动定制最佳学习路径和资源推荐"
    }
];

// 家庭端特性
export const homeFeatures: string[] = [
    "孩子学习进度实时追踪",
    "弱项和学习难点可视化",
    "AI推荐家庭辅导资源",
    "与教师高效沟通平台",
    "个性化家庭教育建议"
];

// 学校端特性
export const schoolFeatures: string[] = [
    "班级整体学习数据分析",
    "个性化教学内容自动生成",
    "AI辅助评估与反馈系统",
    "家校沟通记录与管理",
    "教学资源智能推荐"
];

// 用户反馈数据
export const testimonials: Testimonial[] = [
    {
        quote: "通过SphinxScholar，我第一次如此清晰地了解到孩子的学习状况，与老师的沟通也更加顺畅了。",
        name: "张女士",
        role: "三年级学生家长"
    },
    {
        quote: "AI分析功能帮助我发现了班级教学中的盲点，让我能够更有针对性地调整课程内容。真是教学必备工具！",
        name: "李老师",
        role: "小学数学教师"
    },
    {
        quote: "平台的个性化学习建议非常精准，孩子的学习积极性提高了，成绩也有了明显进步。",
        name: "王先生",
        role: "五年级学生家长"
    }
];

// 页脚链接
export const footerLinks: FooterLinks = {
    features: [
        { text: "AI学习分析", href: "#" },
        { text: "家校沟通", href: "#" },
        { text: "个性化学习", href: "#" },
        { text: "教学资源", href: "#" }
    ],
    about: [
        { text: "公司简介", href: "#" },
        { text: "团队介绍", href: "#" },
        { text: "联系我们", href: "#" },
        { text: "加入我们", href: "#" }
    ],
    contact: [
        "contact@sphinxscholar.com",
        "400-888-7777",
        "北京市海淀区科技园区"
    ]
};