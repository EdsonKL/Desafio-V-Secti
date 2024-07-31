import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabsInfo } from "../../Types/Types";
import { ContentProps } from "../../Types/Interfaces";
import styles from "./Tabs.module.css";

function ContentSession({ contentProps }: ContentProps) {
  const [currentTab, setCurrentTab] = useState<string>(contentProps[0].id);

  const navigate = useNavigate();
  const navigateToSection = (path: string, hash: string): void => {
    navigate(`${path}${hash}`);
  };

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCurrentTab(e.currentTarget.id);
  };
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        
        {contentProps.map((tab: TabsInfo, i: number) => (
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
        {contentProps.map((tab: TabsInfo, i: number) => (
          <div key={i}>
            {currentTab == `${tab.id}` && (
              <div className={styles.mainContent}>
                <div>
                  <img
                    src={tab.image}
                    alt={`foto de capa sobre ${tab.title}`}
                  />
                </div>
                <div className={styles.description}>
                  <h2>{tab.title}</h2>
                  <p>{tab.content}</p>
                  <button
                    onClick={() =>
                      navigateToSection(`/details/${tab.id}`, "#heroDetails")
                    }
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentSession;
