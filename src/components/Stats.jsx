import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mt-3 sm:mb-0 mb-0`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-0`} >
        <h4 className="font-poppins font-semibold xs:text-[22px] text-[16px] xs:leading-[53.16px] leading-[43.16px] text-black">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[22px] text-[16px] xs:leading-[26.58px] leading-[21.58px] text-gradient ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
