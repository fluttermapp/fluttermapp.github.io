import { checklist, roadmap } from "../assets";
import styles from "../style";
import { CTA, NavbarOther, FreeItem } from "../components";


export default function Free() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavbarOther />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <FreeItem title={'Flutter Checklist'} description='Flutter concepts checklist' url='https://fluttermapp.gumroad.com/l/checklist?price=0&wanted=true&email=' image={checklist} />
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <FreeItem title={'Flutter Roadmap'} description='Step by step PDF Guide to learn Flutter' url='https://fluttermapp.gumroad.com/l/flutter-roadmap?price=0&wanted=true&email=' image={roadmap} />
            </div>
        </div>
    );
}