import './form-input.style.scss';
export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      {label && (
        <label
          className={`form-input-label${otherProps?.value ? ' shrink' : ''}`}
        >
          {label}
        </label>
      )}
      <input className='form-input' {...otherProps} />
    </div>
  );
};
