import { feedback, idNavLink3 } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { Stats} from "../components";

const Testimonials = () => (
  <section id={idNavLink3} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full" />
    <br className="sm:block hidden" />
    <br className="sm:block hidden" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-8 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
      Always straight to the point <br className="sm:block hidden" />
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        "Don't make the process harder than it is."
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
