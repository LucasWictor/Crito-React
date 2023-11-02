import React from 'react';

const Button = ({ type, url, title }) => {
  const getButtonClassName = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow';
      case 'dark':
        return 'btn-black';
      case 'blank':
        return 'btn-blank';
      default:
        return 'btn-black'; // Provide a default class if type doesn't match any case
    }
  };

  const buttonClassName = getButtonClassName();

  return (
    <a className={buttonClassName} href={url}>
      {title} <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  );
};

export default Button;