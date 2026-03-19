import { feedback, idNavLink4 } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { Stats } from ".";

const SectionTestimonials = () => (
  <section id={idNavLink4} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full" />
    <br className="sm:block hidden" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-8 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People Are Saying <br className="sm:block hidden" />
      </h2>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default SectionTestimonials;
