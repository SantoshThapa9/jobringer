import React from "react";
import { Filters } from "./types";

interface JobFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Filters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Location Filter */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={filters.location}
            onChange={(e) => onFilterChange({ location: e.target.value })}
            placeholder="City, state, or remote"
            className="block w-full px-3 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Job Type Filter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <div className="relative">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={filters.fullTime}
                onChange={(e) => onFilterChange({ fullTime: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors duration-150"
              />
              <span className="ml-2 text-sm text-gray-700">Full-time only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 pt-4">
        <button
          onClick={() => onFilterChange({ location: "Remote" })}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-150"
        >
          🌍 Remote
        </button>
        <button
          onClick={() => onFilterChange({ location: "New York" })}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-150"
        >
          🗽 New York
        </button>
        <button
          onClick={() => onFilterChange({ location: "San Francisco" })}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-150"
        >
          🌉 San Francisco
        </button>
      </div>
    </div>
  );
};

export default JobFilters;
