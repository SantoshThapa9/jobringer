export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  employmentType: string;
  experienceLevel: string;
  posted: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  companyLogo?: string;
}

export interface Filters {
  location?: string;
  experienceLevel?: string;
  jobType?: string;
  employmentType?: string;
  datePosted?: string;
}
