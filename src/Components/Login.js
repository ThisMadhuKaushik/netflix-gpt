import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInform=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_small.jpg" />
      </div>

      <form className="w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && ( <input
         type="text" 
         placeholder="Full Name"
         className="p-4 my-4 w-full bg-gray-700 rounded-md" 
        />)}
        <input
         type="text" 
         placeholder="Email Address"
         className="p-4 my-4 w-full bg-gray-700 rounded-md" 
        />
        <input
         type="password" 
         placeholder="Password" 
         className="p-4 my-4 w-full bg-gray-700 rounded-md" 
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-md">
          {isSignInForm? "Sign In": "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>{isSignInForm? "New to Netflix ? Sign Up Now .": "Already Registered ? Sign In Now ."}</p>
      </form>
    </div>
  );
};

export default Login;
