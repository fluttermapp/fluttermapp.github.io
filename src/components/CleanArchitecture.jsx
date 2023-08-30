import { cleanArchitecture } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Pro = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={cleanArchitecture} alt="cleanArchitecture" className="w-[75%] h-[100%] relative z-[5] rounded-[20px]" />
      {/*  style={{ opacity: 0.3 }}  */}
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfoStart}>
      <h2 className={styles.heading3}>
        Clean {/*<br className="sm:block hidden" />*/} Architecture
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
        • Build your Flutter apps using Clean Architecture.
      </p>
      <section className={`flex justify-center items-center`}>
        <p className={`${styles.paragraph} max-w-[470px] mr-1.5`}>
          •
        </p>
        <p className="font-poppins font-bold text-[18px] leading-[30.8px] mr-1">
          {"New"}
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mr-1.5`}>
          course
        </p>
      </section>
      <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
        <Button styles={`mt-10`} label='Get This Course' url="https://courses.fluttermapp.com/p/clean-architecture" />
      </div>
    </div>
  </section>
);

export default Pro;
