import React from 'react';

const NamasteTable = ({ results }) => {
    return (
        <div>
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6">NAMASTE Code Results</h2>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                        <tr>
                            <th className="px-4 sm:px-6 py-4 text-left">NAMASTE Code</th>
                            <th className="px-4 sm:px-6 py-4 text-left">Category</th>
                            <th className="px-4 sm:px-6 py-4 text-left">Short Definition</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {results.map((res, i) => (
                            <tr key={i}>
                                <td className="px-4 sm:px-6 py-4 font-semibold">{res.namc_code}</td>
                                <td className="px-4 sm:px-6 py-4">{res.category}</td>
                                <td className="px-4 sm:px-6 py-4">{res.short_definition || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NamasteTable;
