import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { Link } from "react-router";
import CompanyCard from "./CompanyCard";
const CompanySection = ({ companies }) => {
  console.log(companies);
  return (
    <>
    <div className="">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-red-500 bg-clip-text text-transparent text-center">
        Company Portal
      </h1>
      <p className="text-gray-600 mb-12 text-center">
        These companies are relevent with their job portal posts.Make sure your
        category and apply for the desire one.
      </p>
    </div>
    <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 lg:p-3 bg-gradient-to-r from-purple-100 via-blue to-green-100 rounded-2xl'>
      { 
        companies.map(company=> <CompanyCard key={company.id} company={company}></CompanyCard>)
      }
    </div>
    </>
  );
};

export default CompanySection;
