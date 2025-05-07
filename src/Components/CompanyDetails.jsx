import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CompanyDetails = () => {
  const data = useLoaderData();
  const { name } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);

  const singleCompany = data.find(company => company.name === name);

  const openModal = (job) => {
    setSelectedJob(job);
    document.getElementById('job_modal').showModal();
  };

  const closeModal = () => {
    document.getElementById('job_modal').close();
    setSelectedJob(null);
  };

  return (
    <div className="mx-2 lg:p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-6">
        <img src={singleCompany.logo} alt="Company Logo" className="w-32 h-32 object-cover rounded-full border-4 border-[#01a74e]" />
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-[#01a74e]">{singleCompany.name}</h1>
          <p className="text-gray-600 mb-1 text-lg">📍 {singleCompany.location}</p>
          <p className="text-gray-700 mb-4">{singleCompany.description}</p>
          <a href={singleCompany.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-success">
            Visit Company Website
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-6">Available Jobs</h2>
      <div className="lg:space-y-6 space-y-4">
        {singleCompany.jobs.map((job) => (
          <>
          <div className='flex justify-between items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-100 p-6 rounded-xl shadow-md border border-blue-200'>
            <div>
            <img className='lg:w-80 lg:h-48 rounded-2xl' src={job.bannerImage} alt="" />
            </div>
            <div key={job.id} className="space-y-3">
            <h3 className="text-2xl font-bold text-[#01a74e]">{job.title}</h3>
            <p className="lg:text-xl font-bold text-sm text-gray-600">Type: {job.jobType}</p>
            <p className="lg:text-xl font-bold text-sm text-gray-700">💰 Salary: {job.salary}</p>
            <button className="btn btn-outline btn-success  mt-4" onClick={() => openModal(job)}>
              View Details
            </button>
          </div>
          </div>
          </>
        ))}
      </div>

      <dialog id="job_modal" className="modal">
        <div className="modal-box">
          {selectedJob && (
            <>
              <h3 className="font-bold text-2xl text-[#01a74e] mb-3">{selectedJob.title}</h3>
              <p className="mb-1"><strong>Type:</strong> {selectedJob.jobType}</p>
              <p className="mb-1"><strong>Salary:</strong> {selectedJob.salary}</p>
              <p className="mt-3"><strong>Description:</strong> {selectedJob.description}</p>
              <p className="mt-2"><strong>Requirements:</strong> {selectedJob.requirements}</p>
              <div className="modal-action flex justify-between items-center">
                <button className="btn btn-outline btn-error" onClick={closeModal}>Close</button>
                <a href={selectedJob.applyLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-success">
                  Apply Now
                </a>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default CompanyDetails;