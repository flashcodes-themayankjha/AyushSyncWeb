import React from 'react';

const InfoCards = () => {
    const cards = [
        {
            title: "Traditional Medicine",
            subtitle: "NAMASTE",
            description: "NAMASTE provides a standardized way to represent traditional medical concepts, bridging the gap between ancient wisdom and modern healthcare data.",
            features: [
                "Consistent terminology for Ayurveda, Yoga, and Siddha",
                "Integration with electronic medical records",
                "Supports research and analytics"
            ],
            // Color scheme from your code
            bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50",
            borderColor: "border-green-200",
            hoverBorderColor: "hover:border-green-400",
            subtitleColor: "text-green-700",
            badgeBg: "bg-green-100",
            badgeText: "text-green-800",
            dotColor: "bg-green-400"
        },
        {
            title: "Global Standard",
            subtitle: "ICD-11",
            description: "The International Classification of Diseases, 11th Revision, is the global standard for diagnostic health information, essential for statistics and billing.",
            features: [
                "World Health Organization standard",
                "Supports thousands of disease codes",
                "Links to public health databases"
            ],
            // Color scheme from your code
            bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50",
            borderColor: "border-blue-200",
            hoverBorderColor: "hover:border-blue-400",
            subtitleColor: "text-blue-700",
            badgeBg: "bg-blue-100",
            badgeText: "text-blue-800",
            dotColor: "bg-blue-400"
        },
        {
            title: "Interoperability",
            subtitle: "FHIR",
            description: "Fast Healthcare Interoperability Resources is a next-generation standards framework for exchanging healthcare information electronically.",
            features: [
                "Restful API support for health apps",
                "Real-time data exchange",
                "Widely used by hospitals and clinics"
            ],
            // Color scheme from your code
            bgGradient: "bg-gradient-to-br from-purple-50 to-violet-50",
            borderColor: "border-purple-200",
            hoverBorderColor: "hover:border-purple-400",
            subtitleColor: "text-purple-700",
            badgeBg: "bg-purple-100",
            badgeText: "text-purple-800",
            dotColor: "bg-purple-400"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mt-12 sm:mt-16 lg:mt-20 max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`relative ${card.bgGradient} border-2 ${card.borderColor} p-4 sm:p-6 lg:p-8 min-h-[18rem] sm:min-h-[20rem] lg:min-h-[22rem] rounded-xl shadow-lg flex flex-col items-center transition-all duration-300 ease-in-out ${card.hoverBorderColor} hover:shadow-2xl hover:-translate-y-2 group overflow-hidden`}
                >
                    {/* Decorative circles */}
                    <div className={`absolute top-0 right-0 w-20 h-20 ${index === 0 ? 'bg-green-100' : index === 1 ? 'bg-blue-100' : 'bg-purple-100'} rounded-full -translate-y-10 translate-x-10 opacity-30`}></div>
                    <div className={`absolute bottom-0 left-0 w-16 h-16 ${index === 0 ? 'bg-emerald-100' : index === 1 ? 'bg-indigo-100' : 'bg-violet-100'} rounded-full translate-y-8 -translate-x-8 opacity-40`}></div>

                    <div className="relative z-10 w-full">
                        <div className="text-center mb-4">
                            <div className={`inline-block px-4 py-2 ${card.badgeBg} ${card.badgeText} rounded-full text-sm font-semibold mb-3 font-spline`}>
                                {card.title}
                            </div>
                            <h3 className={`text-lg sm:text-xl lg:text-xl font-bold tracking-tight ${card.subtitleColor} font-spline mb-4 sm:mb-6`}>
                                {card.subtitle}
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 text-center flex-grow leading-relaxed font-spline">
                            {card.description}
                        </p>
                        <div className="space-y-2">
                            {card.features.map((feature, i) => (
                                <div key={i} className="flex items-center text-xs sm:text-sm text-gray-600 font-spline">
                                    <div className={`w-2 h-2 ${card.dotColor} rounded-full mr-3`}></div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InfoCards;