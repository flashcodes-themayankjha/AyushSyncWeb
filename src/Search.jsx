import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NamasteTable from './components/NamasteTable';
import IcdCards from './components/IcdCards';
import data from './data/data';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (term = searchTerm) => {
    setSearchTerm(term);
    const results = data.matches.filter(
      (item) =>
        (item.icd_title && item.icd_title.toLowerCase().includes(term.toLowerCase())) ||
        (item.icd_code && item.icd_code.toLowerCase().includes(term.toLowerCase())) ||
        (item.namc_code && item.namc_code.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredResults(results);
    setShowResults(true);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowResults(false);
    setFilteredResults([]);
  };

  return (
    <>
      <Navbar />
      <main className="px-6 py-30 bg-gray-50 min-h-screen">  {/* increased py */}
        <div className="max-w-4xl mx-auto"> {/* narrower max-width for better centering */}

          {/* 🔍 Search box */}
          <div className="relative mb-12"> {/* bigger margin bottom */}
            <svg
              className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search for a condition or code..."
              className="form-input w-full rounded-full border-2 border-gray-300 bg-white py-4 pl-14 pr-14 text-lg shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            )}
          </div>

          {/* Results or Popular Searches */}
          {showResults ? (
            <div className="space-y-12">
              <NamasteTable results={filteredResults} />
              <IcdCards results={filteredResults} />
            </div>
          ) : (
            <div className="text-center mt-16"> {/* more space above popular searches */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Popular Searches
              </h3>
              <div className="flex gap-5 justify-center flex-wrap mb-6">
                <button
                  className="px-6 py-3 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200"
                  onClick={() => handlePopularSearch('Diabetes')}
                >
                  Diabetes
                </button>
                <button
                  className="px-6 py-3 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200"
                  onClick={() => handlePopularSearch('Arthritis')}
                >
                  Arthritis
                </button>
                <button
                  className="px-6 py-3 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200"
                  onClick={() => handlePopularSearch('Migraine')}
                >
                  Migraine
                </button>
              </div>
              <p className="mt-6 text-gray-500 text-base">
                Start typing above to search ICD & NAMC codes
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Search;
