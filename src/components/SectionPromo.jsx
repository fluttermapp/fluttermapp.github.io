import styles from "../style";
import { idNavLink3 } from "../constants";
import Button from "./Button";
import Stats from "./Stats";
import { foodComa } from "../assets";

const SectionPromo = () => (
  <section id={idNavLink3} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <h2 className={`${styles.heading2} w-full sm:mb-8 mb-6`}>My New App</h2>

    <div className={`${styles.padding} flex sm:flex-row flex-col justify-between items-center bg-blue-gradient rounded-[20px] box-shadow feature-card w-full`}>
      <div className="flex flex-col">
        <div className="flex items-center gap-6">
          <img src={foodComa} alt="foodComa" className="w-[5%] ml-0" />
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px]">Food Coma</h2>
        </div>
        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          Building a new app from scratch. I'll share everything I learn about making a million dollar app on YouTube, how to build it, how to market it, all of it. If you are curious, you can check it out and drop an honest review on the store. Thanks!
        </p>
      </div>
      <Button label="Check the App" url="https://foodcoma.app/" />
    </div>
  </section>
);

export default SectionPromo;