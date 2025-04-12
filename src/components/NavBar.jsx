import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {
  const userData = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axios.post(BASE_URL + "/logout", {}, { withCredentials: true })
    dispatch(removeUser())
    return navigate("/login")
  }

  const firstName = userData?.firstName

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨‍💻Dev Tinder</Link>
      </div>

      <div className="flex items-center gap-4 mr-10">
        {firstName && (
          <div className="text-md font-medium">
            Welcome, <span className="font-bold">{firstName}</span>
          </div>
        )}

        {userData && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={userData.photoURL}
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/requests">Requests</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
