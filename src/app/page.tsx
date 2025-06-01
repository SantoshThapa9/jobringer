"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import JobFilters from "./components/JobFilters";
import Footer from "./components/Footer";
import { Job, Filters } from "./components/types";
import { mockJobs } from "./data/mockJobs";

export default function Home() {
  const [jobTitleSearch, setJobTitleSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({});
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);

  const handleSearch = (jobTitle: string, location: string) => {
    setJobTitleSearch(jobTitle);
    setLocationSearch(location);
  };

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow mt-20 w-full">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Search and Desktop Filters Section */}
          <div className="bg-white rounded-2xl  p-3 ">
            <JobSearch onSearch={handleSearch} />
            <div className="border-t border-gray-200 pt-6 hidden md:block">
              <JobFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                jobs={mockJobs}
                onJobsFiltered={setFilteredJobs}
                jobTitleSearch={jobTitleSearch}
                locationSearch={locationSearch}
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="flex justify-between rounded-3xl  bg-white items-center p-3">
              <h2 className="text-md md:text-lg font-semibold text-gray-900">
                Available Positions
              </h2>
              <p className="text-gray-600">{filteredJobs.length} jobs found</p>
            </div>
            <div className="bg-white rounded-2xl  sm:p-5">
              <JobList jobs={filteredJobs} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
