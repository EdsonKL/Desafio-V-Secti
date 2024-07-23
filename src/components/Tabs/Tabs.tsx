import { useState } from "react";
import styles from "./Tabs.module.css";
import { TabsInfo } from "../Celebrations/Celebrations";
import { Link } from "react-router-dom";

// interface TabsProps {
//   tabs: TabsInfo[];
// }

function Tabs({ tabs }: any) {
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].id);

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.id);
  };
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab: TabsInfo, i: number) => (
          <button
            key={i}
            id={tab.id}
            onClick={handleTabClick}
            disabled={currentTab == `${tab.id}`}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={styles.containerContent}>
        {tabs.map((tab: TabsInfo, i: number) => (
          <div key={i}>
            {currentTab == `${tab.id}` && (
              <div className={styles.mainContent}>
                <div>
                  <img src={tab.image} alt="fotoCapa" />
                </div>
                <div className={styles.description}>
                  <h2>{tab.title}</h2>
                  <p>{tab.content}</p>
                  <Link to={`/details/${tab.id}`}>
                    Saiba mais
                  </Link>
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
