import React from "react";

const HomeCover = ({ src, className, children }) => {
  return (
    <div
      style={{
        background: `url(${src}) no-repeat center center fixed`,
        backgroundSize: "cover",
        width: "100%",
        height: "calc(100vh - 150px)",
      }}
      className={className}
    >
        {children}
    </div>
  );
};

export default HomeCover;
