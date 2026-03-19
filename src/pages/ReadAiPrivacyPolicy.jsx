import styles from "../style";
import { CTA, ReadAiPrivacyPolicyBody, NavbarOther } from "../components";


export default function ReadAiPrivacyPolicy() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavbarOther />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <ReadAiPrivacyPolicyBody />
            </div>
        </div>
    );
}