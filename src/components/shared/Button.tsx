import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = "primary",
                                           size = "medium",
                                           className = "",
                                           ...props
                                       }) => {
    // 基础样式
    const baseStyles = "rounded-lg font-medium transition-all duration-300 flex items-center justify-center";

    // 尺寸
    const sizeStyles: Record<string, string> = {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3",
        large: "px-8 py-4 text-lg"
    };

    // 变体样式
    const variantStyles: Record<string, string> = {
        primary: "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-200",
        secondary: "bg-white text-blue-600 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-700/20",
        outline: "bg-transparent border-2 border-white/70 text-white hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10",
        ghost: "bg-transparent text-blue-600 border border-blue-200 hover:border-blue-400 hover:bg-blue-50"
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;