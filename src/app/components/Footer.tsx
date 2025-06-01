import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-5">
      <div className="container flex justify-between">
        <div className="w-1/4">
          <h4 className="text-xl font-bold mb-4">Jobringer</h4>
          <p className="text-gray-300">
            Connecting talent with opportunities worldwide
          </p>
        </div>

        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-3">For Job Seekers</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Career Resources
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Resume Builder
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-3">For Employers</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Post a Job
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Recruiting Solutions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Jobringer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
