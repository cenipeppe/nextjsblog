import React from "react";

const HomeCover = ({ src, className, children }) => {
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
        className={className}
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

export default HomeCover;
