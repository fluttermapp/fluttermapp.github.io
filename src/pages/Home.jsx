import styles from "../style";
import {
    SectionHeader,
    SectionCTA,
    Footer,
    Navbar,
    Stats,
    SectionTestimonials,
    DiscountBanner,
    SectionEmail,
    SectionArticle,
    SectionPromo,
} from "../components";

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
                    <SectionHeader />
                    <SectionArticle />
                    <SectionPromo />
                    <SectionTestimonials />
                    <SectionCTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}