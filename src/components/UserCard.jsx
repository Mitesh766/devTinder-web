import React from 'react';
import { BASE_URL } from '../utils/constants';




const UserCard = ({ firstName, lastName, age, gender, skills, photoURL,_id ,handleRequest}) => {
  
  return (
    <div className='w-full max-w-md'>
      <div className='card bg-base-100 shadow-lg'>
        <figure className='px-10 pt-10'>
          <img
            src={photoURL}
            alt='User'
            className='rounded-full w-32 h-32 object-cover border-4 border-primary'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title text-lg'>{`${firstName} ${lastName}`}</h2>
          <p className='text-sm text-gray-500'>{`${age || ""} • ${gender || " "}`}</p>
          <p className='text-sm mt-2'>{skills}</p>
          <div className='card-actions mt-4'>
            <button className='btn btn-outline btn-error' onClick={()=>handleRequest("ignored",_id)}>Ignore</button>
            <button className='btn btn-outline btn-success' onClick={()=>handleRequest("interested",_id)}>Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
