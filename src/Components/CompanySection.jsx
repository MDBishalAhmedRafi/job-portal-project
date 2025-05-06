import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { Link } from "react-router";
import CompanyCard from "./CompanyCard";
const CompanySection = ({ companies }) => {
  console.log(companies);
  return (
    <>
    <div>
      <h1 className="text-4xl font-bold text-red-600 text-center">
        Company Portal
      </h1>
      <p className="text-gray-600 mb-12 text-center">
        These companies are relevent with their job portal posts.Make sure your
        category and apply for the desire one.
      </p>
    </div>
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
      { 
        companies.map(company=> <CompanyCard key={company.id} company={company}></CompanyCard>)
      }
    </div>
    </>
  );
};

export default CompanySection;
