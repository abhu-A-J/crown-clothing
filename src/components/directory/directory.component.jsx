import React from 'react';

/* Styling */
import './directory.styles.scss';

/* Data file */
import sections from './data';
import MenuItem from '../menu-item/menu-item.component';


const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({id,title,imageUrl,size}) => {
        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>;
      })}
    </div>
  );
};

export default Directory;
