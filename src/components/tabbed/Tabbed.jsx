import { useState } from 'react';
import List from '../list/List';
import Typography from '../typography/Typography';

export default function Tabbed({
  tabs,
  RenderFn,
  classes = '',
  buttonsClasses = '',
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function changeTab(tab) {
    setActiveTab(tab);
  }

  return (
    <div className={classes ? classes : null} data-testid="tabbed">
      <List list={tabs} keyFn={(tab) => tab} classes={`${buttonsClasses}`}>
        {(tab) => (
          <button
            className={`${activeTab === tab ? 'text-primary' : null}`}
            onClick={() => changeTab(tab)}
          >
            <Typography type="body-large">{tab}</Typography>
          </button>
        )}
      </List>
      <RenderFn tab={activeTab} />
    </div>
  );
}
