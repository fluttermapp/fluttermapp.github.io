import styles from "../style";
import { idNavLink4 } from "../constants";

const PageNotFound = () => (
  <section id={idNavLink4} className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Page Not Found</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The requested URL was not found.
      </p>
    </div>
  </section>
);

export default PageNotFound;

