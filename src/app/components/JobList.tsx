import React, { useState, useEffect } from "react";
import { Job } from "./types";
import Image from "next/image";

interface JobListProps {
  jobs: Job[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    if (jobs.length > 0 && !selectedJob && window.innerWidth >= 768) {
      setSelectedJob(jobs[0]);
      setIsDetailOpen(true);
    }
  }, [jobs, selectedJob]);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-4">
      {/* Left column - Job List */}
      <div className="w-full md:w-1/2 space-y-4 overflow-y-auto max-h-screen ">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`bg-white rounded-lg shadow-sm border cursor-pointer transition-all
              ${
                selectedJob?.id === job.id
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200"
              } 
              p-3 hover:border-blue-300`}
            onClick={() => handleJobClick(job)}
          >
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div className="flex">
                    {job.companyLogo && (
                      <div className="w-12 h-12 relative flex-shrink-0">
                        <Image
                          src={job.companyLogo}
                          alt={`${job.company} logo`}
                          width={30}
                          height={30}
                          className="object-contain rounded"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {job.salary}
                    </p>
                    <p className="text-xs text-gray-500">
                      Posted {formatDate(job.posted)}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {job.employmentType
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {job.type.toUpperCase()}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {job.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right column - Job Details for Desktop */}
      <div className="hidden md:block w-1/2 bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto">
        {selectedJob ? (
          <div>
            <div className="flex items-start justify-between border-b border-gray-200 pb-6">
              <div>
                <div className="flex items-center gap-4">
                  {selectedJob.companyLogo && (
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={selectedJob.companyLogo}
                        alt={`${selectedJob.company} logo`}
                        width={40}
                        height={40}
                        className="object-contain rounded"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedJob.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {selectedJob.company}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-gray-900">
                  {selectedJob.salary}
                </p>
                <p className="text-sm text-gray-500">
                  Posted {formatDate(selectedJob.posted)}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="mt-2 text-gray-600">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Requirements
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Benefits
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Select a job to view details</p>
          </div>
        )}
      </div>

      {/* Mobile Job Details Sliding Panel */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0  transform ${
          isDetailOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out bg-white rounded-t-xl shadow-lg border-t border-gray-200 z-50 h-[85vh] overflow-y-auto`}
      >
        {selectedJob && (
          <div className="relative">
            <div className=" bg-white mt-10 p-4 border-b border-gray-200">
              <button
                onClick={handleCloseDetail}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-4">
                {selectedJob.companyLogo && (
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src={selectedJob.companyLogo}
                      alt={`${selectedJob.company} logo`}
                      width={40}
                      height={40}
                      className="object-contain rounded"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedJob.title}
                  </h2>
                  <p className="text-base text-gray-600">
                    {selectedJob.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="mt-2 text-gray-600">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Requirements
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Benefits
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
