// Breadcrumb_page.tsx
import React from 'react';
import Breadcrumb, { BREADCRUMB_BREAKPOINT, BREADCRUMB_THEME, BREADCRUMB_TYPE } from './Breadcrumb';
import './BreadcrumbPage.scss';

const defaultItems = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Subcategory', href: '#' },
  { label: 'Current Page', current: true }
];

const shortItems = [
  { label: 'Home', href: '#' },
  { label: 'Current Page', current: true }
];

const longItems = [
  { label: 'Home', href: '#' },
  { label: 'Category 1', href: '#' },
  { label: 'Subcategory 1', href: '#' },
  { label: 'Item Type', href: '#' },
  { label: 'Product Line', href: '#' },
  { label: 'Collection', href: '#' },
  { label: 'Series', href: '#' },
  { label: 'Current Product', current: true }
];

const BreadcrumbPage: React.FC = () => {
  return (
    <div className="breadcrumb-page">
      <h1 className="breadcrumb-page__title">Breadcrumb Component</h1>
      
      <section className="breadcrumb-page__section">
        <h2 className="breadcrumb-page__heading">Types</h2>
        <div className="breadcrumb-page__group">
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Breadcrumbs Type</span>
          </div>
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BACK}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
            />
            <span className="breadcrumb-page__label">Back Type</span>
          </div>
        </div>
      </section>

      <section className="breadcrumb-page__section">
        <h2 className="breadcrumb-page__heading">Breakpoints</h2>
        <div className="breadcrumb-page__group">
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Desktop Breakpoint</span>
          </div>
          <div className="breadcrumb-page__item breadcrumb-page__item--mobile">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.MOBILE}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Mobile Breakpoint</span>
          </div>
          <div className="breadcrumb-page__item breadcrumb-page__item--mobile">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BACK}
              breakpoint={BREADCRUMB_BREAKPOINT.MOBILE}
              theme={BREADCRUMB_THEME.DEFAULT}
            />
            <span className="breadcrumb-page__label">Mobile Back</span>
          </div>
        </div>
      </section>

      <section className="breadcrumb-page__section">
        <h2 className="breadcrumb-page__heading">Themes</h2>
        <div className="breadcrumb-page__group">
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Default Theme</span>
          </div>
          <div className="breadcrumb-page__item breadcrumb-page__item--inverse-green">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.INVERSE_GREEN}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Inverse Green Theme</span>
          </div>
          <div className="breadcrumb-page__item breadcrumb-page__item--inverse-purple">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.INVERSE_PURPLE}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Inverse Purple Theme</span>
          </div>
        </div>
      </section>

      <section className="breadcrumb-page__section">
        <h2 className="breadcrumb-page__heading">Back Link Themes</h2>
        <div className="breadcrumb-page__group">
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BACK}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
            />
            <span className="breadcrumb-page__label">Default Theme</span>
          </div>
          <div className="breadcrumb-page__item breadcrumb-page__item--inverse-green">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BACK}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.INVERSE_GREEN}
            />
            <span className="breadcrumb-page__label">Inverse Green Theme</span>
          </div>
          <div className="breadcrumb-page__item breadcrumb-page__item--inverse-purple">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BACK}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.INVERSE_PURPLE}
            />
            <span className="breadcrumb-page__label">Inverse Purple Theme</span>
          </div>
        </div>
      </section>

      <section className="breadcrumb-page__section">
        <h2 className="breadcrumb-page__heading">Item Count Variations</h2>
        <div className="breadcrumb-page__group">
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={shortItems}
            />
            <span className="breadcrumb-page__label">Few Items</span>
          </div>
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={defaultItems}
            />
            <span className="breadcrumb-page__label">Default Items</span>
          </div>
          <div className="breadcrumb-page__item">
            <Breadcrumb 
              type={BREADCRUMB_TYPE.BREADCRUMBS}
              breakpoint={BREADCRUMB_BREAKPOINT.DESKTOP}
              theme={BREADCRUMB_THEME.DEFAULT}
              items={longItems}
            />
            <span className="breadcrumb-page__label">Many Items</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreadcrumbPage;