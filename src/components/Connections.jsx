import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionsSlice';

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store.connections);

    const getConnections = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/connections`, {
                withCredentials: true,
            });
            dispatch(addConnections(res.data.data));
        } catch (err) {
            return <h1 className='text-red-500'>{err.message}</h1>
        }
    };

    useEffect(() => {
        getConnections();
    }, []);

    if (!connections) return <h1>No connections</h1>

    return connections && (
        <div className="bg-base-200 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-base-content">Connections</h1>

                <div className="grid gap-6">
                    {connections.map((person) => {
                        const { _id, firstName, lastName, age, photoURL, gender, skills } = person;

                        return (
                            <div
                                key={_id}
                                className="card card-side bg-base-100 shadow-xl p-4 items-center gap-6"
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Connections;
