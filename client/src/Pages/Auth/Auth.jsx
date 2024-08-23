import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [pageType, setPageType] = useState("sign-in");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(pageType);

  return (
    <div className="w-full h-[100dvh] relative">
      <div className="w-full h-full flex items-center justify-center absolute -z-20">
        <img src="/assets/kangacook_logo.svg" alt="Loading..." className="h-80 w-80" />
      </div>
      <video
        className="w-full h-full object-cover absolute -z-10"
        src="/assets/authvid.mp4"
        autoPlay
        muted
        loop
      />
      <div className="md:py-20 h-full w-full px-32 max-md:w-full max-md:p-0 flex items-center justify-end ">
        <div className="bg-[#F8F7F4] bg-opacity-95 flex flex-col gap-6 w-[480px] p-8 max-md:h-full max-md:w-full max-md:rounded-[0] max-md:pt-20 rounded-3xl">
          {pageType === "sign-in" ? (
            <>
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-black text-[32px] font-semibold tracking-wider">
                  Sign In
                </h1>
                <div>
                  <span className="text-black text-sm font-medium">
                    Don’t have an account?{" "}
                  </span>
                  <span
                    onClick={() => setPageType("register")}
                    className="text-blue-700 text-opacity-75 text-sm font-medium underline cursor-pointer"
                  >
                    Sign up
                  </span>
                </div>
              </div>
              <div>
                <form className="mb-4">
                  <div className="flex flex-col gap-2 mb-1">
                    <TextField
                      required
                      name="email"
                      id="email"
                      label="Email Address"
                      size="small"
                      variant="outlined"
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      required
                      name="password"
                      id="password"
                      label="password"
                      type="password"
                      size="small"
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Link
                    to="/forgot-password"
                    className="ml-4 text-blue-700 text-opacity-75 text-sm font-semibold underline cursor-pointer"
                  >
                    Forgot your password
                  </Link>
                </form>
                <button className="cta" type="submit">
                  <span className="cta-txt capitalize">
                    sign in
                    {/* {isLoading ? "loading..." : "Sign In"} */}
                  </span>
                </button>
                <p className="flex items-center justify-center my-6">or</p>
                <div className="flex flex-col gap-3">
                  <a href="/" className="cta">
                    <span className="cta-txt">Continue with Google</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                      />
                      <path
                        fill="#FF3D00"
                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                      />
                    </svg>
                  </a>
                  <a href="/" className="cta">
                    <span className="cta-txt">Continue with Apple</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 128 128"
                    >
                      <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796" />
                    </svg>
                  </a>
                  <a href="/" className="cta">
                    <span className="cta-txt">Continue as a guest</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1m5.83-1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1M8 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M10 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2.25 5c-.664 0-1.298.55-1.218 1.302c.06.56.235 1.254.784 1.806c.557.558 1.418.892 2.684.892c1.266 0 2.127-.334 2.684-.892c.55-.552.725-1.247.784-1.806c.08-.752-.553-1.302-1.218-1.302z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-black text-[32px] font-semibold tracking-wider capitalize">
                  Sign up
                </h1>
                <div>
                  <span className="text-black text-sm font-medium">
                    Already have an account?{" "}
                  </span>
                  <span onClick={() => setPageType('sign-in')} className="text-blue-700 text-opacity-75 text-sm font-medium underline cursor-pointer">
                    Sign in
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <form
                    component="form"
                    // onSubmit={handleSubmit}
                    className="flex flex-col gap-2 mb-1"
                  >
                    <div className="flex flex-row gap-2 mb-1">
                      <TextField
                        required
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        size="small"
                        variant="outlined"
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <TextField
                        name="lastName"
                        id="lastName"
                        label="Last Name"
                        size="small"
                        variant="outlined"
                        autoFocus
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <TextField
                      required
                      name="email"
                      id="email"
                      label="Email Address"
                      size="small"
                      variant="outlined"
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      required
                      name="password"
                      id="password"
                      label="password"
                      type="password"
                      size="small"
                      variant="outlined"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      required
                      name="confirmPassword"
                      id="confirmPassword"
                      label="Confirm password"
                      type="password"
                      size="small"
                      variant="outlined"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </form>
                </div>
                <button className="cta" type="submit">
                  <span className="cta-txt capitalize">
                    Sign Up
                    {/* {isLoading ? "loading..." : "Sign Up"} */}
                  </span>
                </button>
                <p className="flex items-center justify-center my-6">or</p>
                <div className="flex flex-col gap-3">
                  <a href="/" className="cta">
                    <span className="cta-txt">Continue with Google</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                      />
                      <path
                        fill="#FF3D00"
                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                      />
                    </svg>
                  </a>
                  <a href="/" className="cta">
                    <span className="cta-txt">Continue with Apple</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 128 128"
                    >
                      <path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796" />
                    </svg>
                  </a>
                  <a href="/" className="cta">
                    <span className="cta-txt">Continue as a guest</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1m5.83-1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1M8 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5M10 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-2.25 5c-.664 0-1.298.55-1.218 1.302c.06.56.235 1.254.784 1.806c.557.558 1.418.892 2.684.892c1.266 0 2.127-.334 2.684-.892c.55-.552.725-1.247.784-1.806c.08-.752-.553-1.302-1.218-1.302z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
