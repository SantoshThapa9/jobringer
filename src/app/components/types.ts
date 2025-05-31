export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  salary: string;
}

export interface Filters {
  search: string;
  location: string;
  fullTime: boolean;
}
