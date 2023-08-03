import styles from "../style";
import { idNavLink4 } from "../constants";
import Button from "./Button";

const CTA = () => (
  <section id={idNavLink4} className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Already a student?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Login into your account
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button label='Login' url='https://sso.teachable.com/secure/1086263/identity/login/password' />
    </div>
  </section>
);

export default CTA;
