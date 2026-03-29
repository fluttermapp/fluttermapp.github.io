import { habitRabbit, roadmap } from "../assets";
import styles from "../style";
import { CTA, NavbarOther, AppsItem } from "../components";


export default function Apps() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavbarOther />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <AppsItem title={'Habit Rabbit'} description='Habit tracker' url='https://fluttermapp.com/habit-rabbit-privacy-policy.html' image={habitRabbit} />
            </div>
            {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <AppsItem title={'Flutter Roadmap'} description='Step by step PDF Guide to learn Flutter' url='https://fluttermapp.gumroad.com/l/flutter-roadmap?price=0&wanted=true&email=' image={roadmap} />
            </div> */}
        </div>
    );
}