import React, { useState } from 'react';
import { Link, useSearchParams, useLoaderData, useNavigate } from "react-router-dom";

import { loginUser } from '../../api.js';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  return url.searchParams;
};

const Login = () => {
  const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });
  const [requestStatus, setRequestStatus] = useState('idle');
  const [error, setError] = useState(null);

  // const searchParams = new URL(document.location).searchParams;
  // const [searchParams, setSearchParams] = useSearchParams();
  const searchParams = useLoaderData();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)
    setRequestStatus('loading');
    try {
      const res = await loginUser(loginFormData);
      navigate('/host', { replace: true });
      console.log('KUKU', res);
    } catch(e) {
      // setRequestStatus('failure');
      setError(e);
    }
    setRequestStatus('idle');
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginFormData((prev) => ({...prev, [name]: value }))
  };

  const renderOutput = () => {
    return (
      <>
        {searchParams.get('message') && <p className="login__warning">{searchParams.get('message')}</p>}
        <h1 className="login__title title">Sign in to your account</h1>
        {error && <p className="login__warning">{error.message}</p>}
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            className="login__input"
            type="text"
            id="email"
            name="email"
            value={loginFormData.email}
            placeholder="Email address"
            onChange={(e) => handleChange(e)}
          />
          <input
            className="login__input"
            type="password"
            id="password"
            name="password"
            value={loginFormData.password}
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <button className="login__btn btn link-button" type="submit" disabled={requestStatus === 'loading'}>
            {requestStatus === 'idle' ? 'Log in' : 'Logging in...'}
          </button>
        </form>
        <p className="login__signup">
          Don't have an account? <Link to="" className="login__signup-link underlined">Create one now</Link>
        </p>
      </>
    );
  }

  return (
    <main className="login">
        <div className="center">
          {renderOutput()}
        </div>
    </main>
  );
};

export default Login;



