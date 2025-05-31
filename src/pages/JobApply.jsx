import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);
  const handleApplyFromSubmit = e =>{
    e.preventDefault();
    const from = e.target;
    const linkedIn = from.linkedIn.value;
    const github = from.github.value;
    const resume = from.resume.value;
    console.log(linkedIn,github,resume);
    const application = {
        jobId,
        applicant:user.email,
        linkedIn,github,resume
    }
    axios.post('http://localhost:3000/application',application)
    .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
        }
    })
    .catch(error =>{
        console.log(error);
    })
  }
  return (
    <div>
      <h3 className="text-4xl">Apply for this job :<Link to={`/jobs/${jobId}`}></Link> </h3>
      <form onSubmit={handleApplyFromSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input  type="url" name="linkedIn" className="input" placeholder="LinkIn Profile" />

          <label className="label">GitHub Link</label>
          <input  type="url" name="github" className="input" placeholder="GitHub Link" />

          <label className="label">Resume Link</label>
          <input  type="url" name="resume" className="input" placeholder="Resume Link" />
          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
