import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,

    requirements,
    _id,
    description,
    salaryRange,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex items-center gap-1">
            <FaMapMarkedAlt></FaMapMarkedAlt>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">new</div>
        </h2>
        <p>
          Salary: {salaryRange?.min}-{salaryRange?.max} {salaryRange?.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements?.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          {
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default JobCard;
