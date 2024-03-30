import styles from "../style";
import { idNavLink4 } from "../constants";
import Button from "./Button";
import TextButton from "./TextButton";
import Stats from "./Stats";
import { blue } from "../assets";

const CTA = () => (
  <section id={idNavLink4} className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card`}>
    <div className="flex-1 flex flex-col">
    <div className={`${styles.flexStart} sm:flex-row flex-col`}>
      <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px]"}>Zero To Flutter Pro</h2>
      <img src={blue} alt={'blue'} className="w-[5%]" />
    </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Build your app with Flutter with this step-by-step beginner course
      </p>
      <Stats/>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button label='Login' url='https://sso.teachable.com/secure/1086263/identity/login/password' />
    </div>
    <div className={`${styles.flexCenter} sm:ml-5 ml-0 sm:mt-0 mt-10`}>
      <TextButton label='Purchase' url='https://courses.fluttermapp.com/p/zero-to-flutter-pro' />
    </div>
  </section>
);

export default CTA;