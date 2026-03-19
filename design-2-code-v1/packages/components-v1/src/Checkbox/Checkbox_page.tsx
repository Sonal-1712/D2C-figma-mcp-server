// Checkbox_page.tsx
import React from 'react';
import Checkbox, { CHECKBOX_STATE } from './Checkbox';
import './CheckboxPage.scss';

const Checkbox_page = () => {
  return (
    <div className="checkbox-page">
      <h1>Checkbox Component</h1>
      <p>The Checkbox component is used for selecting single or multiple options.</p>
      
      <h2>Default State</h2>
      <div className="example">
        <Checkbox state={CHECKBOX_STATE.DEFAULT} />
      </div>
      
      <h2>Focus State</h2>
      <div className="example">
        <Checkbox state={CHECKBOX_STATE.FOCUS} />
      </div>
      
      <h2>Selected State</h2>
      <div className="example">
        <Checkbox state={CHECKBOX_STATE.SELECTED} />
      </div>
      
      <h2>Error State</h2>
      <div className="example">
        <Checkbox 
          state={CHECKBOX_STATE.ERROR} 
          errorText="Error-text"
        />
      </div>
      
      <h2>Disabled State</h2>
      <div className="example">
        <Checkbox state={CHECKBOX_STATE.DISABLED} />
      </div>
      
      <h2>With Custom Label</h2>
      <div className="example">
        <Checkbox 
          label="I agree to the Terms and Conditions" 
          state={CHECKBOX_STATE.DEFAULT}
        />
      </div>
      
      <h2>With Rich Text Label</h2>
      <div className="example">
        <Checkbox 
          label={<>Body text, with <a href="#">links</a> for additional information</>} 
          state={CHECKBOX_STATE.DEFAULT}
        />
      </div>
      
      <h2>Selected with Custom Label</h2>
      <div className="example">
        <Checkbox 
          label="I agree to the Terms and Conditions" 
          state={CHECKBOX_STATE.SELECTED}
        />
      </div>
    </div>
  );
};

export default Checkbox_page;