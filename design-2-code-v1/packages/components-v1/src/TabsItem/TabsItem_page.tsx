// TabsItem_page.tsx
import React from 'react';
import TabsItem, { TAB_SIZE, TAB_STATE, TAB_ALIGNMENT, TAB_THEME } from './TabsItem';
import './TabsItemPage.scss';

const TabsItemPage: React.FC = () => {
  return (
    <div className="tabs-item-page">
      <section className="tabs-item-section">
        <h2>TabsItem Component</h2>
        <p>The TabsItem component represents a single tab in a tabs navigation system.</p>

        <h3>Default</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <h4>Left Alignment, Medium Size, Default Theme</h4>
            <TabsItem />
          </div>
        </div>

        <h3>States</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <h4>Default</h4>
            <TabsItem state={TAB_STATE.DEFAULT} />
          </div>
          <div className="tabs-item-example">
            <h4>Selected</h4>
            <TabsItem state={TAB_STATE.SELECTED} />
          </div>
          <div className="tabs-item-example">
            <h4>Hover</h4>
            <TabsItem state={TAB_STATE.HOVER} />
          </div>
          <div className="tabs-item-example">
            <h4>Focus</h4>
            <TabsItem state={TAB_STATE.FOCUS} />
          </div>
          <div className="tabs-item-example">
            <h4>Disabled</h4>
            <TabsItem state={TAB_STATE.DISABLED} />
          </div>
          <div className="tabs-item-example">
            <h4>Skeleton</h4>
            <TabsItem state={TAB_STATE.SKELETON} />
          </div>
        </div>

        <h3>Sizes</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <h4>Small</h4>
            <TabsItem size={TAB_SIZE.SMALL} />
          </div>
          <div className="tabs-item-example">
            <h4>Medium</h4>
            <TabsItem size={TAB_SIZE.MEDIUM} />
          </div>
          <div className="tabs-item-example">
            <h4>Large</h4>
            <TabsItem size={TAB_SIZE.LARGE} />
          </div>
        </div>

        <h3>Alignments</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <h4>Left</h4>
            <TabsItem alignment={TAB_ALIGNMENT.LEFT} />
          </div>
          <div className="tabs-item-example">
            <h4>Centre</h4>
            <TabsItem alignment={TAB_ALIGNMENT.CENTRE} />
          </div>
        </div>

        <h3>Themes</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <h4>Default</h4>
            <TabsItem theme={TAB_THEME.DEFAULT} />
          </div>
          <div className="tabs-item-example tabs-item-example--inverse">
            <h4>Inverse</h4>
            <TabsItem theme={TAB_THEME.INVERSE} />
          </div>
        </div>

        <h3>Without Badge</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <TabsItem showBadge={false} />
          </div>
        </div>

        <h3>Without Tag</h3>
        <div className="tabs-item-examples">
          <div className="tabs-item-example">
            <TabsItem showTag={false} />
          </div>
        </div>

        <h3>All Variants (Matrix)</h3>
        <div className="tabs-item-matrix">
          <table className="tabs-item-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Default Theme, Left, Large</th>
                <th>Inverse Theme, Left, Large</th>
                <th>Default Theme, Centre, Large</th>
                <th>Inverse Theme, Centre, Large</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(TAB_STATE).map((state) => (
                <tr key={state}>
                  <td>{state}</td>
                  <td>
                    <TabsItem
                      state={state}
                      theme={TAB_THEME.DEFAULT}
                      alignment={TAB_ALIGNMENT.LEFT}
                      size={TAB_SIZE.LARGE}
                    />
                  </td>
                  <td className="dark-cell">
                    <TabsItem
                      state={state}
                      theme={TAB_THEME.INVERSE}
                      alignment={TAB_ALIGNMENT.LEFT}
                      size={TAB_SIZE.LARGE}
                    />
                  </td>
                  <td>
                    <TabsItem
                      state={state}
                      theme={TAB_THEME.DEFAULT}
                      alignment={TAB_ALIGNMENT.CENTRE}
                      size={TAB_SIZE.LARGE}
                    />
                  </td>
                  <td className="dark-cell">
                    <TabsItem
                      state={state}
                      theme={TAB_THEME.INVERSE}
                      alignment={TAB_ALIGNMENT.CENTRE}
                      size={TAB_SIZE.LARGE}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TabsItemPage;