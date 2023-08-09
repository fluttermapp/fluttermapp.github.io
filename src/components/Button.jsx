import React from "react";

const Button = ({ styles, label = 'Default label', url = '404'}) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} button-color`}
  onClick= {() => window.open(url)}>
    {label}
  </button>
);

export default Button;
