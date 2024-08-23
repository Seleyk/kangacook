import React from "react";

const Auth = () => {
  return (
    <div className="w-full h-[100dvh] relative">
      <div className="w-full h-full flex items-center justify-center absolute -z-20">
        <img src="/assets/nklogo.png" alt="Loading..." className="h-80 w-80" />
      </div>
      <video
        className="w-full h-full object-cover absolute -z-10"
        src="/assets/authvid.mp4"
        autoPlay
        muted
        loop
      />
      <div className="md:py-20 h-full w-full px-32 max-md:w-full max-md:p-0 flex items-center justify-end ">
      <div className="bg-[#F8F7F4] bg-opacity-95 flex flex-col gap-6 w-[480px] p-8 max-md:h-full max-md:w-full max-md:rounded-[0] max-md:pt-20 rounded-3xl">  </div>
      </div>

    </div>
  );
};

export default Auth;
