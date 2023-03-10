/**
 * 
default
inverted
google sign in
 */
import './button.style.scss';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPES_CLASSES[buttonType] : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
