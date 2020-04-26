/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Header() {
  return (
    <header className="header">
      {/* <FormattedMessage {...messages.header} /> */}
    </header>
  );
}

Header.propTypes = {};

export default memo(Header);
