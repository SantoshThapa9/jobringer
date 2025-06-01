import React from "react";
import { Job, Filters } from "./types";

interface JobFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
  jobs: Job[];
  onJobsFiltered: (filteredJobs: Job[]) => void;
  jobTitleSearch: string;
  locationSearch: string;
}

const JobFilters: React.FC<JobFiltersProps> = ({
  filters,
  onFilterChange,
  jobs,
  onJobsFiltered,
  jobTitleSearch,
  locationSearch,
}) => {
  // Filtering logic
  const calculateDaysAgo = (postedDate: string): number => {
    const posted = new Date(postedDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - posted.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Apply filters whenever filters or search terms change
  React.useEffect(() => {
    const filteredJobs = jobs.filter((job) => {
      // Job title search
      if (jobTitleSearch) {
        const searchTerms = jobTitleSearch.toLowerCase().trim().split(/\s+/);
        const jobText = `${job.title.toLowerCase()} ${job.company.toLowerCase()} ${job.description.toLowerCase()}`;
        const matchesJobTitle = searchTerms.every((term) =>
          jobText.includes(term)
        );
        if (!matchesJobTitle) return false;
      }

      // Location search
      if (locationSearch) {
        const locationTerms = locationSearch.toLowerCase().trim().split(/\s+/);
        const jobLocation = job.location.toLowerCase();
        const matchesLocation = locationTerms.every((term) =>
          jobLocation.includes(term)
        );
        if (!matchesLocation) return false;
      }

      // Employment type filter
      if (
        filters.employmentType &&
        job.employmentType !== filters.employmentType
      ) {
        return false;
      }

      // Experience level filter
      if (
        filters.experienceLevel &&
        job.experienceLevel !== filters.experienceLevel
      ) {
        return false;
      }

      // Job type (work location) filter
      if (filters.jobType && job.type !== filters.jobType) {
        return false;
      }

      // Date posted filter
      if (filters.datePosted) {
        const daysAgo = calculateDaysAgo(job.posted);
        const filterDays = parseInt(filters.datePosted.replace(/[^0-9]/g, ""));

        if (daysAgo > filterDays) {
          return false;
        }
      }

      return true;
    });

    onJobsFiltered(filteredJobs);
  }, [filters, jobTitleSearch, locationSearch, jobs, onJobsFiltered]);

  const selectClasses =
    "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="flex md:flex-row flex-col gap-4">
      <div className="flex flex-col gap-2 flex-1">
        <label className="text-sm font-medium text-gray-700">
          Employment Type
        </label>
        <select
          value={filters.employmentType || ""}
          onChange={(e) => onFilterChange({ employmentType: e.target.value })}
          className={selectClasses}
        >
          <option value="">All Types</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
          <option value="temporary">Temporary</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <label className="text-sm font-medium text-gray-700">
          Experience Level
        </label>
        <select
          value={filters.experienceLevel || ""}
          onChange={(e) => onFilterChange({ experienceLevel: e.target.value })}
          className={selectClasses}
        >
          <option value="">All Levels</option>
          <option value="entry">Entry Level</option>
          <option value="intermediate">Intermediate</option>
          <option value="senior">Senior</option>
          <option value="lead">Lead/Manager</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <label className="text-sm font-medium text-gray-700">Work Mode</label>
        <select
          value={filters.jobType || ""}
          onChange={(e) => onFilterChange({ jobType: e.target.value })}
          className={selectClasses}
        >
          <option value="">All Type</option>
          <option value="remote">Remote</option>
          <option value="wfh">Work from Home</option>
          <option value="wfo">Work from Office</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <label className="text-sm font-medium text-gray-700">Date Posted</label>
        <select
          value={filters.datePosted || ""}
          onChange={(e) => onFilterChange({ datePosted: e.target.value })}
          className={selectClasses}
        >
          <option value="">Any Time</option>
          <option value="24h">Last 24 hours</option>
          <option value="3d">Last 3 days</option>
          <option value="7d">Last 7 days</option>
          <option value="14d">Last 14 days</option>
          <option value="30d">Last 30 days</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilters;
