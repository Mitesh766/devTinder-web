import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = async () => {
    try {
      const data = await axios.post(BASE_URL + "/login", {
        emailId,
        password
      }, {
        withCredentials: true
      })

      dispatch(addUser(data.data.userData))
      navigate("/")
    } catch (err) {

      setError(err.response.data)
    }
  }

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName, lastName, emailId, password
      }, { withCredentials: true })
      dispatch(addUser(res.data.userData))
      navigate("/profile")
    }
    catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='flex justify-center'>
      <div className="card card-border bg-base-300 w-96 mt-4">
        <div className="card-body">
          <h2 className="card-title flex justify-center">{isLogin ? "Login" : "SignUp"}</h2>
          {!isLogin && <>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">First Name </legend>
              <input type="text" className="input" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name </legend>
              <input type="text" className="input" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            </fieldset>
          </>
          }
          <fieldset className="fieldset">
            <legend className="fieldset-legend">EmailID </legend>
            <input type="text" className="input" value={emailId} onChange={(e) => { setEmailId(e.target.value) }} />

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password </legend>
            <input type="text" className="input" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </fieldset>
          <p className='text-red-500'>{error}</p>
          {!isLogin && <p className='text-blue-500 cursor-pointer' onClick={() => setIsLogin(!isLogin)}>Login</p>}
          {isLogin && <p className='text-blue-500 cursor-pointer' onClick={() => setIsLogin(!isLogin)}>Signup</p>}
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary " onClick={isLogin ? handleLogin : handleSignUp}>{isLogin ? "Login" : "SignUp"}</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login