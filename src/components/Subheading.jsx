import React from 'react';

import classNames from 'classnames';

export default function Subheading({ text, ...rest }) {
  const classes = classNames(rest.className, 'text-lg font-semibold');

  let childrenText = text.toUpperCase();
  return (
    <p {...rest} className={classes}>
      {childrenText}
    </p>
  );
}
