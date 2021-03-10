import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* Styling */
import './directory.styles.scss';

/* Child Components */
import MenuItem from '../menu-item/menu-item.component';

/* Selectors */
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
