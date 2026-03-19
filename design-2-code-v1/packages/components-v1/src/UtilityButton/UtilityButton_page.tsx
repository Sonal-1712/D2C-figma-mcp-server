// UtilityButton_page.tsx
import React from 'react';
import { UtilityButton, UTILITY_BUTTON_STATE, UTILITY_BUTTON_THEME } from './UtilityButton';
import './UtilityButtonPage.scss';

// SVG icon example
const TennisIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
    <path
      d="M16.5,13c0-.17,0-.33,0-.5a6.5,6.5,0,1,0-13,0c0,.17,0,.33,0,.5h0a5.33,5.33,0,0,0,5.21,5.48h.58c2.75,0,5-2.63,5.21-5.48ZM11.5,16.5a3.5,3.5,0,0,1-3,0l1.5-2-1.5-2,1.5-2-1.5-2,1.5-2h0c2,0,3.5,2.35,3.5,5A5.73,5.73,0,0,1,11.5,16.5Z"
      fill="currentColor"
    />
  </svg>
);

export const UtilityButton_page: React.FC = () => {
  return (
    <div className="utility-button-page">
      <h1>UtilityButton</h1>
      
      <section>
        <h2>Description</h2>
        <p>
          The UtilityButton component is a circular or rounded square button used for utility actions.
          It supports different themes, states, and can include icons or a loading spinner.
        </p>
      </section>
      
      <section>
        <h2>Usage</h2>
        <p>
          UtilityButtons are typically used for secondary actions, tool functions, or quick actions.
          They're often used in toolbars, card headers, or as floating action buttons.
        </p>
      </section>
      
      <section>
        <h2>Examples</h2>
        
        <div className="example">
          <h3>Default</h3>
          <div className="example-container">
            <UtilityButton />
          </div>
          <pre>
            <code>{`<UtilityButton />`}</code>
          </pre>
        </div>
        
        <div className="example">
          <h3>With Custom Icon</h3>
          <div className="example-container">
            <UtilityButton icon={<TennisIcon />} />
          </div>
          <pre>
            <code>{`<UtilityButton icon={<TennisIcon />} />`}</code>
          </pre>
        </div>
        
        <div className="example">
          <h3>Different Themes</h3>
          <div className="example-grid">
            <div>
              <p>Default</p>
              <UtilityButton theme={UTILITY_BUTTON_THEME.DEFAULT} />
            </div>
            <div>
              <p>On-colour</p>
              <UtilityButton theme={UTILITY_BUTTON_THEME.ON_COLOUR} />
            </div>
            <div>
              <p>Inverse</p>
              <UtilityButton theme={UTILITY_BUTTON_THEME.INVERSE} />
            </div>
            <div>
              <p>Overlay</p>
              <UtilityButton theme={UTILITY_BUTTON_THEME.OVERLAY} />
            </div>
            <div>
              <p>Ghost</p>
              <UtilityButton theme={UTILITY_BUTTON_THEME.GHOST} />
            </div>
          </div>
          <pre>
            <code>{`<UtilityButton theme="default" />
<UtilityButton theme="on-colour" />
<UtilityButton theme="inverse" />
<UtilityButton theme="overlay" />
<UtilityButton theme="ghost" />`}</code>
          </pre>
        </div>
        
        <div className="example">
          <h3>Different States</h3>
          <div className="example-grid">
            <div>
              <p>Default</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.DEFAULT} />
            </div>
            <div>
              <p>Hover</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.HOVER} />
            </div>
            <div>
              <p>Active</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.ACTIVE} />
            </div>
            <div>
              <p>Focus</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.FOCUS} />
            </div>
            <div>
              <p>Loading</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.LOADING} />
            </div>
            <div>
              <p>Disabled</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.DISABLED} />
            </div>
            <div>
              <p>Skeleton</p>
              <UtilityButton state={UTILITY_BUTTON_STATE.SKELETON} />
            </div>
          </div>
          <pre>
            <code>{`<UtilityButton state="default" />
<UtilityButton state="hover" />
<UtilityButton state="active" />
<UtilityButton state="focus" />
<UtilityButton state="loading" />
<UtilityButton state="disabled" />
<UtilityButton state="skeleton" />`}</code>
          </pre>
        </div>
        
        <div className="example">
          <h3>With onClick Handler</h3>
          <div className="example-container">
            <UtilityButton onClick={() => alert('Button clicked!')} />
          </div>
          <pre>
            <code>{`<UtilityButton onClick={() => alert('Button clicked!')} />`}</code>
          </pre>
        </div>
      </section>
      
      <section>
        <h2>Props</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>''</td>
              <td>Additional CSS classes</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>React.ReactNode</td>
              <td>undefined</td>
              <td>Icon element to display in the button</td>
            </tr>
            <tr>
              <td>state</td>
              <td>string</td>
              <td>'default'</td>
              <td>Button state: 'default', 'hover', 'active', 'focus', 'loading', 'disabled', 'skeleton'</td>
            </tr>
            <tr>
              <td>theme</td>
              <td>string</td>
              <td>'default'</td>
              <td>Button theme: 'default', 'on-colour', 'inverse', 'overlay', 'ghost'</td>
            </tr>
            <tr>
              <td>ariaLabel</td>
              <td>string</td>
              <td>'Utility button'</td>
              <td>Accessibility label for the button</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>false</td>
              <td>Whether the button is disabled</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>function</td>
              <td>undefined</td>
              <td>Click event handler</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UtilityButton_page;