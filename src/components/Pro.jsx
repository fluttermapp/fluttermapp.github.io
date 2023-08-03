import { pro } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Pro = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={pro} alt="pro" className="w-[75%] h-[100%] relative z-[5] rounded-[20px]" style={{ opacity: 0.3 }} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfoStart}>
      <h2 className={styles.heading3}>
        Flutter {/*<br className="sm:block hidden" />*/} Pro
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Clean Architecture & More
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} label='Available Soon' />
      </div>
    </div>
  </section>
);

export default Pro;
