import React from 'react';

const IcdCards = ({ results }) => {
    return (
        <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6">ICD-11 Code Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((res, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg hover:border-blue-500">
                        <h3 className="text-lg font-bold">{res.icd_code}</h3>
                        <p className="text-base text-gray-700">{res.icd_title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IcdCards;
