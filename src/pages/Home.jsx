import styles from "../style";
import { ZeroToHero, Why, CTA, Footer, Navbar, Stats, Testimonials, Banner, DiscountBanner } from "../components";

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
                    {/*<DiscountBanner />*/}
                   
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>  
                    <Banner />
                    {/*<Why />
                    <ZeroToHero />*/}
                    {/*<CleanArchitecture />*/}
                    <Testimonials />
                    {/*<Clients />*/}
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}