import React from "react";

const HomeCover = ({ src, className, children }) => {
  return (
    <div
      style={{
        background: `url(${src}) no-repeat center center fixed`,
        backgroundSize: "cover",
        width: "100vw",
        height: "calc(100vh - 150px)",
      }}
      className={`${className} homeCover`}
    >
      <div className="w-full h-full flex flex-col justify-around items-center">
        {children}
      </div>
    </div>
  );
};

export default HomeCover;
