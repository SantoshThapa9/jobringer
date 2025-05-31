"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import JobFilters from "./components/JobFilters";
import Footer from "./components/Footer";
import { Job, Filters } from "./components/types";

function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    location: "",
    fullTime: false,
  });

  useEffect(() => {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "New York",
        type: "Full-time",
        posted: "2 days ago",
        salary: "$90,000 - $120,000",
      },
      {
        id: 2,
        title: "UX Designer",
        company: "CreativeHub",
        location: "Remote",
        type: "Contract",
        posted: "5 days ago",
        salary: "$70,000 - $90,000",
      },
      {
        id: 3,
        title: "Backend Engineer",
        company: "DataSystems",
        location: "San Francisco",
        type: "Full-time",
        posted: "1 week ago",
        salary: "$110,000 - $140,000",
      },
      {
        id: 4,
        title: "DevOps Specialist",
        company: "CloudTech",
        location: "Remote",
        type: "Part-time",
        posted: "3 days ago",
        salary: "$80,000 - $100,000",
      },
      {
        id: 5,
        title: "Product Manager",
        company: "InnovateCo",
        location: "Chicago",
        type: "Full-time",
        posted: "Just now",
        salary: "$100,000 - $130,000",
      },
    ];
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  useEffect(() => {
    const result = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        (!filters.fullTime || job.type === "Full-time")
      );
    });
    setFilteredJobs(result);
  }, [filters, jobs]);

  const handleSearch = (term: string) => {
    setFilters((prev) => ({ ...prev, search: term }));
  };

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover opportunities that match your skills and aspirations
            </p>
          </div>

          {/* Search and Filters Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <JobSearch onSearch={handleSearch} />
              <div className="border-t border-gray-200 pt-6">
                <JobFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                Available Positions
              </h2>
              <p className="text-gray-600">{filteredJobs.length} jobs found</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <JobList jobs={filteredJobs} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
