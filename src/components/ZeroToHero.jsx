import { zeroToHeroTn } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const ZeroToHero = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={zeroToHeroTn} alt="zeroToHeroTn" className="w-[75%] h-[100%] relative z-[5] rounded-[20px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className={layout.sectionInfoStart}>
      <h2 className={styles.heading3}>
        Zero {/*<br className="sm:block hidden" />*/} To Hero
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
        • Simplest and fastest way to build your Apps.
      </p>
      {/* <span className="font-bold text-[20px]">• 2000+ copy sold</span> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-0 font-black`}>
        • 2000+ copy sold
      </p>
      <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
        <Button styles={`mt-10`} label='Get This Course' url="https://sso.teachable.com/secure/1086263/checkout/4306355/flutter-for-beginners?coupon_code=OFF50" />
      </div>


    </div>
  </section>
);

export default ZeroToHero;
