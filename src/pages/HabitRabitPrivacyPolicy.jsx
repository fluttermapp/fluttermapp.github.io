import styles from "../style";
import { CTA, HabitRabitPrivacyPolicyBody, NavbarOther } from "../components";


export default function HabitRabitPrivacyPolicy() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavbarOther />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <HabitRabitPrivacyPolicyBody />
            </div>
        </div>
    );
}