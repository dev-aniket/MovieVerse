import { useState } from "react";
import "./style.scss";

const SwitchTab = ({ data, onTabChange }) => {
  const [left, setLeft] = useState(0);
  const [selectedTabs, setSelectedTabs] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(()=>{
        setSelectedTabs(index);
    }, 300);
    onTabChange(tab, index);
  }

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span 
          key={index} 
          className={`tabItem ${selectedTabs === index ? "active" : ""}`} 
          onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTab;
