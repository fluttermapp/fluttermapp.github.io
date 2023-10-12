import { flutterProviderTN } from "../../assets";
import styles, { layout } from "../../style";
import Button from ".././Button";
import { Link } from "react-router-dom"

const ProviderBlog = () => (
    <section className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={flutterProviderTN} alt="flutterProviderTN" className="w-[100%] h-[100%] relative z-[5] rounded-[20px]" />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </div>
        <div className={layout.sectionInfoStart}>
            <h2 className={styles.heading3}>
                Flutter Provider
            </h2>
            <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
                <CustomLink to='/provider'>
                    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles} button-color`}>
                        {'Read'}
                    </button>
                </CustomLink>
            </div>

        </div>
    </section>
);

export default ProviderBlog;

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link >
        </li >
    )
}