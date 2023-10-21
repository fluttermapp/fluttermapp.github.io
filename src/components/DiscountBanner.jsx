import styles from "../style";
import { idNavLink4 } from "../constants";
import Button from "./Button";

const DiscountBanner = () => (
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section id={idNavLink4} className={`${styles.flexCenter} ${styles.marginY} sm:px-16 px-6 sm:py-6 py-2 sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card-discount`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2White} text-white>Discount 80% Off</h2>
          <p className={`${styles.paragraphWhite} max-w-[470px] mt-0 mb-2`}>
            Flutter For Beginners
          </p>
          <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-0`}>
            Use the code 'ONLY100.' Limited to the first 100 people.
          </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button label='Get This Course' url='https://courses.fluttermapp.com/p/flutter-for-beginners?coupon_code=ONLY100' />
        </div>
      </section>
    </div>
  </div>

);

export default DiscountBanner;
