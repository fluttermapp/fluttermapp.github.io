import styles from "../style";

const ReadAiPrivacyPolicyBody = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Privacy Policy
      </h2>
    </div>

    <div className="w-full relative z-[1] max-w-[800px]">
      <p className="font-poppins text-[14px] text-dimBlack mb-8">
        Last Updated: May 16, 2025
      </p>

      <p className="font-poppins font-normal text-[18px] leading-[32px] text-black mb-10">
        Your privacy is important to us. This Privacy Policy explains how our app handles your data.
      </p>

      {[
        {
          title: "1. Information We Collect",
          text: "We do not collect any personally identifiable information from users. The app may collect the following types of non-personal data:",
          bullets: [
            "User-Provided Content: When you use the quiz feature, the app sends a chapter of the book you imported to our server to generate AI-based questions. This content is not stored, logged, or linked to your identity in any way.",
            "Diagnostic Data (if applicable): We may collect crash logs or performance data to help improve app stability and performance.",
          ],
          noBullets: "We do not collect your name, email address, or contact info, your device identifiers or location, your search or browsing history, or any financial, health, or sensitive personal information.",
        },
        {
          title: "2. How Your Data Is Used",
          text: "The chapter text is temporarily used to generate quiz questions via an AI model (Google Gemini). The data is processed in real-time and not retained after generating the questions. We do not use your data for advertising, tracking, or analytics purposes.",
        },
        {
          title: "3. Third-Party Services",
          text: "We use the Google Gemini API via our own backend server to generate AI-powered quiz content. Google Gemini processes the data temporarily to return results but does not retain, track, or link it to individual users. We ensure that third-party services are used in compliance with their privacy policies and applicable data protection laws.",
        },
        {
          title: "4. Data Security",
          text: "Data sent to our backend for quiz generation is encrypted in transit using HTTPS. No personal user data is stored on our servers.",
        },
        {
          title: "5. Your Rights",
          text: "Since we do not store or track user data, there is no stored data to delete or export. However, if you have any concerns or questions about how your data is handled, feel free to contact us.",
        },
      ].map((item, i) => (
        <div key={i} className="mb-8">
          <h3 className="font-poppins font-semibold text-[20px] text-black mb-3">
            {item.title}
          </h3>
          <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
            {item.text}
          </p>
          {item.bullets && (
            <ul className="list-disc list-inside mt-3 space-y-2">
              {item.bullets.map((bullet, j) => (
                <li key={j} className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {item.noBullets && (
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack mt-3">
              {item.noBullets}
            </p>
          )}
        </div>
      ))}

      <div className="mt-10 pt-8 border-t border-gray-600">
        <h3 className="font-poppins font-semibold text-[20px] text-black mb-3">6. Contact</h3>
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
          If you have questions or concerns about this policy, contact us at:{" "}
          <a href="mailto:info@fluttermapp.com" className="text-blue-400 hover:underline">
            info@fluttermapp.com
          </a>
          <br />
          Developer: Louis-Philippe Papineau
          <br />
          App: Read AI: Speed Reading
        </p>
      </div>
    </div>
  </section>
);

export default ReadAiPrivacyPolicyBody;