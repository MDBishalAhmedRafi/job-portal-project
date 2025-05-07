import React from 'react';
import { Link } from 'react-router';

const CompanyCard = ({company}) => {

                const {name, logo, industry, location} = company
                return (
                                <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 border border-gray-200">

    
      {/* Image placeholder */}
      <Link to={`/company-details/${name}`} className="w-25 h-25 rounded-full flex-shrink-0 p-3">
                <img className='w-20 h-20 rounded-full' src={logo} alt="" />
      </Link>

      {/* Details section */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-green-700 rounded-full">
            {location}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600 font-bold"></p>

                  <div className='border-t border-dashed  text-gray-600'></div>

        <div className="text-sm text-gray-500 font-bold mt-1 flex items-center">
          <span className="mr-1">Industry: </span>
          {industry}
        </div>
      </div>
    </div>
                );
};

export default CompanyCard;