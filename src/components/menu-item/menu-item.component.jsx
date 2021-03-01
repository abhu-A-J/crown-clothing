import React from 'react';
import { useHistory } from 'react-router-dom';

/* Styling */
import './menu-item.styles.scss';

const MenuItem = (props) => {
  const history=useHistory();
  const { title, imageUrl, size,linkUrl } = props;
  return (
    <div className={`menu-item ${size ? size : ''}`} onClick={()=>history.push(linkUrl)}>
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
