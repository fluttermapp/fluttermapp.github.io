import styles from "../style";
import { idNavLink4 } from "../constants";
import { ProviderBlog, NavbarOther } from "../components";
import { Link } from "react-router-dom"


export default function Blog() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavbarOther />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className="flex-1 flex flex-col">

                    <section id={idNavLink4} className={`${styles.flexCenter} sm:my-6 my-6 ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card`}>
                        <div className="flex-1 flex flex-col">
                            <h2 className={styles.heading2}>Blog</h2>
                            <div
                                key={'home'}
                                className={`${styles.paragraph} max-w-[470px] mt-5 hover:text-secondary cursor-pointer`}>
                                <Link to='/provider'>
                                    • Flutter Provider
                                </Link >
                            </div>
                        </div>
                    </section>
                    <section id={idNavLink4} className={`${styles.flexCenter} sm:my-6 my-6 ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card`}>
                        <div className="flex-1 flex flex-col">
                            <h2 className={styles.heading2}>What's next</h2>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                • Riverpod
                            </p>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                • How to Build a Billion Dollar App - Book review
                            </p>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                • Best Flutter tips
                            </p>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}