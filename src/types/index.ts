// 功能特性类型
export interface Feature {
    iconName: 'Cpu' | 'Users' | 'Layers';
    iconColor: string;
    title: string;
    description: string;
}

// 用户反馈类型
export interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

// 页脚链接类型
export interface FooterLink {
    text: string;
    href: string;
}

export interface FooterLinks {
    features: FooterLink[];
    about: FooterLink[];
    contact: string[];
}

// 按钮属性类型
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onClick?: () => void;
    [key: string]: any;
}