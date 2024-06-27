import React from 'react';
import classNames from 'classnames';

export default function heading({ text, ...rest }) {
  const classes = classNames(rest.className, 'text-[2.5rem] font-bold');

  let splitStr = text.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  let childrenText = splitStr.join(' ');

  return (
    <h1 {...rest} className={classes}>
      {childrenText}
    </h1>
  );
}
