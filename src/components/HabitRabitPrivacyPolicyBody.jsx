import styles from "../style";

const PrivacyPolicyBody = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Privacy Policy
      </h2>
    </div>

    <div className="w-full relative z-[1] max-w-[800px]">
      <p className="font-poppins text-[14px] text-dimBlack mb-8">
        Last Updated: May 26, 2025
      </p>

      <p className="font-poppins font-normal text-[18px] leading-[32px] text-black mb-10">
        Thank you for using Habit Rabbit. We care about your privacy and designed the app to protect your personal information.
      </p>

      {[
        {
          title: "1. No Data Collected",
          text: "We do not collect any personal data. All habit data (such as names, reminders, and progress) is stored only on your device. We do not use analytics, tracking tools, advertising networks, or any third-party services.",
        },
        {
          title: "2. Data Usage",
          text: "Your data is used only inside the app to track your habits. We do not send, store, or process any data on our servers. The app works offline and does not require an internet connection for its core features.",
        },
        {
          title: "3. Internet Usage",
          text: "The only time the app uses an internet connection is when you choose to open external links, such as our Privacy Policy or Terms of Use. No personal data is transmitted during this.",
        },
        {
          title: "4. Your Control",
          text: "You have full control over your data. You can delete your habits and reminders at any time from within the app. Once deleted, the data is permanently removed from your device.",
        },
      ].map((item, i) => (
        <div key={i} className="mb-8">
          <h3 className="font-poppins font-semibold text-[20px] text-black mb-3">
            {item.title}
          </h3>
          <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
            {item.text}
          </p>
        </div>
      ))}

      <div className="mt-10 pt-8 border-t border-gray-600">
        <h3 className="font-poppins font-semibold text-[20px] text-black mb-3">Contact</h3>
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
          If you have any questions or concerns, reach us at{" "}
          <a href="mailto:info@fluttermapp.com" className="text-blue-400 hover:underline">
            info@fluttermapp.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default PrivacyPolicyBody;