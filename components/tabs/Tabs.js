import { useState } from "react";

import { TabsContainer } from "./TabsContainer";
import { Tab } from "./Tab";

export const Tabs = ({ tabs }) => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <>
      <div className="container flex flex-row justify-between">
        <TabsContainer>
          {tabs.map((t, i) => (
            <Tab
              key={i}
              name={t.name}
              setActive={() => setOpenTab(i)}
              active={openTab === i}
            />
          ))}
        </TabsContainer>
      </div>
      <div>
        {tabs.map((t, i) => (
          <div key={i} className={openTab === i ? "block" : "hidden"}>
            {t.content}
          </div>
        ))}
      </div>
    </>
  );
};
