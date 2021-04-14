import React from "react";

const srcImg =
    "https://images.unsplash.com/photo-1617641199643-ad24e3c12744?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

const HeadCover = ({ src = srcImg, className, children, }) => {
  return (
    <div
      style={{
        background: "black",
        backgroundSize: "cover",
        width: "100%",
        height: "calc(100vh - 150px)",
        position: "relative",
      }}
      >
      <div
        style={{
          background: `url(${src}) no-repeat center center fixed`,
          backgroundSize: "cover",
          opacity: "30%",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "1",
        }}
        />
      <div
        className={`flex flex-col justify-center items-center p-5 shadow ${className}`}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "2",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HeadCover;
