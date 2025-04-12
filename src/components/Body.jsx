import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useLocation } from "react-router-dom";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user);
    const location = useLocation();

    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            });
            dispatch(addUser(res.data));
        } catch (err) {
            navigate("/login");
        }
    };

    useEffect(() => {
        if (!userData && location.pathname !== "/login" && location.pathname !== "/signup" ) {
            fetchUser();
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Body;
