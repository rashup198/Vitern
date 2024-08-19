import React, { useState } from 'react';
import axios from 'axios';

function JobSearch() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobListings, setJobListings] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/jobs?title=${jobTitle}`);
      setJobListings(response.data);
    } catch (error) {
      console.error('Error fetching job listings', error);
    }
  };

  return (
    <div className="mt-[200px] container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Job Search</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="border-2 border-gray-400 p-2 rounded-md w-full"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
      >
        Search
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Job Listings</h2>
        <ul>
          {jobListings.map((listing, index) => (
            <li key={index} className="mt-2">
              <a
                href={listing.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {listing.title} - {listing.company}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobSearch;
