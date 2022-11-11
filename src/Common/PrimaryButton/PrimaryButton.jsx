import React from "react";

const PrimaryButton = ({ children, styles }) => {
  return (
    <>
      <button {...(styles && { className: styles })}>{children}</button>
    </>
  );
};

export default PrimaryButton;
