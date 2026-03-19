import { idNavLink2 } from "../constants";
import styles from "../style";
import {
  flutterRoadmap,
  localNotifications,
  provider,
  installFlutterMac,
  bloc,
  pythonCheatSheet,

} from "../assets";

const articles = [
  { title: "Flutter Roadmap", url: flutterRoadmap },
  { title: "Flutter Local Notification", url: localNotifications },
  { title: "Flutter Provider", url: provider },
  { title: "Install Flutter Mac", url: installFlutterMac },
  { title: "Bloc", url: bloc },
  { title: "Python Cheat Sheet", url: pythonCheatSheet },
];

const SectionArticle = () => {
  return (
    <section id={idNavLink2} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-8 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Articles</h2>
      </div>
      <div className={`${styles.padding} bg-blue-gradient rounded-[20px] box-shadow feature-card w-full`}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {articles.map(({ title, url }, index) => (
            <li key={title}
              style={{
                borderBottom: index === articles.length - 1 ? "none" : "1px solid rgba(13, 13, 13, 0.1)",
                paddingBottom: index === articles.length - 1 ? "0" : "1rem",
                marginBottom: index === articles.length - 1 ? "0" : "1rem"
              }}>
              <a href={url}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: "600", fontSize: "18px", color: "black", textDecoration: "none" }}
                onMouseEnter={e => e.target.style.textDecoration = "underline"}
                onMouseLeave={e => e.target.style.textDecoration = "none"}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionArticle;