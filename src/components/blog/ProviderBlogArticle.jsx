import styles from "../../style";
import { idNavLink3 } from "../../constants";
import NavbarOther from "../NavbarOther";
import { idNavLink4 } from "../../constants";
import Button from ".././Button";

const ProviderBlogArticle = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <NavbarOther />
            </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} flex justify-center items-center`}>
            <section id={idNavLink4} className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow feature-card`}>
                <div className="flex-1 flex flex-col">
                    <h2 className={styles.heading2}>Flutter Provider</h2>
                    <p className={`font-poppins font-bold text-black text-[22px] leading-[30.8px] mt-10`}>
                        Step 1: Class Provider
                    </p>
                    <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-6`}>
                        You need to create a class for your Provider. The class needs to 'extend ChangeNotifier.' If you want the new data to be available throughout the entire application, you will need to use the 'notifyListeners' method.
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        • extends ChangeNotifier
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        • notifierListener
                    </p>
                    <p className={`font-poppins font-bold text-black text-[22px] leading-[30.8px] mt-10`}>
                        Step 2: MultiProvider
                    </p>
                    <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-6`}>
                        Now, you need to wrap the entire application with the Provider class you created. You can choose to use either the Provider or the MultiProvider for this purpose. The MultiProvider allows you to use multiple providers without nesting them all, making it a better option. In the MultiProvider, you will need to add the ChangeNotifierProvider and return the Provider class you created.
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        • ChangeNotifierProvider
                    </p>
                    <p className={`font-poppins font-bold text-black text-[22px] leading-[30.8px] mt-10`}>
                        Step 3: watch
                    </p>
                    <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-6`}>
                        {'.watch is the preferred option for reading the data inside your Provider class. While you could also use Consumer or Provider.of<T>(context), .watch is a simpler and faster alternative.'}
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        {'• context.watch<T>().value'}
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        • Listen to changes
                    </p>
                    <p className={`font-poppins font-bold text-black text-[22px] leading-[30.8px] mt-10`}>
                        Step 4: read
                    </p>
                    <p className={`${styles.paragraph} max-w-[470px] mt-6 mb-6`}>
                        {'.read is used to access the Provider class without waiting for the latest data to become available. This enables you to trigger functions and modify data within the targeted Provider. An alternative to this is Provider.of<T>(context, listen: false), but, all in all, .read is simpler and faster to use.'}
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        {'• context.read<T>().value'}
                    </p>
                    <p className={`font-poppins font-normal text-dimBlack text-[20px] leading-[30.8px] mt-2`}>
                        • Don't listen to changes
                    </p>
                </div>
            </section>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button label='Documentation' url='https://pub.dev/packages/provider' />
        </div>
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
    </div>

);

export default ProviderBlogArticle;

