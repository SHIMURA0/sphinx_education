import React from "react";
import { testimonials } from "../../data/contentData";
import { Testimonial } from "../../types";

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 z-10">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">来自用户的真实反馈</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        听听我们平台用户的心声，了解SphinxScholar如何改变他们的教育体验
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial: Testimonial, index: number) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-px bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                            <div className="relative bg-white p-6 rounded-xl border border-gray-100 group-hover:border-blue-200 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-100">
                                <div className="text-gray-700 italic mb-4">{`"${testimonial.quote}"`}</div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 flex items-center justify-center text-white font-bold shadow-md">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;