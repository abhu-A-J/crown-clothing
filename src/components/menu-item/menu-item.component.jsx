import React from 'react';

/* Styling */
import './menu-item.styles.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  return (
    <div className={`menu-item ${size ? size : ''}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
