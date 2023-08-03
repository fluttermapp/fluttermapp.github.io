import { idNavLink3 } from "../constants";
import styles from "../style";
import { logo } from "../assets";

const ContactUs = () => (
  <section id={idNavLink3} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full" />
    <br className="sm:block hidden" />
    <br className="sm:block hidden" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Become an affiliate marketer<br className="sm:block hidden" />
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        "Don't make the process harder than it is."
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-5">
          Do you believe that Flutter should be fast and simple to learn? If so, then we share the same view.
        </p>
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-5">
          If you wish to apply for the program, kindly send us an email, and we will promptly get in touch with you.
        </p><p className="my-3">
        </p>
        <div className="flex flex-row">
          <img src={logo} alt={'logo'} className="w-[48px] h-[48px] rounded-full" />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
              Flutter Mapp
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimBlack">
              info@FlutterMapp.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
