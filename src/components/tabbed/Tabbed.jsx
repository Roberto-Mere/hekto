import { useState } from 'react';
import List from '../list/List';
import Typography from '../typography/Typography';

export default function Tabbed({
  tabs,
  RenderFn,
  classes = '',
  buttonsClasses = '',
  tabType,
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function changeTab(tab) {
    setActiveTab(tab);
  }

  return (
    <div className={classes ? classes : null} data-testid="tabbed">
      <List list={tabs} keyFn={(tab) => tab} classes={`${buttonsClasses}`}>
        {(tab) => {
          const tabClass =
            tabType === 'underline'
              ? `${activeTab === tab ? 'border-b border-b-black mb-4' : null}`
              : `${activeTab === tab ? 'text-primary' : null}`;

          return (
            <button className={tabClass} onClick={() => changeTab(tab)}>
              <Typography
                type={tabType === 'underline' ? 'sub1' : 'body-large'}
              >
                {tab}
              </Typography>
            </button>
          );
        }}
      </List>
      <RenderFn tab={activeTab} />
    </div>
  );
}
