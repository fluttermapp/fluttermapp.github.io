import styles from "../style";
import { ZeroToHero, Why, Pro, Clients, CTA, Footer, Navbar, Stats, Testimonials, Banner } from "../components";

export default function Home() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                <Banner />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Why />
                    <ZeroToHero />
                     {/*<Pro />*/}
                    <Testimonials />
                    {/*<Clients />*/}
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}