import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed, removeFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector(store => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      return <h1 className='text-red-500'>{err.message}</h1>

    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const handleRequest = async (status, _id) => {
    try {

       await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {}, {
        withCredentials: true
      })

      dispatch(removeFeed(_id))


    } catch (err) {
      return <h1>{err}</h1>
    }


  }
  return (

    <div className="flex flex-wrap justify-center gap-6 p-4">
      {feedData?.length > 0 ? (
        feedData.map((user, index) => (
          <UserCard key={index} {...user} handleRequest={handleRequest} />
        ))
      ) : (
        <p className="text-lg text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Feed;
