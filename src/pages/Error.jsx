import styles from "../style";
import { CTA, NavbarOther, PageNotFound } from "../components";


export default function Error() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavbarOther />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <PageNotFound />
            </div>
        </div>
    );
}