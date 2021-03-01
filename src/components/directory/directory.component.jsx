import React from 'react';

/* Styling */
import './directory.styles.scss';

/* Data file */
import sections from './data';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
