import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../utils/constants';
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import ProfileCard from './ProfileCard';

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dispatch = useDispatch();

  const handleProfileUpdate = async () => {
    const data = { firstName, lastName, age, gender, photoURL, skills };
    try {
      const res = await axios.put(`${BASE_URL}/profile/edit`, data, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      setSuccessMessage('Profile updated successfully!');
      setError('');
      setTimeout(() => setSuccessMessage(''), 3000); // hide success after 3 seconds
    } catch (err) {
      
      setError('Failed to update profile');
      setSuccessMessage('');
    }
  };

  return (
    <div className='flex flex-col lg:flex-row justify-center items-start gap-10 p-5'>
      <div className='card w-full max-w-md bg-base-200 shadow-xl'>
        <div className='card-body space-y-3'>
          <h2 className='card-title justify-center text-2xl'>Edit Profile</h2>

          <input
            type='text'
            placeholder='First Name'
            className='input input-bordered w-full'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            className='input input-bordered w-full'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='number'
            placeholder='Age'
            className='input input-bordered w-full'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type='text'
            placeholder='Gender'
            className='input input-bordered w-full'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type='text'
            placeholder='Skills (comma-separated)'
            className='input input-bordered w-full'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            type='text'
            placeholder='Photo URL'
            className='input input-bordered w-full'
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          {error && <p className='text-red-500 text-sm'>{error}</p>}
          {successMessage && <p className='text-green-500 text-sm'>{successMessage}</p>}

          <div className='card-actions justify-center mt-4'>
            <button className='btn btn-primary w-full' onClick={handleProfileUpdate}>
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <ProfileCard {...{ firstName, lastName, age, gender, skills, photoURL }} />
    </div>
  );
};

export default EditProfile;
