import styles from "../style";
import { roadmap, blackFriday } from "../assets";
import { idNavLink1 } from "../constants";
import { useState } from "react";

const Banner = () => {
  const [val, setVal] = useState('')
  const clickButton = () => {
    window.open("https://fluttermapp.gumroad.com/l/flutter-roadmap?price=0&wanted=true&email=" + val);
  }
  const change = event => {
    setVal(event.target.value)
  }
  return (
    <section id={idNavLink1} className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-black ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Free
            <br className="sm:block hidden" />{" "}
            <span className="text-secondary font-black">Flutter</span>
            <br className="sm:block hidden" />{" "}
            Roadmap
          </h1>
        </div >
        <div style={{
          height: 20,
        }} />
        <div >
          <input style={{ width: "300px", backgroundColor: '#ebebeb', padding: '0.8rem', borderRadius: '15px' }} placeholder="Email" onChange={change} value={val}></input>
        </div>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none mt-10 button-color`}
            onClick={clickButton}>
            {'Get For Free'}
          </button>
        </div>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mx-20 relative`}>
        <img src={roadmap} alt="roadmap" className="w-[100%] h-[100%] relative z-[5] rounded-[20px]" />

        {/* gradient start */}

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        {/* gradient end */}
        <div className={`flex-1 flex ${styles.flexCenter}`} />


      </div>


    </section>
  );
};

export default Banner;
