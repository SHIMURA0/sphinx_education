import React from "react";
import { BookOpen } from "lucide-react";
import { footerLinks } from "../../data/contentData";
import { FooterLink } from "../../types";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-white py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm opacity-70"></div>
                <div className="relative bg-white p-1 rounded-full">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">SphinxScholar</span>
            </div>
            <p className="text-gray-500 text-sm">
              AI驱动的家校协作教育平台，共创未来教育新格局
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">功能</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              {footerLinks.features.map((link: FooterLink, index: number) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">关于我们</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              {footerLinks.about.map((link: FooterLink, index: number) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">联系方式</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              {footerLinks.contact.map((item: string, index: number) => (
                <li key={index} className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-2 shadow-sm"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {currentYear} SphinxScholar. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
