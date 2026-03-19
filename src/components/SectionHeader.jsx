import { checklist } from "../assets";
import { idNavLink1 } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { flutterChecklist } from "../assets";

const SectionHeader = () => (
  <section id={idNavLink1} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-8 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        For you <br className="sm:block hidden" />
      </h2>
    </div>
    <div className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={checklist} alt="zeroToFlutterPro" className="w-[75%] h-[100%] relative z-[5] rounded-[20px]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className={layout.sectionInfoStart}>
        <h2 className={styles.heading3}>
          Flutter {/*<br className="sm:block hidden" />*/} Checklist
        </h2>
        <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
          • Your cheatsheet to learn Flutter!
        </p>
        {/* <span className="font-bold text-[20px]">• 2000+ copy sold</span> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-0 font-black`}>
          • No email required (I hate when people do this)
        </p>
        <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
          <Button styles={`mt-10`} label='Get my copy' url={flutterChecklist} />
        </div>
      </div>
    </div>
  </section>
);

export default SectionHeader;
