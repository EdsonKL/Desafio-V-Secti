import { useState } from "react";
import styles from "./Tabs.module.css";

function Tabs({ tabs }: any) {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e: any) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab: any, i: any) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab == `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={styles.containerContent}>
        {tabs.map((tab: any, i: any) => (
          <div key={i}>
            {currentTab == `${tab.id}` && (
              <div className={styles.mainContent}>
                <div>
                  <img src={tab.image} alt="imagem" />
                </div>
                <div className={styles.description}>
                  <h2>{tab.title}</h2>
                  <p>{tab.content}</p>
                  <a href={tab.link} target="_blank">
                    Saiba mais
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
