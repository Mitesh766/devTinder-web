
import React from 'react'
import { BASE_URL } from '../utils/constants';

const RequestCard = ({ req,reqId }) => {
    const { firstName, lastName, age, skills, gender, _id, photoURL,handleResponse } = req;
    
    return (
        <div
            key={_id}
            className="card card-side bg-base-200 shadow-xl p-4 items-center gap-6 w-1/2 mx-auto my-2"
        >
            <figure>
                <img
                    src={photoURL}
                    alt={`${firstName} ${lastName}`}
                    className="w-20 h-20 rounded-full object-cover"
                />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title text-base-content">
                    {firstName} {lastName}
                </h2>
                <p className="text-sm text-base-content">
                    Age: {age} | Gender: {gender}
                </p>
                <div className="flex flex-wrap mt-2 gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="badge badge-outline badge-primary text-xs"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className='card-actions mt-4'>
                <button className='btn btn-outline btn-error' onClick={()=>handleResponse(reqId,"rejected")}>Reject</button>
                <button className='btn btn-outline btn-success' onClick={()=>handleResponse(reqId,"accepted")}>Accept</button>
            </div>
        </div>
    );
}

export default RequestCard