import React, { useState } from 'react';
import { Link, useSearchParams, useLoaderData } from "react-router-dom";

import { loginUser } from '../../api.js';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  return url.searchParams;
};

const Login = () => {
  const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });

  // const searchParams = new URL(document.location).searchParams;
  // const [searchParams, setSearchParams] = useSearchParams();
  const searchParams = useLoaderData();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(loginFormData);
    console.log('KUKU', res);
  };

  const handleSubmitScr = async (e) => {
    e.preventDefault()
    const res = await loginUser(loginFormData);
    // loginUser(loginFormData)
      // .then((res) => console.log(res))
      console.log(res)
  }




  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginFormData((prev) => ({...prev, [name]: value }))
  };

  const renderOutput = () => {
    return (
      <>
        {searchParams.get('message') && <p className="login-warning">{searchParams.get('message')}</p>}
        <h1 className="login__title title">Sign in to your account</h1>
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
          <button className="login__btn btn link-button" type="submit">
            Sign in
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
