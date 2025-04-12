import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import RequestCard from './RequestCard'
import { addRequests } from '../utils/requestsSlice'

const Requests = () => {
    const dispatch = useDispatch();
    const connectionRequests = useSelector(store => store.requests)
  

    const getRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/requests/received", { withCredentials: true });
            dispatch(addRequests(res.data.connectionRequest))
        } catch (err) {
            setError(err)
        }
    }

    const handleResponse = async (_id, status) => {
        try {
            await axios.post(`${BASE_URL}/review/${status}/${_id}`, {}, { withCredentials: true });
            getRequests(); 
        } catch (err) {
            return <h1 className='text-red-500'>{err.message}</h1>
        }
    }

    useEffect(() => {
        getRequests()
    }, [])

    return (
        <div className="grid gap-4">
            {connectionRequests && connectionRequests.length > 0 ? (
                connectionRequests.map(connection => (
                    <RequestCard
                        key={connection._id}
                        req={{ ...connection.fromUserId, handleResponse }}
                        reqId={connection._id}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">No connection requests.</p>
            )}
        </div>
    );
}

export default Requests;
