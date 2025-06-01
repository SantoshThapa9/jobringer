import React, { useState } from "react";

interface JobSearchProps {
  onSearch: (jobTitle: string, location: string) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(jobTitle, location);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="flex flex-col md:flex-row gap-2">
        {/* Job Title Input */}
        <div className="flex-grow flex items-center bg-white border border-gray-300 rounded-md overflow-hidden">
          <div className="pl-2 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job title or keyword"
            className="block w-full pl-2 pr-2 py-2 text-sm focus:outline-none border-0"
          />
        </div>

        {/* Location Input */}
        <div className="flex-grow flex items-center bg-white border border-gray-300 rounded-md overflow-hidden">
          <div className="pl-2 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g. Jamshedpur)"
            className="block w-full pl-2 pr-2 py-2 text-sm focus:outline-none border-0"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full md:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default JobSearch;
