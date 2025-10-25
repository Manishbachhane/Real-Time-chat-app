import React from "react";
import assets from "../assets/assets";
import { useState } from "react";
const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const onsubmitHandler = e => {
    e.preventDefault();
    if (currState === "Sign Up" && !isDataSubmitted) {
      // Handle sign up logic
      setIsDataSubmitted(true);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* ---------left--------- */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />
      {/* ---------right--------- */}
      <form
        onClick={onsubmitHandler}
        className="border-2 bg-white/8 text-white border-white/50 rounded-lg p-8 flex flex-col gap-6 shadow-lg backdrop-blur-md"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <img
              onClick={() => {
                setIsDataSubmitted(false);
              }}
              className="w-6 cursor-pointer"
              src={assets.check_icon}
              alt=""
            />
          )}
          <img src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />
        </h2>
        {currState === "Sign Up" && !isDataSubmitted && (
          <input
            type="text"
            placeholder="Full Name"
            className="border border-white/50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        )}
        {!isDataSubmitted && (
          <>
            <input
              onchange={e => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              className="border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 "
              required
            />
            <input
              onchange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 "
              required
            />
          </>
        )}
        {currState === "Sign Up" && !isDataSubmitted && (
          <textarea
            onchange={e => setBio(e.target.value)}
            value={bio}
            rows={4}
            placeholder="provide a short Bio.."
            className="border border-gray-500 rounded-lg  p-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
        )}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the terms and conditions</p>
        </div>
        <div className="flex flex-col gap-2">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-700">
              Already have an account?
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-700">
              Create an account?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrState("Sign Up");
                  setIsDataSubmitted(false);
                }}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
