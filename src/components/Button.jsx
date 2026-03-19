import { useNavigate } from "react-router-dom";

const Button = ({ styles, label = 'Default label', url = '/404' }) => {
  const navigate = useNavigate();

  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} button-color`}
      onClick={() => (url.startsWith('http') || url.startsWith('/static')) ? window.open(url) : navigate(url)}>
      {label}
    </button>
  );
};

export default Button;